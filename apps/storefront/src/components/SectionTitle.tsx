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
      <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold tracking-tight text-brand-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-brand-muted max-w-xl mx-auto leading-relaxed text-sm lg:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}