import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div
        className="mx-auto px-6 lg:px-8 py-14 lg:py-0 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        style={{
          maxWidth: "min(1180px, calc(100% - 48px))",
          minHeight: "560px",
        }}
      >
        <div className="max-w-xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-tight text-brand-text">
            Bring Chinese Heritage Art
            <br />
            <span className="text-brand-red">Into Your Home</span>
          </h1>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-brand-muted max-w-lg">
            Handcrafted paper-cut artworks inspired by Yuxian tradition — made
            for modern homes, meaningful gifts, and cultural collectors.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide text-white bg-brand-red hover:bg-brand-red/90 transition-colors rounded-[8px]"
            >
              Shop Artworks
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide text-brand-brown border border-brand-brown/30 hover:bg-brand-brown hover:text-brand-bg transition-colors rounded-[8px]"
            >
              Explore the Story
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <Image
            src="/design/red-window-art/hero-scene.png"
            alt="Red Window Art — paper-cut artwork in a warm modern home setting"
            width={960}
            height={720}
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 1024px) 0px, 480px"
          />
        </div>
      </div>
    </section>
  )
}