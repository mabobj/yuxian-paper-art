type SectionTitleProps = {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-brand-text leading-[1.2]">
        {title}
      </h2>
      <div className="mx-auto mt-3 w-8 h-0.5 bg-brand-gold/50" />
      {subtitle && (
        <p className="mt-3 text-brand-muted max-w-xl mx-auto leading-relaxed text-sm lg:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}