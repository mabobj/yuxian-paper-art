import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"

export const metadata: Metadata = {
  title: "About Us | Red Window Art",
  description:
    "Learn about our mission to bring Chinese paper-cut heritage to homes around the world.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink leading-tight">
                About
                <br />
                Yuxian Paper Art
              </h1>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-y border-sand">
          <Container>
            <div className="max-w-3xl mx-auto space-y-16">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  Our Mission
                </h2>
                <p className="mt-4 text-walnut/70 leading-relaxed">
                  Yuxian Paper Art exists to connect discerning homes around the
                  world with the extraordinary craft of Chinese paper-cutting.
                  We are not a mass marketplace — we are a curated gateway to
                  living heritage, working directly with master artisans to
                  present their finest work with the reverence and context it
                  deserves.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  Why We Do This
                </h2>
                <div className="mt-4 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    We believe that the world is richer when traditional crafts
                    find new audiences. Yuxian paper-cutting is not a relic of
                    the past — it is a vibrant, evolving art form that deserves
                    to be seen, appreciated, and lived with.
                  </p>
                  <p>
                    By connecting artisans directly with art lovers worldwide,
                    we create a sustainable ecosystem where craft can thrive,
                    communities can prosper, and homes can be filled with
                    objects of genuine meaning.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  How We Select Our Pieces
                </h2>
                <div className="mt-4 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    Every artwork in our collection is selected for three
                    qualities: exceptional craftsmanship, cultural authenticity,
                    and the ability to enrich a modern living space. We work
                    with master artisans who have dedicated their lives to
                    paper-cutting, many of whom are recognized by the Chinese
                    government as inheritors of intangible cultural heritage.
                  </p>
                  <p>
                    We do not sell mass-produced imitations. Each piece is
                    entirely hand-cut and hand-finished, carrying the subtle
                    variations that distinguish true craft from factory output.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  Our Commitment
                </h2>
                <div className="mt-4 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    We are committed to fair compensation for our artisans,
                    sustainable practices in sourcing and packaging, and
                    transparent storytelling that honors the cultural origins of
                    every piece we offer.
                  </p>
                  <p>
                    As we grow, we plan to expand our collection to include
                    paper-cutting traditions from other regions of China and to
                    develop deeper partnerships with artisan communities. We
                    also welcome collaborations with galleries, museums, and
                    cultural institutions that share our vision.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}