import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import SectionTitle from "@/components/SectionTitle"
import Button from "@/components/Button"
import { Sparkles, Heart, Shield, Leaf, Hand, Smile } from "lucide-react"

export const metadata: Metadata = {
  title: "Blessings | Red Window Art",
  description:
    "Shop paper-cut artworks by the cultural blessing they carry — prosperity, love, health, protection, harmony, and joy.",
}

const BLESSING_CATEGORIES = [
  {
    icon: Sparkles,
    title: "Prosperity",
    description:
      "Artworks that invite wealth, success, and abundance into your home. Perfect for business openings, career milestones, and new beginnings.",
    color: "text-gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/5",
  },
  {
    icon: Heart,
    title: "Love",
    description:
      "Celebrate union, devotion, and lasting affection. Ideal for weddings, anniversaries, and expressions of deep connection.",
    color: "text-vermilion",
    borderColor: "border-vermilion/30",
    bgColor: "bg-vermilion/5",
  },
  {
    icon: Shield,
    title: "Protection",
    description:
      "Guard your home and loved ones with artworks that carry centuries-old symbols of safety, warding, and guardian spirits.",
    color: "text-walnut",
    borderColor: "border-walnut/30",
    bgColor: "bg-walnut/5",
  },
  {
    icon: Leaf,
    title: "Health",
    description:
      "Wish for well-being, vitality, and longevity. Thoughtful gifts for recovery, elder celebrations, and wellness journeys.",
    color: "text-emerald-700",
    borderColor: "border-emerald-700/30",
    bgColor: "bg-emerald-700/5",
  },
  {
    icon: Hand,
    title: "Harmony",
    description:
      "Bring peace, balance, and family unity into your space. Ideal for new homes, family gathering areas, and meditation rooms.",
    color: "text-amber-700",
    borderColor: "border-amber-700/30",
    bgColor: "bg-amber-700/5",
  },
  {
    icon: Smile,
    title: "Joy",
    description:
      "Celebrate happiness, delight, and life's beautiful moments. Perfect for birthdays, festivals, and everyday inspiration.",
    color: "text-rose-600",
    borderColor: "border-rose-600/30",
    bgColor: "bg-rose-600/5",
  },
]

export default function BlessingsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Shop by Blessing
              </h1>
              <p className="mt-4 text-lg text-walnut/60 leading-relaxed">
                In Chinese culture, every motif carries a blessing. Choose the
                meaning that resonates with your intention — whether for your
                own home or as a meaningful gift.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-16 lg:pb-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {BLESSING_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className={`rounded-sm border ${category.borderColor} ${category.bgColor} p-8 text-center hover:shadow-md transition-all duration-300`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full border ${category.borderColor} bg-parchment mb-5`}
                  >
                    <category.icon className={`h-7 w-7 ${category.color}`} />
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-ink mb-3">
                    {category.title}
                  </h2>
                  <p className="text-sm text-walnut/60 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Button href="/products" variant="outline">
                    Explore {category.title}
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-t border-sand">
          <Container>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink">
                Not Sure Which Blessing to Choose?
              </h2>
              <p className="mt-3 text-walnut/60 leading-relaxed">
                Every artwork makes a meaningful gift. Our Gift Concierge can
                help you find the perfect piece for any occasion.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Contact Gift Concierge
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}