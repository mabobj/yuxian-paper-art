export default function Newsletter() {
  return (
    <section className="bg-brand-footer relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <svg
          viewBox="0 0 400 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <circle cx="50" cy="50" r="60" stroke="#FFF" strokeWidth="0.8" fill="none" />
          <circle cx="50" cy="50" r="45" stroke="#FFF" strokeWidth="0.5" fill="none" />
          <circle cx="350" cy="150" r="70" stroke="#FFF" strokeWidth="0.8" fill="none" />
          <circle cx="350" cy="150" r="55" stroke="#FFF" strokeWidth="0.5" fill="none" />
          <path d="M30,20 Q60,5 80,30" stroke="#FFF" strokeWidth="0.5" fill="none" />
          <path d="M320,130 Q350,110 380,140" stroke="#FFF" strokeWidth="0.5" fill="none" />
          <circle cx="200" cy="100" r="2" fill="#FFF" opacity="0.3" />
          <circle cx="150" cy="30" r="1.5" fill="#FFF" opacity="0.3" />
          <circle cx="300" cy="60" r="1.5" fill="#FFF" opacity="0.3" />
          <circle cx="100" cy="160" r="2" fill="#FFF" opacity="0.3" />
        </svg>
      </div>

      <div
        className="mx-auto px-6 lg:px-8 py-14 lg:py-16 relative z-10"
        style={{ maxWidth: "min(1180px, calc(100% - 48px))" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-white">
            Stories of Heritage, Delivered
          </h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Receive stories of Chinese symbols, seasonal gift ideas, and new
            artwork releases.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-[8px] border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-brand-footer bg-white hover:bg-white/90 transition-colors rounded-[8px] shrink-0">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-white/50">No spam, unsubscribe any time.</p>
        </div>
      </div>
    </section>
  )
}