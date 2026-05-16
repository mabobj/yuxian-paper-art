import Link from "next/link"
import Image from "next/image"

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
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-brand-border">
      <div
        className="mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]"
        style={{ maxWidth: "min(1180px, calc(100% - 48px))" }}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/design/red-window-art/vectors/logo-seal-red-window-art.svg"
            alt="Red Window Art"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide text-brand-red">
            Red Window Art
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-brand-muted hover:text-brand-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            className="p-2 text-brand-muted hover:text-brand-text transition-colors"
            aria-label="Search"
          >
            <Image
              src="/design/red-window-art/vectors/icon-search.svg"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </button>
          <button
            className="p-2 text-brand-muted hover:text-brand-text transition-colors"
            aria-label="Account"
          >
            <Image
              src="/design/red-window-art/vectors/icon-account.svg"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </button>
          <Link
            href="/cart"
            className="p-2 text-brand-muted hover:text-brand-text transition-colors"
            aria-label="Cart"
          >
            <Image
              src="/design/red-window-art/vectors/icon-cart.svg"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}