import Link from "next/link"
import Image from "next/image"

export default function CraftStory() {
  return (
    <div className="relative overflow-hidden rounded-[8px]" style={{ height: "160px" }}>
      <div className="relative h-full w-full">
        <Image
          src="/design/red-window-art/craft-story-banner.png"
          alt="The Art of Yuxian Paper Cutting — handcraft process"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1086px"
        />
      </div>
    </div>
  )
}
