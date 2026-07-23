export const digitalCardData = {
  company: {
    name: "Amma Kitchen",
    tagline: "Homestyle South Asian cooking with comforting favourites and bold everyday flavour.",
    logo: "/Amma-kitchen-coventry/amma.webp",
  },
  founder: {
    name: "Amma Kitchen Coventry",
    title: "Freshly Prepared Food and Takeaway Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:+442475090098", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:earwegosales@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://amma-kitchen.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Amma Kitchen brings together comforting home-style dishes, warm hospitality, and flavour-led cooking for guests looking for a satisfying local food stop in Coventry.",
  services: [
    { label: "Freshly Prepared South Asian Meals" },
    { label: "Family-Style Curry Dishes" },
    { label: "Rice, Biryani and Side Selections" },
    { label: "Quick Takeaway Collection" },
    { label: "Vegetarian and Meat Options" },
    { label: "Everyday Comfort Food Specials" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Amma Kitchen Coventry on Google.",
    href: "https://www.google.com/search?q=Amma+Kitchen+Coventry&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sca_esv=fc2a7f6adb56bd6b&sxsrf=APpeQnu_NW2e_VM9hMLLHSoIYDFsdd-pTw%3A1784827308576&ei=rE1iarvmIsqX4-EPnJqFeA&ved=0ahUKEwi77Nntp-mVAxXKyzgGHRxNAQ8Q4dUDCBA&uact=5&oq=Amma+Kitchen+Coventry&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUFtbWEgS2l0Y2hlbiBDb3ZlbnRyeTIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIXEAAYgAQYigUYkQIY5wYY6gIYtALYAQEyFxAAGIAEGIoFGJECGOcGGOoCGLQC2AEBMhcQABiABBiKBRiRAhjnBhjqAhi0AtgBATIXEAAYgAQYigUYkQIY5wYY6gIYtALYAQEyFxAAGIAEGIoFGJECGOcGGOoCGLQC2AEBMhcQABiABBiKBRiRAhjnBhjqAhi0AtgBAUjDCFDfA1jfA3ABeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQH4AQKYAgGgAhWoAhCYAxXiAwUSATEgQPEF-dMnVP9aV5a6BgYIARABGAGSBwExoAcAsgcAuAcAwgcDMy0xyAcSgAgB&sclient=gws-wiz-serp",
  },
  location: "477 Beake Ave, Coventry CV6 2HT, United Kingdom",
  locationHref: "https://maps.app.goo.gl/JuhckJ5LSQ6MjvkTA",
  socialLinks: [],
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
