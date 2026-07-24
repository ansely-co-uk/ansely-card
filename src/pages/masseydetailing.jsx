import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Download,
  Star,
  Instagram,
  Facebook,
} from "lucide-react";

import { digitalCardData, downloadVCF } from "../data/masseydetailing/masseydetailing.js";
import { lazy, Suspense, useState } from "react";

const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[var(--bg-main)]" />
);

const iconMap = { Phone, Mail, Globe, MapPin, Instagram, Facebook };

export default function Masseydetailing() {
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

      <div className="relative z-10 w-full flex flex-col items-center">
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/15 blur-2xl scale-110" />
            {logoFailed ? (
              <div className="relative flex w-20 h-20 md:w-28 md:h-28 items-center justify-center rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-2xl md:text-3xl font-black tracking-[0.18em] text-white">MD</div>
                  <div className="mt-1 text-[0.48rem] md:text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    Detailing
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex w-20 h-20 md:w-28 md:h-28 items-center justify-center rounded-3xl p-1 shadow-2xl shadow-black/30">
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
          <h1
            className="max-w-[11ch] text-[2rem] font-bold uppercase leading-tight tracking-[0.12em] text-white drop-shadow-lg md:max-w-none md:text-5xl"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            {company.name}
          </h1>
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
                    target={contact.type === "Call" || contact.type === "Email" ? "_self" : "_blank"}
                    rel={contact.type === "Call" || contact.type === "Email" ? undefined : "noreferrer"}
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
                <li key={service.label} className="flex text-center justify-center items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-white">{service.label}</span>
                </li>
              ))}
            </ul>
          </section>

          {rating ? (
            <a
              href={rating.href}
              target="_blank"
              rel="noreferrer"
              className="mb-10 block rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/8"
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
              className="mb-10 flex items-center justify-center gap-2 text-center text-white transition hover:text-cyan-300"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-4 w-4 text-primary" />
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
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--primary)]"
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
              className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary font-semibold transition-all"
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
