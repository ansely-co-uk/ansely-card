export const digitalCardData = {
  company: {
    name: "Crystal Clean",
    tagline: "Professional detailing, paint correction, ceramic coating, and PPF installation for a sharper, better-protected finish.",
    logo: "/crystalclean.png",
  },
  founder: {
    name: "Crystal Clean",
    title: "Detailing and Paint Protection Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447446253967", icon: "Phone", styleClass: "bg-primary" },
    {
      type: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=447446253967&text&type=phone_number&app_absent=0",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366]",
    },
    { type: "Email", href: "mailto:crystal.cl34n@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://crystalclean.info/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Crystal Clean delivers specialist detailing and surface protection services, from paint correction and ceramic coatings to PPF installation and full car detailing for drivers who want lasting gloss and cleaner finishes.",
  services: [
    {
      label: "Professional Paint Protection Film Installation (PPF)",
      href: "https://crystalclean.info/paint-protection-film-installation",
    },
    {
      label: "Professional Ceramic Coating",
      href: "https://crystalclean.info/ceramic-coatings-exeter",
    },
    {
      label: "Professional Polishing & Paint Correction",
      href: "https://crystalclean.info/paint-correction-exeter",
    },
    {
      label: "Professional Car Detailing Services",
      href: "https://crystalclean.info/car-detailing-exeter",
    },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Crystal Clean on Google.",
    href: "https://share.google/dYsZbSeAmKbCsMNYz",
  },
  location: "Exeter, United Kingdom",
  locationHref: "https://maps.app.goo.gl/UyVenrVPFshkhfv58",
  socialLinks: [
    {
      label: "Facebook",
      href: "https://web.facebook.com/p/Crystal-clean-100080908440119/?_rdc=1&_rdr#",
      icon: "Facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/crystal.clean.detail22/#",
      icon: "Instagram",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@crystal.cl34n",
      icon: "TikTok",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@crystalcleandetail",
      icon: "YouTube",
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
