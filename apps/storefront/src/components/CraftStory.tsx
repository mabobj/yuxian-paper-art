import Link from "next/link"

export default function CraftStory() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative hidden lg:block">
        <div className="aspect-[4/3] rounded-[12px] bg-brand-card border border-brand-border overflow-hidden relative">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="craftBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7F1E5" />
                <stop offset="100%" stopColor="#E8D8C0" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#craftBg)" />

            <g transform="translate(50,40)">
              <rect x="0" y="0" width="140" height="180" rx="4" fill="#FFF9EF" stroke="#E7D8C3" strokeWidth="1.5" />
              <rect x="10" y="10" width="120" height="160" rx="2" fill="#F7F1E5" stroke="#D4C5A9" strokeWidth="0.8" />
              <g transform="translate(70,90)">
                <circle cx="0" cy="0" r="30" fill="none" stroke="#9F1D1D" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="20" fill="none" stroke="#9F1D1D" strokeWidth="0.6" opacity="0.3" />
                <path d="M-6,-8l4,12l-10,-8h12l-10,8z" fill="none" stroke="#C9A45C" strokeWidth="0.6" opacity="0.5" />
                <circle cx="0" cy="0" r="2" fill="#B73A2F" opacity="0.3" />
              </g>
              <line x1="70" y1="10" x2="70" y2="180" stroke="#E7D8C3" strokeWidth="0.5" opacity="0.4" />
            </g>

            <g transform="translate(220,50)">
              <rect x="0" y="0" width="100" height="70" rx="3" fill="#6B3F1D" opacity="0.15" />
              <line x1="30" y1="0" x2="30" y2="70" stroke="#6B3F1D" strokeWidth="0.3" opacity="0.2" />
              <line x1="70" y1="0" x2="70" y2="70" stroke="#6B3F1D" strokeWidth="0.3" opacity="0.2" />
              <path d="M50,30 Q55,25 60,28" stroke="#9F1D1D" strokeWidth="0.8" fill="none" opacity="0.3" />
              <path d="M50,30 Q45,25 40,28" stroke="#9F1D1D" strokeWidth="0.8" fill="none" opacity="0.3" />
              <circle cx="50" cy="30" r="1.5" fill="#9F1D1D" opacity="0.3" />
            </g>

            <g opacity="0.06">
              <circle cx="360" cy="40" r="60" stroke="#9F1D1D" strokeWidth="1" fill="none" />
              <circle cx="360" cy="40" r="45" stroke="#9F1D1D" strokeWidth="0.5" fill="none" />
              <path d="M360,10 Q380,30 360,70" stroke="#9F1D1D" strokeWidth="0.5" fill="none" />
              <path d="M340,20 Q360,40 340,60" stroke="#9F1D1D" strokeWidth="0.3" fill="none" />
            </g>

            <g opacity="0.04">
              <circle cx="30" cy="260" r="50" stroke="#C9A45C" strokeWidth="0.8" fill="none" />
              <circle cx="30" cy="260" r="38" stroke="#C9A45C" strokeWidth="0.5" fill="none" />
            </g>
          </svg>
        </div>
      </div>

      <div>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold text-brand-text leading-tight">
          The Art of Yuxian Paper Cutting
        </h2>
        <div className="mt-5 space-y-4 text-brand-muted leading-relaxed">
          <p>
            Yuxian paper-cutting is a living heritage — a folk art that has
            flourished for over 500 years in the villages of Hebei Province,
            northern China. Unlike mass-produced decorations, each piece is
            entirely hand-cut by artisans who train for decades to master the
            craft.
          </p>
          <p>
            Using traditional scissors and fine engraving knives, artisans
            transform single sheets of dyed rice paper into intricate
            compositions. A single artwork may require thousands of precise
            cuts — a testament to patience, skill, and generations of
            accumulated wisdom.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-red hover:text-brand-red-alt transition-colors"
          >
            Discover the Craft
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}