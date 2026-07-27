export const digitalCardData = {
  company: {
    name: "H.N The Finest Car Valet",
    tagline: "Premium valeting, detailing, ceramic care, and maintenance packages across the East Midlands.",
    logo: "/hn.webp",
  },
  founder: {
    name: "H.N The Finest Car Valet",
    title: "Valeting and Detailing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07515634636", icon: "Phone", styleClass: "bg-primary" },
    {
      type: "WhatsApp",
      href: "https://wa.me/447515634636",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366]",
    },
    { type: "Email", href: "mailto:h.nfinestcarvalet@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://h-nthefinestcarvalet.com/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "H.N The Finest Car Valet provides high-end valeting and detailing support, from routine maintenance packages to deep cleaning, paint correction, ceramic coating, vintage car care, and new car protection.",
  services: [
    { label: "Mini Valet", href: "https://h-nthefinestcarvalet.com/services/mini-valet/" },
    {
      label: "Interior and Exterior Detail Deep Clean",
      href: "https://h-nthefinestcarvalet.com/services/full-interior-deep-clean/",
    },
    {
      label: "Maintenance Valet Packages",
      href: "https://h-nthefinestcarvalet.com/services/maintenance-valet-packages/",
    },
    {
      label: "Paint Correction / Ceramic Coating",
      href: "https://h-nthefinestcarvalet.com/services/paint-correction/",
    },
    {
      label: "Vintage Car Maintenance",
      href: "https://h-nthefinestcarvalet.com/services/vintage-car-maintenance/",
    },
    {
      label: "New Car Protection Package",
      href: "https://h-nthefinestcarvalet.com/services/new-car-protection-package/",
    },
    {
      label: "Professional Add-On Services",
      href: "https://h-nthefinestcarvalet.com/services/professional-add-on-services/",
    },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view H.N The Finest Car Valet on Google.",
    href: "https://share.google/4Uz80TAu00e9PWj9o",
  },
  location: "Nottingham, Leicester, Mansfield, Derby",
  locationHref: "https://www.google.com/maps/search/?api=1&query=H.N+The+Finest+Car+Valet+%26+Detailing",
  socialLinks: [
    {
      label: "Facebook",
      icon: "Facebook",
      href: "https://www.facebook.com/share/KRgENLZ9c85CbnS6/",
    },
    {
      label: "Instagram",
      icon: "Instagram",
      href: "https://www.instagram.com/h.nthefinestcarvalet?igsh=MWo5MWl3aGoxeGN6eg==",
    },
    {
      label: "TikTok",
      icon: "TikTok",
      href: "https://www.tiktok.com/@h.n.thefinestcar.valet?_t=8qDSJDeCWky&_r=1",
    },
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
