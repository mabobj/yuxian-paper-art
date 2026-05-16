import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import Button from "@/components/Button"
import Newsletter from "@/components/Newsletter"
import { BookOpen, Camera, Heart, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Journal | Red Window Art",
  description:
    "Stories of Chinese paper-cut heritage, artisan spotlights, gift inspiration, and the cultural meaning behind every artwork.",
}

const ARTICLES = [
  {
    icon: BookOpen,
    title: "The Five-Hundred-Year Art of Yuxian Paper Cutting",
    excerpt:
      "How a folk craft from a small county in Hebei became a UNESCO-recognized Intangible Cultural Heritage of Humanity — and why it matters today.",
    date: "Featured Story",
  },
  {
    icon: Camera,
    title: "Inside the Studio: A Day with Master Artisan Zhang",
    excerpt:
      "From sketch to final cut, spend a day in the workshop of a third-generation Yuxian paper-cutting master.",
    date: "Artisan Spotlight",
  },
  {
    icon: Heart,
    title: "The Language of Symbols: What Paper-Cut Motifs Really Mean",
    excerpt:
      "Peonies, dragons, lanterns, and the Double Happiness character — a guide to the cultural blessings hidden in every artwork.",
    date: "Cultural Guide",
  },
  {
    icon: Globe,
    title: "How to Style Chinese Paper Art in a Modern Western Home",
    excerpt:
      "Five interior design approaches that make heritage paper-cut artworks feel at home in contemporary spaces.",
    date: "Design Inspiration",
  },
]

export default function JournalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Journal
              </h1>
              <p className="mt-4 text-lg text-walnut/60 leading-relaxed">
                Stories of heritage, craft, and the cultural meaning behind
                every paper-cut artwork. Discover artisan spotlights, gift
                inspiration, and the living traditions of Yuxian paper-cutting.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-16 lg:pb-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {ARTICLES.map((article) => (
                <article
                  key={article.title}
                  className="group rounded-sm border border-sand bg-cream p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 bg-parchment mb-5 group-hover:border-gold/40 transition-colors">
                    <article.icon className="h-5 w-5 text-vermilion" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gold">
                    {article.date}
                  </span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-ink mt-2 mb-3 group-hover:text-walnut transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-walnut/60 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <span className="text-sm font-medium text-vermilion hover:text-vermilion/80 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-y border-sand">
          <Container>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink">
                More Stories Coming Soon
              </h2>
              <p className="mt-3 text-walnut/60 leading-relaxed">
                We are documenting the stories of master artisans, the symbolism
                behind each motif, and the cultural traditions that make Yuxian
                paper-cutting extraordinary.
              </p>
              <div className="mt-6">
                <Button href="/products" variant="primary">
                  Explore Artworks
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20">
          <Container>
            <Newsletter />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}