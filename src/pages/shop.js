import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shop() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [selectedSizes, setSelectedSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "AF1 ALL-WHITE",
            price: 59.99,
            originalPrice: 119.99,
            description: "Classic all-white Air Force 1",
            badge: "50% OFF",
        },
        {
            id: 2,
            name: "AF1 ALL-BLACK",
            price: 59.99,
            originalPrice: 119.99,
            description: "Sleek all-black Air Force 1",
            badge: "50% OFF",
        },
        {
            id: 3,
            name: "AF1 PREMIUM PACK",
            price: 175.99,
            originalPrice: 359.99,
            description: "3-Pair Premium Bundle",
            badge: "BEST VALUE",
        },
        {
            id: 4,
            name: "AF1 MEGA PACK",
            price: 399.99,
            originalPrice: 839.99,
            description: "7-Pair Mega Bundle",
            badge: "LIMITED",
        },
        {
            id: 5,
            name: "AF1 MEGA PACK",
            price: 470.99,
            originalPrice: 839.99,
            description: "10-Pair Mega Bundle",
            badge: "LIMITED",
        },
        {
            id: 6,
            name: "AF1 MEGA PACK",
            price: 979.99,
            originalPrice: 839.99,
            description: "12-Pair Mega Bundle",
            badge: "LIMITED",
        },
    ];

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

    const sizes = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12, 13];

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

                {/* Shop Header */}
                <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C3E50] pixel-text uppercase mb-4">
                            SHOP AF1S
                        </h1>
                        <p className="text-lg md:text-xl text-[#2C3E50] pixel-text font-semibold" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
                            Authentic Sneakers • 50% Off Retail • Limited Stock
                        </p>
                    </div>
                </section>

                {/* Section Separator with Pixel Blocks */}
                <div className="flex justify-center items-center gap-2 py-6 px-4 relative" style={{ zIndex: 1 }}>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-[#4A90E2] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"></div>
                        <div className="w-3 h-3 bg-[#3A7BC8] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-[#2C3E50] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Products Grid Section - Show 3 Products */}
                <section className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {gridProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="group bg-[#B0E0E6] rounded-xl p-5 md:p-6 border-[3px] border-[#2C3E50] shadow-[6px_6px_0px_0px_#2C3E50] hover:shadow-[8px_8px_0px_0px_#2C3E50] transition-all duration-500 relative overflow-visible animate-slide-up opacity-0"
                                    style={{
                                        animationDelay: `${index * 0.15}s`,
                                        animationFillMode: 'forwards'
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
                                        <div className="relative size-selector-container" style={{ zIndex: 100 }}>
                                            <label className="block text-[#2C3E50] pixel-text font-bold mb-2.5 text-xs md:text-sm uppercase tracking-wider">
                                                Select Size
                                            </label>
                                            <div className="relative">
                                                {/* Closed Dropdown Button */}
                                                <button
                                                    onClick={() => toggleDropdown(product.id)}
                                                    className="w-full px-4 py-3.5 bg-gradient-to-b from-white to-[#FAFAFA] text-[#2C3E50] pixel-text font-bold text-sm border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] hover:border-[#4A90E2] transition-all duration-300 focus:outline-none flex items-center justify-between cursor-pointer"
                                                >
                                                    <span>{selectedSizes[product.id] ? `Size ${selectedSizes[product.id]}` : 'Choose Size'}</span>
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        className={`text-[#2C3E50] transition-transform duration-300 ${openDropdowns[product.id] ? 'rotate-180' : ''}`}
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

                                                {/* Open Dropdown */}
                                                {openDropdowns[product.id] && (
                                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border-[3px] border-[#2C3E50] shadow-[4px_4px_0px_0px_#2C3E50]" style={{ zIndex: 10000 }}>
                                                        {/* Scrollable Options List - "Choose Size" as first option */}
                                                        <div className="max-h-[140px] overflow-y-auto custom-scrollbar  " style={{ maxHeight: '190px' }}>
                                                            {/* "Choose Size" option */}
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedSizes(prev => {
                                                                        const newSizes = { ...prev };
                                                                        delete newSizes[product.id];
                                                                        return newSizes;
                                                                    });
                                                                    setOpenDropdowns(prev => ({ ...prev, [product.id]: false }));
                                                                }}
                                                                className={`w-full px-4 py-2.5 text-left pixel-text font-bold text-sm border-b-[2px] border-[#2C3E50]/20 transition-colors duration-200 cursor-pointer ${!selectedSizes[product.id] ? 'bg-[#4A90E2] text-white' : 'text-[#2C3E50] bg-white hover:bg-[#4A90E2] hover:text-white'
                                                                    }`}
                                                            >
                                                                Choose Size
                                                            </button>
                                                            {/* Size options */}
                                                            {sizes.map((size) => (
                                                                <button
                                                                    key={size}
                                                                    onClick={() => selectSize(product.id, size)}
                                                                    className={`w-full px-4 py-2.5 text-left pixel-text font-bold text-sm border-b-[2px] border-[#2C3E50]/20 hover:bg-[#4A90E2] hover:text-white transition-colors duration-200 cursor-pointer ${selectedSizes[product.id] === size ? 'bg-[#4A90E2] text-white' : 'text-[#2C3E50] bg-white'
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

                                        {/* Add to Cart Button */}
                                        <button className="group/btn relative w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white px-4 py-3 font-extrabold text-sm md:text-base pixel-text uppercase transition-all duration-300 border-[2px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] active:scale-95 overflow-hidden focus:outline-none cursor-pointer">
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Add to Cart
                                                <span className="text-lg group-hover/btn:translate-x-1 transition-transform duration-500 ease-out">→</span>
                                            </span>
                                            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Separator with Pixel Blocks */}
                {carouselProducts.length > 0 && (
                    <div className="flex justify-center items-center gap-2 py-6 px-4 relative" style={{ zIndex: 1 }}>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-[#4A90E2] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"></div>
                            <div className="w-3 h-3 bg-[#3A7BC8] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 bg-[#2C3E50] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                )}

                {/* Carousel Section for Remaining Products */}
                {carouselProducts.length > 0 && (
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
                                        willChange: 'transform',
                                    }}
                                >
                                    {carouselProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="min-w-full px-4"
                                        >
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
                                                        <div className="relative size-selector-container" style={{ zIndex: 100 }}>
                                                            <label className="block text-[#2C3E50] pixel-text font-bold mb-2.5 uppercase tracking-wider">
                                                                Select Size
                                                            </label>
                                                            <div className="relative">
                                                                {/* Closed Dropdown Button */}
                                                                <button
                                                                    onClick={() => toggleDropdown(`carousel-${product.id}`)}
                                                                    className="w-full px-4 py-3.5 bg-gradient-to-b from-white to-[#FAFAFA] text-[#2C3E50] pixel-text font-bold border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] hover:border-[#4A90E2] transition-all duration-300 focus:outline-none flex items-center justify-between cursor-pointer"
                                                                >
                                                                    <span>{selectedSizes[`carousel-${product.id}`] ? `Size ${selectedSizes[`carousel-${product.id}`]}` : 'Choose Size'}</span>
                                                                    <svg
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        className={`text-[#2C3E50] transition-transform duration-300 ${openDropdowns[`carousel-${product.id}`] ? 'rotate-180' : ''}`}
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

                                                                {/* Open Dropdown */}
                                                                {openDropdowns[`carousel-${product.id}`] && (
                                                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border-[3px] border-[#2C3E50] shadow-[4px_4px_0px_0px_#2C3E50]" style={{ zIndex: 10000 }}>
                                                                        {/* Scrollable Options List - "Choose Size" as first option */}
                                                                        <div className="max-h-[140px] overflow-y-auto custom-scrollbar" style={{ maxHeight: '140px' }}>
                                                                            {/* "Choose Size" option */}
                                                                            <button
                                                                                onClick={() => {
                                                                                    setSelectedSizes(prev => {
                                                                                        const newSizes = { ...prev };
                                                                                        delete newSizes[`carousel-${product.id}`];
                                                                                        return newSizes;
                                                                                    });
                                                                                    setOpenDropdowns(prev => ({ ...prev, [`carousel-${product.id}`]: false }));
                                                                                }}
                                                                                className={`w-full px-4 py-2.5 text-left pixel-text font-bold text-sm border-b-[2px] border-[#2C3E50]/20 transition-colors duration-200 cursor-pointer ${!selectedSizes[`carousel-${product.id}`] ? 'bg-[#4A90E2] text-white' : 'text-[#2C3E50] bg-white hover:bg-[#4A90E2] hover:text-white'
                                                                                    }`}
                                                                            >
                                                                                Choose Size
                                                                            </button>
                                                                            {/* Size options */}
                                                                            {sizes.map((size) => (
                                                                                <button
                                                                                    key={size}
                                                                                    onClick={() => selectSize(`carousel-${product.id}`, size)}
                                                                                    className={`w-full px-4 py-2.5 text-left pixel-text font-bold text-sm border-b-[2px] border-[#2C3E50]/20 hover:bg-[#4A90E2] hover:text-white transition-colors duration-200 cursor-pointer ${selectedSizes[`carousel-${product.id}`] === size ? 'bg-[#4A90E2] text-white' : 'text-[#2C3E50] bg-white'
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

                                                        {/* Add to Cart Button */}
                                                        <button className="group/btn relative w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white px-6 py-4 font-extrabold text-lg pixel-text uppercase transition-all duration-300 border-[3px] border-[#2C3E50] shadow-[4px_4px_0px_0px_#2C3E50] hover:shadow-[6px_6px_0px_0px_#2C3E50] active:scale-95 overflow-hidden focus:outline-none cursor-pointer">
                                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                                Add to Cart
                                                                <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-500 ease-out">→</span>
                                                            </span>
                                                            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                {carouselProducts.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] text-white flex items-center justify-center border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-200 active:scale-95 z-30 pixel-text focus:outline-none cursor-pointer"
                                            aria-label="Previous product"
                                        >
                                            <span className="text-2xl">←</span>
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] text-white flex items-center justify-center border-[3px] border-[#2C3E50] shadow-[3px_3px_0px_0px_#2C3E50] hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all duration-200 active:scale-95 z-30 pixel-text focus:outline-none cursor-pointer"
                                            aria-label="Next product"
                                        >
                                            <span className="text-2xl">→</span>
                                        </button>

                                        {/* Dots Indicator */}
                                        <div className="flex justify-center gap-2 mt-6">
                                            {carouselProducts.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goToSlide(index)}
                                                    className={`w-3 h-3 transition-all duration-300 border-2 border-[#2C3E50] focus:outline-none cursor-pointer ${index === currentIndex
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
                )}

                <Footer />
            </div>
        </>
    );
}
