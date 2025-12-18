import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopHeader from "../components/shop/ShopHeader";
import PixelSeparator from "../components/shop/PixelSeparator";
import ProductGrid from "../components/shop/ProductGrid";
import ProductCarousel from "../components/shop/ProductCarousel";
import { SHOP_PRODUCTS, SHOP_SIZES } from "../data/shop";

export default function Shop() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [selectedSizes, setSelectedSizes] = useState({});

    const products = SHOP_PRODUCTS;

    // Products to show in grid (first 3)
    const gridProducts = products.slice(0, 3);
    // Remaining products for carousel
    const carouselProducts = products.slice(3);

    // Auto-rotate carousel for remaining products
    useEffect(() => {
        if (carouselProducts.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
            }, 5000); // Change every 5 seconds

            return () => clearInterval(interval);
        }
    }, [carouselProducts.length]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.size-selector-container')) {
                setOpenDropdowns({});
            }
        };
        if (Object.keys(openDropdowns).length > 0) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [openDropdowns]);

    const nextSlide = () => {
        if (carouselProducts.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
        }
    };

    const prevSlide = () => {
        if (carouselProducts.length > 0) {
            setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const toggleDropdown = (productId) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const selectSize = (productId, size) => {
        setSelectedSizes(prev => ({
            ...prev,
            [productId]: size
        }));
        setOpenDropdowns(prev => ({
            ...prev,
            [productId]: false
        }));
    };

    const clearSize = (productId) => {
        setSelectedSizes(prev => {
            const next = { ...prev };
            delete next[productId];
            return next;
        });
        setOpenDropdowns(prev => ({ ...prev, [productId]: false }));
    };

    const sizes = SHOP_SIZES;

    return (
        <>
            <Head>
                <title>Shop - ByForce UK | Authentic AF1s at 50% Off</title>
                <meta name="description" content="Shop authentic Air Force 1s at unbeatable prices. Limited stock available." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-[#64DEF7] via-[#81ECD7] to-[#B7ECBD]">
                <Navbar
                    isScrolled={isScrolled}
                    mobileMenuOpen={mobileMenuOpen}
                    onToggleMobile={() => setMobileMenuOpen((open) => !open)}
                />

                <ShopHeader />

                <PixelSeparator />

                <ProductGrid
                    products={gridProducts}
                    sizes={sizes}
                    openDropdowns={openDropdowns}
                    selectedSizes={selectedSizes}
                    onToggleDropdown={toggleDropdown}
                    onSelectSize={selectSize}
                    onClearSize={clearSize}
                />

                {/* Section Separator with Pixel Blocks */}
                {carouselProducts.length > 0 && (
                    <PixelSeparator />
                )}

                {/* Carousel Section for Remaining Products */}
                <ProductCarousel
                    products={carouselProducts}
                    currentIndex={currentIndex}
                    sizes={sizes}
                    openDropdowns={openDropdowns}
                    selectedSizes={selectedSizes}
                    onPrev={prevSlide}
                    onNext={nextSlide}
                    onGoToSlide={goToSlide}
                    onToggleDropdown={toggleDropdown}
                    onSelectSize={selectSize}
                    onClearSize={clearSize}
                />

                <Footer />
            </div>
        </>
    );
}
