import React from "react";

export default function ProductShowcase({
  bundles,
  selectedColor,
  onSelectColor,
  selectedBundle,
  onSelectBundle,
}) {
  return (
    <section
      id="shop"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2C3E50] pixel-text mb-4">
            DEALS THAT MOVE
          </h2>
          <p className="text-xl text-[#34495E] pixel-text">
            Single Pairs, Multipacks, Big Savings
          </p>
        </div>

        {/* Color Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => onSelectColor("all-white")}
            className={`px-8 py-4 rounded-lg font-bold text-xl pixel-text pixel-border transition-all ${
              selectedColor === "all-white"
                ? "bg-[#2C3E50] text-white pixel-shadow"
                : "bg-white text-[#2C3E50] hover:scale-105"
            }`}
          >
            ALL-WHITES
          </button>
          <button
            onClick={() => onSelectColor("all-black")}
            className={`px-8 py-4 rounded-lg font-bold text-xl pixel-text pixel-border transition-all ${
              selectedColor === "all-black"
                ? "bg-[#2C3E50] text-white pixel-shadow"
                : "bg-white text-[#2C3E50] hover:scale-105"
            }`}
          >
            ALL-BLACKS
          </button>
        </div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`bg-white rounded-xl p-6 pixel-border pixel-shadow-lg hover:scale-105 transition-all cursor-pointer ${
                selectedBundle === bundle.id ? "ring-4 ring-[#E74C3C]" : ""
              }`}
              onClick={() => onSelectBundle(bundle.id)}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2 pixel-text">
                  {bundle.pairs} PAIRS
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] rounded-lg pixel-border-2 mb-4 flex items-center justify-center">
                  <span className="text-6xl pixel-text">👟</span>
                </div>
                <div className="text-4xl font-bold text-[#E74C3C] pixel-text mb-2">
                  £{bundle.price.toFixed(2)}
                </div>
                {bundle.savings && (
                  <div className="text-sm text-green-600 font-bold pixel-text">
                    {bundle.savings}
                  </div>
                )}
              </div>
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-[#2C3E50] pixel-text mb-4">
                  "{bundle.name}"
                </div>
                <select className="w-full px-4 py-2 border-2 border-[#2C3E50] rounded-lg pixel-text bg-white">
                  <option>Select Size</option>
                  {[3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12, 13].map(
                    (size) => (
                      <option key={size}>Size {size}</option>
                    )
                  )}
                </select>
              </div>
              <button className="w-full bg-[#E74C3C] text-white py-3 rounded-lg font-bold pixel-text pixel-border hover:bg-[#C0392B] transition-all">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


