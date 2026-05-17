import Link from "next/link"
import Image from "next/image"
import BrandImage from "@/components/BrandImage"

const ARTWORKS = [
  { name: "Dragon of Prosperity", price: "$128.00", tag: "Prosperity", badge: "Best Seller" as const, image: "artwork-dragon-of-prosperity.png", href: "/products/auspicious-dragon" },
  { name: "Blessing of Fortune", price: "$98.00", tag: "Blessing", badge: undefined, image: "artwork-blessing-of-fortune.png", href: "/products/red-lantern-blessing" },
  { name: "Peony of Abundance", price: "$118.00", tag: "Prosperity", badge: "New" as const, image: "artwork-peony-of-abundance.png", href: "/products/peony-window" },
  { name: "Mandarin Ducks", price: "$128.00", tag: "Joy", badge: undefined, image: "artwork-mandarin-ducks.png", href: "/products/double-happiness-wedding" },
]

export default function ArtworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
      {ARTWORKS.map((artwork) => (
        <Link
          key={artwork.name}
          href={artwork.href}
          className="group flex flex-col rounded-[8px] border border-brand-border bg-brand-card overflow-hidden shadow-[0_8px_24px_rgba(59,42,31,0.07)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="relative overflow-hidden bg-brand-card" style={{ height: "220px" }}>
            <Image
              src={`/design/red-window-art/${artwork.image}`}
              alt={artwork.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 280px"
            />
            {artwork.badge && (
              <span
                className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-[4px] z-10 ${
                  artwork.badge === "Best Seller" ? "bg-brand-red text-white" : "bg-brand-gold/20 text-brand-brown"
                }`}
              >
                {artwork.badge}
              </span>
            )}
            <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 z-10">
              <Image src="/design/red-window-art/icon-heart-outline.svg" alt="" width={16} height={16} className="w-4 h-4" />
            </span>
          </div>
          <div className="px-4 py-3" style={{ minHeight: "82px" }}>
            <span className="text-[10px] uppercase tracking-wider text-brand-gold">{artwork.tag}</span>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-text mt-1 group-hover:text-brand-red transition-colors leading-tight">
              {artwork.name}
            </h3>
            <p className="text-sm text-brand-muted mt-0.5">{artwork.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}