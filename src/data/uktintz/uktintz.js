export const digitalCardData = {
  company: {
    name: "UK Tintz",
    tagline:
      "Window tinting, audio upgrades, cameras, sensors, vinyl wrapping, and specialist tint services in Nottingham.",
    logo: "/uktiniz.png",
  },
  founder: {
    name: "Peter Attaway",
    title: "Owner",
  },
  contacts: [
    { type: "Call", href: "tel:07506717961", icon: "Phone", styleClass: "bg-primary" },
    { type: "WhatsApp", href: "https://wa.me/447506717961", icon: "MessageCircle", styleClass: "bg-whatsapp" },
    { type: "Email", href: "mailto:Peterattaway1987@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://uktintz.com/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "UK Tintz provides vehicle and property tinting alongside stereo fitting, reverse cameras, parking sensors, dashcams, and vinyl wrapping from their Nottingham base.",
  services: [
    { label: "Window Tinting", href: "https://uktintz.com/window-tinting" },
    { label: "Stereo Fitting", href: "https://uktintz.com/stereo-fitting" },
    { label: "Reverse Camera Fitting", href: "https://uktintz.com/reverse-camera" },
    { label: "Parking Sensors", href: "https://uktintz.com/parking-sensors" },
    { label: "Dashcams", href: "https://uktintz.com/dashcams" },
    { label: "Commercial Window Tinting", href: "https://uktintz.com/commercial-window" },
    { label: "Residential Tinting", href: "https://uktintz.com/residential-tinting" },
    { label: "Car Vinyl Wrapping", href: "https://uktintz.com/car-vinyl-wrapping" },
    { label: "Interior Vinyl Wrapping", href: "https://uktintz.com/interior-vinyl-wrapping" },
    { label: "Headlight & Taillight Tinting", href: "https://uktintz.com/headlight-taillight-tinting" },
    { label: "Sun Visor Service", href: "https://uktintz.com/sun-visors" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view UK Tintz on Google.",
    href: "https://share.google/hAVKjsVlaP8Xqb5j7",
  },
  location: "Unit 6, Broxtowe Park Business Centre, Calverton Drive, Nottingham NG8 6QP",
  locationHref: "https://maps.app.goo.gl/e4b2bXnnSXF8yoVQ8",
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/uktintz/", icon: "Instagram" },
    { label: "Facebook", href: "https://web.facebook.com/uktintz.nottingham/?_rdc=1&_rdr#", icon: "Facebook" },
    { label: "TikTok", href: "https://www.tiktok.com/@uktintz", icon: "TikTok" },
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
