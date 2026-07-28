export const digitalCardData = {
  company: {
    name: "Alan's Auto Detailing",
    tagline: "Professional valeting and detailing packages for a cleaner, fresher, better-protected finish.",
    logo: "/aalan.png",
  },
  founder: {
    name: "Alan",
    title: "Car Detailing and Deep Cleaning Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07731633647", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:alans.auto.detailing@outlook.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://alansautodetailing.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    {
      type: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=447731633647&text&type=phone_number&app_absent=0",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366]",
    },
  ],
  about:
    "Alan's Auto Detailing offers careful exterior and interior cleaning packages, from routine details to deluxe treatments and steam deep cleans that help restore a crisp, well-kept finish.",
  services: [
    { label: "Standard Detail", href: "https://alansautodetailing.co.uk/services/standard-detail" },
    { label: "Premium Detail", href: "https://alansautodetailing.co.uk/services/premium-detail" },
    { label: "Deluxe Detail", href: "https://alansautodetailing.co.uk/services/deluxe-detail" },
    { label: "Steam Deep Clean", href: "https://alansautodetailing.co.uk/services/steam-deep-clean" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Alan's Auto Detailing on Google.",
    href: "https://share.google/dBvSyXDXVNU9aXwTb",
  },
  location: "Manchester (M7), United Kingdom",
  locationHref: "https://maps.app.goo.gl/pMNtXZLMNnNcecjY7",
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
