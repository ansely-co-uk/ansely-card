export const digitalCardData = {
  company: {
    name: "SL Smart Repair",
    tagline: "Smart repair solutions for everyday damage, refinishing, and vehicle presentation.",
    logo: "/slsmartrepairim/slsmart.png",
  },
  founder: {
    name: "Shane",
    title: "Mobile Smart Repair and Detailing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07989668752", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447989668752", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:Sldetailingservices@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.slsmartrepair.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "SL Smart Repair helps drivers restore paintwork, lights, trims, and panels with focused repair work designed to keep vehicles looking sharp and resale-ready.",
  services: [
    { label: "Scratches" },
    { label: "Headlight Restoration" },
    { label: "Dent Removal" },
    { label: "Wheels & Calipers" },
    { label: "Lease Returns" },
    { label: "Bumper Scuffs" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view SL Smart Repair on Google.",
    href: "https://www.google.com/search?q=S.L+smart+repairs+30+Laxton+Close+Wigston+LE18+3WJ",
  },
  location: "30 Laxton Close, Leicester Wigston LE18 3WJ",
  locationHref: "https://www.google.com/maps/dir//Leicester,+Wigston+LE18+3WJ,+United+Kingdom",
  socialLinks: [
    { icon: "Facebook", href: "https://web.facebook.com/S.LValetingDetailingServices/?_rdc=1&_rdr#", label: "Facebook" },
    { icon: "Instagram", href: "https://www.instagram.com/sl_smart_repair/?hl=en", label: "Instagram" },
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
