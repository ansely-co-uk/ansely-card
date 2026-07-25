export const digitalCardData = {
  company: {
    name: "N&J MOT Testing station",
    tagline: "MOT testing, repairs, tuning, and wet belt work from a trusted local station.",
    logo: "/nandjmotstation.png",
  },
  founder: {
    name: "N&J MOT Testing station",
    title: "Vehicle Testing, Repairs, and Specialist Garage Services",
  },
  contacts: [
    { type: "Call", href: "tel:+441744371225", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://nandjmotstation.co.uk/", icon: "Globe", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:njautocaremot@yahoo.com", icon: "Mail", styleClass: "bg-white/10" },
  ],
  about:
    "N&J MOT Testing station supports drivers in St Helens with MOT testing, servicing, repairs, air con regass, engine tuning, and wet belt work from its local family-run site.",
  services: [
    { label: "Services & Repairs" },
    { label: "Air Con Regass" },
    { label: "Engine Tuning" },
    { label: "MOT Class 4" },
    { label: "Wet Belts" },
  ],
  rating: null,
  location: "41 Dentons Green Ln, Windle, Saint Helens WA10 2QF, United Kingdom",
  locationHref: "https://maps.app.goo.gl/7nFJASEnPddduwo48",
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
