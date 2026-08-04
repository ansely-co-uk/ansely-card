export const digitalCardData = {
  company: {
    name: "Top Star Training Limited",
    tagline: "UK-wide NVQ and plant training support for site teams, trades, supervisors, and management.",
    logo: "/topstar.png",
  },
  founder: {
    name: "Top Star Training Limited",
    title: "NVQ and Plant Training Support",
  },
  contacts: [
    { type: "Call", href: "tel:07809466729", icon: "Phone", styleClass: "bg-[linear-gradient(135deg,#F16B7B_0%,#E64157_55%,#C91F3A_100%)] hover:brightness-110" },
    { type: "WhatsApp", href: "https://wa.me/447809466729", icon: "MessageCircle", styleClass: "bg-[#25D366] hover:brightness-110" },
    { type: "Email", href: "mailto:info@topstartraining.co.uk", icon: "Mail", styleClass: "bg-[linear-gradient(135deg,#E64157_0%,#C91F3A_100%)] hover:brightness-110" },
    { type: "Website", href: "https://top-star-learning.vercel.app/", icon: "Globe", styleClass: "bg-[linear-gradient(135deg,#E64157_0%,#F16B7B_100%)] hover:brightness-110" },
  ],
  about:
    "Top Star Training Limited helps learners and employers across the UK with practical NVQ pathways and plant training support, covering trade, supervisor, and management qualifications.",
  services: [
    { label: "Plant NVQ", href: "https://top-star-learning.vercel.app/plant-nvq" },
    { label: "Trade NVQs", href: "https://top-star-learning.vercel.app/trade-nvqs" },
    { label: "Supervisor NVQs", href: "https://top-star-learning.vercel.app/supervisor-nvqs" },
    { label: "Management NVQs", href: "https://top-star-learning.vercel.app/management-nvqs" },
  ],
  rating: null,
  location: "UK-wide NVQ and plant training support",
  locationHref: "https://top-star-learning.vercel.app/",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";
  const whatsapp = contacts.find((contact) => contact.type === "WhatsApp")?.href || "";

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
