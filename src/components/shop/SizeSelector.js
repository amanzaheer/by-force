export default function SizeSelector({
  dropdownKey,
  labelClassName,
  buttonClassName,
  iconSize = 16,
  isOpen,
  selectedSize,
  sizes,
  listMaxHeight = "190px",
  onToggle,
  onSelect,
  onClear,
}) {
  return (
    <div className="relative size-selector-container" style={{ zIndex: 100 }}>
      <label
        className={
          labelClassName ??
          "block text-[#2C3E50] pixel-text font-bold mb-2.5 text-xs md:text-sm uppercase tracking-wider"
        }
      >
        Select Size
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => onToggle(dropdownKey)}
          className={
            buttonClassName ??
            "w-full px-4 py-2.5 bg-white/90 text-[#2C3E50] pixel-text font-extrabold text-sm border-2 border-[#2C3E50]/70 shadow-[2px_2px_0px_0px_#2C3E50] hover:shadow-[3px_3px_0px_0px_#2C3E50] hover:border-[#4A90E2] transition-all duration-200 focus:outline-none flex items-center justify-between cursor-pointer rounded-lg"
          }
        >
          <span>{selectedSize ? `Size ${selectedSize}` : "Choose Size"}</span>
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 16 16"
            fill="none"
            className={`text-[#2C3E50] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] rounded-lg overflow-hidden"
            style={{ zIndex: 10000 }}
          >
            <div
              className="max-h-[140px] overflow-y-auto custom-scrollbar"
              style={{ maxHeight: listMaxHeight }}
            >
              <button
                type="button"
                onClick={() => onClear(dropdownKey)}
                className={`w-full px-4 py-2 text-left pixel-text font-extrabold text-sm border-b border-[#2C3E50]/20 transition-colors duration-200 cursor-pointer ${
                  !selectedSize
                    ? "bg-[#4A90E2] text-white"
                    : "text-[#2C3E50] bg-white hover:bg-[#4A90E2] hover:text-white"
                }`}
              >
                Choose Size
              </button>

              {sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => onSelect(dropdownKey, size)}
                  className={`w-full px-4 py-2 text-left pixel-text font-extrabold text-sm border-b border-[#2C3E50]/20 hover:bg-[#4A90E2] hover:text-white transition-colors duration-200 cursor-pointer ${
                    selectedSize === size
                      ? "bg-[#4A90E2] text-white"
                      : "text-[#2C3E50] bg-white"
                  }`}
                >
                  Size {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


