import Button from "./Button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-vermilion/70 mb-4 font-medium">
              Chinese Heritage Paper-Cut Art for Home & Gifting
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-ink">
              Bring Chinese Heritage Art
              <br />
              <span className="text-vermilion">Into Your Home</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-walnut/70">
              Handcrafted Yuxian paper-cut artworks made for modern homes,
              meaningful gifts, and blessings that carry cultural stories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/products" variant="primary">
                Shop Artworks
              </Button>
              <Button href="/story" variant="outline">
                Explore the Story
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vermilion/8 via-cream to-parchment" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-96">
                  <div className="absolute inset-0 border-2 border-vermilion/20 rounded-sm" />
                  <div className="absolute inset-3 border border-vermilion/15 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56 border-2 border-gold/20 rounded-sm rotate-3" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 border border-gold/15 rounded-sm -rotate-2" />
                  <div className="absolute top-[30%] left-[35%] w-16 h-16 border border-vermilion/25 rounded-full" />
                  <div className="absolute top-[32%] left-[37%] w-12 h-12 border border-vermilion/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-vermilion/50 rounded-full shadow-lg" />
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gold/40 rounded-full" />
                  <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold/30 rounded-full" />
                  <div className="absolute top-[60%] right-[30%] w-2 h-2 bg-gold/25 rounded-full" />
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cream/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-vermilion/10 rounded-full pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-14 h-14 border border-gold/15 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}