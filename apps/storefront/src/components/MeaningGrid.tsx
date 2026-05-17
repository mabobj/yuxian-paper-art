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
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5">
      {MEANINGS.map((meaning) => (
        <Link
          key={meaning.title}
          href={meaning.href}
          className="group flex flex-col items-center justify-center text-center rounded-[8px] border border-brand-border bg-brand-card shadow-[0_4px_12px_rgba(59,42,31,0.05)] hover:-translate-y-0.5 transition-all duration-300"
          style={{ height: "87px" }}
        >
          <Image
            src={`/design/red-window-art/${meaning.icon}.svg`}
            alt=""
            width={34}
            height={34}
            className="w-[34px] h-[34px] mb-1 opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <h3 className="font-[family-name:var(--font-heading)] text-xs font-semibold text-brand-text">
            {meaning.title}
          </h3>
        </Link>
      ))}
    </div>
  )
}