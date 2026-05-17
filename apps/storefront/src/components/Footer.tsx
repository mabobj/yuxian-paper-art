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
        className="mx-auto py-10"
        style={{ width: "1086px", maxWidth: "calc(100% - 48px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-wide text-brand-red"
            >
              Red Window Art
            </Link>
            <p className="mt-2.5 text-xs leading-relaxed text-brand-muted">
              Chinese Heritage Paper-Cut Art for Home & Gifting.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-[family-name:var(--font-heading)] text-xs font-semibold tracking-wide text-brand-text mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-brand-muted/80 hover:text-brand-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border">
          <p className="text-[11px] text-brand-muted/50 text-center">
            &copy; {new Date().getFullYear()} Red Window Art. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}