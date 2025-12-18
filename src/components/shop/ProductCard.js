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
  return (
    <div
      className="group bg-[#B0E0E6] rounded-xl p-5 md:p-6 border-[3px] border-[#2C3E50] shadow-[6px_6px_0px_0px_#2C3E50] hover:shadow-[8px_8px_0px_0px_#2C3E50] transition-all duration-500 relative overflow-visible animate-slide-up opacity-0"
      style={{
        animationDelay: `${index * 0.15}s`,
        animationFillMode: "forwards",
      }}
    >
      {/* Badge */}
      <div className="absolute top-3 right-3 z-20 bg-[#E74C3C] text-white px-3 py-1.5 pixel-text font-bold text-xs border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50]">
        {product.badge}
      </div>

      {/* Product Image */}
      <div className="relative mb-4">
        <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border-2 border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] group-hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-500">
          <div className="relative h-48 md:h-56">
            <Image
              src="/bitmap.webp"
              alt={product.name}
              fill
              className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
              priority={product.id <= 2}
            />
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


