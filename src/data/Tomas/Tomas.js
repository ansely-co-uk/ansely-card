export const digitalCardData = {
  company: {
    name: "Tomas Exteriors",
    tagline: "Window tinting, restoration, and finishing services for sharper exterior presentation.",
    logo: "/Tomas/Tomas.webp",
  },
  founder: {
    name: "Tomas Exteriors",
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
    { label: "Window Tinting" },
    { label: "Headlight Restoration" },
    { label: "Headlight Crack Repair" },
    { label: "Headlight Condensation Repair" },
    { label: "Headlight Lens Replacement" },
    { label: "Exterior Enhancement Services" },
    { label: "Building Window Tinting" },
    { label: "Intelligent Ambient Light Installation" },
    { label: "Interior Trims Restoration / Wrapping" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Tomas Exteriors on Google.",
    href: "https://www.google.com/search?q=Tomas+Exteriors+Professional+Window+Tinting%3A+Premium+...%0D%0A&sca_esv=fc2a7f6adb56bd6b&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sxsrf=APpeQnvhDR1h8HFV1dpIMmseJaMeSsJ38w%3A1784824908048&ei=TERiap3HArbu2roP67nRoQ4&ved=0ahUKEwidnYX1numVAxU2t1YBHetcNOQQ4dUDCBA&uact=5&oq=Tomas+Exteriors+Professional+Window+Tinting%3A+Premium+...%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiOVRvbWFzIEV4dGVyaW9ycyBQcm9mZXNzaW9uYWwgV2luZG93IFRpbnRpbmc6IFByZW1pdW0gLi4uCjIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIXEAAYgAQYigUYkQIY5wYY6gIYtALYAQEyFxAAGIAEGIoFGJECGOcGGOoCGLQC2AEBMhcQABiABBiKBRiRAhjnBhjqAhi0AtgBATIXEAAYgAQYigUYkQIY5wYY6gIYtALYAQEyFxAAGIAEGIoFGJECGOcGGOoCGLQC2AEBMhcQABiABBiKBRiRAhjnBhjqAhi0AtgBAUiZA1AAWM4BcAF4AJABAJgBAKABAKoBALgBA8gBAPgBAfgBApgCAaACDagCEJgDDOIDBRIBMSBA8QWQnaGGfckQdboGBggBEAEYAZIHATGgBwCyBwC4BwDCBwMzLTHIBwuACAE&sclient=gws-wiz-serp",
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
