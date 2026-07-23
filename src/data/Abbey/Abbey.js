export const digitalCardData = {
  company: {
    name: "Abbey Tyres",
    tagline: "Tyres, MOT, brakes, servicing, and workshop support for everyday vehicle care.",
    logo: "/Abbey/abbey.webp",
  },
  founder: {
    name: "Abbey Tyres Leicester",
    title: "Tyres, MOT, and Vehicle Servicing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07737985510", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://abbey-tyres.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Abbey Tyres supports local drivers with servicing, tyres, MOT work, braking, clutches, exhausts, and workshop repairs from its Leicester site.",
  services: [
    { label: "Full Service" },
    { label: "Half Service" },
    { label: "Brakes" },
    { label: "Brake Pads" },
    { label: "Clutches" },
    { label: "Exhausts" },
    { label: "MOT" },
    { label: "Bearing Work" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Abbey Tyres on Google.",
    href: "https://www.google.com/search?q=Abbey+Tyres+Leicester+%7C+Tyres%2C+MOT+%26+Vehicle+Servicing+&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sca_esv=fc2a7f6adb56bd6b&sxsrf=APpeQnsrSNdRQQun3GGUh6YSJgIGshodGw%3A1784826468671&ei=ZEpiauLEKJPhseMPwL3wqQQ&ved=0ahUKEwjihprdpOmVAxWTcGwGHcAePEUQ4dUDCBA&uact=5&oq=Abbey+Tyres+Leicester+%7C+Tyres%2C+MOT+%26+Vehicle+Servicing+&gs_lp=Egxnd3Mtd2l6LXNlcnAiN0FiYmV5IFR5cmVzIExlaWNlc3RlciB8IFR5cmVzLCBNT1QgJiBWZWhpY2xlIFNlcnZpY2luZyAyBxAjGK4CGCcyBRAAGO8FMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBUidDFCiCViiCXACeACQAQCYAegBoAHoAaoBAzItMbgBA8gBAPgBAZgCA6AC-QHCAggQABjvBRiwA8ICCxAAGIAEGKIEGLADmAMAiAYBkAYFkgcFMi4wLjGgB70FsgcDMi0xuAfuAcIHBTAuMS4yyAcLgAgB&sclient=gws-wiz-serp",
  },
  location: "146 Prestwold Rd, Leicester LE5 0EX, United Kingdom",
  locationHref: "https://maps.google.com/?q=146+Prestwold+Rd,+Leicester+LE5+0EX,+United+Kingdom",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
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
