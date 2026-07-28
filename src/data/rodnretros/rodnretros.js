export const digitalCardData = {
  company: {
    name: "Rods N Retros",
    tagline: "Restorations, resprays, welding, and classic vehicle care in Sheffield.",
    logo: "/rodnretros.png",
  },
  founder: {
    name: "Dec",
    title: "Restoration and Bodywork Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447521224620", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447521224620", icon: "MessageCircle", styleClass: "bg-green-400" },
    { type: "Email", href: "mailto:RodsnRetros@hotmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://rodsnretros.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Rods N Retros helps owners of classics and custom vehicles with restoration, paint, fabrication, and repair work, delivering careful craftsmanship from their Sheffield workshop.",
  services: [
    { label: "Bare Metal Resprays", href: "https://rodsnretros.co.uk/services/bare-metal-resprays" },
    { label: "Full Restorations", href: "https://rodsnretros.co.uk/services/full-restorations" },
    { label: "Touch Ups & Smart Repairs", href: "https://rodsnretros.co.uk/services/touch-ups" },
    { label: "Welding & Fabrication", href: "https://rodsnretros.co.uk/services/welding-fabrication" },
    { label: "Fiberglass Repairs", href: "https://rodsnretros.co.uk/services/fiberglass-repairs" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Rods N Retros on Google.",
    href: "https://share.google/tcCpVmWlKZ2jxTuUn",
  },
  location: "23A Mansfield Road, Sheffield, United Kingdom",
  locationHref: "https://maps.app.goo.gl/8qA5vdt9xDki6Z7R8",
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
