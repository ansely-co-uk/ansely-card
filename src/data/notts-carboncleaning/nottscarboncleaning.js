export const digitalCardData = {
  company: {
    name: "Nottingham Carbon Cleaning",
    tagline: "Mobile engine carbon cleaning, diagnostics, regen support, and detox services across Nottingham.",
    logo: "/notts-carboncleaning.webp",
  },
  founder: {
    name: "Darren",
    title: "Mobile Engine Carbon Cleaning Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07752549740", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:Nottsccs@yahoo.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://notts-carboncleaning.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Nottingham Carbon Cleaning provides fully mobile engine care across Nottingham, helping drivers improve performance, reduce carbon build-up, and support cleaner running with specialist on-site treatments.",
  services: [
    { label: "Diagnostic" },
    { label: "Carbon Clean" },
    { label: "360 Clean" },
    { label: "EGR Clean" },
    { label: "Complete Engine Detox" },
    { label: "Forced Regen" },
    { label: "DPF Chemical Clean" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Nottingham Carbon Cleaning reviews.",
    href: "https://share.google/j55wiX3yE9te9ky0o",
  },
  location: "Wendling Gardens, Nottingham NG5 5TD, United Kingdom",
  locationHref: "https://maps.app.goo.gl/4qo4pVF9c1nsfwAd8",
  socialLinks: [
    {
      icon: "Facebook",
      href: "https://web.facebook.com/NottinghamCarbonCleaningSolutions/",
      label: "Facebook",
    },
    {
      icon: "TikTok",
      href: "https://www.tiktok.com/@nottingham.carbon?_r=1&_t=ZN-93QdshQYjsU",
      label: "TikTok",
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
