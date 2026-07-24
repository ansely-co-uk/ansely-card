import {
    Phone,
    MessageCircle,
    Mail,
    Globe,
    Facebook,
    Download,
    Star,
} from "lucide-react";
import { lazy, Suspense } from "react";

import { digitalCardDataATB } from "../../../global";
import { downloadVCF } from "./ATB.js";

const FloatingLines = lazy(() => import("../../../components/FloatingLines.tsx"));

const WebGLPlaceholder = () => <div className="fixed inset-0 bg-[#05080B]" />;

const iconMap = { Phone, MessageCircle, Mail, Globe, Facebook };

export default function ATB() {
    const { company, founder, contacts, about, services, rating, socialLinks } = digitalCardDataATB;

    return (
        <main className="relative min-h-screen text-white flex justify-center bg-[#05080B] overflow-x-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Suspense fallback={<WebGLPlaceholder />}>
                    <FloatingLines
                        enabledWaves={["top", "middle", "bottom"]}
                        lineCount={[4, 8, 12]}
                        lineDistance={[8, 6, 4]}
                        bendRadius={5}
                        bendStrength={4}
                        interactive={true}
                        parallax={true}
                        linesGradient={["#0B1F3A", "#123B6D", "#1E5AA8", "#2E78D7", "#5AA2FF"]}
                    />
                </Suspense>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <header className="w-full max-w-md px-6 pt-16 pb-6 flex items-center justify-center gap-5 md:gap-8">
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 blur-2xl rounded-full scale-110 bg-[#1E5AA8]/30" />
                        <img
                            src={company.logo}
                            alt={founder.name}
                            loading="lazy"
                            className="relative w-20 h-20 md:w-28 md:h-28 object-coverg-white/5"
                        />
                    </div>
                    <h1
                        className="text-3xl md:text-5xl font-bold tracking-[0.18em] text-white uppercase drop-shadow-lg text-center"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                    >
                        {company.name}
                    </h1>
                </header>

                <div className="w-full max-w-md px-4 pb-20">
                    <div className="text-center mb-10">
                        <p className="text-white text-[22px] md:text-[26px] font-medium tracking-tight leading-snug">
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
                                        rel="noreferrer"
                                        className={`flex items-center justify-center gap-2 h-14 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg ${contact.styleClass}`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        <span className="font-semibold text-sm">{contact.type}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>

                    <div className="rounded-2xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
                        <p className="text-gray-100 text-sm leading-relaxed">{about}</p>
                    </div>

                    <section className="mb-10">
                        <h3 className="text-lg font-semibold mb-4 text-center">Key Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.label} className="flex items-center justify-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-[#787a7e]" />
                                    <a
                                        href={service.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white hover:underline"
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Rating */}
                    <a
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

                    <section className="flex justify-center gap-4 mb-12">
                        {socialLinks.map((social) => {
                            const IconComponent = iconMap[social.icon];
                            return (
                                <a
                                    key={social.icon}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-12 w-12 rounded-full flex items-center justify-center transition bg-white/10 hover:bg-[#1E5AA8]"
                                >
                                    <IconComponent className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </section>

                    <section className="mb-12">
                        <button
                            onClick={downloadVCF}
                            className="w-full h-16 flex items-center justify-center gap-3 rounded-2xl font-bold bg-[#1E5AA8] hover:bg-[#15447e] transition-all active:scale-95 shadow-xl"
                        >
                            <Download className="w-6 h-6" />
                            Save Contact
                        </button>
                    </section>

                    <footer className="text-center pb-10">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                            &copy; {new Date().getFullYear()} Ansely. All rights reserved.
                        </p>
                    </footer>
                </div>
            </div>
        </main>
    );
}
