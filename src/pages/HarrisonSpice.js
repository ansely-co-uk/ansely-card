const harrisonSpiceLocations = [
  {
    id: 1,
    name: "Ratby",
    description:
      "Authentic Indian dining & takeaway. Where great food & bring-your-own drinks come together in the heart of Ratby.",
    whyChooseUs:
      "Authentic Indian cuisine, exceptional service, and a warm, welcoming atmosphere. Dine in with family and friends or collect a takeaway, with every dish prepared using quality ingredients and care. Bring your own drinks and enjoy great food with even better company.",
    address: "23-27 Station Street, Ratby, Leicestershire, LE6 0JQ",
    phone: "0116 2395 644",
    telUrl: "tel:+441162395644",
    whatsapp: "+44 7368 384136",
    whatsappUrl: "https://wa.me/447368384136",
    website: "www.harrisons-spice.co.uk",
    websiteUrl: "https://www.harrisons-spice.co.uk",
    image: "/ratby.jpeg",
  },
  {
    id: 2,
    name: "Mountsorrel",
    description:
      "Freshly prepared Indian takeaway with authentic flavours in the heart of Mountsorrel.",
    whyChooseUs:
      "Freshly prepared Indian cuisine made with quality ingredients and traditional recipes. Mountsorrel Takeaway is dedicated to delicious food, friendly service, and a convenient takeaway experience for enjoying your favourite dishes at home.",
    address: "63b Leicester Road, Mountsorrel, LE12 7AJ",
    phone: "0116 230 1223",
    telUrl: "tel:+441162301223",
    whatsapp: "+44 7368 384136",
    whatsappUrl: "https://wa.me/447368384136",
    website: "harrisonsspice-mountsorrel.co.uk",
    websiteUrl: "https://harrisonsspice-mountsorrel.co.uk",
    image: "/mountsorrel.jpeg",
  },
  {
    id: 3,
    name: "Coming soon",
    description: "Indo-Chinese Buffet Coming Soon",
    whyChooseUs:
      "Experience the best of Indo-Chinese cuisine at our Coalville buffet, where bold flavours meet unlimited choice. The buffet is constantly evolving, with a new signature dish introduced each week, inspired by talented chefs from around the world.",
    address: "",
    phone: "",
    telUrl: "",
    whatsapp: "",
    whatsappUrl: "",
    website: "",
    websiteUrl: "",
    image: "/coalville.jpeg",
  },
];

function escapeVCardValue(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function createAddressLine(address = "") {
  if (!address) return "";

  const parts = address.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 4) return `ADR;TYPE=WORK:;;${escapeVCardValue(address)};;;;`;

  const street = escapeVCardValue(parts.slice(0, -3).join(", "));
  const city = escapeVCardValue(parts[parts.length - 3] || "");
  const region = escapeVCardValue(parts[parts.length - 2] || "");
  const postalCode = escapeVCardValue(parts[parts.length - 1] || "");

  return `ADR;TYPE=WORK:;;${street};${city};${region};${postalCode};`;
}

export { harrisonSpiceLocations };

export function downloadVCF(location) {
  if (!location) return;

  const hasContactDetails =
    Boolean(location.phone) || Boolean(location.whatsappUrl) || Boolean(location.websiteUrl);

  if (!hasContactDetails) return;

  const phone = location.telUrl?.replace("tel:", "") || "";
  const website = location.websiteUrl || "";
  const note = [location.shortDescription, location.whyChooseUs, location.note]
    .filter(Boolean)
    .join(" ");

  const vcfData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCardValue(`Harrison's Spice - ${location.name}`)}`,
    "ORG:Harrison's Spice",
    `TITLE:${escapeVCardValue(location.name)}`,
    phone ? `TEL;TYPE=WORK,VOICE:${escapeVCardValue(phone)}` : null,
    location.whatsappUrl ? `TEL;TYPE=CELL,WHATSAPP:${escapeVCardValue(location.whatsapp?.replace(/\s+/g, ""))}` : null,
    location.address ? createAddressLine(location.address) : null,
    website ? `URL:${escapeVCardValue(website)}` : null,
    note ? `NOTE:${escapeVCardValue(note)}` : null,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([vcfData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `Harrison-Spice-${location.name.replace(/\s+/g, "-")}.vcf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
