import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import HeroSection from "@/components/HeroSection"
import SectionTitle from "@/components/SectionTitle"
import FeaturedCollections from "@/components/FeaturedCollections"
import MeaningGrid from "@/components/MeaningGrid"
import CraftStory from "@/components/CraftStory"
import GiftScenarios from "@/components/GiftScenarios"
import ArtworkGrid from "@/components/ArtworkGrid"
import TrustBar from "@/components/TrustBar"
import Newsletter from "@/components/Newsletter"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <section className="py-14 lg:py-16">
          <Container>
            <SectionTitle
              title="Featured Collections"
              className="mb-10"
            />
            <FeaturedCollections />
          </Container>
        </section>

        <section className="py-14 lg:py-16 bg-brand-card">
          <Container>
            <SectionTitle
              title="Choose by Meaning"
              subtitle="Every artwork carries a cultural blessing. Find the piece that speaks to what matters most."
              className="mb-10"
            />
            <MeaningGrid />
          </Container>
        </section>

        <section className="py-14 lg:py-16">
          <Container>
            <SectionTitle
              title="The Art of Yuxian Paper Cutting"
              subtitle="A living heritage craft with over 500 years of tradition, recognized by UNESCO as an Intangible Cultural Heritage of Humanity."
              className="mb-10"
            />
            <CraftStory />
          </Container>
        </section>

        <section className="py-14 lg:py-16 bg-brand-card">
          <Container>
            <SectionTitle
              title="Meaningful Chinese Gifts"
              subtitle="Every occasion deserves a gift with cultural depth, beauty, and a story worth sharing."
              className="mb-10"
            />
            <GiftScenarios />
          </Container>
        </section>

        <section className="py-14 lg:py-16">
          <Container>
            <SectionTitle
              title="Featured Artworks"
              subtitle="Hand-cut, professionally framed, and ready to transform your space."
              className="mb-10"
            />
            <ArtworkGrid />
          </Container>
        </section>

        <section className="py-12 lg:py-14 bg-brand-card border-y border-brand-border">
          <Container>
            <TrustBar />
          </Container>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}