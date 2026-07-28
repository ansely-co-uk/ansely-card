import {
    Phone,
    MessageCircle,
    Mail,
    Globe,
    MapPin,
    Download,
    Star,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

import { digitalCardDataSRK } from "../../../global";
import { downloadVCF } from "./srk.js";
import { lazy, Suspense } from "react";

const FloatingLines = lazy(() => import("../../../components/FloatingLines.tsx"));

const WebGLPlaceholder = () => (
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.28),_rgba(58,42,6,0.94)_34%,_rgba(18,14,4,0.98)_62%,_rgba(8,6,2,1)_100%)]" />
);

const iconMap = { Phone, MessageCircle, Mail, Globe, Facebook: FaFacebook, Instagram: FaInstagram };
const srkGoldTextClass = "text-[#D4AF37]";
const srkGoldHoverClass = "hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10";

export default function SRK() {
    const {
        company,
        founder,
        contacts,
        about,
        services,
        rating,
        location,
        locationUrl,
        ratingUrl,
        socialLinks,
    } = digitalCardDataSRK;

    return (
        <main className="relative min-h-screen overflow-hidden text-white flex justify-center bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.32),_rgba(78,58,10,0.94)_28%,_rgba(24,18,6,0.98)_58%,_rgba(8,6,2,1)_100%)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,220,0.06),transparent_20%,transparent_80%,rgba(255,215,0,0.08))]" />

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
                        linesGradient={["#4A3B06", "#8D7110", "#C8A81B", "#D4AF37", "#F7E7A1"]}
                    />
                </Suspense>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full flex flex-col items-center">

                {/* Company Name - Usually wider/full width for impact */}
                <header className="w-full max-w-md px-6 pt-16 pb-6 flex items-center justify-center text-center">
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 blur-2xl rounded-full scale-110" />
                        <img
                            src={company.logo}
                            alt={founder.name}
                            loading="lazy"
                            className="relative object-cover w-30 h-25 md:w-40 md:h-35"
                        />
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
                        <h3 className="text-lg font-semibold mb-4 text-center">What We Offer</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <a
                                        href={service.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white transition ${srkGoldHoverClass}`}
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Rating */}
                    <div
                        className="block rounded-xl p-6 text-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <div className="flex justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="font-semibold mt-4">{rating.value} Google Rating</p>
                        <p className="text-sm text-gray-400 italic mt-2">{rating.text}</p>
                    </div>

                    {/* Location */}
                    <div
                        className="flex justify-center items-center gap-2 text-white mb-10"
                    >
                        <MapPin className={`w-5 h-5 ${srkGoldTextClass}`} />
                        {location}
                    </div>

                    {/* Social */}
                    <section className="flex justify-center gap-4 mb-10">
                        {socialLinks.map((social) => {
                            const IconComponent = iconMap[social.icon];
                            return (
                                <a
                                    key={social.icon}
                                    href={social.href}
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
                        <p>&copy; {new Date().getFullYear()} Ansely. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </main>
    );
}
