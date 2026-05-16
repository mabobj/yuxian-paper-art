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
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-semibold tracking-wide text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-walnut/60 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}