import Image from "next/image"

const TRUST_ITEMS = [
  { icon: "trust-secure-payment", title: "Secure Payment", description: "Shop with confidence" },
  { icon: "trust-worldwide-shipping", title: "Worldwide Shipping", description: "Delivered to your door" },
  { icon: "trust-carefully-packaged", title: "Carefully Packaged", description: "Gift-ready packaging" },
  { icon: "trust-handmade-heritage", title: "Handmade Heritage", description: "Authentic & meaningful" },
]

export default function TrustBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
      {TRUST_ITEMS.map((item) => (
        <div key={item.title} className="flex flex-col items-center text-center py-3">
          <Image
            src={`/design/red-window-art/${item.icon}.svg`}
            alt=""
            width={30}
            height={30}
            className="w-[30px] h-[30px] mb-2.5 opacity-60"
          />
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-text">
            {item.title}
          </h3>
          <p className="text-[11px] text-brand-muted mt-0.5">{item.description}</p>
        </div>
      ))}
    </div>
  )
}