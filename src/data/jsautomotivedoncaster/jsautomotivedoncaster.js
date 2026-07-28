export const digitalCardData = {
  company: {
    name: "JS Automotive Doncaster",
    tagline: "MOTs, servicing, diagnostics, and repair work for drivers in Doncaster.",
    logo: "",
  },
  founder: {
    name: "Joe",
    title: "Garage Services and Vehicle Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+441709863222", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:Js.automotive1@outlook.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://jsautomotivedoncaster.com/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "JS Automotive Doncaster supports local drivers with MOT testing, full servicing, diagnostics, brake work, DPF cleaning, and cam belt replacement from its Doncaster base.",
  services: [
    { label: "MOT Testing", href: "https://jsautomotivedoncaster.com/services/mot" },
    { label: "Full Servicing", href: "https://jsautomotivedoncaster.com/services/servicing" },
    { label: "Brake Services", href: "https://jsautomotivedoncaster.com/services/brake" },
    { label: "Diagnostics", href: "https://jsautomotivedoncaster.com/services/diagnostics" },
    { label: "DPF Cleaning", href: "https://jsautomotivedoncaster.com/services/dpf-clean" },
    { label: "Cam Belt Replacement", href: "https://jsautomotivedoncaster.com/services/cam-belt" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view JS Automotive Doncaster on Google.",
    href: "https://share.google/xtqXPaJluWSMMYL4O",
  },
  location: "New Edlington, Doncaster DN12 1DJ, United Kingdom",
  locationHref: "https://maps.app.goo.gl/me2GLeqXUvnRav5v8",
  socialLinks: [
    {
      label: "Facebook",
      icon: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61562506876945",
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
