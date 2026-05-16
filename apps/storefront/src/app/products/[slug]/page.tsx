import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import Button from "@/components/Button"
import { getProductBySlug, getFeaturedProducts } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import ProductCard from "@/components/ProductCard"
import { Ruler, Palette, Scissors, Truck, BookOpen } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found" }
  return {
    title: `${product.name} | Yuxian Paper Art`,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <Header />
      <main>
        <section className="py-12 lg:py-20">
          <Container>
            <nav className="text-sm text-walnut/50 mb-8">
              <Link href="/" className="hover:text-walnut transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/products"
                className="hover:text-walnut transition-colors"
              >
                Collection
              </Link>
              <span className="mx-2">/</span>
              <span className="text-walnut/70">{product.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="aspect-[4/5] rounded-sm bg-cream border border-sand shadow-md overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-56 h-72">
                    <div className="absolute inset-0 border-2 border-gold/25 rounded-full" />
                    <div className="absolute inset-4 border border-gold/15 rounded-full" />
                    <div className="absolute inset-8 border border-gold/10 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-44 border-2 border-vermilion/15 rounded-sm rotate-6" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-vermilion/40 rounded-full" />
                    <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gold/30 rounded-full" />
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold/25 rounded-full" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-ink leading-tight">
                  {product.name}
                </h1>
                <p className="mt-3 text-lg text-walnut/60 leading-relaxed">
                  {product.subtitle}
                </p>
                <p className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink">
                  {formatPrice(product.price)}
                </p>

                <p className="mt-6 text-walnut/70 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="mt-8">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Add to Cart
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-sand space-y-4">
                  <div className="flex items-start gap-3">
                    <Ruler className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-ink">
                        Dimensions
                      </span>
                      <p className="text-sm text-walnut/60">
                        {product.dimensions}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-ink">
                        Materials
                      </span>
                      <p className="text-sm text-walnut/60">
                        {product.materials}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-ink">
                        Shipping
                      </span>
                      <p className="text-sm text-walnut/60">
                        {product.shippingNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-t border-sand">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-6">
                  The Craft
                </h2>
                <div className="flex items-start gap-3 mb-6">
                  <Scissors className="h-5 w-5 text-vermilion mt-0.5 shrink-0" />
                  <p className="text-walnut/70 leading-relaxed">
                    {product.craft}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-6">
                  The Story
                </h2>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-vermilion mt-0.5 shrink-0" />
                  <p className="text-walnut/70 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20">
          <Container>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}