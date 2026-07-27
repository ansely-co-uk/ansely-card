export const digitalCardData = {
  company: {
    name: "Sowa Furniture",
    tagline: "Commercial furniture refurbishment, reupholstery, and made-to-measure hospitality furniture in Manchester.",
    logo: "/sowafurniture.webp",
  },
  founder: {
    name: "Sowa Furniture",
    title: "Hospitality Furniture Refurbishment Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447952971273", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://sowafurniture.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    {
      type: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=447952971273&text&type=phone_number&app_absent=0",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366]",
    },
  ],
  about:
    "Sowa Furniture helps pubs, bars, restaurants, and cafes refresh their spaces with furniture refurbishment, commercial reupholstery, bespoke builds, and practical renewal services for busy hospitality venues.",
  services: [
    {
      label: "Pub & Bar Furniture Refurbishment in Manchester",
      href: "https://sowafurniture.co.uk/service/pub-bar-furniture-refurbishment",
    },
    {
      label: "Restaurant & Cafe Furniture Refurbishment",
      href: "https://sowafurniture.co.uk/service/restaurant-cafe-furniture-refurbishment",
    },
    {
      label: "Wooden Tabletop & Bar Top Renewal",
      href: "https://sowafurniture.co.uk/service/wooden-tabletop-bar-top-renewal",
    },
    {
      label: "Commercial Reupholstery",
      href: "https://sowafurniture.co.uk/service/commercial-reupholstery",
    },
    {
      label: "Made-to-Measure Furniture",
      href: "https://sowafurniture.co.uk/service/made-to-measure-furniture",
    },
    {
      label: "We Buy Used Hospitality Furniture",
      href: "https://sowafurniture.co.uk/service/we-buy-used-hospitality-furniture",
    },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Sowa Furniture on Google.",
    href: "https://share.google/yUBXII6IZkhDQcZGu",
  },
  location: "Manchester, United Kingdom",
  locationHref: "https://maps.app.goo.gl/mkYwEVZRxafppCP7A",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/sowafurniture/",
      icon: "Instagram",
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/sowa.furniture/?_rdc=1&_rdr#",
      icon: "Facebook",
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
