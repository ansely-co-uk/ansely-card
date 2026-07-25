export const digitalCardData = {
  company: {
    name: "Berkley Estate & Letting Agents Ltd",
    tagline: "Residential sales and lettings support from a Leicester-based estate agency team.",
    logo: "/BerkleyEstates.webp",
  },
  founder: {
    name: "Berkley Estate & Letting Agents Ltd",
    title: "Estate and Letting Agency Services",
  },
  contacts: [
    { type: "Call", href: "tel:01162544755", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:Jake.Brogden@berkleyestates.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://berkleyestates.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Berkley Estate & Letting Agents Ltd helps clients with residential property sales and lettings from its Leicester office, combining local market knowledge with direct customer support.",
  services: [
    { label: "Property Sales" },
    { label: "Lettings" },
    { label: "Residential Property Support" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Berkley Estates on Google.",
    href: "https://www.google.com/search?q=Berkley+Estates&rlz=1C1CHBD_enLK1213LK1213&oq=Berkley+Estates&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzc2MmowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
  },
  location: "75 Hinckley Road, Leicester, LE3 0TD",
  locationHref: "https://maps.google.com/?q=75+Hinckley+Road,+Leicester,+LE3+0TD",
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/berkleyestates",
      icon: "Facebook",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/berkleyestates/",
      icon: "Linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/berkleyestates/",
      icon: "Instagram",
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
