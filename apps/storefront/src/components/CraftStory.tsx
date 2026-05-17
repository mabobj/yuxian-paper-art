import Link from "next/link"
import Image from "next/image"

export default function CraftStory() {
  return (
    <div className="relative overflow-hidden rounded-[8px]" style={{ height: "240px" }}>
      <div className="absolute inset-0 grid grid-cols-[48%_52%]">
        <div className="relative overflow-hidden">
          <Image
            src="/design/red-window-art/craft-story-band.png"
            alt="The art of Yuxian paper cutting — handcraft process"
            fill
            className="object-cover"
            sizes="48vw"
          />
        </div>
        <div className="bg-[#F4EDE0]" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div
          className="mx-auto grid grid-cols-[48%_52%] items-center h-full w-full"
          style={{ maxWidth: "1200px", width: "calc(100% - 56px)" }}
        >
          <div />
          <div className="pl-10 lg:pl-14 py-8">
            <h2 className="font-[family-name:var(--font-heading)] text-[26px] lg:text-[30px] font-semibold text-brand-text leading-tight">
              The Art of Yuxian Paper Cutting
            </h2>
            <p className="mt-2 text-sm text-brand-muted/60 uppercase tracking-widest">
              500-Year-Old Living Heritage
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted max-w-md" style={{ lineHeight: "1.7" }}>
              Rooted in the ancient folk tradition of Yuxian, our paper cuts are meticulously handcrafted by master artisans. Each cut carries centuries of symbolism, blessings, and stories — brought to life with patience, precision, and heart.
            </p>
            <div className="mt-4">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-red hover:text-brand-red/80 transition-colors"
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