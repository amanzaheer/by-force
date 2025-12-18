import Image from "next/image";
import SizeSelector from "./SizeSelector";

export default function CarouselProductCard({
  product,
  dropdownKey,
  isDropdownOpen,
  selectedSize,
  sizes,
  onToggleDropdown,
  onSelectSize,
  onClearSize,
}) {
  return (
    <div className="bg-[#B0E0E6] rounded-xl p-6 md:p-8 border-[3px] border-[#2C3E50] shadow-[6px_6px_0px_0px_#2C3E50] relative overflow-visible group animate-scale-in">
      {/* Badge */}
      <div className="absolute top-4 right-4 z-20 bg-[#E74C3C] text-white px-4 py-2 pixel-text font-bold text-sm border-2 border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50]">
        {product.badge}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Product Image */}
        <div className="relative">
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border-2 border-[#2C3E50] shadow-[4px_4px_0px_0px_#2C3E50] group-hover:shadow-[6px_6px_0px_0px_#2C3E50] transition-all duration-500">
            <div className="relative h-64 md:h-80">
              <Image
                src="/bitmap.webp"
                alt={product.name}
                fill
                className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C3E50] pixel-text uppercase mb-2">
              {product.name}
            </h2>
            <p className="text-lg text-[#2C3E50]/90 pixel-text font-semibold">
              {product.description}
            </p>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-extrabold text-[#4A90E2] pixel-text">
                £{product.price.toFixed(2)}
              </span>
              <span className="text-xl text-[#2C3E50]/70 pixel-text line-through">
                £{product.originalPrice.toFixed(2)}
              </span>
            </div>
            <div className="text-lg text-[#2C3E50] pixel-text font-bold">
              Save £{(product.originalPrice - product.price).toFixed(2)}
            </div>
          </div>

          {/* Size Selector - Custom Dropdown */}
          <SizeSelector
            dropdownKey={dropdownKey}
            isOpen={isDropdownOpen}
            selectedSize={selectedSize}
            sizes={sizes}
            listMaxHeight="140px"
            labelClassName="block text-[#2C3E50] pixel-text font-bold mb-2.5 uppercase tracking-wider"
            buttonClassName="w-full px-4 py-3.5 bg-gradient-to-b from-white to-[#FAFAFA] text-[#2C3E50] pixel-text font-bold border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] hover:border-[#4A90E2] transition-all duration-300 focus:outline-none flex items-center justify-between cursor-pointer"
            iconSize={18}
            onToggle={onToggleDropdown}
            onSelect={onSelectSize}
            onClear={onClearSize}
          />

          {/* Add to Cart Button */}
          <button className="group/btn relative w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white px-6 py-4 font-extrabold text-lg pixel-text uppercase transition-all duration-300 border-[3px] border-[#2C3E50] shadow-[4px_4px_0px_0px_#2C3E50] hover:shadow-[6px_6px_0px_0px_#2C3E50] active:scale-95 overflow-hidden focus:outline-none cursor-pointer">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Add to Cart
              <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-500 ease-out">
                →
              </span>
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
          </button>
        </div>
      </div>
    </div>
  );
}


