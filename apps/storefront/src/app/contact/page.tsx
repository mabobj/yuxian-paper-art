import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import Button from "@/components/Button"
import { Mail, Package, Gift } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Red Window Art",
  description:
    "Get in touch with Yuxian Paper Art for inquiries, wholesale, gift concierge, or customer support.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-walnut/60 leading-relaxed">
                We would love to hear from you — whether you have a question
                about our collection, need help finding the perfect gift, or are
                interested in wholesale partnerships.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 bg-cream border-y border-sand">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-8">
                  Send Us a Message
                </h2>
                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-walnut mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-sm border border-sand bg-parchment px-4 py-2.5 text-sm text-ink placeholder:text-walnut/30 focus:outline-none focus:border-walnut/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-walnut mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-sm border border-sand bg-parchment px-4 py-2.5 text-sm text-ink placeholder:text-walnut/30 focus:outline-none focus:border-walnut/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-walnut mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-sm border border-sand bg-parchment px-4 py-2.5 text-sm text-ink placeholder:text-walnut/30 focus:outline-none focus:border-walnut/40 transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button variant="primary" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 bg-parchment flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-vermilion" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
                      General Inquiries
                    </h3>
                    <p className="text-sm text-walnut/60 mt-1">
                      hello@yuxianpaperart.com
                    </p>
                    <p className="text-xs text-walnut/40 mt-1">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 bg-parchment flex items-center justify-center shrink-0">
                    <Package className="h-4 w-4 text-vermilion" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
                      Wholesale & Bulk Orders
                    </h3>
                    <p className="text-sm text-walnut/60 mt-1">
                      wholesale@yuxianpaperart.com
                    </p>
                    <p className="text-xs text-walnut/40 mt-1">
                      For galleries, museums, boutiques, and corporate gifting.
                      Minimum order quantities apply.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 bg-parchment flex items-center justify-center shrink-0">
                    <Gift className="h-4 w-4 text-vermilion" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
                      Gift Concierge
                    </h3>
                    <p className="text-sm text-walnut/60 mt-1">
                      gifts@yuxianpaperart.com
                    </p>
                    <p className="text-xs text-walnut/40 mt-1">
                      Need help choosing the perfect gift? Our concierge team
                      can guide you with personalized recommendations.
                    </p>
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