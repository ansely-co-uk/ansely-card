import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Download,
  Star,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

import { digitalCardDataBurnsHairDesign } from "../../../global";
import { downloadVCF } from "./HairdressBurn.js";
import { lazy, Suspense } from "react";

const FloatingLines = lazy(() => import("../../../components/FloatingLines.tsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[var(--bg-main)]" />
);

const iconMap = { Phone, MessageCircle, Mail, Globe };
const socialIconMap = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
};

export default function HairDressBurn() {
  const {
    company,
    founder,
    contacts,
    about,
    services,
    rating,
    location,
    socialLinks,
  } = digitalCardDataBurnsHairDesign;

  return (
    <main className="relative min-h-screen text-white flex justify-center bg-[var(--bg-main)]">

      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<WebGLPlaceholder />}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[4, 8, 12]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={4}
            interactive={true}
            parallax={true}
            linesGradient={["#001F7F", "#0045EF", "#0066FF", "#3399FF", "#66B3FF"]}
          />
        </Suspense>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Company Name - Usually wider/full width for impact */}
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex items-center justify-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-amber-300/15 blur-2xl scale-110" />
            <div className="relative flex h-24 w-44 items-center justify-center overflow-hidden rounded-3xl bg-white/95 px-4 py-3 shadow-2xl shadow-black/30 ring-1 ring-white/20 md:h-28 md:w-52">
              <img
                src="/burns-logo.webp"
                alt={founder.name}
                loading="lazy"
                className="h-full w-full object-contain drop-shadow-[0_6px_20px_rgba(15,23,42,0.18)]"
              />
            </div>
          </div>
        </header>

        {/* Consistent Width Container 
            All elements below this line will have the exact same width 
        */}
        <div className="w-full max-w-md px-4 pb-20">

          {/* Tagline - Now matched to the width of the cards/buttons */}
          <div className="text-center mb-10">
            <p className="text-white text-[24px] md:text-[28px] tracking-tight leading-snug">
              {company.tagline}
            </p>
          </div>

          {/* Founder */}
          <section className="text-center mb-10">
            <h2 className="text-2xl font-semibold">{founder.name}</h2>
            <p className="text-white mt-1 opacity-80">{founder.title}</p>
          </section>

          {/* Contact Buttons */}
          <section className="mb-10">
            <div className="grid grid-cols-2 gap-3">
              {contacts.map((contact) => {
                const IconComponent = iconMap[contact.icon] ?? Globe;
                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === "Website" || contact.type === "WhatsApp" ? "_blank" : "_self"}
                    className={`flex items-center justify-center gap-2 h-14 rounded-lg transition hover:scale-[1.02] active:scale-95 ${contact.styleClass}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {contact.type}
                  </a>
                );
              })}
            </div>
          </section>

          {/* About Card */}
          <div className="rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-white font-bold leading-relaxed">{about}</p>
          </div>

          {/* Services */}
          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">Key Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white transition hover:border-cyan-300/40 hover:bg-white/8"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Rating */}
          <a
            href={digitalCardDataBurnsHairDesign.ratingUrl}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md transition hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-semibold mt-4">{rating.value} Google Rating</p>
            <p className="text-sm text-gray-400 italic mt-2">{rating.text}</p>
          </a>

          {/* Location */}
          <a
            href={digitalCardDataBurnsHairDesign.locationUrl}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 text-white mb-10 transition hover:opacity-90"
          >
            <MapPin className="w-5 h-5 text-primary" />
            {location}
          </a>

          {/* Social */}
          {socialLinks.length > 0 && (
            <section className="flex justify-center gap-4 mb-10">
              {socialLinks.map((social) => {
                const SocialIcon = socialIconMap[social.icon];

                if (!SocialIcon) {
                  return null;
                }

                return (
                  <a
                    key={`${social.icon}-${social.href}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-full flex items-center justify-center transition bg-white/10 hover:bg-[var(--primary)]"
                    aria-label={social.icon}
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </section>
          )}

          {/* Save Contact Button */}
          <section className="mb-10">
            <button
              onClick={downloadVCF}
              className="w-full h-14 flex items-center justify-center gap-2 rounded-lg font-semibold bg-primary transition-all"
            >
              <Download className="w-5 h-5" />
              Save Contact
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-400 opacity-60">
            <p>&copy; {new Date().getFullYear()} Ansely. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
