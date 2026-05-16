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
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
      {MEANINGS.map((meaning) => (
        <Link
          key={meaning.title}
          href={meaning.href}
          className="group flex flex-col items-center text-center p-5 rounded-[12px] border border-brand-border/60 bg-brand-card hover:shadow-[0_6px_18px_rgba(59,42,31,0.08)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Image
            src={`/design/red-window-art/vectors/${meaning.icon}.svg`}
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-text">
            {meaning.title}
          </h3>
        </Link>
      ))}
    </div>
  )
}