export const digitalCardData = {
  company: {
    name: "Massey Detailing",
    tagline: "Professional mobile car care across Wakefield and Yorkshire.",
    logo: "/masseydetailing.png",
  },
  founder: {
    name: "Massey Detailing",
    title: "Mobile Valeting and Detailing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07399539744", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:info@masseydetailing.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.masseydetailing.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "Instagram", href: "https://www.instagram.com/masseydetailing", icon: "Instagram", styleClass: "bg-primary" },
  ],
  about:
    "Massey Detailing is a mobile valeting and detailing business based in Wakefield, covering the surrounding Yorkshire areas with industry-leading products, careful technique, and premium car care.",
  services: [
    { label: "Maintenance Scheme", href: "https://www.masseydetailing.co.uk/" },
    { label: "Full Valet", href: "https://www.masseydetailing.co.uk/" },
    { label: "Deep Clean", href: "https://www.masseydetailing.co.uk/" },
    { label: "Full Detail", href: "https://www.masseydetailing.co.uk/" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Massey Detailing on Google.",
    href: "https://www.google.com/search?q=massey+detailing",
  },
  location: "Wakefield and surrounding Yorkshire areas",
  locationHref: "https://www.google.com/maps/search/Wakefield,+West+Yorkshire",
  socialLinks: [
    { label: "Facebook", icon: "Facebook", href: "https://web.facebook.com/people/Massey-Detailing/100083111173136/" },
    { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/masseydetailing" },
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
