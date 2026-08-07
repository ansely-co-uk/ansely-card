import {
  Phone,
  MessageCircle,
  Globe,
  MapPin,
  Download,
  Star,
  Instagram,
  Facebook,
} from "lucide-react";

import { digitalCardData, downloadVCF } from "../data/ukplatelab/ukplatelab.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.16),_rgba(16,10,16,0.96)_42%,_rgba(0,0,0,1)_100%)]" />
);

const iconMap = { Phone, MessageCircle, Globe, MapPin, Instagram, Facebook };

export default function Ukplatelab() {
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
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.16),_rgba(20,12,20,0.95)_28%,_rgba(6,6,8,0.98)_58%,_rgba(0,0,0,1)_100%)] text-white flex justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_78%,rgba(244,114,182,0.08))]" />
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
            linesGradient={["#0A0A0A", "#FFFFFF", "#F472B6", "#EC4899", "#FBCFE8"]}
          />
        </Suspense>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-pink-400/15 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-44 h-24 items-center justify-center rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl font-black tracking-[0.08em] text-white">UK PLATE</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#EC4899]">
                    Lab
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-full max-w-[16rem] items-center justify-center overflow-hidden rounded-3xl bg-black/55 p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-blur-sm">
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  onError={() => setLogoFailed(true)}
                  className="h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
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
                    target={contact.type === "Call" ? "_self" : "_blank"}
                    rel={contact.type === "Call" ? undefined : "noreferrer"}
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

          {services.length ? (
            <section className="mb-10">
              <h3 className="text-lg font-semibold mb-4 text-center">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white transition hover:border-[#EC4899]/40 hover:bg-white/8">
                      {service.label}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {rating ? (
            <a
              href={rating.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-[#EC4899]/40 hover:bg-white/8"
            >
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold mt-4">{rating.value}</p>
              <p className="text-sm text-gray-400 italic mt-2">{rating.text}</p>
            </a>
          ) : null}

          <a
            href={locationHref}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 text-white mb-10 transition hover:text-[#EC4899] text-center"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <MapPin className="w-4 h-4 text-[#EC4899]" />
            </span>
            {location}
          </a>

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
                    className="h-12 w-12 rounded-full flex items-center justify-center transition bg-white/10 hover:bg-[#EC4899]"
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
              className="w-full h-14 flex items-center justify-center gap-2 rounded-lg font-semibold bg-[linear-gradient(90deg,#0A0A0A_0%,#3F3F46_18%,#FFFFFF_48%,#F472B6_72%,#EC4899_100%)] text-black transition-all hover:brightness-110"
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
                className="text-white transition hover:text-[#EC4899] hover:underline"
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
