import Link from "next/link"
import Image from "next/image"

export default function CraftStory() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative">
        <Image
          src="/design/red-window-art/craft-story-banner.png"
          alt="The art of Yuxian paper cutting — handcraft process"
          width={800}
          height={600}
          className="w-full h-auto rounded-[12px]"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </div>

      <div>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold text-brand-text leading-tight">
          The Art of Yuxian Paper Cutting
        </h2>
        <div className="mt-5 space-y-4 text-brand-muted leading-relaxed">
          <p>
            Yuxian paper-cutting is a living heritage — a folk art that has
            flourished for over 500 years in the villages of Hebei Province,
            northern China. Unlike mass-produced decorations, each piece is
            entirely hand-cut by artisans who train for decades to master the
            craft.
          </p>
          <p>
            Using traditional scissors and fine engraving knives, artisans
            transform single sheets of dyed rice paper into intricate
            compositions. A single artwork may require thousands of precise
            cuts — a testament to patience, skill, and generations of
            accumulated wisdom.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-red hover:text-brand-red-alt transition-colors"
          >
            Discover the Craft
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}