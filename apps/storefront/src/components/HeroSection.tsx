import Button from "./Button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-ink">
              Heritage Cut by Hand,
              <br />
              <span className="text-walnut">Light Framed for Modern Homes.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-walnut/70">
              Discover handcrafted Yuxian paper-cut artworks inspired by
              centuries of Chinese folk tradition.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/products" variant="primary">
                Shop Collection
              </Button>
              <Button href="/story" variant="outline">
                Explore the Craft
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-sm bg-cream border border-sand shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-80">
                  <div className="absolute inset-0 border-2 border-gold/30 rounded-full" />
                  <div className="absolute inset-4 border border-gold/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 border-2 border-vermilion/20 rounded-sm rotate-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-40 border border-vermilion/15 rounded-sm -rotate-6" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-vermilion/60 rounded-full" />
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gold/40 rounded-full" />
                  <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-gold/30 rounded-full" />
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cream/30 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-full pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/15 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}