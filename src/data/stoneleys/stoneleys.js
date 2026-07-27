export const digitalCardData = {
  company: {
    name: "Stoneley's",
    tagline: "Trusted garage services for MOTs, diagnostics, tyres, servicing, and repairs.",
    logo: "/stoneleysim/stoneleys.webp",
  },
  founder: {
    name: "Adam",
    title: "Garage Services, Diagnostics, and Vehicle Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+441623623759", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.stoneleys.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Stoneley's supports drivers with MOTs, servicing, diagnostics, tyres, alignment, air conditioning, and engine care from its Mansfield garage.",
  services: [
    { label: "MOT Testing & Car Servicing", href: "https://www.stoneleys.co.uk/services/car-service" },
    { label: "Wheel Alignment & Tyre Fitting", href: "https://www.stoneleys.co.uk/services/wheel-alignment" },
    { label: "Vehicle Diagnostics & ECU Remapping", href: "https://www.stoneleys.co.uk/services/diagnostics" },
    { label: "Engine Cleaning Services", href: "https://www.stoneleys.co.uk/services/cleaning" },
    { label: "Air Conditioning Service", href: "https://www.stoneleys.co.uk/services/air-con" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Stoneley's Garage Services on Google.",
    href: "https://share.google/P9OjU9hy4ctdMWNgH",
  },
  location: "Stoneley's Garage, Hamilton Way, Mansfield NG18 5BU",
  locationHref: "https://maps.google.com/?q=Stoneley%27s+Garage+Hamilton+Way+Mansfield+NG18+5BU",
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
