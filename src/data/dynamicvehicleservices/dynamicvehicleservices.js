export const digitalCardData = {
  company: {
    name: "Dynamic Vehicle Services",
    tagline: "Mechanical services, brake work, MOT, diagnostics, servicing, and cam belt replacement.",
    logo: "/dynamicvehicleservices.png",
  },
  founder: {
    name: "Kasey",
    title: "Dynamic Vehicle Services",
  },
  contacts: [
    { type: "Call", href: "tel:+447713354794", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:K4sey@hotmail.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.dynamic-vehicleservices.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447713354794", icon: "MessageCircle", styleClass: "bg-whatsapp" },
  ],
  about:
    "Dynamic Vehicle Services offers dependable vehicle care from Anstey, covering everything from routine servicing and brake work to MOT support, diagnostics, and cam belt replacement.",
  services: [
    { label: "Mechanical Services" },
    { label: "Brake Services" },
    { label: "MOT" },
    { label: "Cam Belt Replacement" },
    { label: "Diagnostics" },
    { label: "Car Servicing" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Dynamic Vehicle Services on Google.",
    href: "https://share.google/n5DkirgPHyrEtFVol",
  },
  location: "Link Rd, Anstey, Leicester LE7 7ED, United Kingdom",
  locationHref: "https://maps.app.goo.gl/3AiErseXifzBnMPM8",
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
