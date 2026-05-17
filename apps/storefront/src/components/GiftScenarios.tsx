import Link from "next/link"
import Image from "next/image"
import BrandImage from "@/components/BrandImage"

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
          className="group flex flex-col rounded-[8px] border border-brand-border bg-brand-card overflow-hidden shadow-[0_8px_24px_rgba(59,42,31,0.07)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <BrandImage
            src={`/design/red-window-art/${gift.image}`}
            alt={gift.title}
            className="h-[140px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 380px"
            imageClassName="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="flex items-center justify-between px-5 h-[44px]">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-text group-hover:text-brand-red transition-colors leading-tight">
                {gift.title}
              </h3>
              <p className="text-xs text-brand-muted">{gift.subtitle}</p>
            </div>
            <Image
              src="/design/red-window-art/icon-arrow-right.svg"
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