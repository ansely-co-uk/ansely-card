export const digitalCardData = {
  company: {
    name: "Dent Monkey",
    tagline: "Paintless dent removal for dings, creases, hail damage, and larger repair work.",
    logo: "/Dentmonkey.png",
  },
  founder: {
    name: "Dent Monkey",
    title: "Paintless Dent Removal Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07775397007", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447775397007", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:dentmonkey.nottingham@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.dentmonkey-nottingham.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Dent Monkey provides specialist paintless dent removal from its Nottingham base, helping drivers with everything from car park dings to complex dents while preserving the original finish.",
  services: [
    {
      label: "Car Parking Ding Removal",
      href: "https://www.dentmonkey-nottingham.co.uk/services/car-park-ding-removal/",
    },
    {
      label: "Bumper Dent Removal",
      href: "https://www.dentmonkey-nottingham.co.uk/services/bumper-dent-removal/",
    },
    {
      label: "Crease Dent Repair",
      href: "https://www.dentmonkey-nottingham.co.uk/services/crease-dent-repair/",
    },
    {
      label: "Hail Damage Removal",
      href: "https://www.dentmonkey-nottingham.co.uk/services/hail-damage-repair/",
    },
    {
      label: "Complex Large Dent Repair",
      href: "https://www.dentmonkey-nottingham.co.uk/services/complex-dent-repair/",
    },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Dent Monkey on Google.",
    href: "https://www.google.com/search?q=Dentmonkey&rlz=1C1CHBD_enLK1213LK1213&oq=Dentmonkey&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiiBBiJBdIBBzk0MGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
  },
  location: "Unit 14, Broxtowe Park Business Centre, Calverton Drive, Strelley, Nottingham NG8 6QP",
  locationHref: "https://maps.app.goo.gl/kMVnPqPRmmDRdipYA",
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
EMAIL;TYPE=INTERNET:${email}
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
