import CarouselProductCard from "./CarouselProductCard";

export default function ProductCarousel({
  products,
  currentIndex,
  sizes,
  openDropdowns,
  selectedSizes,
  onPrev,
  onNext,
  onGoToSlide,
  onToggleDropdown,
  onSelectSize,
  onClearSize,
}) {
  if (!products?.length) return null;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C3E50] pixel-text uppercase mb-6 text-center animate-fade-in">
          More Products
        </h2>

        <div className="relative overflow-hidden rounded-xl">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              willChange: "transform",
            }}
          >
            {products.map((product) => {
              const dropdownKey = `carousel-${product.id}`;

              return (
                <div key={product.id} className="min-w-full px-4">
                  <CarouselProductCard
                    product={product}
                    dropdownKey={dropdownKey}
                    isDropdownOpen={!!openDropdowns[dropdownKey]}
                    selectedSize={selectedSizes[dropdownKey]}
                    sizes={sizes}
                    onToggleDropdown={onToggleDropdown}
                    onSelectSize={onSelectSize}
                    onClearSize={onClearSize}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows + Dots */}
          {products.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] text-white flex items-center justify-center border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-200 active:scale-95 z-30 pixel-text focus:outline-none cursor-pointer"
                aria-label="Previous product"
              >
                <span className="text-2xl">←</span>
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] text-white flex items-center justify-center border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-200 active:scale-95 z-30 pixel-text focus:outline-none cursor-pointer"
                aria-label="Next product"
              >
                <span className="text-2xl">→</span>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {products.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => onGoToSlide(index)}
                    className={`w-3 h-3 transition-all duration-300 border-2 border-[#2C3E50] focus:outline-none cursor-pointer ${
                      index === currentIndex
                        ? "bg-[#4A90E2] scale-125 shadow-[2px_2px_0px_0px_#2C3E50]"
                        : "bg-[#3A7BC8] hover:bg-[#4A90E2]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}


