export const digitalCardData = {
  company: {
    name: "JW Cambridge",
    tagline: "Diagnostics, servicing, repairs, and MOT preparation in Cambridge.",
    logo: "/JWcambridge.webp",
  },
  founder: {
    name: "JW Cambridge",
    title: "Vehicle Diagnostics, Servicing, and Mercedes Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01223311711", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:info@jwcambridge.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.jwcambridge.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447491016816", icon: "MessageCircle", styleClass: "bg-whatsapp" },
  ],
  about:
    "JW Cambridge helps drivers with vehicle diagnostics, servicing, repairs, MOT preparation, software updates, and specialist Mercedes fault-finding from their Cambridge workshop.",
  services: [
    { label: "Any Car Problems" },
    { label: "Maintenance & Servicing" },
    { label: "Vehicle Diagnosis" },
    { label: "Mercedes Diagnosis & Repair" },
    { label: "MOT Preparation & Pre-MOT Checks" },
    { label: "Software Updates & Control Modules" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view JW Cambridge on Google.",
    href: "https://www.google.com/search?q=JW+cambridge",
  },
  location: "Unit 1, 2 Swanns Rd, Cambridge CB5 8JZ",
  locationHref: "https://maps.app.goo.gl/oHkixQgSx4GGL3Nv5",
  socialLinks: [],
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
