import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Download,
  Star,
  Music2,
} from "lucide-react";

import { digitalCardData ,downloadVCF } from "../data/FXPadel/Fxpadel.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[#06182B]" />
);

const iconMap = { Phone, MessageCircle, Mail, Globe, MapPin, Instagram, Facebook, Twitter, TikTok: Music2 };
const serviceCardClass =
  "flex text-center justify-center items-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#632581]/50 hover:bg-[#632581]/20";
const socialButtonClass =
  "h-12 w-12 rounded-full flex items-center justify-center transition bg-white/10 hover:bg-[#632581]";
const saveButtonClass =
  "w-full h-14 flex items-center justify-center gap-2 rounded-lg font-semibold bg-[linear-gradient(135deg,#632581_0%,#4F1C68_100%)] transition-all hover:brightness-110";

export default function Topstar() {
  const [logoFailed, setLogoFailed] = useState(false);
  const {
    company,
    founder,
    contacts,
    about,
    services,
    rating,
    location,
    locationHref,
    socialLinks,
  } = digitalCardData;

  return (
    <main className="relative min-h-screen text-white flex justify-center overflow-hidden bg-[#06182B]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,37,129,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(18,52,86,0.75),transparent_42%),linear-gradient(180deg,#08192A_0%,#06182B_45%,#0A2444_100%)]" />

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
            linesGradient={["#0A2444", "#123456", "#632581", "#8A46A6", "#C78EE0"]}
          />
        </Suspense>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Company Name - Usually wider/full width for impact */}
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-[#632581]/20 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-32 h-32 md:w-36 md:h-36 items-center justify-center rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl md:text-3xl font-black tracking-[0.12em] text-white">TS</div>
                  <div className="mt-1 text-[0.48rem] md:text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#632581]">
                    Training
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-[14rem] md:w-[17rem] items-center justify-center rounded-[2rem] border border-[#632581]/25 bg-[linear-gradient(135deg,rgba(10,36,68,0.92)_0%,rgba(18,52,86,0.88)_52%,rgba(99,37,129,0.32)_100%)] px-4 py-3 shadow-2xl shadow-black/30">
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  onError={() => setLogoFailed(true)}
                  className="h-full w-full object-contain drop-shadow-[0_10px_30px_rgba(15,23,42,0.45)]"
                />
              </div>
            )}
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
                const IconComponent = iconMap[contact.icon];
                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === "Website" || contact.type === "WhatsApp" ? "_blank" : "_self"}
                    className={`flex items-center justify-center gap-2 h-14 rounded-lg transition hover:scale-[1.02] active:scale-95 ${contact.styleClass}`}
                  >
                    {IconComponent ? <IconComponent className="w-5 h-5" /> : null}
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
            <h3 className="text-lg font-semibold mb-4 text-center">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className={serviceCardClass}
                  >
                    <span className="text-white">{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Rating */}
          {rating ? (
            rating.href ? (
                <a
                  href={rating.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-[#632581]/40 hover:bg-white/8"
                >
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold mt-4">{rating.value}</p>
                <p className="text-sm text-gray-400 italic mt-2">{rating.text}</p>
              </a>
            ) : (
              <div className="block rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold mt-4">{rating.value}</p>
                <p className="text-sm text-gray-400 italic mt-2">{rating.text}</p>
              </div>
            )
          ) : null}

          {/* Location */}
          <a
            href={locationHref}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 text-white mb-10 hover:text-[#632581] transition text-center"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <MapPin className="w-4 h-4 text-primary" />
            </span>
            {location}
          </a>

          {/* Social */}
          {socialLinks.length ? (
            <section className="flex justify-center gap-4 mb-10">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={socialButtonClass}
                  >
                    {IconComponent ? <IconComponent className="w-5 h-5" /> : null}
                  </a>
                );
              })}
            </section>
          ) : null}

          {/* Save Contact Button */}
          <section className="mb-10">
            <button
              onClick={downloadVCF}
              className={saveButtonClass}
            >
              <Download className="w-5 h-5" />
              Save Contact
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-400 opacity-60">
            <p>
              Powered by{" "}
              <a
                href="https://www.ansely.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-white transition hover:text-[#632581] hover:underline"
              >
                Ansely
              </a>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
