export const digitalCardData = {
  company: {
    name: "Broadway Remapping",
    tagline: "Professional ECU remapping and vehicle tuning for performance, efficiency, and reliability.",
    logo: "/broadway-remapping/broadway-remapping-logo.webp",
  },
  founder: {
    name: "Mark",
    title: "ECU Remapping and Performance Tuning Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447392791919", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447392791919", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:enquiries@broadwayremapping.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://broadwayremapping.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Broadway Remapping delivers bespoke tuning solutions focused on stronger performance, smoother drivability, and dependable results for cars and vans.",
  services: [
    {
      label: "ECU Optimisation",
      href: "https://broadwayremapping.co.uk/service/ecu-optimisation/",
    },
    {
      label: "Stage 1 Remapping",
      href: "https://broadwayremapping.co.uk/service/stage-1-remapping/",
    },
    {
      label: "AdBlue, EGR & DPF Solutions",
      href: "https://broadwayremapping.co.uk/service/adblue-egr-dpf/",
    },
    {
      label: "TCU Remapping",
      href: "https://broadwayremapping.co.uk/service/tcu-remapping/",
    },
    {
      label: "ECU Cloning",
      href: "https://broadwayremapping.co.uk/service/ecu-cloning/",
    },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Broadway Remapping on Google.",
    href: "https://share.google/T67beIPKzaumQs0Kh",
  },
  location: "Unit B, Plas Ifan Farm, Alltami Road, Mold, CH7 6RH",
  locationHref: "https://maps.app.goo.gl/xEUfKLc3T9enfscB7",
  socialLinks: [
    { icon: "Instagram", href: "https://www.instagram.com/broadway_remapping_/" },
    { icon: "Facebook", href: "https://web.facebook.com/people/Broadway-Remapping/100037206957303/" },
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
