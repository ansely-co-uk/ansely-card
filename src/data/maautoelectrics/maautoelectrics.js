export const digitalCardData = {
  company: {
    name: "MA Auto Electrics",
    tagline: "Auto electrical diagnostics, installations, repairs, and workshop services in Accrington.",
    logo: "/maautoelectrics.png",
  },
  founder: {
    name: "Muj",
    title: "Auto Electrical and Vehicle Diagnostics Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447889133123", icon: "Phone", styleClass: "bg-primary" },
    {
      type: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=447889133123&text&type=phone_number&app_absent=0",
      icon: "MessageCircle",
      styleClass: "bg-[#25D366]",
    },
    { type: "Email", href: "mailto:maautoelectrics@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://maautoelectrics.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "MA Auto Electrics supports drivers with diagnostics, electrical fault finding, installations, repairs, and workshop services, covering everything from parking sensors and handsfree kits to ECU, AdBlue, and mechanical work.",
  services: [
    { label: "MOT", href: "https://maautoelectrics.co.uk/mot" },
    { label: "Parking Sensors", href: "https://maautoelectrics.co.uk/parking" },
    { label: "Installations", href: "https://maautoelectrics.co.uk/installation" },
    { label: "Handsfree", href: "https://maautoelectrics.co.uk/handsfree" },
    { label: "Diagnostics", href: "https://maautoelectrics.co.uk/diagnostics" },
    { label: "Car Stereos", href: "https://maautoelectrics.co.uk/car-stereos" },
    { label: "Car Security", href: "https://maautoelectrics.co.uk/car-security" },
    { label: "Car Repair", href: "https://maautoelectrics.co.uk/car-repair" },
    { label: "Vehicle Tracking", href: "https://maautoelectrics.co.uk/vehicle-tracking" },
    { label: "AdBlue", href: "https://maautoelectrics.co.uk/AdBlue" },
    { label: "EGR", href: "https://maautoelectrics.co.uk/EGR" },
    { label: "ECU Repair Services", href: "https://maautoelectrics.co.uk/ecu-repair-services" },
    { label: "Car Electrics", href: "https://maautoelectrics.co.uk/Car-Electrics" },
    { label: "Central Door Motors", href: "https://maautoelectrics.co.uk/central-door-motors" },
    { label: "Wiper Motors", href: "https://maautoelectrics.co.uk/WiperMotors" },
    { label: "Window Regulators", href: "https://maautoelectrics.co.uk/WindowRegulators" },
    { label: "Brake Pads", href: "https://maautoelectrics.co.uk/BrakePads" },
    { label: "Mechanical", href: "https://maautoelectrics.co.uk/mechanical" },
  ],
  rating: {
    value: "Google Rating",
    text: "Trusted local auto electrics and diagnostics support.",
  },
  location: "13 Laburnum Drive, Oswaldtwistle, Accrington, BB5 3AW, United Kingdom",
  locationHref: "https://www.google.com/maps/search/?api=1&query=13+laburnum+drive+oswaldtwistle+accrington+bb5+3aw",
  socialLinks: [
    {
      label: "Facebook",
      icon: "Facebook",
      href: "https://web.facebook.com/maautoelectrics/",
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
