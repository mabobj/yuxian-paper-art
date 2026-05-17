import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-bg flex items-center" style={{ height: "460px" }}>
      <div
        className="mx-auto grid lg:grid-cols-[42%_58%] gap-0 items-center h-full"
        style={{ maxWidth: "1320px", width: "calc(100% - 56px)" }}
      >
        <div className="max-w-lg py-8 relative">
          <Image
            src="/design/red-window-art/pattern-floral-corner.svg"
            alt=""
            width={200}
            height={200}
            className="absolute -top-4 -left-4 w-[180px] h-[180px] opacity-[0.06] pointer-events-none hidden lg:block"
          />
          <h1
            className="font-[family-name:var(--font-heading)] text-[42px] lg:text-[48px] font-semibold text-brand-text leading-[1.08] tracking-tight relative"
          >
            Bring Chinese Heritage Art
            <br />
            <span className="text-brand-red">Into Your Home</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted max-w-md relative">
            Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 relative">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-[8px]"
            >
              Shop Artworks
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-brand-brown border border-brand-brown/30 hover:bg-brand-brown hover:text-brand-bg transition-colors rounded-[8px]"
            >
              Explore the Story
            </Link>
          </div>
        </div>

        <div className="relative h-full hidden lg:block overflow-hidden">
          <Image
            src="/design/red-window-art/hero-scene-right-focused.png"
            alt="Red Window Art — paper-cut artwork in a warm modern home setting"
            fill
            className="object-cover"
            priority
            sizes="58vw"
          />
        </div>
      </div>
    </section>
  )
}