export const digitalCardData = {
  company: {
    name: "Tomas Exteriors",
    tagline: "Window tinting, restoration, and finishing services for sharper exterior presentation.",
    logo: "/Tomasim/Tomas.webp",
  },
  founder: {
    name: "Tom",
    title: "Professional Window Tinting and Exterior Enhancement Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+447851823807", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447851823807", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:Tomasexteriors@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.tomasexteriors.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Tomas Exteriors delivers specialist tinting, restoration, and trim enhancement work designed to improve appearance, finish quality, and everyday comfort.",
  services: [
    { label: "Window Tinting", href: "https://www.tomasexteriors.co.uk/services/window-tinting/" },
    { label: "Headlight Restoration", href: "https://www.tomasexteriors.co.uk/services/headlight-restoration/" },
    { label: "Headlight Crack Repair", href: "https://www.tomasexteriors.co.uk/services/headlight-crack-repair/" },
    { label: "Headlight Condensation Repair", href: "https://www.tomasexteriors.co.uk/services/headlight-condensation-repair/" },
    { label: "Headlight Lens Replacement", href: "https://www.tomasexteriors.co.uk/services/headlight-lens-replacement/" },
    { label: "Exterior Enhancement Services", href: "https://www.tomasexteriors.co.uk/services/exterior-enhancement-services/" },
    { label: "Building Window Tinting", href: "https://www.tomasexteriors.co.uk/services/building-window-tinting/" },
    { label: "Intelligent Ambient Light Installation", href: "https://www.tomasexteriors.co.uk/services/intelligent-ambient-light-installation/" },
    { label: "Interior Trims Restoration / Wrapping", href: "https://www.tomasexteriors.co.uk/services/interior-trims-restoration/" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Tomas Exteriors on Google.",
    href: "https://www.google.com/search?sca_esv=fc2a7f6adb56bd6b&rlz=1C1CHBD_enLK1213LK1213&sxsrf=APpeQnv5NyNwjHo6S-VPHM2-vpZsNJSyyA:1785172943419&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_7kqxZQUOn1X9ZXpWN_WZHU-xqh6crXlTmmrcmnrfcrJWy1yvWOMBziVLZEbpaT-VSfg-XCVGQ0zAo22vkGE26TXvJmfiibC4YeqElUqP-cFXMo2_QpHRgaVYV-udh0Nf196ZRg%3D&q=Tomas+Exteriors+professional+window+tinting+Reviews&sa=X&ved=2ahUKEwiMsp65r_OVAxXphVYBHWFwPIcQ0bkNegQIJhAI&biw=1366&bih=633&dpr=1",
  },
  location: "Unit 16 Croft St, Bury, BL9 7BG, United Kingdom",
  locationHref: "https://maps.app.goo.gl/GPi6frsETUX1cu4VA",
  socialLinks: [
    { icon: "Instagram", href: "https://www.instagram.com/window_tint911/", label: "Instagram" },
    { icon: "Facebook", href: "https://web.facebook.com/windowtint911?_rdc=1&_rdr#", label: "Facebook" },
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
