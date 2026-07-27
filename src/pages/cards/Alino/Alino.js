import { digitalCardDataAlino } from "../../../global";

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardDataAlino;

  const phone = contacts.find((c) => c.type === "Call")?.href.replace("tel:", "") || "";
  const email = contacts.find((c) => c.type === "Email")?.href.replace("mailto:", "") || "";
  const website = contacts.find((c) => c.type === "Website")?.href || "";

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

  const a = document.createElement("a");
  a.href = url;
  a.download = `${founder.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
