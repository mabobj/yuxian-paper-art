import Link from "next/link"
import { Product } from "@/types/product"
import { formatPrice } from "@/lib/utils"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-sm border border-sand bg-cream overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-parchment">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-52">
            <div className="absolute inset-0 border-2 border-gold/25 rounded-full" />
            <div className="absolute inset-3 border border-gold/15 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-32 border-2 border-vermilion/15 rounded-sm rotate-6" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-vermilion/40 rounded-full" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold/30 rounded-full" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cream/40 to-transparent pointer-events-none" />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink leading-snug group-hover:text-walnut transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-walnut/60 leading-relaxed line-clamp-2">
          {product.subtitle}
        </p>
        <p className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-semibold text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}