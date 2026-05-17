import Link from "next/link"
import Image from "next/image"

export default function CraftStory() {
  return (
    <div className="relative overflow-hidden rounded-[8px] bg-[#F4EDE0]" style={{ height: "160px" }}>
      <div className="absolute inset-0 grid grid-cols-[42%_58%]">
        <div className="relative overflow-hidden">
          <Image
            src="/design/red-window-art/craft-left-image.png"
            alt="The art of Yuxian paper cutting — handcraft process"
            fill
            className="object-cover"
            sizes="42vw"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/design/red-window-art/craft-right-bird-pattern.png"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            sizes="58vw"
          />
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div
          className="mx-auto grid grid-cols-[42%_58%] items-center h-full"
          style={{ width: "1086px", maxWidth: "calc(100% - 48px)" }}
        >
          <div />
          <div className="pl-8 lg:pl-10 py-4">
            <h2 className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-semibold text-brand-text leading-tight">
              The Art of Yuxian Paper Cutting
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-brand-muted max-w-sm" style={{ lineHeight: "1.6" }}>
              Rooted in the ancient folk tradition of Yuxian, our paper cuts are meticulously handcrafted by master artisans. Each cut carries centuries of symbolism, blessings, and stories — brought to life with patience, precision, and heart.
            </p>
            <div className="mt-2">
              <Link
                href="/story"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-red hover:text-brand-red/80 transition-colors"
              >
                Discover the Craft
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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