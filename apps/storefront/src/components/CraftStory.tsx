export default function CraftStory() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative hidden lg:block">
        <div className="aspect-square rounded-sm bg-cream border border-sand shadow-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 border border-gold/20 rounded-full" />
              <div className="absolute inset-4 border border-gold/15 rounded-full" />
              <div className="absolute inset-8 border border-gold/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-vermilion/15 rounded-sm rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-vermilion/10 rounded-sm -rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-vermilion/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-semibold tracking-wide text-ink">
          The Art of the Cut
        </h2>
        <div className="mt-6 space-y-4 text-walnut/70 leading-relaxed">
          <p>
            Yuxian paper-cutting is a living heritage — a folk art that has
            flourished for over 500 years in the villages of Hebei Province.
            Unlike mass-produced decorations, each piece is entirely hand-cut by
            artisans who train for decades to master the craft.
          </p>
          <p>
            Using traditional scissors and fine engraving knives, artisans
            transform single sheets of dyed rice paper into intricate
            compositions of extraordinary delicacy. A single artwork may require
            thousands of precise cuts, each one irreversible — a testament to
            patience, skill, and generations of accumulated wisdom.
          </p>
          <p>
            What you hold is not merely decoration. It is a fragment of living
            culture, shaped by hands that carry forward a tradition recognized
            by UNESCO as an Intangible Cultural Heritage of Humanity.
          </p>
        </div>
      </div>
    </div>
  )
}