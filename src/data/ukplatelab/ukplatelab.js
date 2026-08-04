export const digitalCardData = {
  company: {
    name: "UK Plate Lab",
    tagline: "Custom number plates made with sharp finishes, clean detail, and a bold visual style.",
    logo: "/ukplatelab.png",
  },
  founder: {
    name: "UK Plate Lab",
    title: "Custom Plate Specialists",
  },
  contacts: [
    {
      type: "Call",
      href: "tel:+447580392806",
      icon: "Phone",
      styleClass: "bg-[#EC4899] hover:bg-[#F472B6]",
    },
    {
      type: "WhatsApp",
      href: "https://wa.me/447580392806",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366] hover:brightness-110",
    },
    {
      type: "Website",
      href: "https://www.ukplatelab.co.uk/",
      icon: "Globe",
      styleClass: "bg-[#EC4899] hover:bg-[#F472B6]",
    },
  ],
  about:
    "UK Plate Lab creates custom number plates with a strong eye for presentation, detail, and standout styling for drivers who want something cleaner and sharper.",
  services: [
    { label: "Road Legal Plates" },
    { label: "Show Plates" },
    { label: "Single Plates" },
    { label: "Standard Plates" },
    { label: "3D Gel Plates" },
    { label: "4D Plates" },
    { label: "4D Gel Plates" },
    { label: "Standard Number Plates Pair" },
    { label: "3D Gel Number Plates Pair" },
    { label: "4D Number Plate Pair" },
    { label: "4D Gel Number Plate Pair" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view UK Plate Lab on Google.",
    href: "https://share.google/gGPRPagO0tDfQxDjx",
  },
  location: "25 St Johns Cl, Hugglescote, Leicestershire LE67 2FY, United Kingdom",
  locationHref: "https://maps.app.goo.gl/G79jGQg4sG2CrtrC7",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/ukplatelab?igsh=cXgwODhxcXY0a3dl",
      icon: "Instagram",
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/people/UK-Plate-Lab/61580170829545/?locale=hr_HR&_rdc=1&_rdr#",
      icon: "Facebook",
    },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";
  const whatsapp = contacts.find((contact) => contact.type === "WhatsApp")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
ADR;TYPE=WORK:;;${location};;;;
URL:${website}
NOTE:WhatsApp ${whatsapp}
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
