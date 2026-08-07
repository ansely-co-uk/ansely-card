export const digitalCardData = {
  company: {
    name: "Nina's Coffee Shop",
    tagline: "A calm coffee stop on High Street with fresh drinks, good coffee, and a warm little break in your day.",
    logo: "/nina.png",
  },
  founder: {
    name: "Nina's Coffee Shop",
    title: "Friendly Coffee Shop in Loughborough",
  },
  contacts: [
    { type: "Call", href: "tel:+441509974415", icon: "Phone", styleClass: "bg-[#8B5A3C] hover:bg-[#9E6948]" },
    { type: "Website", href: "https://nina-s-coffice.vercel.app/", icon: "Globe", styleClass: "bg-[#B87947] hover:bg-[#C98A57]" },
  ],
  about:
    "Hi, we are Nina's Coffee Shop, a small and friendly place in the middle of Loughborough. Whether you are popping in for your usual coffee, a quick break, or a little time to sit and breathe, we just want you to feel comfortable here. No rush, no pressure, just a warm little stop in your day.",
  services: [
    { label: "Fresh Drinks" },
    { label: "Good Coffee" },
    { label: "Catch-Ups with Friends" },
    { label: "Quiet Sit-Down Time" },
  ],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Nina's Coffee Shop on Google.",
    href: "https://share.google/U2PTyaszUCZYwSjo6",
  },
  location: "Nina's Coffee Shop, 32 High St, Loughborough LE11 2PZ, United Kingdom",
  locationHref: "https://maps.app.goo.gl/pecARym7sm6xycp5A",
  socialLinks: [
    {
      label: "Instagram",
      icon: "Instagram",
      href: "https://www.instagram.com/ninas_coffeeshop/",
    },
    {
      label: "Facebook",
      icon: "Facebook",
      href: "https://www.facebook.com/p/Ninas-Coffee-Shop-61583768861028/",
    },
  ],
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
