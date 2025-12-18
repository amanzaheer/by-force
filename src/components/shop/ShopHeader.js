export default function ShopHeader() {
  return (
    <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md shadow-[0_24px_70px_rgba(44,62,80,0.18)]">
          {/* top highlight line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />

          {/* animated scanlines */}
          <div className="pointer-events-none absolute inset-0 opacity-20 pixel-scanlines animate-scanlines" />

          {/* soft blobs */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-white/16 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          {/* floating pixel accents */}
          <div className="pointer-events-none absolute top-6 left-8 w-3.5 h-3.5 bg-white/25 border-2 border-[#2C3E50]/30 animate-float-1" />
          <div className="pointer-events-none absolute top-10 right-10 w-3 h-3 bg-[#4A90E2]/25 border-2 border-[#2C3E50]/30 animate-float-2" />
          <div className="pointer-events-none absolute bottom-10 left-16 w-2.5 h-2.5 bg-[#E74C3C]/20 border-2 border-[#2C3E50]/30 animate-float-3" />

          <div className="px-6 md:px-10 py-8 md:py-10">
            {/* mini HUD */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/15 border border-white/30 shadow-[0_10px_25px_rgba(44,62,80,0.12)]">
                <span className="w-2.5 h-2.5 bg-[#4A90E2] border-2 border-[#2C3E50]/40 animate-pulse" />
                <span className="pixel-text font-extrabold text-xs text-[#2C3E50]">
                  SHOP MODE
                </span>
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/25">
                <span
                  className="w-2.5 h-2.5 bg-[#E74C3C] border-2 border-[#2C3E50]/40 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span className="pixel-text font-extrabold text-xs text-[#2C3E50]">
                  LIMITED STOCK
                </span>
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-extrabold text-[#2C3E50] pixel-text uppercase text-center leading-tight"
              style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.35)" }}
            >
              Deals That Move
            </h1>
            <p className="mt-3 text-base md:text-xl text-[#2C3E50] pixel-text font-semibold text-center">
              Single Pairs • Multipacks • Big Savings
            </p>

            {/* info bar (cleaner, no border) */}
            <div className="mt-6">
              <div className="relative overflow-hidden rounded-2xl bg-white/12 shadow-[0_16px_40px_rgba(44,62,80,0.14)] px-4 md:px-6 py-3 text-center">
                <div className="pointer-events-none absolute inset-0 opacity-15 pixel-scanlines animate-scanlines" />
                <span className="relative text-xs md:text-sm text-[#2C3E50] pixel-text font-extrabold">
                  All sizes stocked, authentic, and shipped direct — no markups, just value.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


