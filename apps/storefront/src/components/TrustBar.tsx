import Image from "next/image"

const TRUST_ITEMS = [
  { icon: "trust-secure-payment", title: "Secure Payment", description: "Shop with confidence" },
  { icon: "trust-worldwide-shipping", title: "Worldwide Shipping", description: "Delivered to your door" },
  { icon: "trust-carefully-packaged", title: "Carefully Packaged", description: "Gift-ready packaging" },
  { icon: "trust-handmade-heritage", title: "Handmade Heritage", description: "Authentic & meaningful" },
]

export default function TrustBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {TRUST_ITEMS.map((item) => (
        <div key={item.title} className="flex flex-col items-center text-center py-3">
          <Image
            src={`/design/red-window-art/vectors/${item.icon}.svg`}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 mb-3 opacity-60"
          />
          <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-brand-text">
            {item.title}
          </h3>
          <p className="text-xs text-brand-muted mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  )
}