import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Download,
  Star,
} from "lucide-react";

import { digitalCardData } from "../data/BroadwayRemapping/broadwayremapping.js";
import { downloadVCF } from "../data/BroadwayRemapping/broadwayremapping.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[var(--bg-main)]" />
);

const iconMap = { Phone, MessageCircle, Mail, Globe, Instagram, Facebook, Linkedin };

export default function BroadwayRemapping() {
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
            linesGradient={["#FF0000", "#FFffff", "#FF0000", "#FF0000", "#FF0000"]}
          />
        </Suspense>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Company Name - Usually wider/full width for impact */}
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/15 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-20 h-20 md:w-28 md:h-28 items-center justify-center rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl md:text-3xl font-black tracking-[0.18em] text-white">BR</div>
                  <div className="mt-1 text-[0.48rem] md:text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    Remapping
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-20 h-20 md:w-28 md:h-28 items-center justify-center rounded-3xl border border-white/20 bg-white p-2.5 shadow-2xl shadow-black/30 ring-1 ring-cyan-200/20">
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  onError={() => setLogoFailed(true)}
                  className="h-full w-full object-contain contrast-[1.35] brightness-[0.72] saturate-0 drop-shadow-[0_1px_1px_rgba(15,23,42,0.35)]"
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
            <h3 className="text-lg font-semibold mb-4 text-center">Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/8 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </section>

          {/* Rating */}
          <a
            href={rating.href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/8"
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
            href={locationHref}
            target="_blank"
            rel="noreferrer"
            className="mb-10 flex items-center justify-center gap-2 text-center text-white transition hover:text-cyan-300"
          >
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <span className="whitespace-nowrap">{location}</span>
          </a>

          {/* Social */}
          <section className="flex justify-center gap-4 mb-10">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 w-12 rounded-full flex items-center justify-center transition bg-white/10 hover:bg-[var(--primary)]"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </section>

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
            <p>
              Powered by{" "}
              <a
                href="https://www.ansely.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-white transition hover:text-cyan-300 hover:underline"
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
