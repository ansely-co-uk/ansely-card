export const digitalCardData = {
  company: {
    name: "KG Practice",
    tagline: "Specialist gynaecology and gynaecological oncology care across NHS and private practice in Nottingham.",
    logo: "/kgpractice.png",
  },
  founder: {
    name: "Ketan",
    title: "Consultant Gynaecologist and Gynaecological Oncologist",
  },
  contacts: [
    { type: "Website", href: "https://kgpractice.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "KG Practice combines extensive experience in gynaecology and gynaecological oncology, offering care through both NHS and private practice with a focus on specialist women's health support.",
  services: [
    { label: "16 Years Gynaecological Oncology" },
    { label: "26 Years Gynaecology" },
    { label: "NHS & Private Practice" },
    { label: "Nottingham University Hospital" },
    { label: "Park Hospital" },
    { label: "Spire Nottingham Hospital" },
  ],
  rating: null,
  location: "Nottingham, UK",
  locationHref: "",
  socialLinks: [
    {
      label: "X",
      icon: "X",
      href: "https://x.com/ketan_gajjar20?lang=en",
    },
    {
      label: "LinkedIn",
      icon: "Linkedin",
      href: "https://www.linkedin.com/in/ketankumar-gajjar-9aab4423/",
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
EMAIL;TYPE=WORK:${email}
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
