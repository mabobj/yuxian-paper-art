import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import Button from "@/components/Button"

export const metadata: Metadata = {
  title: "Our Story | Yuxian Paper Art",
  description:
    "Discover the centuries-old tradition of Yuxian paper-cutting — a living heritage craft recognized by UNESCO.",
}

export default function StoryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink leading-tight">
                The Story Behind
                <br />
                Every Cut
              </h1>
              <p className="mt-6 text-lg text-walnut/60 leading-relaxed">
                For over five centuries, artisans in the villages of Yuxian
                County have transformed simple sheets of paper into
                extraordinary works of art — a tradition now recognized by
                UNESCO as an Intangible Cultural Heritage of Humanity.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-y border-sand">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-sm bg-parchment border border-sand shadow-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 border border-gold/20 rounded-full" />
                      <div className="absolute inset-6 border border-gold/15 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-vermilion/15 rounded-sm rotate-45" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-vermilion/40 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  What Is Yuxian Paper-Cutting?
                </h2>
                <div className="mt-6 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    Yuxian paper-cutting (蔚县剪纸) is a distinctive folk art
                    originating from Yuxian County in Hebei Province, northern
                    China. Unlike the single-color paper cuts found elsewhere,
                    Yuxian paper-cutting is known for its vibrant dyeing
                    technique — artisans apply mineral pigments to hand-cut
                    paper, creating richly colored compositions that resemble
                    stained glass.
                  </p>
                  <p>
                    The craft dates back to the Ming Dynasty (1368–1644) and
                    flourished during the Qing Dynasty, when paper-cut window
                    decorations became an essential part of Chinese folk
                    celebrations. Today, it remains a living tradition practiced
                    by master artisans who have inherited techniques passed down
                    through generations.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto space-y-16">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  The Artisan&apos;s Process
                </h2>
                <div className="mt-6 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    Creating a Yuxian paper-cut is a meditation in patience.
                    The process begins with a design drawn on paper, which
                    serves as the master template. Layers of thin rice paper are
                    stacked beneath the template, and the artisan begins cutting
                    — using both scissors for broad strokes and fine engraving
                    knives for intricate details.
                  </p>
                  <p>
                    A single artwork may require thousands of individual cuts,
                    each one precise and irreversible. After cutting, the pieces
                    are dyed with mineral-based pigments, layer by layer, to
                    achieve the signature depth and luminosity that
                    distinguishes Yuxian paper-cutting from all other forms.
                  </p>
                  <p>
                    From start to finish, a master-level piece can take weeks to
                    complete. The result is not a reproduction — it is an
                    original artwork, shaped by human hands and carrying the
                    subtle variations that make handcraft irreplaceable.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  Why It Matters Today
                </h2>
                <div className="mt-6 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    In an age of mass production, Yuxian paper-cutting stands as
                    a quiet rebellion — a reminder that some things cannot be
                    replicated by machines. Each piece carries the touch of its
                    maker, the accumulated wisdom of generations, and the
                    cultural memory of a people.
                  </p>
                  <p>
                    When you bring a Yuxian paper-cut into your home, you are
                    not simply decorating a wall. You are participating in the
                    preservation of a living heritage, supporting artisan
                    communities, and surrounding yourself with objects that have
                    genuine meaning and provenance.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
                  Our Mission
                </h2>
                <div className="mt-6 space-y-4 text-walnut/70 leading-relaxed">
                  <p>
                    Yuxian Paper Art was founded to bridge a gap: between
                    ancient craft and modern living, between Chinese tradition
                    and global appreciation. We work directly with master
                    artisans in Yuxian County to bring their finest work to a
                    wider audience, presenting each piece not as a souvenir but
                    as what it truly is — fine art.
                  </p>
                  <p>
                    We believe that cultural heritage belongs to everyone. By
                    making these extraordinary paper-cut artworks accessible to
                    homes around the world, we hope to ensure that the art of
                    Yuxian paper-cutting continues to thrive for generations to
                    come.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-t border-sand">
          <Container>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink">
                Experience the Craft
              </h2>
              <p className="mt-3 text-walnut/60 leading-relaxed">
                Browse our collection of hand-cut artworks and bring a piece of
                living heritage into your home.
              </p>
              <div className="mt-6">
                <Button href="/products" variant="primary">
                  Shop Collection
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