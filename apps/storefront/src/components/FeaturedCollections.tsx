import Link from "next/link"
import Image from "next/image"

const COLLECTIONS = [
  { title: "Zodiac Collection", href: "/products" },
  { title: "Blessing Collection", href: "/blessings" },
  { title: "Wedding Gifts", href: "/products" },
  { title: "Framed Wall Art", href: "/products" },
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 120 90"
                className="w-20 h-15 opacity-30 group-hover:opacity-40 transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="45" r="28" stroke="#9F1D1D" strokeWidth="1.2" fill="none" />
                <circle cx="60" cy="45" r="20" stroke="#9F1D1D" strokeWidth="0.6" fill="none" />
                <path d="M42,45l6,14l-12-8h12l-12,8z" fill="none" stroke="#C9A45C" strokeWidth="0.5" opacity="0.6" />
              </svg>
            </div>
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