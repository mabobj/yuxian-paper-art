import Link from "next/link"
import Image from "next/image"

const ARTWORKS = [
  {
    name: "Dragon of Prosperity",
    price: "$128.00",
    tag: "Prosperity",
    badge: "Best Seller",
    href: "/products/auspicious-dragon",
  },
  {
    name: "Blessing of Fortune",
    price: "$98.00",
    tag: "Blessing",
    badge: undefined,
    href: "/products/red-lantern-blessing",
  },
  {
    name: "Peony of Abundance",
    price: "$118.00",
    tag: "Prosperity",
    badge: "New",
    href: "/products/peony-window",
  },
  {
    name: "Mandarin Ducks",
    price: "$128.00",
    tag: "Joy",
    badge: undefined,
    href: "/products/double-happiness-wedding",
  },
]

export default function ArtworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {ARTWORKS.map((artwork) => (
        <Link
          key={artwork.name}
          href={artwork.href}
          className="group flex flex-col rounded-[12px] border border-brand-border bg-brand-card overflow-hidden hover:shadow-[0_12px_30px_rgba(59,42,31,0.1)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="aspect-[3/4] relative overflow-hidden bg-brand-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/4 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 100 140"
                className="w-16 h-24 opacity-25 group-hover:opacity-35 transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="15" y="10" width="70" height="120" rx="4" stroke="#9F1D1D" strokeWidth="1.2" fill="none" />
                <circle cx="50" cy="50" r="22" stroke="#9F1D1D" strokeWidth="0.8" fill="none" />
                <circle cx="50" cy="50" r="16" stroke="#C9A45C" strokeWidth="0.4" fill="none" />
              </svg>
            </div>

            {artwork.badge && (
              <span
                className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-[4px] ${
                  artwork.badge === "Best Seller"
                    ? "bg-brand-red text-white"
                    : "bg-brand-gold/20 text-brand-brown"
                }`}
              >
                {artwork.badge}
              </span>
            )}

            <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80">
              <Image
                src="/design/red-window-art/vectors/icon-heart-outline.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>

          <div className="px-4 py-3.5">
            <span className="text-[10px] uppercase tracking-wider text-brand-gold">
              {artwork.tag}
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-text mt-1 group-hover:text-brand-red transition-colors">
              {artwork.name}
            </h3>
            <p className="text-sm text-brand-muted mt-1">{artwork.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}