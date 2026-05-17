import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ height: "337px" }}>
      {/* 背景图：完整的 hero-scene.png */}
      <Image
        src="/design/red-window-art/hero-scene.png"
        alt="Red Window Art — paper-cut artwork in a warm modern home setting"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 100vw, 1086px"
      />
      {/* 左侧装饰层 */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div
          className="mx-auto pl-8 lg:pl-0"
          style={{ width: "1086px", maxWidth: "calc(100% - 48px)" }}
        >
          <div className="relative w-[45%]">
            <Image
              src="/design/red-window-art/hero-left-floral-decoration.png"
              alt=""
              width={200}
              height={200}
              className="absolute -top-6 -left-10 w-[180px] h-[180px] opacity-60 pointer-events-none hidden lg:block"
            />
            <Image
              src="/design/red-window-art/hero-left-seal-decoration.png"
              alt=""
              width={80}
              height={80}
              className="absolute bottom-0 left-0 w-[70px] h-[70px] opacity-50 pointer-events-none hidden lg:block"
            />
            <h1 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[36px] font-semibold text-brand-text leading-[1.12] tracking-tight">
              Bring Chinese Heritage Art
              <br />
              <span className="text-brand-red">Into Your Home</span>
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted max-w-sm">
              Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
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
        </div>
      </div>
    </section>
  )
}
