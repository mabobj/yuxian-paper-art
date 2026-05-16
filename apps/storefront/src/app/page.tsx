import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import HeroSection from "@/components/HeroSection"
import SectionTitle from "@/components/SectionTitle"
import ProductGrid from "@/components/ProductGrid"
import ChooseByMeaning from "@/components/ChooseByMeaning"
import CraftStory from "@/components/CraftStory"
import GiftOccasionCard from "@/components/GiftOccasionCard"
import TrustBar from "@/components/TrustBar"
import Newsletter from "@/components/Newsletter"
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
              title="Featured Collections"
              subtitle="Curated paper-cut artworks that bring heritage, beauty, and meaning into contemporary living."
            />
            <div className="mt-14">
              <ProductGrid products={featuredProducts} />
            </div>
            <div className="mt-12 text-center">
              <Button href="/products" variant="outline">
                View All Artworks
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28 bg-cream">
          <Container>
            <SectionTitle
              title="Choose by Meaning"
              subtitle="Every artwork carries a cultural blessing. Find the piece that speaks to what matters most."
            />
            <div className="mt-14">
              <ChooseByMeaning />
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <SectionTitle
              title="The Art of Yuxian Paper Cutting"
              subtitle="A living heritage craft with over 500 years of tradition, recognized by UNESCO as an Intangible Cultural Heritage of Humanity."
              className="mb-14"
            />
            <CraftStory />
          </Container>
        </section>

        <section className="py-20 lg:py-28 bg-cream">
          <Container>
            <SectionTitle
              title="Meaningful Chinese Gifts"
              subtitle="Every occasion deserves a gift with cultural depth, beauty, and a story worth sharing."
            />
            <div className="mt-14">
              <GiftOccasionCard />
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <SectionTitle
              title="Featured Artworks"
              subtitle="Hand-cut, professionally framed, and ready to transform your space."
            />
            <div className="mt-14">
              <ProductGrid products={featuredProducts} />
            </div>
            <div className="mt-12 text-center">
              <Button href="/products" variant="primary">
                Shop All Artworks
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-y border-sand">
          <Container>
            <TrustBar />
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <Newsletter />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}