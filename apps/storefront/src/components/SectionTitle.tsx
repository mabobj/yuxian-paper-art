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
      <h2 className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-medium tracking-tight text-brand-text leading-[1.2]">
        {title}
      </h2>
      <div className="mx-auto mt-2 w-6 h-px bg-brand-gold/50" />
      {subtitle && (
        <p className="mt-2 text-brand-muted max-w-xl mx-auto leading-relaxed text-xs lg:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  )
}