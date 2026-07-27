export const digitalCardData = {
  company: {
    name: "Ear We Go",
    tagline: "Professional ear care with simple, effective micro suction treatment.",
    logo: "/earwegoim/earwego.webp",
  },
  founder: {
    name: "Rab",
    title: "Micro Suction Ear Care Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:08081371961", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:earwegosales@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://earwego.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Ear We Go offers focused ear care services with a simple approach, helping clients access safe and comfortable micro suction treatment.",
  services: [
    { label: "Micro Suction", href: "https://earwego.co.uk/earwaxremovalpage/" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Ear We Go on Google.",
    href: "",
  },
  location: "Great Northern Rd, Derby, DE1 1LR",
  locationHref: "https://maps.google.com/?q=Great+Northern+Rd,+Derby,+DE1+1LR",
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
