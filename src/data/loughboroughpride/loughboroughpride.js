export const digitalCardData = {
  company: {
    name: "Loughborough Pride",
    tagline: "Celebrating community, visibility, inclusion, and pride across Loughborough.",
    logo: "/loughboroughpride.png",
  },
  founder: {
    name: "Loughborough Pride",
    title: "Community Organisation",
  },
  contacts: [
    {
      type: "Call",
      href: "tel:+447822034108",
      icon: "Phone",
      styleClass:
        "bg-[linear-gradient(90deg,#57B9E5_0%,#F3A3C6_28%,#EE2D2E_58%,#E7157B_100%)] hover:brightness-110",
    },
    {
      type: "Website",
      href: "https://loughboroughpride.co.uk/",
      icon: "Globe",
      styleClass:
        "bg-[linear-gradient(90deg,#57B9E5_0%,#F3A3C6_28%,#EE2D2E_58%,#E7157B_100%)] hover:brightness-110",
    },
  ],
  about:
    "Loughborough Pride brings people together to celebrate LGBTQ+ visibility, belonging, and local community through inclusive events and shared support.",
  services: [],
  rating: {
    value: "Google Reviews",
    text: "Tap to view Loughborough Pride on Google.",
    href: "https://share.google/JYZL22ngScuvopcgr",
  },
  location: "Loughborough, United Kingdom",
  locationHref: "https://www.google.com/search?q=loughboroughpride",
  socialLinks: [
    {
      label: "Facebook",
      icon: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61562761267556&_rdc=1&_rdr#",
    },
    {
      label: "Instagram",
      icon: "Instagram",
      href: "https://www.instagram.com/loughboroughpride/",
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
