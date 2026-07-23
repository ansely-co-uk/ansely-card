export const digitalCardData = {
  company: {
    name: "Boxfit Coaching",
    tagline: "Boxing-based coaching for confidence, fitness, discipline, and community.",
    logo: "/box-fit/box-fit.png",
  },
  founder: {
    name: "Boxfit Coaching",
    title: "Coaching Academy and Community Boxing Programmes",
  },
  contacts: [
    { type: "Call", href: "tel:07737163987", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447737163987", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Website", href: "https://boxfitcoaching.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    {
      type: "Facebook",
      href: "https://web.facebook.com/boxfitcoachingacademy?_rdc=1&_rdr#",
      icon: "Facebook",
      styleClass: "bg-primary",
    },
  ],
  about:
    "Boxfit Coaching creates an inclusive space for juniors, women, beginners, squads, and wellbeing-focused members to build skill, strength, and confidence through boxing.",
  services: [
    { label: "Junior Boxers" },
    { label: "Womens Boxing" },
    { label: "SQUAD" },
    { label: "BFC Wellbeing Programme" },
    { label: "Beginners" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Boxfit Coaching on Google.",
    href: "https://www.google.com/search?q=boxfitcoaching&rlz=1C1CHBD_enLK1213LK1213&oq=boxfitcoaching&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAY7wUyCggDEAAYgAQYogQyBwgEEAAY7wUyBwgFEAAY7wXSAQkxMDM3ajBqMTWoAgiwAgHxBYy4w7slggQZ&sourceid=chrome&source=chrome.rb&ie=UTF-8",
  },
  location: "69 Rea Street, Birmingham, B5 6BB, United Kingdom",
  socialLinks: [
    { icon: "Facebook", href: "https://web.facebook.com/boxfitcoachingacademy?_rdc=1&_rdr#" },
    { icon: "Instagram", href: "https://www.instagram.com/Boxfitcoaching/#" },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
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
