export default function SizeSelector({
  dropdownKey,
  labelClassName,
  buttonClassName,
  iconSize = 16,
  isOpen,
  maxQty = 1,
  selectedCounts = {},
  sizes,
  listMaxHeight = "190px",
  dropdownPlacement = "bottom",
  onToggle,
  onSetCounts = () => { },
  onClear = () => { },
}) {
  const totalSelected = Object.values(selectedCounts).reduce(
    (sum, n) => sum + (Number(n) || 0),
    0
  );
  const remaining = Math.max(0, (Number(maxQty) || 1) - totalSelected);

  const increment = (size) => {
    if (totalSelected >= maxQty) return;
    const next = { ...selectedCounts, [size]: (selectedCounts[size] || 0) + 1 };
    onSetCounts(next);
  };

  const decrement = (size) => {
    const current = selectedCounts[size] || 0;
    if (current <= 0) return;
    const next = { ...selectedCounts, [size]: current - 1 };
    if (next[size] <= 0) delete next[size];
    onSetCounts(next);
  };

  const selectedEntries = Object.entries(selectedCounts)
    .filter(([, qty]) => (Number(qty) || 0) > 0)
    .sort((a, b) => Number(a[0]) - Number(b[0]));

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
          <span>
            {totalSelected > 0
              ? `Selected ${totalSelected}/${maxQty}`
              : "Choose Sizes"}
          </span>
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 16 16"
            fill="none"
            className={`text-[#2C3E50] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
            className={`absolute left-0 right-0 bg-white border-2 border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] rounded-lg overflow-hidden ${dropdownPlacement === "top" ? "bottom-full mb-2" : "top-full mt-2"
              }`}
            style={{ zIndex: 10000 }}
          >
            <div
              className="max-h-[140px] overflow-y-auto custom-scrollbar"
              style={{ maxHeight: listMaxHeight }}
            >
              {/* Sticky header */}
              <div className="sticky top-0 z-10 bg-white border-b border-[#2C3E50]/20">
                <div className="flex items-center justify-between gap-3 px-4 py-2">
                  <div className="text-xs text-[#2C3E50] pixel-text font-extrabold">
                    {remaining > 0 ? `Select ${remaining} more` : "All set"}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onClear(dropdownKey)}
                      className="text-xs pixel-text font-extrabold text-[#E74C3C] hover:underline"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggle(dropdownKey)}
                      className="text-xs pixel-text font-extrabold text-[#2C3E50] hover:underline"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {selectedEntries.length > 0 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-2">
                    {selectedEntries.map(([size, qty]) => (
                      <span
                        key={size}
                        className="inline-flex items-center gap-2 px-2 py-1 bg-[#4A90E2]/15 border border-[#2C3E50]/30 rounded-md"
                      >
                        <span className="pixel-text text-[11px] font-extrabold text-[#2C3E50]">
                          {size}
                        </span>
                        <span className="pixel-text text-[11px] font-extrabold text-[#2C3E50]/80">
                          ×{qty}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {sizes.map((size) => (
                <div
                  key={size}
                  className="w-full px-4 py-2 border-b border-[#2C3E50]/15 flex items-center justify-between gap-3"
                >
                  <div className="pixel-text font-extrabold text-sm text-[#2C3E50]">
                    Size {size}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decrement(size)}
                      className={`w-8 h-8 flex items-center justify-center border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] pixel-text font-extrabold rounded-md ${(selectedCounts[size] || 0) > 0
                        ? "bg-white hover:bg-[#4A90E2] hover:text-white"
                        : "bg-white/60 text-[#2C3E50]/40"
                        }`}
                      disabled={(selectedCounts[size] || 0) <= 0}
                      aria-label={`Decrease size ${size}`}
                    >
                      −
                    </button>

                    <div className="min-w-[28px] text-center pixel-text font-extrabold text-[#2C3E50]">
                      {selectedCounts[size] || 0}
                    </div>

                    <button
                      type="button"
                      onClick={() => increment(size)}
                      className={`w-8 h-8 flex items-center justify-center border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] pixel-text font-extrabold rounded-md ${totalSelected < maxQty
                        ? "bg-white hover:bg-[#4A90E2] hover:text-white"
                        : "bg-white/60 text-[#2C3E50]/40"
                        }`}
                      disabled={totalSelected >= maxQty}
                      aria-label={`Increase size ${size}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


