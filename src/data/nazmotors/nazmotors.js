export const digitalCardData = {
  company: {
    name: "Naz Motors",
    tagline: "MOT, repairs, servicing, and vehicle parts support under one roof.",
    logo: "/nazmotorsim/naz.png",
  },
  founder: {
    name: "Naz",
    title: "Garage Services, MOT Testing, and Vehicle Parts Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01162515961", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.nazmotors.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Naz Motors supports drivers with MOT testing, servicing, repairs, tyres, aircon work, scrapping, and second-hand parts for practical, everyday vehicle needs.",
  services: [
    { label: "MOT Testing", href: "https://www.nazmotors.co.uk/services/mot" },
    { label: "Car Scrapping", href: "https://www.nazmotors.co.uk/services/car-scrapping" },
    { label: "Service", href: "https://www.nazmotors.co.uk/services/service" },
    { label: "Mechanical Repairs (All)", href: "https://www.nazmotors.co.uk/services/mechanical-repairs" },
    { label: "Tyres", href: "https://www.nazmotors.co.uk/services/tyres" },
    { label: "All Second-Hand Car Parts", href: "https://www.nazmotors.co.uk/services/all-second-hand-car-parts" },
    { label: "Aircon Re-gas & Service", href: "https://www.nazmotors.co.uk/services/aircon-re-gas-service" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Naz Motors on Google.",
    href: "https://share.google/0Y4NdwmLiDjZ7us6X",
  },
  location: "80 Ravensbridge Drive, Leicester, LE4 0BX, UK",
  locationHref: "https://maps.app.goo.gl/TiqMTqcnXM9enSEk8",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
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
