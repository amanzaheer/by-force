import React from "react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#2C3E50] via-[#233242] to-[#1B2836] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* subtle scanlines + glow (visual only) */}
      <div className="pointer-events-none absolute inset-0 opacity-12 pixel-scanlines animate-scanlines" />
      <div className="pointer-events-none absolute -top-28 -right-28 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 bg-white/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div
            className="text-2xl md:text-3xl font-extrabold pixel-text tracking-wider"
            style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.35)" }}
          >
            BYFORCE
          </div>
          <div className="text-base md:text-lg pixel-text font-bold text-white/90 hover:text-white transition-colors duration-200 cursor-pointer">
            info@byforce.uk
          </div>
          <div className="text-base md:text-lg pixel-text font-bold text-white/90 hover:text-white transition-colors duration-200 cursor-pointer">
            +44 7500 324 868
          </div>
        </div>
      </div>
    </footer>
  );
}


