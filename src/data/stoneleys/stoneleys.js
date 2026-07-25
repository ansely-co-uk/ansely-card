export const digitalCardData = {
  company: {
    name: "Stoneley's",
    tagline: "Trusted garage services for MOTs, diagnostics, tyres, servicing, and repairs.",
    logo: "/stoneleys/stoneleys.webp",
  },
  founder: {
    name: "Stoneley's Garage",
    title: "Garage Services, Diagnostics, and Vehicle Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+441623623759", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.stoneleys.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Stoneley's supports drivers with MOTs, servicing, diagnostics, tyres, alignment, air conditioning, and engine care from its Mansfield garage.",
  services: [
    { label: "MOT Testing & Car Servicing" },
    { label: "Wheel Alignment & Tyre Fitting" },
    { label: "Vehicle Diagnostics & ECU Remapping" },
    { label: "Engine Cleaning Services" },
    { label: "Air Conditioning Service" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Stoneley's Garage Services on Google.",
    href: "https://www.google.com/search?q=Stoneley%27s+Garage+Services&sca_esv=fc2a7f6adb56bd6b&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sxsrf=APpeQnvChuMGU1pKY4C2gSuI4QC90x4_8g%3A1784824022806&ei=1kBiat3eMPaQseMPn--IoA4&ved=0ahUKEwjdofbOm-mVAxV2SGwGHZ83AuQQ4dUDCBA&uact=5&oq=Stoneley%27s+Garage+Services&gs_lp=Egxnd3Mtd2l6LXNlcnAiGlN0b25lbGV5J3MgR2FyYWdlIFNlcnZpY2VzMgQQIxgnMggQABgWGB4YCjIGEAAYFhgeMggQABgWGB4YCjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMggQABiABBiiBEiMBFAAWMwBcAF4AJABAJgBmAKgAZgCqgEDMi0xuAEDyAEA-AEB-AECmAICoAK9AqgCFMICBxAjGOoCGCfCAhcQABiABBiKBRiRAhjnBhjqAhi0AtgBAcICEBAuGAMYjwEY6gIYtALYAQHCAhAQABgDGI8BGOoCGLQC2AEBmAMV8QXsFbN0Ucb6CroGBggBEAEYAZIHBTEuMC4xoAe5CLIHAzItMbgHpwLCBwUzLTEuMcgHIIAIAQ&sclient=gws-wiz-serp",
  },
  location: "Stoneley's Garage, Hamilton Way, Mansfield NG18 5BU",
  locationHref: "https://maps.google.com/?q=Stoneley%27s+Garage+Hamilton+Way+Mansfield+NG18+5BU",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
ADR;TYPE=WORK:;;${location};;;;
URL:${website}
END:VCARD
`.trim();

  const blob = new Blob([vcfData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${company.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
