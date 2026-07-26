export const digitalCardData = {
  company: {
    name: "Tune It Scotland",
    tagline: "Tuning, diagnostics, and vehicle support from Glasgow.",
    logo: "/scotland.png",
  },
  founder: {
    name: "Darryn",
    title: "Tuning and Performance Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447909445101", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447909445101", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:Tune-itscotland@hotmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://tuneitscotland.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Tune It Scotland provides tuning, diagnostics, and vehicle support for drivers across Glasgow, helping customers improve performance, economy, and day-to-day reliability.",
  services: [
    { label: "Stage 1 Performance", href: "https://tuneitscotland.co.uk/services/stage-1-performance/" },
    { label: "Stage 1 Economy", href: "https://tuneitscotland.co.uk/services/stage-1-economy/" },
    { label: "DPF Support", href: "https://tuneitscotland.co.uk/services/dpf-system-support/" },
    { label: "EGR Solutions", href: "https://tuneitscotland.co.uk/services/egr-system-solutions/" },
    { label: "AdBlue / SCR", href: "https://tuneitscotland.co.uk/services/adblue-scr-assistance/" },
    { label: "ECU Diagnostics", href: "https://tuneitscotland.co.uk/services/ecu-sensor-diagnostics/" },
    { label: "Vehicle Diagnostics", href: "https://tuneitscotland.co.uk/services/vehicle-diagnostics/" },
    { label: "Servicing & Repairs", href: "https://tuneitscotland.co.uk/services/servicing-repairs/" },
    { label: "Key Cutting", href: "https://tuneitscotland.co.uk/services/key-cutting-programming/" },
    { label: "All Services", href: "https://tuneitscotland.co.uk/#services" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Tune It Scotland on Google.",
    href: "https://share.google/N9G01QVkg3AX6T04O",
  },
  location: "Glasgow, United Kingdom",
  locationHref: "https://maps.app.goo.gl/z3CM9WWALuhhTrR67",
  socialLinks: [
    { label: "Facebook", icon: "Facebook", href: "https://web.facebook.com/TuneItScotland/?_rdc=1&_rdr#" },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=WORK:${email}
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
