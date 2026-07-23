import React, { lazy, Suspense } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Download,
  Star,
} from "lucide-react";

// Assuming downloadVCF logic is imported from your local setup
import { downloadVCF } from "./joshvcf.js";

const FloatingLines = lazy(() => import("../components/FloatingLines.js"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-[#05080B]" />
);

// --- ALL DATA INTEGRATED HERE ---
const digitalCardData = {
  company: {
    name: "Hideout Records",
    tagline: "Shaping the Sound of Tomorrow",
    logo: "/logo1.png",
  },
  founder: {
    name: "Joshua Taylor",
    title: "Founder, Strategic Lead, A&R Oversight",
  },
  contacts: [
    { type: "Call", href: "tel:+447575195659", icon: "Phone", styleClass: "bg-[#787a7e] hover:bg-[#a7a8aa]" },
    { type: "WhatsApp", href: "https://wa.me/447575195659", icon: "MessageCircle", styleClass: "bg-[#25D366] hover:opacity-90" },
    { type: "Website", href: "https://www.hideoutrecords.co.uk/", icon: "Globe", styleClass: "bg-[#787a7e] hover:bg-[#a7a8aa]" },
  ],
  about: "We help independent artists and local music businesses break into the digital world through artist development, releases, and creative strategy.",
  services: [
    "Artist & A&R Development",
    "Music Releases & Distribution",
    "Brand & Creative Direction",
    "Digital & Social Growth",
  ],
  rating: {
    value: "5.0",
    text: "Passionate, professional, and truly dedicated to the artists.",
  },
  location: "Leicester & Midlands",
  socialLinks: [
    { icon: "Instagram", href: "https://www.instagram.com/hideoutrecordsuk/" },
    { icon: "Facebook", href: "https://web.facebook.com/hideoutrecordsuk/#" },
  ],
};

const iconMap = { Phone, MessageCircle, Mail, Globe, Instagram, Facebook, Linkedin };

export default function Josh() {
  const {
    company,
    founder,
    contacts,
    about,
    services,
    rating,
    socialLinks,
  } = digitalCardData;

  return (
    <main className="relative min-h-screen text-white flex justify-center bg-[#05080B] overflow-x-hidden">
      
      {/* 1. Background Image Layer */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpeg')", 
        }}
      >
        {/* 2. Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#05080B]/80 backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Header: Circle Image + Logo */}
        <header className="w-full max-w-md px-6 pt-16 pb-6 flex items-center justify-center gap-5 md:gap-8">
          <div className="relative shrink-0">
            <div className="absolute inset-0 blur-2xl rounded-full scale-110" />
            <img
              src="/josh-image.jpeg"
              alt={founder.name}
              loading="lazy"
              className="relative w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
          </div>

          <div className="flex-1 max-w-40 md:max-w-55">
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            />
          </div>
        </header>

        <div className="w-full max-w-md px-4 pb-20">
          {/* Tagline */}
          <div className="text-center mb-10">
            <p className="text-white text-[24px] md:text-[28px] font-medium tracking-tight leading-tight">
              {company.tagline}
            </p>
          </div>

          {/* Founder Details */}
          <section className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-wide">{founder.name}</h2>
            <p className="text-gray-200 font-medium mt-1 uppercase text-xs tracking-[0.2em]">
              {founder.title}
            </p>
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
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 h-14 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg ${contact.styleClass}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-semibold text-sm">{contact.type}</span>
                  </a>
                );
              })}
            </div>
          </section>

          {/* About Card */}
          <div className="rounded-2xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
            <p className="text-gray-100 text-sm leading-relaxed">{about}</p>
          </div>

          {/* Services */}
          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">Key Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex text-center justify-center items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#787a7e]" />
                  <span className="text-white">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Google Rating */}
          <div className="rounded-2xl p-8 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex justify-center gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#facc15] text-[#facc15] drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
              ))}
            </div>
            <p className="font-bold text-lg">{rating.value} Google Rating</p>
            <p className="text-xs text-gray-300 italic mt-2 leading-relaxed">
              "{rating.text}"
            </p>
          </div>

          {/* Social Links */}
          <section className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 border border-white/10 hover:bg-white/30 hover:-translate-y-1"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </section>

          {/* Action: Save Contact */}
          <section className="mb-12">
            <button
              onClick={downloadVCF}
              className="w-full h-16 flex items-center justify-center gap-3 rounded-2xl font-bold bg-[#787a7e] hover:bg-[#a7a8aa] transition-all active:scale-95 shadow-xl"
            >
              <Download className="w-6 h-6" />
              Save Contact
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center pb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              © {new Date().getFullYear()} {company.name}: Powered by Ansely.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}