import Button from "./Button"

export default function Newsletter() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold text-ink">
        Stories of Heritage, Delivered
      </h2>
      <p className="mt-3 text-walnut/60 leading-relaxed">
        Receive cultural stories, gift inspiration, and first access to new
        artworks from Yuxian master artisans.
      </p>
      <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 rounded-sm border border-sand bg-parchment px-4 py-2.5 text-sm text-ink placeholder:text-walnut/30 focus:outline-none focus:border-walnut/40 transition-colors"
        />
        <Button variant="primary">Subscribe</Button>
      </form>
      <p className="mt-3 text-xs text-walnut/40">
        No spam, only meaningful stories. Unsubscribe anytime.
      </p>
    </div>
  )
}