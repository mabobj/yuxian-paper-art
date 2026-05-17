import Image from "next/image"

export default function Newsletter() {
  return (
    <section className="bg-brand-footer relative overflow-hidden" style={{ height: "82px" }}>
      <Image
        src="/design/red-window-art/newsletter-left-ornament.png"
        alt=""
        width={80}
        height={80}
        className="absolute left-0 top-0 h-full w-auto opacity-30 pointer-events-none hidden lg:block"
      />
      <Image
        src="/design/red-window-art/newsletter-right-ornament.png"
        alt=""
        width={80}
        height={80}
        className="absolute right-0 top-0 h-full w-auto opacity-30 pointer-events-none hidden lg:block"
      />

      <div
        className="mx-auto h-full flex items-center relative z-10"
        style={{ width: "1086px", maxWidth: "calc(100% - 48px)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
          <h2 className="font-[family-name:var(--font-heading)] text-sm lg:text-base font-semibold text-white leading-snug text-center sm:text-left shrink-0 max-w-lg">
            Receive stories of Chinese symbols, seasonal gift ideas, and new artwork releases.
          </h2>
          <form className="flex gap-1.5 min-w-0 shrink-0">
            <input
              type="email"
              placeholder="Email address"
              className="w-[240px] lg:w-[280px] rounded-[6px] border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button className="w-[110px] lg:w-[120px] inline-flex items-center justify-center px-3 py-2 text-xs font-medium tracking-wide text-brand-footer bg-white hover:bg-white/90 transition-colors rounded-[6px] shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}