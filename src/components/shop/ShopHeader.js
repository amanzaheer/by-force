export default function ShopHeader() {
  return (
    <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border-[3px] border-[#2C3E50] shadow-[8px_8px_0px_0px_#2C3E50] bg-white/15 backdrop-blur-sm">
          {/* animated scanlines */}
          <div className="pointer-events-none absolute inset-0 opacity-25 pixel-scanlines animate-scanlines" />

          {/* soft blobs */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="px-6 md:px-10 py-8 md:py-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-[#4A90E2] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse" />
              <div
                className="w-3 h-3 bg-[#3A7BC8] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-3 h-3 bg-[#E74C3C] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C3E50] pixel-text uppercase text-center leading-tight">
              Deals That Move
            </h1>
            <p className="mt-3 text-base md:text-xl text-[#2C3E50] pixel-text font-semibold text-center">
              Single Pairs • Multipacks • Big Savings
            </p>

            {/* info bar (like your reference) */}
            <div className="mt-6">
              <div className="relative overflow-hidden rounded-xl border-2 border-[#2C3E50] bg-white/20 shadow-[4px_4px_0px_0px_#2C3E50] px-4 md:px-6 py-3 text-center">
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


