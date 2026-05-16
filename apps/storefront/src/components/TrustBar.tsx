import { ShieldCheck, Globe, Package, Scissors } from "lucide-react"

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Encrypted checkout",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Delivered with care",
  },
  {
    icon: Package,
    title: "Carefully Packaged",
    description: "Gift-ready presentation",
  },
  {
    icon: Scissors,
    title: "Handmade Heritage",
    description: "UNESCO-recognized craft",
  },
]

export default function TrustBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {TRUST_ITEMS.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center text-center p-6"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/20 bg-cream mb-3">
            <item.icon className="h-4 w-4 text-gold" />
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-sm font-semibold text-ink">
            {item.title}
          </h3>
          <p className="text-xs text-walnut/50 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  )
}