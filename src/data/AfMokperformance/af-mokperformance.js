export const digitalCardData = {
  company: {
    name: "AF MOK Performance",
    tagline: "Performance tuning, diagnostics, and repairs built around real-world drivability.",
    logo: "/af-mokperformance/afmok.png",
  },
  founder: {
    name: "AF MOK Performance",
    title: "Vehicle Performance and Repair Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447494481443", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447494481443", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:afmok.performance@outlook.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.af-mokperformance.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "AF MOK Performance delivers software upgrades, diagnostics, and repair support for drivers looking for stronger performance, sharper response, and dependable maintenance.",
  services: [
    { label: "Stage/ECO Map" },
    { label: "Performance Software" },
    { label: "DPF/EGR/ADBLUE" },
    { label: "Mechanical & Electrical Repairs" },
    { label: "Vehicle Maintenance & Repairs" },
    { label: "Diagnostics & Investigations" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view AF MOK Performance on Google.",
    href: "https://www.google.com/search?q=ovi+body+shop&rlz=1C1CHBD_enLK1213LK1213&oq=ovi+body+shop&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiGAxiABBiKBTIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBDIHCAUQABjvBTIKCAYQABiABBiiBNIBBzcwNWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
  },
  location: "UNIT 7, Wynns Venture Centre, Broad St, Cannock WS11 0XL, United Kingdom",
  locationHref: "https://maps.app.goo.gl/ck1ahsqozPhCd2m56",
  socialLinks: [
    { icon: "Facebook", href: "https://web.facebook.com/Mokremapping?mibextid=wwXIfr&rdid=UG2xEFRyQ2aHjkH0&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F16eb5kcuGU%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#", label: "Facebook" },
    { icon: "Instagram", href: "https://www.instagram.com/afmokperformance/", label: "Instagram" },
    { icon: "TikTok", href: "https://www.tiktok.com/@afmok.performance", label: "TikTok" },
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
