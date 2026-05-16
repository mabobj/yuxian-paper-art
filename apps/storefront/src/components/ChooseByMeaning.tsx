import Link from "next/link"
import { Sparkles, Heart, Shield, Leaf, Hand, Smile } from "lucide-react"

const MEANINGS = [
  {
    icon: Sparkles,
    title: "Prosperity",
    slug: "auspicious-dragon",
    description: "Invite wealth and success",
    color: "text-gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/5",
  },
  {
    icon: Heart,
    title: "Love",
    slug: "double-happiness-wedding",
    description: "Celebrate union and devotion",
    color: "text-vermilion",
    borderColor: "border-vermilion/30",
    bgColor: "bg-vermilion/5",
  },
  {
    icon: Shield,
    title: "Protection",
    slug: "auspicious-dragon",
    description: "Guard your home and family",
    color: "text-walnut",
    borderColor: "border-walnut/30",
    bgColor: "bg-walnut/5",
  },
  {
    icon: Leaf,
    title: "Health",
    slug: "peony-window",
    description: "Wish for well-being and vitality",
    color: "text-emerald-700",
    borderColor: "border-emerald-700/30",
    bgColor: "bg-emerald-700/5",
  },
  {
    icon: Hand,
    title: "Harmony",
    slug: "red-lantern-blessing",
    description: "Bring peace and balance",
    color: "text-amber-700",
    borderColor: "border-amber-700/30",
    bgColor: "bg-amber-700/5",
  },
  {
    icon: Smile,
    title: "Joy",
    slug: "zodiac-rabbit",
    description: "Celebrate happiness and delight",
    color: "text-rose-600",
    borderColor: "border-rose-600/30",
    bgColor: "bg-rose-600/5",
  },
]

export default function ChooseByMeaning() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
      {MEANINGS.map((meaning) => (
        <Link
          key={meaning.title}
          href={`/products/${meaning.slug}`}
          className={`group flex flex-col items-center text-center p-5 lg:p-6 rounded-sm border ${meaning.borderColor} ${meaning.bgColor} hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
        >
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full border ${meaning.borderColor} bg-parchment mb-3 group-hover:scale-110 transition-transform`}
          >
            <meaning.icon className={`h-5 w-5 ${meaning.color}`} />
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-ink">
            {meaning.title}
          </h3>
          <p className="text-xs text-walnut/50 mt-1 leading-relaxed">
            {meaning.description}
          </p>
        </Link>
      ))}
    </div>
  )
}