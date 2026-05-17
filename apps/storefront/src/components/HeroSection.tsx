import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-bg" style={{ height: "337px" }}>
      <div
        className="mx-auto grid grid-cols-[45%_55%] gap-0 items-center h-full"
        style={{ width: "1086px", maxWidth: "calc(100% - 48px)" }}
      >
        <div className="relative py-6 pl-2">
          <Image
            src="/design/red-window-art/hero-left-floral-decoration.png"
            alt=""
            width={120}
            height={120}
            className="absolute -top-2 -left-4 w-[100px] h-[100px] opacity-40 pointer-events-none hidden lg:block"
          />
          <Image
            src="/design/red-window-art/hero-left-seal-decoration.png"
            alt=""
            width={60}
            height={60}
            className="absolute bottom-2 right-8 w-[50px] h-[50px] opacity-30 pointer-events-none hidden lg:block"
          />
          <h1 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[36px] font-semibold text-brand-text leading-[1.12] tracking-tight relative">
            Bring Chinese Heritage Art
            <br />
            <span className="text-brand-red">Into Your Home</span>
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted max-w-sm relative">
            Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5 relative">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-[6px]"
            >
              Shop Artworks
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-brand-brown border border-brand-brown/30 hover:bg-brand-brown hover:text-brand-bg transition-colors rounded-[6px]"
            >
              Explore the Story
            </Link>
          </div>
        </div>

        <div className="relative h-full hidden lg:block overflow-hidden">
          <Image
            src="/design/red-window-art/hero-right-scene.png"
            alt="Red Window Art — paper-cut artwork in a warm modern home setting"
            fill
            className="object-cover"
            priority
            sizes="55vw"
          />
        </div>
      </div>
    </section>
  )
}