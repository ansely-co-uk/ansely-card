export const digitalCardData = {
  company: {
    name: "Naz Motors",
    tagline: "MOT, repairs, servicing, and vehicle parts support under one roof.",
    logo: "/nazmotors/naz.png",
  },
  founder: {
    name: "Naz Motors",
    title: "Garage Services, MOT Testing, and Vehicle Parts Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01162515961", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.nazmotors.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Naz Motors supports drivers with MOT testing, servicing, repairs, tyres, aircon work, scrapping, and second-hand parts for practical, everyday vehicle needs.",
  services: [
    { label: "MOT Testing" },
    { label: "Car Scrapping" },
    { label: "Service" },
    { label: "Mechanical Repairs (All)" },
    { label: "Tyres" },
    { label: "All Second-Hand Car Parts" },
    { label: "Aircon Re-gas & Service" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Naz Motors on Google.",
    href: "https://www.google.com/search?q=naz+motors&rlz=1C1CHBD_enLK1213LK1213&oq=naz+motors&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDExMjZqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
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
