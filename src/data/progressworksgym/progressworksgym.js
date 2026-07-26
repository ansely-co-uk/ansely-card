export const digitalCardData = {
  company: {
    name: "Progress Works Gym",
    tagline: "Flexible training access with memberships, day passes, and pay-as-you-go options.",
    logo: "/progressworksgym.png",
  },
  founder: {
    name: "Neil",
    title: "Strength, Fitness, and Membership Training Space",
  },
  contacts: [
    { type: "Call", href: "tel:01162877667", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.progressworksgym.com/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Progress Works Gym offers a welcoming Glenfield training space with flexible ways to train, including pay-as-you-go access, direct debit memberships, special memberships, and day passes.",
  services: [
    { label: "Pay As You Go" },
    { label: "Direct Debit Membership" },
    { label: "Special Memberships" },
    { label: "Day Passes" },
  ],
  rating: {
    value: "4.8",
    text: "Tap to view Progress Works Gym on Google.",
    href: "https://www.google.com/search?q=progress+works+gym",
  },
  location: "132 Station Rd, Glenfield, Leicester LE3 8BR",
  locationHref: "https://maps.app.goo.gl/mDr3jiv8VKW1pu8f9",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/progress_works_gym/",
      icon: "Instagram",
    },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location, socialLinks } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";
  const instagram = socialLinks.find((social) => social.label === "Instagram")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
ADR;TYPE=WORK:;;${location};;;;
URL:${website}
NOTE:Instagram ${instagram}
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
