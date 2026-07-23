export const digitalCardData = {
  company: {
    name: "Ear We Go",
    tagline: "Professional ear care with simple, effective micro suction treatment.",
    logo: "/earwego/earwego.webp",
  },
  founder: {
    name: "Ear We Go",
    title: "Micro Suction Ear Care Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:08081371961", icon: "Phone", styleClass: "bg-primary" },
    { type: "Email", href: "mailto:earwegosales@gmail.com", icon: "Mail", styleClass: "bg-primary" },
    { type: "Website", href: "https://earwego.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Ear We Go offers focused ear care services with a simple approach, helping clients access safe and comfortable micro suction treatment.",
  services: [
    { label: "Micro Suction" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Ear We Go on Google.",
    href: "https://www.google.com/search?q=ear+we+go&sca_esv=fc2a7f6adb56bd6b&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sxsrf=APpeQnuxV_0FM8z3EdyAoa0kJwiruCz9Og%3A1784823496025&ei=yD5iau2dAY2YhvcP37Tw6QU&ved=0ahUKEwjtod7TmemVAxUNjOEIHV8aPF0Q4dUDCBA&uact=5&oq=ear+we+go&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWVhciB3ZSBnbzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIoFGIYDSNUeUABY1RxwAXgAkAEAmAGVAqABlxCqAQUwLjEuOLgBA8gBAPgBAZgCCqACghGoAhTCAgcQIxjqAhgnwgIQEAAYAxiPARjqAhi0AtgBAcICChAuGMcBGK8BGCfCAgQQIxgnwgIKEAAYgAQYigUYQ8ICFhAuGIAEGIoFGEMYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICFxAuGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIOEC4YgAQYigUYkQIYsQPCAgsQABiABBiKBRiRAsICERAuGIAEGIoFGJECGMcBGK8BwgIIEC4YgAQYsQPCAgQQLhgDwgIIEAAYgAQYsQPCAhoQLhiABBiKBRiRAhjHARivARiYBRieBRiZBcICDRAAGIAEGIoFGEMYsQPCAg0QLhiABBiKBRhDGLEDwgINEAAYgAQYigUYQxjJA8ICCBAAGIAEGJIDwgILEAAYgAQYigUYkgPCAggQABiABBiiBJgDEfEFt4G0CxspWou6BgYIARABGAqSBwUxLjEuOKAHn02yBwUwLjEuOLgH8RDCBwUyLTYuNMgHWIAIAQ&sclient=gws-wiz-serp#cobssid=s",
  },
  location: "Great Northern Rd, Derby, DE1 1LR",
  locationHref: "https://maps.google.com/?q=Great+Northern+Rd,+Derby,+DE1+1LR",
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
