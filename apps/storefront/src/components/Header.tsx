import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { href: "/products", label: "Shop", hasDropdown: true },
  { href: "/products", label: "Gifts", hasDropdown: true },
  { href: "/products", label: "Home Decor", hasDropdown: true },
  { href: "/blessings", label: "Blessings", hasDropdown: true },
  { href: "/story", label: "Our Story" },
  { href: "/journal", label: "Journal" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-brand-border">
      <div
        className="mx-auto flex items-center justify-between"
        style={{ width: "1086px", maxWidth: "calc(100% - 48px)", height: "78px" }}
      >
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/design/red-window-art/logo-seal-red-window-art.svg"
            alt="Red Window Art"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-[family-name:var(--font-heading)] text-[26px] font-semibold tracking-tight text-brand-red leading-none">
            Red Window Art
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-[30px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-brand-muted hover:text-brand-text transition-colors inline-flex items-center gap-1"
            >
              {link.label}
              {link.hasDropdown && (
                <Image
                  src="/design/red-window-art/icon-chevron-down.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="w-2.5 h-2.5 opacity-50"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <button className="p-1.5 text-brand-muted hover:text-brand-text transition-colors" aria-label="Search">
            <Image
              src="/design/red-window-art/icon-search.svg"
              alt=""
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
          </button>
          <button className="p-1.5 text-brand-muted hover:text-brand-text transition-colors" aria-label="Account">
            <Image
              src="/design/red-window-art/icon-account.svg"
              alt=""
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
          </button>
          <Link href="/cart" className="p-1.5 text-brand-muted hover:text-brand-text transition-colors relative" aria-label="Cart">
            <Image
              src="/design/red-window-art/icon-cart.svg"
              alt=""
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center rounded-full bg-brand-red text-white text-[9px] font-medium leading-none">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}