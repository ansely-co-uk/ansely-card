import { lazy, Suspense } from "react";
import { FaMusic } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const FloatingLines = lazy(() => import("../components/FloatingLines"));

const WebGLPlaceholder = () => (
  <div className="fixed inset-0 bg-(--bg-main)" />
);

const brandFontStyle = {
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const artists = [
  {
    name: "Sonus Musicalia",
    image:
      "sonus.jpg",
    appleMusicUrl: "https://music.apple.com/gb/artist/sonus-musicalia/1857203308",
    tiktokUrl: "",
  },
  {
    name: "Sonus Wave",
    image:
      "wave.jpg",
    appleMusicUrl: "https://music.apple.com/gb/artist/sonus-wave/1832542607",
    tiktokUrl: "https://www.tiktok.com/@sonus.wave?_r=1&_t=ZN-96lpb6aZUMY",
  },
  {
    name: "Shine Bright",
    image:
      "shine.jpg",
    appleMusicUrl: "https://music.apple.com/gb/artist/shine-bright/1896730906",
    tiktokUrl: "",
  },
  {
    name: "Darryn Official",
    image:
      "darryn.jpg",
    appleMusicUrl: "https://music.apple.com/gb/artist/darryn-official/1820791619",
    tiktokUrl: "https://www.tiktok.com/@darrynofficial?_r=1&_t=ZN-96lpcRgW7Ne",
  },
];

function PlatformButton({ href, children, className }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:brightness-110 active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}

export default function MusicHubPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-(--bg-main) px-4 py-12 text-white flex justify-center">
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

      <div className="relative z-10 mx-auto w-full max-w-163">
        {/* Header Updated to Match Text Sizes and Order */}
        <header className="mb-10 text-center" style={brandFontStyle}>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-[0.25em] text-white uppercase drop-shadow-lg"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            Music Hub
          </h1>
          <div className="text-center mb-10">
            <p className="text-white text-[24px] md:text-[28px] tracking-tight leading-snug">
              Discover our artists
            </p>
          </div>
        </header>

        {/* Artist Container */}
        <section className="flex flex-col gap-4">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="rounded-xl border border-white/10 bg-white/6 p-6 shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/9"
            >
              {/* Row Layout Fixing Image alignment */}
              <div className="flex items-center gap-5">
                <div className="h-19 w-19 shrink-0 overflow-hidden rounded-lg bg-black shadow-inner">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-white tracking-wide">
                    {artist.name}
                  </h2>

                  {/* Updated Button Colors and Sizing */}
                  <div className="flex flex-wrap gap-2 text-lg">
                    <PlatformButton
                      href={artist.appleMusicUrl}
                      className="bg-[#782c69]  text-pink-100/90 border border-pink-400/20"
                    >
                      <FaMusic className="h-3.5 w-3.5" aria-hidden="true" />
                      Apple Music
                    </PlatformButton>
                    <PlatformButton
                      href={artist.tiktokUrl}
                      className="bg-[#2a457a] text-blue-100/90 border border-blue-400/20"
                    >
                      <FaTiktok className="h-3.5 w-3.5" aria-hidden="true" />
                      TikTok
                    </PlatformButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
