import Link from "next/link"
import Image from "next/image"
import BrandImage from "@/components/BrandImage"

const COLLECTIONS = [
  { title: "Zodiac Collection", image: "collection-zodiac.png", href: "/products" },
  { title: "Blessing Collection", image: "collection-blessing.png", href: "/blessings" },
  { title: "Wedding Gifts", image: "collection-wedding.png", href: "/products" },
  { title: "Framed Wall Art", image: "collection-framed-wall-art.png", href: "/products" },
]

export default function FeaturedCollections() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
      {COLLECTIONS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex flex-col rounded-[8px] border border-brand-border bg-brand-card overflow-hidden shadow-[0_8px_24px_rgba(59,42,31,0.07)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <BrandImage
            src={`/design/red-window-art/${item.image}`}
            alt={item.title}
            className="h-[150px]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
            imageClassName="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="flex items-center justify-between px-4 h-[44px]">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-text group-hover:text-brand-red transition-colors">
              {item.title}
            </h3>
            <Image
              src="/design/red-window-art/icon-arrow-right.svg"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5 opacity-40 group-hover:opacity-70 transition-opacity"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}