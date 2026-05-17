import Link from "next/link"
import Image from "next/image"

export default function CraftStory() {
  return (
    <div className="relative overflow-hidden rounded-lg" style={{ height: "210px" }}>
      <Image
        src="/design/red-window-art/craft-story-banner.png"
        alt="The art of Yuxian paper cutting — handcraft process"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-brand-text/30" />

      <div className="relative z-10 h-full flex items-center">
        <div
          className="mx-auto flex items-center justify-end h-full"
          style={{ maxWidth: "1180px", width: "calc(100% - 48px)" }}
        >
          <div className="max-w-[44%] text-white py-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold leading-tight">
              The Art of Yuxian Paper Cutting
            </h2>
            <p className="mt-2 text-sm text-white/80 uppercase tracking-widest">
              500-Year-Old Living Heritage
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75 max-w-md">
              Rooted in the ancient folk tradition of Yuxian, our paper cuts are meticulously handcrafted by master artisans. Each cut carries centuries of symbolism, blessings, and stories — brought to life with patience, precision, and heart.
            </p>
            <div className="mt-4">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                Discover the Craft
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}