export const digitalCardData = {
  company: {
    name: "New Bridge Street Car Garage",
    tagline: "Diagnostics, MOT, mechanical repairs, engine work, and garage support in Leicester.",
    logo: "/newbridgestreetcargarage.webp",
  },
  founder: {
    name: "Lowdi",
    title: "Diagnostics, Repairs, MOT, and Recovery Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01164782001", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447502060801", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Website", href: "https://newbridgestreetcargarage.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "New Bridge Street Car Garage delivers practical vehicle care in Leicester with diagnostics, servicing, MOT work, welding, aircon servicing, clutch and transmission repairs, engine replacement, and recovery support.",
  services: [
    { label: "Diagnostics", href: "https://newbridgestreetcargarage.co.uk/service/diagnostics/" },
    { label: "Mechanical Repairs (All)", href: "https://newbridgestreetcargarage.co.uk/service/mechanical-repairs-all/" },
    { label: "Engine Replacement", href: "https://newbridgestreetcargarage.co.uk/service/engine-replacement/" },
    { label: "Timing Chain/Belts", href: "https://newbridgestreetcargarage.co.uk/service/timing-chain-belts/" },
    { label: "Service", href: "https://newbridgestreetcargarage.co.uk/service/%e2%81%a0service/" },
    { label: "MOT", href: "https://newbridgestreetcargarage.co.uk/service/mot/" },
    { label: "DPF Repair", href: "https://newbridgestreetcargarage.co.uk/service/dpf-repair/" },
    { label: "Car Welding", href: "https://newbridgestreetcargarage.co.uk/service/car-welding/" },
    { label: "Aircon Re-Gas & Servicing", href: "https://newbridgestreetcargarage.co.uk/service/aircon-re-gas-servicing/" },
    { label: "Car Coding Removal", href: "https://newbridgestreetcargarage.co.uk/service/car-coding-removal/" },
    { label: "Clutch Repair & Replacement", href: "https://newbridgestreetcargarage.co.uk/service/clutch-repair-replacement/" },
    { label: "Car Transmission Repair", href: "https://newbridgestreetcargarage.co.uk/service/car-transmission-repair/" },
    { label: "Car Recovery", href: "https://newbridgestreetcargarage.co.uk/service/car-recovery/" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view New Bridge Street Car Garage on Google.",
    href: "https://share.google/4D5vBXkzEpcvsJD1Z",
  },
  location: "70 New Bridge St, Leicester LE2 7JR, United Kingdom",
  locationHref: "https://maps.app.goo.gl/ZDGpgTm1LoCTH1NZ7",
  socialLinks: [
    {
      icon: "Instagram",
      href: "https://www.instagram.com/new_bridge_garage_leicester/",
      label: "Instagram",
    },
    {
      icon: "TikTok",
      href: "https://www.tiktok.com/@newbrightstreetcargarage",
      label: "TikTok",
    },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";
  const whatsapp = contacts.find((contact) => contact.type === "WhatsApp")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
ADR;TYPE=WORK:;;${location};;;;
URL:${website}
NOTE:WhatsApp ${whatsapp}
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
