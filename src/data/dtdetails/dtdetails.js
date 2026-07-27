export const digitalCardData = {
  company: {
    name: "DT Details",
    tagline: "Detailing and paint protection for cars that deserve a sharper finish.",
    logo: "/dtdetails.png",
  },
  founder: {
    name: "Dom",
    title: "Detailing, Paint Enhancement, and Ceramic Coating Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447474461322", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:dominicturton2@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.dtdetails.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447474461322", icon: "MessageCircle", styleClass: "bg-whatsapp" },
  ],
  about:
    "DT Details provides careful paint enhancement, deep cleaning, ceramic coating protection, and maintenance detailing for owners who want their vehicle looking its best.",
  services: [
    { label: "Paint Enhancement", href: "https://www.dtdetails.co.uk/paint-enhancement" },
    { label: "Maintenance Clean", href: "https://www.dtdetails.co.uk/maintenance-clean" },
    { label: "Ceramic Coating Protection", href: "https://www.dtdetails.co.uk/ceramic-coating" },
    { label: "Deep Clean", href: "https://www.dtdetails.co.uk/deep-clean" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view DT Details on Google.",
    href: "",
  },
  location: "",
  locationHref: "",
  socialLinks: [
    { icon: "Instagram", href: "https://www.instagram.com/dt_details_/", label: "Instagram" },
    { icon: "TikTok", href: "https://www.tiktok.com/@dt_details_", label: "TikTok" },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const addressLine = location ? `ADR;TYPE=WORK:;;${location};;;;\n` : "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=WORK:${email}
${addressLine}URL:${website}
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
