export const digitalCardData = {
  company: {
    name: "Ovi Body Shop",
    tagline: "Accident repair and bodywork solutions with a finish you can trust.",
    logo: "/ovi/ovi-body-shop.png",
  },
  founder: {
    name: "Ovi Body Shop",
    title: "Vehicle Body Repair and Refinishing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07788275026", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447788275026", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:vanyek_bogdan@yahoo.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://ovicars.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Ovi Body Shop handles everything from panel correction to full resprays, helping drivers restore their vehicles with careful workmanship and dependable service.",
  services: [
    { label: "Panel Beating" },
    { label: "Paint Respray" },
    { label: "Dent & Scratch Repair" },
    { label: "Accident Repairs" },
    { label: "Insurance Jobs" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Ovi Body Shop on Google.",
    href: "https://www.google.com/search?q=ovi+body+shop&rlz=1C1CHBD_enLK1213LK1213&oq=ovi+body+shop&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiGAxiABBiKBTIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBDIHCAUQABjvBTIKCAYQABiABBiiBNIBBzcwNWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
  },
  location: "1 Sheaf Bank, Lowfield, Sheffield S2 3DA, United Kingdom",
  locationHref: "https://maps.app.goo.gl/bGAHxiqBYfqTL37SA",
  socialLinks: [
    { icon: "Facebook", href: "https://web.facebook.com/OviCarBodyRepair/?_rdc=1&_rdr#" },
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
