import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import SectionTitle from "@/components/SectionTitle"
import ProductGrid from "@/components/ProductGrid"
import Button from "@/components/Button"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Shop | Red Window Art",
  description:
    "Browse our collection of handcrafted Yuxian paper-cut artworks — wall art, wedding gifts, zodiac pieces, and more.",
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <SectionTitle
              title="Our Collection"
              subtitle="Each piece is a hand-cut artwork shaped by centuries of folk tradition. Browse our collection and find the piece that speaks to you."
              className="mb-14"
            />
            <ProductGrid products={products} />
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-t border-sand">
          <Container>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink">
                Looking for a Gift?
              </h2>
              <p className="mt-3 text-walnut/60 leading-relaxed">
                Each artwork arrives in a premium gift box with a story card
                explaining the cultural meaning — ready for any occasion.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="outline">
                  Gift Concierge
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