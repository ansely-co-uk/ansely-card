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
    { label: "Industrial Hearing Screening Tests", href: "https://earwego.co.uk/industrial" },
    { label: "Hearing Screening for Factories", href: "https://earwego.co.uk/services/factories" },
    { label: "Hearing Screening for Construction Sites", href: "https://earwego.co.uk/services/construction" },
    { label: "Hearing Screening for Warehouses", href: "https://earwego.co.uk/services/warehouses" },
    { label: "Hearing Screening for Automotive & Engineering Workshops", href: "https://earwego.co.uk/services/workshops" },
    { label: "Hearing Screening for Industrial Plants & Processing Facilities", href: "https://earwego.co.uk/services/industrial-plants" },
    { label: "Hearing Screening for Automotive & Engineering Workshops", href: "https://earwego.co.uk/services/workshops" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Ear We Go on Google.",
    href: "https://www.google.com/search?sca_esv=10e6a75516b6f51d&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=APpeQnuD76Dln42-xtOTUEOfBNGaOKqpWQ:1785174066960&si=APenkKn5T4YN59srr511wD6k6Pufj9DEzRUvB1XJSwUeeT5aflBAVmwsjp71Rf6s0oH81pMG_xeAMYath5elUWdYtBf0c7y0at-3WTNcVw2IMDOfku6kaZ37cO1Wcji7Fnl57A2f8IpzX_fZnmHV4OAYLeY4lEImqCGHmUMLQzEVg885FsH8xWU%3D&q=EarWeGo+%28Derby+hearing+centre+services%29+Reviews&sa=X&ved=2ahUKEwjW_P3Qs_OVAxX5fvUHHWIsOFgQ0bkNegQIIBAF&biw=1366&bih=633&dpr=1",
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
