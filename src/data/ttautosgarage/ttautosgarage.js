export const digitalCardData = {
  company: {
    name: "TT Autos Garage",
    tagline: "MOTs, diagnostics, repairs, servicing, and car customisation from a trusted Leicester garage.",
    logo: "/ttautosgarage.png",
  },
  founder: {
    name: "TT Autos Garage",
    title: "Garage Services and Vehicle Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01162530770", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447783367501", icon: "MessageCircle", styleClass: "bg-[#25D366]" },
    { type: "Email", href: "mailto:ttautosgarage@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://ttautosgarage.com/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "TT Autos Garage supports drivers with MOTs, diagnostics, repairs, servicing, and upgrade work, offering practical workshop support for everyday maintenance as well as car customisation.",
  services: [
    { label: "MOT", href: "https://ttautosgarage.com/services/mot/" },
    { label: "Brake Repair", href: "https://ttautosgarage.com/services/brake-repair/" },
    { label: "Timing Belts", href: "https://ttautosgarage.com/services/timing-belts/" },
    { label: "Car Batteries", href: "https://ttautosgarage.com/services/car-batteries/" },
    { label: "Suspension", href: "https://ttautosgarage.com/services/suspension/" },
    { label: "Car Servicing", href: "https://ttautosgarage.com/services/car-servicing/" },
    { label: "Clutches", href: "https://ttautosgarage.com/services/clutches/" },
    { label: "Diagnostics", href: "https://ttautosgarage.com/services/diagnostics/" },
    { label: "Air Conditioning", href: "https://ttautosgarage.com/services/air-conditioning/" },
    { label: "Car Customisation", href: "https://ttautosgarage.com/services/car-customisation/" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view TT Autos Garage on Google.",
    href: "https://share.google/rPT3DrDjchk3TXpse",
  },
  location: "Leicester, United Kingdom",
  locationHref: "https://maps.app.goo.gl/J2PsD6ET5acKNx6W7",
  socialLinks: [
    { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/ttautos_/" },
    { label: "TikTok", icon: "TikTok", href: "https://www.tiktok.com/@ttautos" },
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
