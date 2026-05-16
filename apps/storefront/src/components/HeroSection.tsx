import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div
        className="mx-auto px-6 lg:px-8 py-14 lg:py-0 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        style={{
          maxWidth: "min(1180px, calc(100% - 48px))",
          minHeight: "560px",
        }}
      >
        <div className="max-w-xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-tight text-brand-text">
            Bring Chinese Heritage Art
            <br />
            <span className="text-brand-red">Into Your Home</span>
          </h1>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-brand-muted max-w-lg">
            Handcrafted paper-cut artworks inspired by Yuxian tradition — made
            for modern homes, meaningful gifts, and cultural collectors.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-[8px]"
            >
              Shop Artworks
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide text-brand-brown border border-brand-brown/30 hover:bg-brand-brown hover:text-brand-bg transition-colors rounded-[8px]"
            >
              Explore the Story
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[480px] aspect-[4/3]">
            <svg
              viewBox="0 0 480 360"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="wallLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F7F1E5" />
                  <stop offset="100%" stopColor="#E8D8C0" />
                </linearGradient>
                <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7B4F2A" />
                  <stop offset="100%" stopColor="#5C3618" />
                </linearGradient>
                <linearGradient id="warmGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5E6C8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#F5E6C8" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paperRed" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#B73A2F" />
                  <stop offset="70%" stopColor="#9F1D1D" />
                  <stop offset="100%" stopColor="#7A1616" />
                </radialGradient>
              </defs>

              <rect width="480" height="360" fill="url(#wallLight)" />

              <rect x="0" y="0" width="480" height="360" fill="url(#warmGlow)" />

              <g transform="translate(320,0)">
                <rect x="0" y="20" width="3" height="340" fill="#E7D8C3" opacity="0.6" />
                <rect x="0" y="20" width="2" height="340" fill="#D4C5A9" opacity="0.3" />
                <line x1="0" y1="20" x2="80" y2="0" stroke="#E7D8C3" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="80" x2="80" y2="60" stroke="#E7D8C3" strokeWidth="1" opacity="0.2" />
                <line x1="0" y1="200" x2="80" y2="180" stroke="#E7D8C3" strokeWidth="1" opacity="0.25" />
                <line x1="0" y1="300" x2="80" y2="280" stroke="#E7D8C3" strokeWidth="1" opacity="0.2" />
              </g>

              <g transform="translate(52, 42)">
                <rect x="0" y="0" width="180" height="200" rx="8" fill="#FFF9EF" stroke="#D4C5A9" strokeWidth="1.5" />
                <rect x="8" y="8" width="164" height="184" rx="4" fill="#F7F1E5" />
                <rect x="16" y="16" width="148" height="168" rx="2" fill="#FFF9EF" stroke="#E7D8C3" strokeWidth="1" />
                <circle cx="90" cy="100" r="52" fill="url(#paperRed)" />
                <circle cx="90" cy="100" r="46" fill="none" stroke="#C9A45C" strokeWidth="0.8" opacity="0.5" />
                <circle cx="90" cy="100" r="38" fill="none" stroke="#C9A45C" strokeWidth="0.5" opacity="0.3" />
                <g transform="translate(90,100)">
                  <path d="M-12,-12l6,20l-16,-12h20l-16,12z" fill="none" stroke="#F5E6C8" strokeWidth="0.5" opacity="0.6" />
                  <circle cx="0" cy="0" r="4" fill="#F5E6C8" opacity="0.4" />
                  <path d="M-8,-20v-4M0,-24v-4M8,-20v-4M-20,-8h-4M20,-8h4M-20,8h-4M20,8h4M-8,20v4M0,24v4M8,20v4" stroke="#C9A45C" strokeWidth="0.5" opacity="0.4" />
                </g>
                <rect x="0" y="0" width="180" height="200" rx="8" fill="none" stroke="#9F1D1D" strokeWidth="2" opacity="0.08" />
              </g>

              <g transform="translate(260, 270)">
                <rect x="0" y="0" width="200" height="90" rx="4" fill="url(#woodGrad)" />
                <line x1="60" y1="0" x2="60" y2="90" stroke="#4A2A10" strokeWidth="0.5" opacity="0.3" />
                <line x1="140" y1="0" x2="140" y2="90" stroke="#4A2A10" strokeWidth="0.5" opacity="0.3" />
                <rect x="0" y="0" width="200" height="90" rx="4" fill="none" stroke="#4A2A10" strokeWidth="1" opacity="0.2" />
              </g>

              <g transform="translate(300, 200)">
                <ellipse cx="25" cy="65" rx="22" ry="6" fill="#6B3F1D" opacity="0.25" />
                <path d="M15,70 Q18,40 20,25" stroke="#5C3618" strokeWidth="2.5" fill="none" />
                <path d="M20,25 Q30,20 32,28" stroke="#5C3618" strokeWidth="1.8" fill="none" />
                <path d="M20,25 Q8,22 5,30" stroke="#5C3618" strokeWidth="1.5" fill="none" />
                <path d="M32,28 Q38,22 42,26" stroke="#5C3618" strokeWidth="1.2" fill="none" />
                <path d="M5,30 Q0,24 -3,28" stroke="#5C3618" strokeWidth="1" fill="none" />
                <circle cx="20" cy="25" r="1.5" fill="#B73A2F" opacity="0.6" />
                <circle cx="32" cy="28" r="1" fill="#B73A2F" opacity="0.4" />
                <circle cx="5" cy="30" r="1" fill="#B73A2F" opacity="0.35" />
                <path d="M20,15 Q24,10 26,14" stroke="#5C3618" strokeWidth="1" fill="none" />
                <circle cx="26" cy="14" r="0.8" fill="#B73A2F" opacity="0.3" />
              </g>

              <g transform="translate(280, 195)">
                <ellipse cx="20" cy="60" rx="18" ry="5" fill="#6B3F1D" opacity="0.2" />
                <ellipse cx="20" cy="8" rx="10" ry="3" fill="#E7D8C3" opacity="0.4" />
                <path d="M10,10 L20,0 L30,10" fill="#E7D8C3" opacity="0.5" />
                <path d="M10,10 Q10,55 12,60 Q20,63 28,60 Q30,55 30,10" fill="url(#wallLight)" opacity="0.6" stroke="#D4C5A9" strokeWidth="1" />
                <path d="M10,10 Q10,50 12,58" stroke="#D4C5A9" strokeWidth="0.8" fill="none" opacity="0.5" />
                <path d="M30,10 Q30,50 28,58" stroke="#D4C5A9" strokeWidth="0.8" fill="none" opacity="0.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}