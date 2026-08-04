import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Download,
  Star,
  Facebook,
  Instagram,
} from "lucide-react";

import { digitalCardData, downloadVCF } from "../data/loughboroughpride/loughboroughpride.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(231,21,123,0.18),_rgba(24,18,24,0.96)_42%,_rgba(0,0,0,1)_100%)]" />
);

const iconMap = { Phone, Mail, Globe, MapPin, Facebook, Instagram };

export default function Loughboroughpride() {
  const [logoFailed, setLogoFailed] = useState(false);
  const {
    company,
    founder,
    contacts,
    about,
    rating,
    location,
    locationHref,
    socialLinks,
  } = digitalCardData;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(231,21,123,0.18),_rgba(24,18,24,0.95)_28%,_rgba(8,8,10,0.98)_58%,_rgba(0,0,0,1)_100%)] text-white flex justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_78%,rgba(87,185,229,0.08))]" />
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
            linesGradient={["#57B9E5", "#F3A3C6", "#EE2D2E", "#2FAF55", "#E7157B"]}
          />
        </Suspense>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-pink-400/15 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-48 h-24 items-center justify-center rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl font-black tracking-[0.08em] text-white">LOUGHBOROUGH</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#E7157B]">
                    Pride
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-full max-w-[22rem] items-center justify-center rounded-3xl p-1 shadow-2xl shadow-black/30">
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
          <div className="mb-10 text-center">
            <p className="text-[22px] leading-snug tracking-tight text-white md:text-[28px]">
              {company.tagline}
            </p>
          </div>

          <section className="mb-10 text-center">
            <h2 className="text-2xl font-semibold">{founder.name}</h2>
            <p className="mt-1 text-white/80">{founder.title}</p>
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
                    className={`flex h-14 items-center justify-center gap-2 rounded-lg transition hover:scale-[1.02] active:scale-95 ${contact.styleClass}`}
                  >
                    <IconComponent className="h-5 w-5" />
                    {contact.type}
                  </a>
                );
              })}
            </div>
          </section>

          <div className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
            <p className="font-bold leading-relaxed text-white">{about}</p>
          </div>

          {rating ? (
            <a
              href={rating.href}
              target="_blank"
              rel="noreferrer"
              className="mb-10 block rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition hover:border-[#E7157B]/40 hover:bg-white/8"
            >
              <div className="mb-2 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 font-semibold">{rating.value}</p>
              <p className="mt-2 text-sm italic text-gray-400">{rating.text}</p>
            </a>
          ) : null}

          {location && locationHref ? (
            <a
              href={locationHref}
              target="_blank"
              rel="noreferrer"
              className="mb-10 flex items-center justify-center gap-2 text-center text-white transition hover:text-[#2FAF55]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-4 w-4 text-[#2FAF55]" />
              </span>
              {location}
            </a>
          ) : null}

          {socialLinks.length ? (
            <section className="mb-10 flex justify-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#E7157B]"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </section>
          ) : null}

          <section className="mb-10">
            <button
              onClick={downloadVCF}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(90deg,#57B9E5_0%,#F3A3C6_24%,#EE2D2E_48%,#2FAF55_74%,#E7157B_100%)] font-semibold transition-all hover:brightness-110"
            >
              <Download className="h-5 w-5" />
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
                className="text-white transition hover:text-[#E7157B] hover:underline"
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
