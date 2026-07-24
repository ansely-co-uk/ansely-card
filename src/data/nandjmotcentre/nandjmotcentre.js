export const digitalCardData = {
  company: {
    name: "N&J MOT CENTRE",
    tagline: "MOT testing, repairs, tuning, and wet belt work from a trusted local garage.",
    logo: "/nandjmotcentre.png",
  },
  founder: {
    name: "N&J MOT CENTRE",
    title: "Vehicle Testing, Repairs, and Specialist Garage Services",
  },
  contacts: [
    { type: "Call", href: "tel:01754879008", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://nandjmotcentre.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:njmotcentre@yahoo.com", icon: "Mail", styleClass: "bg-white/10" },
  ],
  about:
    "N&J MOT CENTRE supports local drivers with MOT testing, servicing, repairs, air conditioning re-gas, engine tuning, and wet belt work from its Skegness site.",
  services: [
    { label: "Services & Repairs" },
    { label: "Air Con Re-gas" },
    { label: "Engine Tuning" },
    { label: "MOT Class 4, 5 & 7" },
    { label: "Wet Belts" },
  ],
  rating: null,
  location: "Grantham Dr, Skegness PE25 3RN, United Kingdom",
  locationHref:
    "https://www.google.com/maps/dir//N%26J+Mot+Centre+Grantham+Dr+Skegness+PE25+3RN+United+Kingdom/@53.1457689,0.3306119,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47d7c71ee265360b:0x9c93d005c64c0cd2",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";
  const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";

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
