export const digitalCardData = {
  company: {
    name: "Amma Kitchen",
    tagline: "Homestyle South Asian cooking with comforting favourites and bold everyday flavour.",
    logo: "/Amma-kitchen-coventryim/amma.webp",
  },
  founder: {
    name: "Dharsha",
    title: "Freshly Prepared Food and Takeaway Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+442475090098", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:earwegosales@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://amma-kitchen.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447897550930", icon: "MessageCircle", styleClass: "bg-[#25D366]" },
  ],
  about:
    "Amma Kitchen brings together comforting home-style dishes, warm hospitality, and flavour-led cooking for guests looking for a satisfying local food stop in Coventry.",
  services: [
    { label: "Freshly Prepared South Asian Meals" },
    { label: "Family-Style Curry Dishes" },
    { label: "Rice, Biryani and Side Selections" },
    { label: "Quick Takeaway Collection" },
    { label: "Vegetarian and Meat Options" },
    { label: "Everyday Comfort Food Specials" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Amma Kitchen Coventry on Google.",
    href: "https://share.google/NeEcls84PxN3NNNG2",
  },
  location: "477 Beake Ave, Coventry CV6 2HT, United Kingdom",
  locationHref: "https://maps.app.goo.gl/JuhckJ5LSQ6MjvkTA",
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
