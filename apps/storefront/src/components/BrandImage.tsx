import Image from "next/image"

type Props = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  sizes?: string
  priority?: boolean
  objectPosition?: string
}

export default function BrandImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "(min-width: 1024px) 25vw, 100vw",
  priority = false,
  objectPosition = "center"
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition }}
      />
    </div>
  )
}