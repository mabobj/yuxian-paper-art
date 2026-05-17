import Link from "next/link"
import Image from "next/image"

const ARTWORKS = [
  { name: "Dragon of Prosperity", price: "$128.00", tag: "Prosperity", badge: "Best Seller" as const, image: "artwork-dragon-of-prosperity.png", href: "/products/auspicious-dragon" },
  { name: "Blessing of Fortune", price: "$98.00", tag: "Blessing", badge: undefined, image: "artwork-blessing-of-fortune.png", href: "/products/red-lantern-blessing" },
  { name: "Peony of Abundance", price: "$118.00", tag: "Prosperity", badge: "New" as const, image: "artwork-peony-of-abundance.png", href: "/products/peony-window" },
  { name: "Mandarin Ducks", price: "$128.00", tag: "Joy", badge: undefined, image: "artwork-mandarin-ducks.png", href: "/products/double-happiness-wedding" },
]

export default function ArtworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {ARTWORKS.map((artwork) => (
        <Link
          key={artwork.name}
          href={artwork.href}
          className="group flex flex-col rounded-[8px] border border-brand-border bg-brand-card overflow-hidden shadow-[0_4px_12px_rgba(59,42,31,0.05)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="relative overflow-hidden" style={{ height: "88px" }}>
            <Image
              src={`/design/red-window-art/${artwork.image}`}
              alt={artwork.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, 260px"
            />
            {artwork.badge && (
              <span
                className={`absolute top-2 left-2 text-[9px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-[3px] z-10 ${
                  artwork.badge === "Best Seller" ? "bg-brand-red text-white" : "bg-brand-gold/20 text-brand-brown"
                }`}
              >
                {artwork.badge}
              </span>
            )}
            <span className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/80 z-10">
              <Image src="/design/red-window-art/icon-heart-outline.svg" alt="" width={12} height={12} className="w-3 h-3" />
            </span>
          </div>
          <div className="px-3 py-2">
            <span className="text-[9px] uppercase tracking-wider text-brand-gold">{artwork.tag}</span>
            <h3 className="font-[family-name:var(--font-heading)] text-xs font-semibold text-brand-text mt-0.5 group-hover:text-brand-red transition-colors leading-tight">
              {artwork.name}
            </h3>
            <p className="text-xs text-brand-muted mt-0.5">{artwork.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}