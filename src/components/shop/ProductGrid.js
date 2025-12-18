import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  sizes,
  openDropdowns,
  selectedSizes,
  onToggleDropdown,
  onSelectSize,
  onClearSize,
}) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const dropdownKey = product.id;

            return (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                dropdownKey={dropdownKey}
                isDropdownOpen={!!openDropdowns[dropdownKey]}
                selectedSize={selectedSizes[dropdownKey]}
                sizes={sizes}
                onToggleDropdown={onToggleDropdown}
                onSelectSize={onSelectSize}
                onClearSize={onClearSize}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}


