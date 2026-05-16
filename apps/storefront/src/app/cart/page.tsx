import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import Button from "@/components/Button"
import { Trash2 } from "lucide-react"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Shopping Cart | Red Window Art",
  description: "Review the items in your shopping cart.",
}

const CART_ITEMS = [
  { product: products[0], quantity: 1 },
  { product: products[2], quantity: 2 },
]

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const shipping = 0
  const total = subtotal + shipping

  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink">
              Shopping Cart
            </h1>
          </Container>
        </section>

        <section className="pb-16 lg:pb-24">
          <Container>
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              <div className="lg:col-span-2 space-y-6">
                {CART_ITEMS.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-5 p-5 rounded-sm border border-sand bg-cream"
                  >
                    <div className="w-20 h-24 shrink-0 rounded-sm bg-parchment border border-sand flex items-center justify-center">
                      <div className="relative w-10 h-14">
                        <div className="absolute inset-0 border border-gold/20 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-10 border border-vermilion/15 rounded-sm rotate-6" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-vermilion/40 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-[family-name:var(--font-playfair)] text-base font-semibold text-ink hover:text-walnut transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-walnut/60 mt-0.5">
                        {item.product.subtitle}
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center border border-sand rounded-sm">
                          <button className="px-3 py-1 text-sm text-walnut hover:text-ink transition-colors">
                            −
                          </button>
                          <span className="px-3 py-1 text-sm text-ink border-x border-sand">
                            {item.quantity}
                          </span>
                          <button className="px-3 py-1 text-sm text-walnut hover:text-ink transition-colors">
                            +
                          </button>
                        </div>
                        <button className="text-walnut/40 hover:text-vermilion transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="rounded-sm border border-sand bg-cream p-6 sticky top-24">
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-ink mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-walnut/70">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-walnut/70">
                      <span>Shipping</span>
                      <span className="text-walnut/40">
                        Calculated at checkout
                      </span>
                    </div>
                    <div className="pt-3 border-t border-sand flex justify-between font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-walnut/40 mt-3 leading-relaxed">
                    Shipping costs and taxes will be calculated during checkout.
                  </p>
                  <div className="mt-6">
                    <Button href="/checkout" variant="primary" className="w-full">
                      Proceed to Checkout
                    </Button>
                  </div>
                  <div className="mt-4 text-center">
                    <Link
                      href="/products"
                      className="text-sm text-walnut/50 hover:text-walnut transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
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