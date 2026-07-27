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
    { label: "ECU Remapping & Tuning", href: "https://www.tkautomotive.im/ecu-remapping-tuning" },
    { label: "Rolling Road / Wheel Dyno", href: "https://www.tkautomotive.im/rolling-road-wheel-dyno" },
    { label: "Motorsport & Rally Preparation", href: "https://www.tkautomotive.im/motorsport-rally-preparation" },
    { label: "DPF-EGR-AdBlue Solutions", href: "https://www.tkautomotive.im/dpf-egr-adblue-solutions" },
    { label: "Diagnostics", href: "https://www.tkautomotive.im/diagnostics" },
    { label: "Mechanical Repairs", href: "https://www.tkautomotive.im/mechanical-repairs" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view TK Automotive on Google.",
    href: "",
  },
  location: "Lower Ballacottier, Ballacottier Rd, Onchan IM4 5BQ, Isle of Man",
  locationHref: "https://maps.app.goo.gl/YaRtaAFD8JLQpwfR6",
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
