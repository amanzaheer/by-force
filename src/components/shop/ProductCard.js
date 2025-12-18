import Image from "next/image";
import SizeSelector from "./SizeSelector";

export default function ProductCard({
  product,
  index,
  dropdownKey,
  isDropdownOpen,
  selectedSize,
  sizes,
  onToggleDropdown,
  onSelectSize,
  onClearSize,
}) {
  const pairsLabel = product.pairs === 1 ? "PAIR" : "PAIRS";
  const boxCount = typeof product.pairs === "number" ? product.pairs : 0;
  const renderBoxCount = Math.min(boxCount, 12);
  const cols = renderBoxCount > 6 ? 6 : renderBoxCount;
  const rows = cols ? Math.ceil(renderBoxCount / cols) : 0;
  const boxColors = ["bg-[#4A90E2]", "bg-[#3A7BC8]", "bg-[#2C3E50]"];

  return (
    <div
      className="group bg-white/14 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-[0_18px_40px_rgba(44,62,80,0.18)] hover:shadow-[0_22px_55px_rgba(44,62,80,0.22)] transition-all duration-500 relative overflow-hidden animate-slide-up opacity-0 hover:scale-[0.97]"
      style={{
        animationDelay: `${index * 0.15}s`,
        animationFillMode: "forwards",
      }}
    >
      {/* subtle scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-20 pixel-scanlines animate-scanlines" />
      {/* hover shine */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* Badge */}
      <div className="absolute top-3 right-3 z-20 bg-[#E74C3C] text-white px-3 py-1.5 pixel-text font-bold text-xs border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50]">
        {product.badge}
      </div>

      {/* Heading */}
      {product.heading && (
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="text-sm md:text-base text-[#2C3E50] pixel-text font-extrabold tracking-wider">
            {product.heading}
          </div>
          {typeof product.pairs === "number" && (
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#4A90E2] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse" />
              <div className="text-xs text-[#2C3E50] pixel-text font-bold">
                {product.pairs} {pairsLabel}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Product Image */}
      <div className="relative mb-4">
        <div className="bg-white/22 backdrop-blur-sm rounded-xl p-4 shadow-[0_10px_25px_rgba(44,62,80,0.18)] group-hover:shadow-[0_14px_32px_rgba(44,62,80,0.22)] transition-all duration-500 overflow-hidden relative">

          <div className="relative h-48 md:h-56">
            <Image
              src={product.imageSrc ?? "/bitmap.webp"}
              alt={product.name}
              fill
              className={`object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out ${product.imageClassName ?? ""}`}
              priority={product.id <= 2}
            />

            {/* Big pair overlay */}
            {typeof product.pairs === "number" && (
              <div className="absolute left-3 top-3 z-10">
                <div className="text-white pixel-text font-extrabold leading-none drop-shadow-[3px_3px_0px_rgba(44,62,80,0.7)]">
                  <div className="text-4xl md:text-5xl">{product.pairs}</div>
                  <div className="text-lg md:text-xl -mt-1">{pairsLabel}</div>
                </div>
              </div>
            )}

            {/* Box overlay based on pairs */}
            {renderBoxCount > 0 && (
              <div className="absolute right-3 bottom-3 z-10">
                <div
                  className="grid gap-1"
                  style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: renderBoxCount }).map((_, i) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className={`w-3 h-3 border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse ${
                        boxColors[i % boxColors.length]
                      }`}
                      style={{ animationDelay: `${(i % 6) * 0.12}s` }}
                    />
                  ))}
                </div>
                {boxCount > 12 && (
                  <div className="mt-1 text-[10px] text-white pixel-text font-extrabold drop-shadow-[2px_2px_0px_rgba(44,62,80,0.7)] text-right">
                    +{boxCount - 12}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-[#2C3E50] pixel-text uppercase mb-1">
            {product.name}
          </h2>
          <p className="text-sm md:text-base text-[#2C3E50]/90 pixel-text font-medium">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-extrabold text-[#4A90E2] pixel-text">
              £{product.price.toFixed(2)}
            </span>
            <span className="text-base text-[#2C3E50]/70 pixel-text line-through">
              £{product.originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="text-sm text-[#2C3E50] pixel-text font-bold">
            Save £{(product.originalPrice - product.price).toFixed(2)}
          </div>
        </div>

        {/* Size Selector - Custom Dropdown */}
        <SizeSelector
          dropdownKey={dropdownKey}
          isOpen={isDropdownOpen}
          selectedSize={selectedSize}
          sizes={sizes}
          listMaxHeight="190px"
          labelClassName="block text-[#2C3E50] pixel-text font-bold mb-2.5 text-xs md:text-sm uppercase tracking-wider"
          buttonClassName="w-full px-4 py-3.5 bg-gradient-to-b from-white to-[#FAFAFA] text-[#2C3E50] pixel-text font-bold text-sm border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] hover:border-[#4A90E2] transition-all duration-300 focus:outline-none flex items-center justify-between cursor-pointer"
          iconSize={16}
          onToggle={onToggleDropdown}
          onSelect={onSelectSize}
          onClear={onClearSize}
        />

        {/* Add to Cart Button */}
        <button className="group/btn relative w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white px-4 py-3 font-extrabold text-sm md:text-base pixel-text uppercase transition-all duration-300 border-[2px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] active:scale-95 overflow-hidden focus:outline-none cursor-pointer">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Add to Cart
            <span className="text-lg group-hover/btn:translate-x-1 transition-transform duration-500 ease-out">
              →
            </span>
          </span>
          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
        </button>
      </div>
    </div>
  );
}


