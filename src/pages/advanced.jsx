import {
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Download,
  Star,
} from "lucide-react";

import { digitalCardData, downloadVCF } from "../data/advanced/advanced.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,166,32,0.18),_rgba(26,14,24,0.96)_42%,_rgba(0,0,0,1)_100%)]" />
);

const iconMap = { MessageCircle, Mail, Globe, MapPin };

export default function Advanced() {
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
  } = digitalCardData;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,166,32,0.16),_rgba(34,18,28,0.95)_28%,_rgba(8,8,12,0.98)_58%,_rgba(0,0,0,1)_100%)] text-white flex justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_78%,rgba(197,120,255,0.08))]" />
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
            linesGradient={["#FFA620", "#FF8E3A", "#F16A5B", "#C578FF", "#8E63D8"]}
          />
        </Suspense>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-fuchsia-400/15 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-48 h-24 items-center justify-center rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl font-black tracking-[0.08em] text-white">ADVANCED</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C578FF]">
                    Autobody Solutions
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-full max-w-[18rem] items-center justify-center rounded-3xl p-1 shadow-2xl shadow-black/30">
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
                    target={contact.type === "Email" ? "_self" : "_blank"}
                    rel={contact.type === "Email" ? undefined : "noreferrer"}
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

          <section className="mb-10">
            <h3 className="mb-4 text-center text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white transition hover:border-[#C578FF]/40 hover:bg-white/8"
                  >
                    {service.label}
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
              className="mb-10 block rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition hover:border-[#C578FF]/40 hover:bg-white/8"
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
              className="mb-10 flex items-center justify-center gap-2 text-center text-white transition hover:text-[#FF8E3A]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-4 w-4 text-[#FF8E3A]" />
              </span>
              {location}
            </a>
          ) : null}

          <section className="mb-10 flex justify-center gap-4">
            <a
              href="https://advanceautobodysolutions.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C578FF]"
            >
              <Globe className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <button
              onClick={downloadVCF}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(90deg,#FFA620_0%,#FF8E3A_28%,#F16A5B_56%,#C578FF_100%)] font-semibold transition-all hover:brightness-110"
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
                className="text-white transition hover:text-[#C578FF] hover:underline"
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
