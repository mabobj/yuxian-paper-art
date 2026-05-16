import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const NAV_LINKS = [
  { href: "/products", label: "Shop" },
  { href: "/products", label: "Gifts" },
  { href: "/products", label: "Home Decor" },
  { href: "/blessings", label: "Blessings" },
  { href: "/story", label: "Our Story" },
  { href: "/journal", label: "Journal" },
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
            Red Window Art
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
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
          </div>
        </div>
      </div>
    </header>
  )
}