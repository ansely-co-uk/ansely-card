export const digitalCardData = {
  company: {
    name: "TK Automotive",
    tagline: "Performance tuning, diagnostics, and motorsport preparation for road and rally builds.",
    logo: "/TK/tk.webp",
  },
  founder: {
    name: "Tristan",
    title: "Founder & Diagnostic Specialist",
  },
  contacts: [
    { type: "Call", href: "tel:01624860209", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://www.tkautomotive.im/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "TK Automotive works across performance tuning, rolling road testing, diagnostics, motorsport prep, and mechanical repair for drivers who want precise, dependable results.",
  services: [
    { label: "ECU Remapping & Tuning" },
    { label: "Rolling Road / Wheel Dyno" },
    { label: "Motorsport & Rally Preparation" },
    { label: "DPF-EGR-AdBlue Solutions" },
    { label: "Diagnostics" },
    { label: "Mechanical Repairs" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view TK Automotive on Google.",
    href: "https://www.google.com/search?q=TK+Automotive+%E2%80%94+Professional+Performance+Services&rlz=1C1CHBD_enLK1213LK1213&biw=1920&bih=945&sca_esv=fc2a7f6adb56bd6b&sxsrf=APpeQnuzMifHB73daohYflAohdwZBry2vg%3A1784828048272&ei=kFBiaoOhEKCrseMP5eGv2QQ&ved=0ahUKEwiDqbXOqumVAxWgVWwGHeXwK0sQ4dUDCBA&uact=5&oq=TK+Automotive+%E2%80%94+Professional+Performance+Services&gs_lp=Egxnd3Mtd2l6LXNlcnAiM1RLIEF1dG9tb3RpdmUg4oCUIFByb2Zlc3Npb25hbCBQZXJmb3JtYW5jZSBTZXJ2aWNlczIFECEYnwUyBRAhGJ8FMgUQIRifBTIFECEYnwVI4wdQxQJYxQJwAXgBkAEAmAHJAqAByQKqAQMzLTG4AQPIAQD4AQH4AQKYAgKgAvkCqAIRwgIHECMY6gIYJ8ICFhAAGIAEGIoFGEMY5wYY6gIYtALYAQHCAhAQABgDGI8BGOoCGLQC2AEBwgIQEC4YAxiPARjqAhi0AtgBAZgDH_EFBsxp4TO_8S66BgYIARABGAGSBwUxLjMtMaAH4QWyBwMzLTG4B9kCwgcHMi0xLjAuMcgHHoAIAQ&sclient=gws-wiz-serp",
  },
  location: "Lower Ballacottier, Ballacottier Rd, Onchan IM4 5BQ, Isle of Man",
  locationHref: "https://maps.google.com/?q=Lower+Ballacottier+Ballacottier+Rd+Onchan+IM4+5BQ+Isle+of+Man",
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
