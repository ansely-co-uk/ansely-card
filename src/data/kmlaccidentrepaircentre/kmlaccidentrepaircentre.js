export const digitalCardData = {
  company: {
    name: "KML Accident Repair Centre",
    tagline: "Insurance, collision, bodywork, lease-end, and windscreen repair support from a trusted repair centre.",
    logo: "",
  },
  founder: {
    name: "KML Accident Repair Centre",
    title: "Accident Repair and Bodywork Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01615333003", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:kmlaccidentrepaircentreltd@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://kmlaccidentrepaircentre.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "KML Accident Repair Centre helps drivers and vehicle owners with insurance repairs, collision damage, bodywork restoration, lease-end repairs, and claims-related support to get cars back on the road looking right.",
  services: [
    { label: "Insurance Repairs", href: "https://kmlaccidentrepaircentre.co.uk/services/insurance-repairs" },
    { label: "Collision Repairs", href: "https://kmlaccidentrepaircentre.co.uk/services/collision-repairs" },
    { label: "Bodywork & Dents", href: "https://kmlaccidentrepaircentre.co.uk/services/bodywork-dents" },
    { label: "End of Lease Repairs", href: "https://kmlaccidentrepaircentre.co.uk/services/specialty-services" },
    { label: "Windscreen Replacement", href: "https://kmlaccidentrepaircentre.co.uk/services/claims-support" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view KML Accident Repair Centre on Google.",
    href: "https://share.google/kHRJrF2sYxgMn3zx9",
  },
  location: "Manchester, United Kingdom",
  locationHref: "https://maps.app.goo.gl/1BKw5vQLwW9YT9MRA",
  socialLinks: [
    {
      label: "Facebook",
      icon: "Facebook",
      href: "https://web.facebook.com/KMLAccidentRepairCentre/",
    },
    {
      label: "Instagram",
      icon: "Instagram",
      href: "https://www.instagram.com/kml_accident_repair_centre/",
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
