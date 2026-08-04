export const digitalCardData = {
  company: {
    name: "Kerbcrete Ltd",
    tagline: "Specialist kerbing solutions including Kerbrace install, mould profiles, and nationwide coverage.",
    logo: "/kerbcreteltd.png",
  },
  founder: {
    name: "Kerbcrete Ltd",
    title: "Kerbing Specialist",
  },
  contacts: [
    { type: "Call", href: "tel:07393822156", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447393822156", icon: "MessageCircle", styleClass: "bg-[#25D366] hover:brightness-110" },
    { type: "Email", href: "mailto:Josh.kerbcreteltd@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.kerbcreteltd.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Kerbcrete Ltd delivers specialist kerbing solutions across the UK, Ireland, and Scotland, supporting projects with Kerbrace install, mould profiles, and dependable nationwide service.",
  services: [
    { label: "Kerbrace Install", href: "https://www.kerbcreteltd.uk/services/kerbrace-install" },
    { label: "Mould Profiles", href: "https://www.kerbcreteltd.uk/services/mould-profiles" },
    { label: "Nationwide Coverage", href: "https://www.kerbcreteltd.uk/services/nationwide-coverage" },
  ],
  rating: null,
  location: "Unit D1, Mathrafal Barns, Meifod, SY22 6HT",
  locationHref: "https://maps.app.goo.gl/KeJ5r9hEALzK2Wrq9",
  socialLinks: [
    {
      label: "TikTok",
      icon: "TikTok",
      href: "https://www.tiktok.com/@kerbcrete.ltd?_r=1&_t=ZS-96iCIdW7NQ4",
    },
    {
      label: "LinkedIn",
      icon: "Linkedin",
      href: "https://www.linkedin.com/in/josh-hardy-a80597318",
    },
  ],
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
