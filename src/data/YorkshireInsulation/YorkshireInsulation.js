export const digitalCardData = {
  company: {
    name: "Yorkshire Insulation",
    tagline: "Loft, cavity wall, spray foam removal, underfloor, and new build insulation across Yorkshire.",
    logo: "/YorkshireInsulation.png",
  },
  founder: {
    name: "Joe",
    title: "Home Insulation Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07526322379", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447526322379", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:info@insulateyorkshire.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://insulateyorkshire.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Yorkshire Insulation helps homeowners improve comfort and efficiency with practical insulation solutions, from loft and cavity wall work to spray foam removal and new build installs.",
  services: [
    { label: "Loft Insulation", href: "https://insulateyorkshire.co.uk/services/loft-insulation/" },
    { label: "Cavity Wall Insulation", href: "https://insulateyorkshire.co.uk/services/cavity-wall-insulation/" },
    { label: "Spray Foam Removal", href: "https://insulateyorkshire.co.uk/services/spray-foam-removal/" },
    { label: "Underfloor Insulation", href: "https://insulateyorkshire.co.uk/services/underfloor-insulation/" },
    { label: "New Build Insulation", href: "https://insulateyorkshire.co.uk/services/new-build-insulation/" },
  ],
  rating: {
    value: "Google",
    text: "Tap to view Yorkshire Insulation on Google.",
    href: "https://www.google.com/search?q=Yorkshire+Insulation+%7C+Loft%2C+Cavity+Wall+%26+Spray+Foam+Experts",
  },
  location: "Yorkshire, United Kingdom",
  locationHref: "https://maps.app.goo.gl/kiuKFGLaznq5CiWe9",
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
