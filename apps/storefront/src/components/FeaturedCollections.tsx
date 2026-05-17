import Link from "next/link"
import Image from "next/image"

const COLLECTIONS = [
  {
    title: "Zodiac Collection",
    image: "collection-zodiac.png",
    href: "/products",
  },
  {
    title: "Blessing Collection",
    image: "collection-blessing.png",
    href: "/blessings",
  },
  {
    title: "Wedding Gifts",
    image: "collection-wedding.png",
    href: "/products",
  },
  {
    title: "Framed Wall Art",
    image: "collection-framed-wall-art.png",
    href: "/products",
  },
]

export default function FeaturedCollections() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {COLLECTIONS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex flex-col rounded-[12px] border border-brand-border bg-brand-card overflow-hidden hover:shadow-[0_6px_18px_rgba(59,42,31,0.08)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="aspect-[4/3] relative overflow-hidden bg-brand-bg">
            <Image
              src={`/design/red-window-art/${item.image}`}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-text group-hover:text-brand-red transition-colors">
              {item.title}
            </h3>
            <Image
              src="/design/red-window-art/vectors/icon-arrow-right.svg"
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