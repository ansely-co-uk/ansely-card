import React, { lazy, Suspense, useRef, useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaStar,
  FaCheck,
} from "react-icons/fa6";
import { HiArrowDownTray } from "react-icons/hi2";
import { downloadVCF, harrisonSpiceLocations as LOCATIONS_DATA } from "./HarrisonSpice.js";

const FloatingLines = lazy(() => import("../components/FloatingLines.tsx"));

const WebGLPlaceholder = () => <div className="fixed inset-0 bg-[var(--bg-main)]" />;

export default function HarrisonsSpice() {
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClickScrolling, setIsClickScrolling] = useState(false);

  const selectedLocation = LOCATIONS_DATA[selectedIndex] ?? LOCATIONS_DATA[0];
  const selectedHasContact = Boolean(
    selectedLocation?.phone || selectedLocation?.websiteUrl || selectedLocation?.whatsappUrl,
  );

  const getDirectionsUrl = (location) => {
    if (!location?.address) return null;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
  };

  const handleGetDirections = (location) => {
    const url = getDirectionsUrl(location);
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const totalScroll = container.scrollWidth - container.clientWidth;
    const progress = totalScroll > 0 ? (container.scrollLeft / totalScroll) * 100 : 0;
    setScrollProgress(progress);

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
    setSelectedIndex(closestIndex);
  };

  const selectLocation = (index) => {
    setActiveIndex(index);
    setSelectedIndex(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const scroll = (direction) => {
    const nextIndex = Math.max(
      0,
      Math.min(LOCATIONS_DATA.length - 1, activeIndex + (direction === "left" ? -1 : 1)),
    );

    setIsClickScrolling(true);
    setTimeout(() => setIsClickScrolling(false), 350);

    selectLocation(nextIndex);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
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
            linesGradient={["#2B1F00", "#E5B24E", "#A87900", "#E5B24E", "#E5B24E"]}
          />
        </Suspense>
      </div>

      <div className="relative z-10 min-h-screen py-8 md:py-16 px-4 flex flex-col items-center justify-center">
        <div className="mb-8 md:mb-12">
          <img
            src="/harrison.png"
            alt="Harrison's Spice Logo"
            className="h-24 md:h-32 w-auto drop-shadow-2xl mx-auto"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 px-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 fill-[#E5B24E] text-[#E5B24E]" aria-hidden="true" />
            ))}
          </div>
          <span className="text-[#E5B24E] font-semibold text-sm md:text-base">5.0 Google Rating</span>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 px-4">
          <a
            href="https://www.instagram.com/harrisonspice.official?igsh=dTA0eTBmdmZ2bDlu&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all"
          >
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.tiktok.com/@harrisonspiceofficial?_r=1&_t=ZN-93Ql2Nmc3L4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all"
          >
            <FaTiktok className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://wa.me/447368384136"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all"
          >
            <FaWhatsapp className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="w-full px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-8 text-center text-white">
              <span className="text-[#E5B24E]">Check Out</span> Our Locations
            </h2>

            <div className="relative">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto scroll-smooth gap-6 pb-4 no-scrollbar snap-x snap-mandatory items-stretch"
                style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
              >
                {LOCATIONS_DATA.map((location, index) => {
                  const isSelected = selectedIndex === index;

                  return (
                    <div
                      key={location.id}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      onClick={() => selectLocation(index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          selectLocation(index);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      className={`relative shrink-0 w-full sm:w-96 md:w-100 rounded-2xl overflow-hidden bg-[#242424] border transition-all duration-300 cursor-pointer group shadow-lg snap-center flex flex-col ${
                        isSelected
                          ? "border-[#E5B24E] ring-2 ring-[#E5B24E]/60"
                          : "border-[#3a3a3a]"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-[#E5B24E] text-black text-[11px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                          <FaCheck className="w-2.5 h-2.5" aria-hidden="true" />
                          Selected
                        </div>
                      )}

                      <div className="relative overflow-hidden shrink-0 p-2">
                        <img
                          alt={location.name}
                          loading="lazy"
                          className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
                          src={location.image}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      <div className="p-5 md:p-6 flex flex-col grow">
                        <h3 className="text-lg md:text-xl font-bold text-[#E5B24E] mb-2">{location.name}</h3>
                        <p className="text-white/80 text-sm md:text-base mb-4">{location.description}</p>

                        <div className="space-y-2.5 mb-5 text-white/90">
                          <div className="flex items-center gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E5B24E] shrink-0"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span className="text-sm">{location.address}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E5B24E] shrink-0"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            <a href={location.telUrl} className="text-sm hover:text-[#E5B24E] transition-colors">{location.phone}</a>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E5B24E] shrink-0"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                            <a href={location.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#E5B24E] transition-colors">WhatsApp</a>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E5B24E] shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#E5B24E] transition-colors">Visit Website</a>
                          </div>
                        </div>

                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            handleGetDirections(location);
                          }}
                          disabled={!location.address}
                          className="w-full mt-auto py-3 rounded-xl bg-[#E5B24E] text-black font-bold hover:bg-[#E5B24E] transition-all text-sm md:text-base shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {location.address ? "Get Directions" : "Coming Soon"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative flex items-center mt-6 w-full bg-[#161616] h-2 rounded-full overflow-hidden">
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-0 bottom-0 px-2.5 z-20 text-[#E5B24E] hover:text-white bg-[#161616]/90 flex items-center justify-center transition-colors"
                  aria-label="Scroll left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 7l-5 5 5 5V7z"/></svg>
                </button>

                <div
                  className="absolute top-0 bottom-0 bg-[#E5B24E] rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: `${(scrollProgress / 100) * 64 + 4}%`,
                    width: isClickScrolling ? "36%" : "32%",
                  }}
                />

                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-0 bottom-0 px-2.5 z-20 text-[#E5B24E] hover:text-white bg-[#161616]/90 flex items-center justify-center transition-colors"
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z"/></svg>
                </button>
              </div>

              <div className="flex justify-center gap-1.5 mt-6">
                {LOCATIONS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectLocation(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "bg-[#E5B24E] w-7" : "bg-[#3a3a3a] w-2.5"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-[#E5B24E]">Why Choose Us?</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {selectedLocation?.whyChooseUs}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => downloadVCF(selectedLocation)}
              disabled={!selectedHasContact}
              className="w-full py-3.5 rounded-lg bg-[#E5B24E] hover:bg-[#E5B24E] text-black font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <HiArrowDownTray className="w-5 h-5 text-black stroke-2" />
              Download Contact
            </button>
          </div>
        </div>

        <footer className="w-full max-w-4xl border-t border-white/10 pt-6 px-4 text-center text-white/50 text-xs">
          <p>© 2026 Harrison's Spice. All rights reserved.</p>
          <p className="mt-2">Powered By <a href="https://ansely.co.uk/" target="_blank" className="cursor-pointer hover:text-[#E5B24E] hover:underline">Ansely</a></p>
        </footer>
      </div>
    </main>
  );
}