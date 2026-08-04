export const digitalCardData = {
  company: {
    name: "Advanced Autobody Solutions",
    tagline: "Specialist vehicle bodywork, dent repair, smart repair, and wheel refurbishment with a custom-finish eye.",
    logo: "/advanced.png",
  },
  founder: {
    name: "Advanced Autobody Solutions",
    title: "Body Repair Specialists",
  },
  contacts: [
    {
      type: "WhatsApp",
      href: "https://wa.me/447440366913",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366] hover:brightness-110",
    },
    {
      type: "Email",
      href: "mailto:info@advancedautobodysolutions.co.uk",
      icon: "Mail",
      styleClass: "bg-[linear-gradient(90deg,#FFA620_0%,#FF8E3A_36%,#F16A5B_68%,#C578FF_100%)] hover:brightness-110",
    },
    {
      type: "Website",
      href: "https://advanceautobodysolutions.com/",
      icon: "Globe",
      styleClass: "bg-[linear-gradient(90deg,#FFA620_0%,#FF8E3A_36%,#F16A5B_68%,#C578FF_100%)] hover:brightness-110",
    },
  ],
  about:
    "Advanced Autobody Solutions handles paintless dent repair, bumper repair, smart repair, insurance work, and wheel refurbishment with a clean custom look and detail-focused finish.",
  services: [
    { label: "Paintless Dent Repair", href: "https://advanceautobodysolutions.com/paintless-dent-repairs" },
    { label: "Bumper Repairs", href: "https://advanceautobodysolutions.com/bumper-repair" },
    { label: "Smart Repair", href: "https://advanceautobodysolutions.com/scratch-repair" },
    { label: "Insurance Repairs", href: "https://advanceautobodysolutions.com/insurance-repairs" },
    { label: "Wheel Refurbishment", href: "https://advanceautobodysolutions.com/wheel-refurbishments" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Advanced Autobody Solutions on Google.",
    href: "https://share.google/PCgLE4DdPe8ikXEls",
  },
  location: "Industrial Area, Milton St, Manchester M7 1UR, United Kingdom",
  locationHref: "https://maps.app.goo.gl/fBmdNg61zFttVibt8",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";
  const whatsapp = contacts.find((contact) => contact.type === "WhatsApp")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
EMAIL;TYPE=WORK:${email}
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
