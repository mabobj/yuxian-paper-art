import Link from "next/link"

const FOOTER_LINKS = {
  Shop: [
    { href: "/products", label: "All Artworks" },
    { href: "/products", label: "Gifts" },
    { href: "/products", label: "Home Decor" },
    { href: "/blessings", label: "Blessings" },
  ],
  Explore: [
    { href: "/story", label: "Our Story" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/contact", label: "FAQ" },
    { href: "/contact", label: "Shipping" },
    { href: "/contact", label: "Wholesale" },
    { href: "/contact", label: "Gift Concierge" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-card">
      <div
        className="mx-auto px-6 lg:px-8 py-14"
        style={{ maxWidth: "min(1180px, calc(100% - 48px))" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide text-brand-red"
            >
              Red Window Art
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Chinese Heritage Paper-Cut Art for Home & Gifting.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wide text-brand-text mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted/80 hover:text-brand-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border">
          <p className="text-xs text-brand-muted/50 text-center">
            &copy; {new Date().getFullYear()} Red Window Art. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}