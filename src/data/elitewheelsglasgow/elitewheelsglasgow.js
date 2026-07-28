export const digitalCardData = {
  company: {
    name: "Elite Wheels Glasgow",
    tagline: "Premium alloy wheel refinishing, powder coating, and diamond cut restoration in Glasgow.",
    logo: "/elitewheelsglasgow.png",
  },
  founder: {
    name: "Darren",
    title: "Alloy Wheel Refurbishment Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07909445101", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:Tune-itscotland@hotmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://elitewheelsglasgow.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Elite Wheels Glasgow delivers high-end alloy wheel restoration with premium powder coating, colour changes, diamond cutting, and full refurbishments for drivers who want a factory-fresh finish.",
  services: [
    {
      label: "Premium Powder Coating / Colour Change",
      href: "https://elitewheelsglasgow.co.uk/services/powder-coating/",
    },
    {
      label: "Diamond Cut Alloy Wheels",
      href: "https://elitewheelsglasgow.co.uk/services/diamond-cutting/",
    },
    {
      label: "Full Wheel Refurbishments",
      href: "https://elitewheelsglasgow.co.uk/services/wheel-refurbishment/",
    },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Elite Wheels Glasgow on Google.",
    href: "https://share.google/VplKGiCI8sNByHTNr",
  },
  location: "15 Carmyle Avenue, Glasgow, United Kingdom",
  locationHref: "https://maps.app.goo.gl/QhPQjNmN28A3c5gh8",
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Elite-Wheels-Glasgow/61588326973623/",
      icon: "Facebook",
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
