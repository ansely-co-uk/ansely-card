export const digitalCardData = {
  company: {
    name: "Empire Scaffolding",
    tagline: "Reliable scaffolding supply, erection, and dismantling for projects of every scale.",
    logo: "/empire/empire.png",
  },
  founder: {
    name: "Empire Scaffolding (GB) Ltd",
    title: "Scaffolding Supply, Erection, and Access Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:01159641600", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:info@empirescaffolding.co.uk", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.empirescaffolding.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Empire Scaffolding supports construction and maintenance work with dependable access solutions, covering supply, erection, dismantling, and systems suited to jobs of any size.",
  services: [
    { label: "Traditional Tube & Fit Scaffolding" },
    { label: "Full Supply, Erection & Dismantling" },
    { label: "Projects of Any Size" },
    { label: "Plettac System Scaffolding" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Empire Scaffolding on Google.",
    href: "https://www.google.com/search?q=empire+scaffolding+nottingham&sca_esv=fc2a7f6adb56bd6b&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sxsrf=APpeQnuoo9CSMM0DHV97Ffu2oVJYXWZqgQ%3A1784824917577&ei=VURiaubcIsPe2roPpoSDiQE&oq=Empire+scaf&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0VtcGlyZSBzY2FmKgIIATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIokdQ6wNY3DNwA3gAkAEBmAHLC6ABvy6qAQsyLTIuMS4yLjctM7gBAcgBAPgBAfgBApgCCqACpiSoAhDCAgcQIxjqAhgnwgIXEAAYgAQYigUYkQIY5wYY6gIYtALYAQHCAgsQABiABBiKBRiRAsICChAAGIAEGIoFGEPCAgoQLhiABBiKBRhDwgIKEAAYgAQYFBiHAsICBRAuGIAEwgILEC4YgAQYxwEY0QPCAgkQABiABBgKGAuYA0XxBa3Uwi8Niwl4ugYGCAEQARgBkgcNMy4wLjIuMS4yLjctMqAH7TayBwsyLTIuMS4yLjctMrgHxyPCBwkyLTMuNS4xLjHIB4oBgAgB&sclient=gws-wiz-serp",
  },
  location: "Empire Scaffolding (GB) Ltd, Hucknall, Nottinghamshire, United Kingdom",
  locationHref: "https://maps.google.com/?q=Hucknall,+Nottinghamshire,+United+Kingdom",
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
