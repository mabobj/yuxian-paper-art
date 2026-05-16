import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/products", label: "Shop" },
  { href: "/story", label: "Story" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b border-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-wide text-ink hover:text-walnut transition-colors"
          >
            Yuxian Paper Art
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-walnut/80 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-walnut hover:text-ink transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <button
              className="md:hidden p-2 text-walnut hover:text-ink transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}