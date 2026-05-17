import Image from "next/image"

type BrandImageProps = {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  imageClassName?: string
  objectPosition?: string
}

export default function BrandImage({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 25vw, 100vw",
  className = "",
  imageClassName = "",
  objectPosition = "center",
}: BrandImageProps) {
  return (
    <div className={`relative overflow-hidden bg-brand-card ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-cover ${imageClassName}`}
        style={{ objectPosition }}
      />
    </div>
  )
}