import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import { Package, CreditCard, CheckCircle, User, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Checkout | Red Window Art",
  description: "Complete your purchase.",
}

const STEPS = [
  {
    icon: User,
    label: "Customer Information",
    description: "Name, email, and contact details",
  },
  {
    icon: Truck,
    label: "Shipping Address",
    description: "Delivery address and recipient information",
  },
  {
    icon: Package,
    label: "Shipping Method",
    description: "Select your preferred delivery option",
  },
  {
    icon: CreditCard,
    label: "Payment Method",
    description: "Credit card, PayPal, and more",
  },
  {
    icon: CheckCircle,
    label: "Order Confirmation",
    description: "Review and confirm your order",
  },
]

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink">
              Checkout
            </h1>
          </Container>
        </section>

        <section className="pb-16 lg:pb-24">
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="rounded-sm border border-sand bg-cream p-8 lg:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 bg-parchment mb-6">
                  <Package className="h-7 w-7 text-vermilion" />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink">
                  Checkout Integration Coming Soon
                </h2>
                <p className="mt-3 text-walnut/60 leading-relaxed max-w-md mx-auto">
                  Checkout integration will be added in the next phase. We are
                  building a seamless purchasing experience that includes the
                  following steps:
                </p>

                <div className="mt-10 space-y-5 text-left">
                  {STEPS.map((step) => (
                    <div
                      key={step.label}
                      className="flex items-start gap-4 p-4 rounded-sm border border-sand/50 bg-parchment"
                    >
                      <div className="w-9 h-9 rounded-full border border-gold/20 bg-cream flex items-center justify-center shrink-0">
                        <step.icon className="h-4 w-4 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-sm font-semibold text-ink">
                          {step.label}
                        </h3>
                        <p className="text-xs text-walnut/50 mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-xs text-walnut/40">
                  In the meantime, please contact us at hello@yuxianpaperart.com
                  to place an order.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}