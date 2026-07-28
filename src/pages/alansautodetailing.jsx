import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Download,
  Star,
} from "lucide-react";

import { digitalCardData, downloadVCF } from "../data/alansautodetailing/alansautodetailing.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(72,106,171,0.18),_rgba(10,16,28,0.96)_42%,_rgba(0,0,0,1)_100%)]" />
);

const iconMap = { Phone, MessageCircle, Mail, Globe, MapPin };

export default function Alansautodetailing() {
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
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(85,126,201,0.2),_rgba(13,20,34,0.96)_28%,_rgba(6,10,18,0.98)_58%,_rgba(0,0,0,1)_100%)] text-white flex justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_18%,transparent_78%,rgba(105,145,220,0.08))]" />
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
            linesGradient={["#14233D", "#27406C", "#486AAB", "#6E96E7", "#C7DCF9"]}
          />
        </Suspense>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <header className="w-full max-w-md px-4 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-blue-300/15 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-20 h-20 md:w-28 md:h-28 items-center justify-center rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl md:text-3xl font-black tracking-[0.18em] text-white">AAD</div>
                  <div className="mt-1 text-[0.48rem] md:text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Detailing
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-18 h-18 md:w-28 md:h-28 items-center justify-center rounded-3xl p-1 shadow-2xl shadow-black/30">
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  onError={() => setLogoFailed(true)}
                  className="h-full w-full object-contain drop-shadow-[0_4px_18px_rgba(15,23,42,0.35)]"
                />
              </div>
            )}
          </div>
        </header>

        <div className="w-full max-w-md px-4 pb-20">
          <div className="text-center mb-10">
            <p className="text-white text-[24px] md:text-[28px] tracking-tight leading-snug">
              {company.tagline}
            </p>
          </div>

          <section className="text-center mb-10">
            <h2 className="text-2xl font-semibold">{founder.name}</h2>
            <p className="text-white mt-1 opacity-80">{founder.title}</p>
          </section>

          <section className="mb-10">
            <div className="grid grid-cols-2 gap-3">
              {contacts.map((contact) => {
                const IconComponent = iconMap[contact.icon];
                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === "Website" || contact.type === "WhatsApp" ? "_blank" : "_self"}
                    rel={contact.type === "Website" || contact.type === "WhatsApp" ? "noreferrer" : undefined}
                    className={`flex items-center justify-center gap-2 h-14 rounded-lg transition hover:scale-[1.02] active:scale-95 ${contact.styleClass}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {contact.type}
                  </a>
                );
              })}
            </div>
          </section>

          <div className="rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-white font-bold leading-relaxed">{about}</p>
          </div>

          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-center justify-center items-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-cyan-300/40 hover:bg-white/8"
                  >
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {rating ? (
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
          ) : null}

          {locationHref ? (
            <a
              href={locationHref}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-2 text-white mb-10 hover:text-cyan-300 transition text-center"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="w-4 h-4 text-primary" />
              </span>
              {location}
            </a>
          ) : (
            <div className="flex justify-center items-center gap-2 text-white mb-10 text-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="w-4 h-4 text-primary" />
              </span>
              {location}
            </div>
          )}

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
                    className="h-12 w-12 rounded-full flex items-center justify-center transition bg-white/10 hover:bg-[var(--primary)]"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </section>
          ) : null}

          <section className="mb-10">
            <button
              onClick={downloadVCF}
              className="w-full h-14 flex items-center justify-center gap-2 rounded-lg font-semibold bg-primary transition-all"
            >
              <Download className="w-5 h-5" />
              Save Contact
            </button>
          </section>

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
