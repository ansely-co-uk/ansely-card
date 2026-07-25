export const digitalCardData = {
  company: {
    name: "ACG Auto Centre",
    tagline: "MOT, servicing, repairs, diagnostics, and driveline work from Nottingham specialists.",
    logo: "/ACG.png",
  },
  founder: {
    name: "Tom",
    title: "MOT, Servicing, and Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447752364546", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447752364546", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:tom@acgautocentre.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://acgautocentre.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "ACG Auto Centre supports Nottingham drivers with MOT testing, servicing, wheel alignment, gearbox and clutch work, and diagnostic repairs from its city workshop.",
  services: [
    { label: "All Services", href: "https://acgautocentre.co.uk/services/" },
    { label: "MOT", href: "https://acgautocentre.co.uk/services/mot/" },
    { label: "Wheel Alignment and Tracking", href: "https://acgautocentre.co.uk/services/wheel-alignment/" },
    { label: "Car Servicing", href: "https://acgautocentre.co.uk/services/car-servicing/" },
    { label: "Gearbox", href: "https://acgautocentre.co.uk/services/gearbox/" },
    { label: "Clutch", href: "https://acgautocentre.co.uk/services/clutch/" },
    { label: "Diagnostics", href: "https://acgautocentre.co.uk/services/diagnostics/" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view ACG Auto Centre on Google.",
    href: "https://www.google.com/search?q=ACG+Auto+Centre+%7C+MOT%2C+Servicing+%26+Repairs+-+Nottingham",
  },
  location: "20 Little Tennis Street, Nottingham, NG2 4EL, United Kingdom",
  locationHref: "https://maps.app.goo.gl/5bJYgZZG9fhxHqwB9",
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
EMAIL;TYPE=PREF,INTERNET:${email}
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
