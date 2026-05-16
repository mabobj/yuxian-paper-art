import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import HeroSection from "@/components/HeroSection"
import SectionTitle from "@/components/SectionTitle"
import ValueCard from "@/components/ValueCard"
import ProductGrid from "@/components/ProductGrid"
import CraftStory from "@/components/CraftStory"
import GiftOccasionCard from "@/components/GiftOccasionCard"
import Button from "@/components/Button"
import { getFeaturedProducts } from "@/data/products"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <section className="py-20 lg:py-28">
          <Container>
            <SectionTitle
              title="Why Yuxian Paper Art"
              subtitle="Every piece carries the weight of centuries-old craft, transformed for the modern home."
            />
            <div className="mt-14">
              <ValueCard />
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28 bg-cream">
          <Container>
            <SectionTitle
              title="Featured Collection"
              subtitle="Curated hand-cut artworks that bring heritage and beauty into contemporary living."
            />
            <div className="mt-14">
              <ProductGrid products={featuredProducts} />
            </div>
            <div className="mt-12 text-center">
              <Button href="/products" variant="outline">
                View All Products
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <CraftStory />
          </Container>
        </section>

        <section className="py-20 lg:py-28 bg-cream">
          <Container>
            <SectionTitle
              title="Gifts That Tell a Story"
              subtitle="Every occasion deserves a gift with meaning, beauty, and cultural depth."
            />
            <div className="mt-14">
              <GiftOccasionCard />
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-semibold tracking-wide text-ink">
                Bring Heritage Home
              </h2>
              <p className="mt-4 text-walnut/60 leading-relaxed">
                Each artwork is hand-cut, professionally framed, and shipped
                with a cultural story card — ready to transform your space or
                become an unforgettable gift.
              </p>
              <div className="mt-8">
                <Button href="/products" variant="primary">
                  Shop the Collection
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