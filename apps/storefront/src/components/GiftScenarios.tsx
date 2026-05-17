import Link from "next/link"
import Image from "next/image"

const GIFTS = [
  { title: "Housewarming", subtitle: "Bless a new beginning", image: "gift-housewarming.png", href: "/products" },
  { title: "Wedding", subtitle: "Double happiness, forever", image: "gift-wedding.png", href: "/products" },
  { title: "Lunar New Year", subtitle: "Welcome good fortune", image: "gift-lunar-new-year.png", href: "/products" },
]

export default function GiftScenarios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
      {GIFTS.map((gift) => (
        <Link
          key={gift.title}
          href={gift.href}
          className="group flex flex-col rounded-lg border border-brand-border bg-brand-card overflow-hidden shadow-[0_6px_18px_rgba(59,42,31,0.06)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="relative overflow-hidden bg-brand-bg" style={{ height: "133px" }}>
            <Image
              src={`/design/red-window-art/${gift.image}`}
              alt={gift.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 370px"
            />
          </div>
          <div className="flex items-center justify-between px-5 h-[42px]">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-text group-hover:text-brand-red transition-colors leading-tight">
                {gift.title}
              </h3>
              <p className="text-xs text-brand-muted">{gift.subtitle}</p>
            </div>
            <Image
              src="/design/red-window-art/vectors/icon-arrow-right.svg"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5 opacity-40 group-hover:opacity-70 transition-opacity shrink-0 ml-3"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}