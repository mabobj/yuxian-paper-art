import Image from "next/image"

export default function Newsletter() {
  return (
    <section className="bg-brand-footer relative overflow-hidden" style={{ height: "160px" }}>
      <Image
        src="/design/red-window-art/pattern-newsletter-rings.svg"
        alt=""
        fill
        className="object-cover opacity-40 pointer-events-none"
      />

      <div
        className="mx-auto px-6 lg:px-8 h-full flex items-center relative z-10"
        style={{ maxWidth: "1200px", width: "calc(100% - 56px)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <div className="text-center sm:text-left shrink-0 max-w-lg">
            <h2 className="font-[family-name:var(--font-heading)] text-lg lg:text-xl font-semibold text-white leading-snug">
              Receive stories of Chinese symbols, seasonal gift ideas, and new artwork releases.
            </h2>
            <p className="mt-1 text-xs text-white/50">
              No spam, unsubscribe any time.
            </p>
          </div>
          <form className="flex gap-2 min-w-0 shrink-0">
            <input
              type="email"
              placeholder="Email address"
              className="w-[280px] lg:w-[320px] rounded-[8px] border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button className="w-[130px] lg:w-[140px] inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium tracking-wide text-brand-footer bg-white hover:bg-white/90 transition-colors rounded-[8px] shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}