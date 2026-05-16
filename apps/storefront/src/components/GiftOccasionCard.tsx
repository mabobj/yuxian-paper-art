import { Gift, Heart, Star, BookOpen } from "lucide-react"

const OCCASIONS = [
  {
    icon: Gift,
    title: "Housewarming",
    description:
      "A paper-cut artwork brings warmth and cultural depth to a new home — a gift that transforms blank walls into meaningful spaces.",
  },
  {
    icon: Heart,
    title: "Wedding",
    description:
      "The Double Happiness motif and peony blossoms carry centuries of wedding blessings, making our pieces unforgettable anniversary and wedding gifts.",
  },
  {
    icon: Star,
    title: "Festival",
    description:
      "From Lunar New Year to Christmas, a hand-cut artwork celebrating Chinese zodiac or folk traditions makes any celebration more memorable.",
  },
  {
    icon: BookOpen,
    title: "Collector's Gift",
    description:
      "For those who appreciate craft, culture, and the extraordinary — each piece is a numbered limited edition from master Yuxian artisans.",
  },
]

export default function GiftOccasionCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {OCCASIONS.map((occasion) => (
        <div
          key={occasion.title}
          className="rounded-sm border border-sand bg-cream p-6 text-center group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 bg-parchment mb-4 group-hover:border-gold/40 transition-colors">
            <occasion.icon className="h-5 w-5 text-vermilion" />
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-2">
            {occasion.title}
          </h3>
          <p className="text-sm text-walnut/60 leading-relaxed">
            {occasion.description}
          </p>
        </div>
      ))}
    </div>
  )
}