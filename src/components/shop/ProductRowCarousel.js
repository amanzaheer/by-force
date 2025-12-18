import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductRowCarousel({
    title,
    products,
    sizes,
    openDropdowns,
    selectedSizes,
    onToggleDropdown,
    onSetSizeCounts,
    onClearSize,
    speedPxPerSec = 18,
}) {
    const list = products ?? [];
    const scrollerRef = useRef(null);
    const [paused, setPaused] = useState(false);
    const rafRef = useRef(0);
    const lastTsRef = useRef(0);

    const canAutoScroll = useMemo(() => list.length > 1, [list.length]);
    const loopList = useMemo(
        () => (canAutoScroll ? [...list, ...list] : list),
        [canAutoScroll, list]
    );

    const scrollByCards = (dir) => {
        const el = scrollerRef.current;
        if (!el) return;

        const first = el.querySelector(":scope > div");
        const cardW = first?.offsetWidth ?? 360;

        const styles = window.getComputedStyle(el);
        const gap =
            parseFloat(styles.columnGap || styles.gap || styles.rowGap || "0") || 24;

        const delta = (cardW + gap) * dir;
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + delta;

        if (canAutoScroll) {
            if (next >= half) next -= half;
            if (next < 0) next += half;
        }

        el.scrollTo({ left: next, behavior: "smooth" });
    };

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el || !canAutoScroll) return;

        const step = (ts) => {
            if (!lastTsRef.current) lastTsRef.current = ts;
            const dt = Math.min(ts - lastTsRef.current, 34); // clamp to avoid occasional big jumps
            lastTsRef.current = ts;

            if (!paused) {
                const half = el.scrollWidth / 2;
                const dx = (speedPxPerSec * dt) / 1000;
                el.scrollLeft += dx;
                if (el.scrollLeft >= half) el.scrollLeft -= half;
            }

            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = 0;
            lastTsRef.current = 0;
        };
    }, [canAutoScroll, paused, speedPxPerSec]);

    return (
        <section className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between gap-4 mb-4">
                    <h2 className="text-xl md:text-2xl font-extrabold text-[#2C3E50] pixel-text uppercase">
                        {title}
                    </h2>
                    {canAutoScroll && (
                        <div className="text-xs md:text-sm text-[#2C3E50]/80 pixel-text font-bold">
                            {paused ? "Paused" : "Auto"}
                        </div>
                    )}
                </div>

                <div className="relative">
                    {/* Prev/Next gaming buttons */}
                    {canAutoScroll && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous"
                                onClick={() => scrollByCards(-1)}
                                className="group cursor-pointer absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] text-white flex items-center justify-center border-2 border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-200 active:scale-95 pixel-text overflow-hidden"
                            >
                                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                                <span className="text-2xl animate-pulse">←</span>
                            </button>
                            <button
                                type="button"
                                aria-label="Next"
                                onClick={() => scrollByCards(1)}
                                className="group cursor-pointer absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] text-white flex items-center justify-center border-2 border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-200 active:scale-95 pixel-text overflow-hidden"
                            >
                                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                                <span className="text-2xl animate-pulse">→</span>
                            </button>
                        </>
                    )}

                    <div
                        ref={scrollerRef}
                        className="flex gap-6 overflow-x-auto pb-4"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onFocusCapture={() => setPaused(true)}
                        onBlurCapture={() => setPaused(false)}
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {loopList.map((product, i) => (
                            <div
                                key={`${product.id}-${i}`}
                                className="shrink-0 w-[320px] sm:w-[360px] md:w-[380px]"
                            >
                                <ProductCard
                                    product={product}
                                    index={i}
                                    dropdownKey={`${product.id}-${i}`}
                                    isDropdownOpen={!!openDropdowns[`${product.id}-${i}`]}
                                    selectedCounts={selectedSizes[`${product.id}-${i}`]}
                                    sizes={sizes}
                                    onToggleDropdown={onToggleDropdown}
                                    onSetSizeCounts={onSetSizeCounts}
                                    onClearSize={onClearSize}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


