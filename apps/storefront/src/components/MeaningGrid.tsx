import Link from "next/link"
import Image from "next/image"

const MEANINGS = [
  { icon: "meaning-prosperity", title: "Prosperity", href: "/blessings" },
  { icon: "meaning-love", title: "Love", href: "/blessings" },
  { icon: "meaning-health", title: "Health", href: "/blessings" },
  { icon: "meaning-protection", title: "Protection", href: "/blessings" },
  { icon: "meaning-harmony", title: "Harmony", href: "/blessings" },
  { icon: "meaning-joy", title: "Joy", href: "/blessings" },
]

export default function MeaningGrid() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
      {MEANINGS.map((meaning) => (
        <Link
          key={meaning.title}
          href={meaning.href}
          className="group flex flex-col items-center justify-center text-center rounded-[8px] border border-brand-border bg-brand-card shadow-[0_8px_24px_rgba(59,42,31,0.07)] hover:-translate-y-0.5 transition-all duration-300"
          style={{ height: "104px" }}
        >
          <Image
            src={`/design/red-window-art/${meaning.icon}.svg`}
            alt=""
            width={44}
            height={44}
            className="w-[44px] h-[44px] mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-text">
            {meaning.title}
          </h3>
        </Link>
      ))}
    </div>
  )
}