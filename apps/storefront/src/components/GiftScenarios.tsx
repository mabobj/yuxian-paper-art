import Link from "next/link"
import Image from "next/image"

const GIFTS = [
  {
    title: "Housewarming",
    subtitle: "Bless a new beginning",
    href: "/products",
  },
  {
    title: "Wedding",
    subtitle: "Double happiness, forever",
    href: "/products",
  },
  {
    title: "Lunar New Year",
    subtitle: "Welcome good fortune",
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/8 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 80 50"
                className="w-16 h-10 opacity-25 group-hover:opacity-35 transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="20" y="10" width="40" height="30" rx="3" stroke="#9F1D1D" strokeWidth="1" fill="none" />
                <path d="M30,10v-5Q40,2 50,10" stroke="#9F1D1D" strokeWidth="0.8" fill="none" />
                <line x1="30" y1="25" x2="50" y2="25" stroke="#C9A45C" strokeWidth="0.6" opacity="0.5" />
              </svg>
            </div>
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