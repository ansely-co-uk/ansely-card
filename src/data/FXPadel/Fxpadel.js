export const digitalCardData = {
    company: {
        name: "FX Pedal Planet Limited",
        tagline: "At FX Pedal Planet Online Store, we're dedicated to providing the musical community with top quality.",
        logo: "/fxpadel.png",
    },
    founder: {
        name: "Steve",
        title: "FX Pedal Planet Online Store",
    },
    contacts: [
        { type: "Call", href: "tel:07496 126175", icon: "Phone", styleClass: "bg-[linear-gradient(135deg,#632581_0%,#632581_55%,#632581_100%)] hover:brightness-110" },
        { type: "WhatsApp", href: "https://wa.me/447496126175", icon: "MessageCircle", styleClass: "bg-[#25D366] hover:brightness-110" },
        { type: "Email", href: "mailto:npd@fxpedalplanet.co.uk", icon: "Mail", styleClass: "bg-[linear-gradient(135deg,#632581_0%,#632581_55%,#632581_100%)] hover:brightness-110" },
        { type: "Website", href: "https://www.fxpedalplanet.co.uk/", icon: "Globe", styleClass: "bg-[linear-gradient(135deg,#632581_0%,#632581_55%,#632581_100%)] hover:brightness-110" },
    ],
    about:
        "At FX Pedal Planet Online Store, we're dedicated to providing the musical community with top quality gear and a reliable, enjoyable shopping experience.",
    services: [
        { label: "Plant NVQ", href: "https://top-star-learning.vercel.app/plant-nvq" },
        { label: "Trade NVQs", href: "https://top-star-learning.vercel.app/trade-nvqs" },
        { label: "Supervisor NVQs", href: "https://top-star-learning.vercel.app/supervisor-nvqs" },
        { label: "Management NVQs", href: "https://top-star-learning.vercel.app/management-nvqs" },
    ],
    rating: null,
    location: "Unit 2 Sherbrook Enterprise 100 Sherbrook Road Daybrook Nottingham NG5 6AB",
    locationHref: null,
    socialLinks: [
        {
            label: "Instagram",
            icon: "Instagram",
            href: "https://www.instagram.com/fxpedalplanetonlinestore",
        },
        {
            label: "Facebook",
            icon: "Facebook",
            href: "https://www.facebook.com/fxpedalplanetonlinestore",
        },
        {
            label: "Twitter",
            icon: "Twitter",
            href: "https://x.com/fxpedalplanet",
        }
    ],
};

export function downloadVCF() {
    const { founder, company, contacts, location } = digitalCardData;

    const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
    const email = contacts.find((contact) => contact.type === "Email")?.href.replace("mailto:", "") || "";
    const website = contacts.find((contact) => contact.type === "Website")?.href || "";
    const whatsapp = contacts.find((contact) => contact.type === "WhatsApp")?.href || "";

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
NOTE:WhatsApp ${whatsapp}
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
