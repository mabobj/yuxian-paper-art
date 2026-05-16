import { Scissors, Gift, Home } from "lucide-react"

const VALUES = [
  {
    icon: Scissors,
    title: "Handcrafted Heritage",
    description:
      "Each piece is cut by master artisans in Yuxian County using techniques passed down through generations, preserving a centuries-old folk art tradition.",
  },
  {
    icon: Gift,
    title: "Meaningful Gifts",
    description:
      "Every artwork carries cultural symbolism — blessings, prosperity, love — making it a gift that tells a story and creates lasting meaning.",
  },
  {
    icon: Home,
    title: "Ready for Modern Interiors",
    description:
      "Professionally framed and ready to hang, our paper-cut artworks are designed to complement contemporary living spaces with quiet elegance.",
  },
]

export default function ValueCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {VALUES.map((value) => (
        <div key={value.title} className="text-center group">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 bg-cream mb-6 group-hover:border-gold/60 transition-colors">
            <value.icon className="h-6 w-6 text-vermilion" />
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-ink mb-3">
            {value.title}
          </h3>
          <p className="text-sm text-walnut/60 leading-relaxed max-w-xs mx-auto">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  )
}