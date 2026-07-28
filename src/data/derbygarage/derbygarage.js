export const digitalCardData = {
  company: {
    name: "Derby Garage",
    tagline: "Trusted servicing, MOT testing, diagnostics, repairs, and workshop support in Derby.",
    logo: "/derbygarage.png",
  },
  founder: {
    name: "John",
    title: "Servicing, MOT, Diagnostics, and Mechanical Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447939490098", icon: "Phone", styleClass: "bg-primary" },
    { type: "Phone", href: "tel:01332349670", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:derbygarage.de223se@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://derby-garage.com/", icon: "Globe", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447939490098", icon: "MessageCircle", styleClass: "bg-whatsapp" },
  ],
  about:
    "Derby Garage provides practical, dependable workshop support with servicing, MOT testing, diagnostics, clutch and brake repairs, suspension work, air conditioning repairs, and more from their Derby base.",
  services: [
    { label: "Car Servicing", href: "https://derby-garage.com/services/servicing" },
    { label: "MOT Testing", href: "https://derby-garage.com/services/mot" },
    { label: "Car Clutch Repair Services", href: "https://derby-garage.com/services/clutches" },
    { label: "Car Diagnostics", href: "https://derby-garage.com/services/diagnostics" },
    { label: "Mechanical Repairs", href: "https://derby-garage.com/services/repairs" },
    { label: "Car Suspension Repair Services", href: "https://derby-garage.com/services/suspensions" },
    { label: "Car Brake Repair Services", href: "https://derby-garage.com/services/brakes" },
    { label: "Car Welding Services", href: "https://derby-garage.com/services/welding" },
    { label: "Car Air Conditioning Repair Services", href: "https://derby-garage.com/services/air-conditioning" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Derby Garage on Google.",
    href: "https://share.google/RVy7IjwmTXogTgGh0",
  },
  location: "7 Wolfa St, Derby DE22 3SE",
  locationHref: "https://maps.app.goo.gl/FMxcJUWR47iPM3VZ6",
  socialLinks: [
    {
      icon: "Instagram",
      href: "https://www.instagram.com/derby_garage?igsh=MTd5MmF3ZmxqbTNwZQ==",
      label: "Instagram",
    },
    {
      icon: "TikTok",
      href: "https://www.tiktok.com/@derby_garage?_t=ZS-8vzfpJ2Ir7H&_r=1",
      label: "TikTok",
    },
    {
      icon: "Facebook",
      href: "https://facebook.com/share/1BmGbeMvKD/?mibextid=qi2Omg",
      label: "Facebook",
    },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const addressLine = location ? `ADR;TYPE=WORK:;;${location};;;;\n` : "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=WORK:${email}
${addressLine}URL:${website}
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
