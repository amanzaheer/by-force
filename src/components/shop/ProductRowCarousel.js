import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductRowCarousel({
    title,
    products,
    sizes,
    openDropdowns,
    selectedSizes,
    onToggleDropdown,
    onSelectSize,
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
                            className="snap-start shrink-0 w-[320px] sm:w-[360px] md:w-[380px]"
                        >
                            <ProductCard
                                product={product}
                                index={i}
                                dropdownKey={`${product.id}-${i}`}
                                isDropdownOpen={!!openDropdowns[`${product.id}-${i}`]}
                                selectedSize={selectedSizes[`${product.id}-${i}`]}
                                sizes={sizes}
                                onToggleDropdown={onToggleDropdown}
                                onSelectSize={onSelectSize}
                                onClearSize={onClearSize}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


