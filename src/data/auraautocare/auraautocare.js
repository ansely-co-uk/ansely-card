export const digitalCardData = {
  company: {
    name: "Aura Auto Care",
    tagline: "Valeting, ceramic coating, and paint correction in Nottingham.",
    logo: "/auraauto.png",
  },
  founder: {
    name: "Adam",
    title: "Valeting and Detailing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447305794353", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447305794353", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:auraautocare1@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://auraautocare.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Aura Auto Care helps drivers across Nottingham and the East Midlands keep their vehicles protected and looking their best with valeting, correction, restoration, and long-term care packages.",
  services: [
    { label: "Valeting", href: "https://auraautocare.co.uk/services/valeting" },
    { label: "Ceramic Coating", href: "https://auraautocare.co.uk/services/ceramic-coating" },
    { label: "Paint Correction", href: "https://auraautocare.co.uk/services/paint-correction" },
    { label: "Deep Restoration", href: "https://auraautocare.co.uk/services/deep-restoration" },
    { label: "Maintenance Plan", href: "https://auraautocare.co.uk/services/maintenance-plan" },
    { label: "Car Protection Package", href: "https://auraautocare.co.uk/services/car-protection" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Aura Auto Care on Google.",
    href: "https://www.google.com/search?sca_esv=bde0b90e1f00e769&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=APpeQnsqJiF__76t-sDSo2UJBhIwPAWHww:1785167908645&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-SWv-OXI_rwf7IE4lh4CabbTmXL4wOkZrzJ6EEs2btAfVC69YjU5P1DQU_dMbmcjusOO8QdEqEwNy48lKeMyuH_X_ul&q=Aura+AutoCare+Reviews&sa=X&ved=2ahUKEwjMhrzYnPOVAxVih68BHUiADjUQ0bkNegQIIRAF&biw=1366&bih=633&dpr=1",
  },
  location: "Nottingham, East Midlands, United Kingdom",
  locationHref: "https://maps.app.goo.gl/e1S2etqinvH3EkZr7",
  socialLinks: [
    { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/aura.autocare/" },
    { label: "TikTok", icon: "TikTok", href: "https://www.tiktok.com/@auraautocare" },
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
