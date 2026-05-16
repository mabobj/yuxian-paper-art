import Link from "next/link"

const FOOTER_LINKS = {
  Shop: [
    { href: "/products", label: "All Products" },
    { href: "/products", label: "Wall Art" },
    { href: "/products", label: "Wedding Gifts" },
    { href: "/products", label: "Zodiac Collection" },
  ],
  About: [
    { href: "/story", label: "Our Story" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/contact", label: "FAQ" },
    { href: "/contact", label: "Shipping" },
    { href: "/contact", label: "Wholesale" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-wide text-ink"
            >
              Yuxian Paper Art
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              Handcrafted Chinese paper-cut heritage for meaningful gifts and
              modern interiors.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wide text-ink mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-walnut/70 hover:text-walnut transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-sand">
          <p className="text-xs text-walnut/50 text-center">
            &copy; {new Date().getFullYear()} Yuxian Paper Art. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}