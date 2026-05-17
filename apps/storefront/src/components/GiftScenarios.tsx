import Link from "next/link"
import Image from "next/image"

const GIFTS = [
  {
    title: "Housewarming",
    subtitle: "Bless a new beginning",
    image: "gift-housewarming.png",
    href: "/products",
  },
  {
    title: "Wedding",
    subtitle: "Double happiness, forever",
    image: "gift-wedding.png",
    href: "/products",
  },
  {
    title: "Lunar New Year",
    subtitle: "Welcome good fortune",
    image: "gift-lunar-new-year.png",
    href: "/products",
  },
]

export default function GiftScenarios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {GIFTS.map((gift) => (
        <Link
          key={gift.title}
          href={gift.href}
          className="group flex flex-col rounded-[12px] border border-brand-border bg-brand-card overflow-hidden hover:shadow-[0_6px_18px_rgba(59,42,31,0.08)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="aspect-[16/10] relative overflow-hidden bg-brand-bg">
            <Image
              src={`/design/red-window-art/${gift.image}`}
              alt={gift.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 370px"
            />
          </div>
          <div className="px-5 py-4">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-brand-text group-hover:text-brand-red transition-colors">
              {gift.title}
            </h3>
            <p className="text-sm text-brand-muted mt-1">{gift.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}