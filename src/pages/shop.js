import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopHeader from "../components/shop/ShopHeader";
import PixelSeparator from "../components/shop/PixelSeparator";
import { SHOP_PRODUCTS, SHOP_SIZES } from "../data/shop";
import PixelBoxesBackground from "../components/PixelBoxesBackground";
import ProductRowCarousel from "../components/shop/ProductRowCarousel";

export default function Shop() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [selectedSizes, setSelectedSizes] = useState({});

    const products = SHOP_PRODUCTS;

    const whiteProducts = products.filter((p) => p.color !== "black");
    const blackProducts = products.filter((p) => p.color === "black");

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

            <div className="relative min-h-screen bg-gradient-to-b from-[#64DEF7] via-[#81ECD7] to-[#B7ECBD] overflow-hidden">
                <PixelBoxesBackground />

                <div className="relative z-10">
                    <Navbar
                        isScrolled={isScrolled}
                        mobileMenuOpen={mobileMenuOpen}
                        onToggleMobile={() => setMobileMenuOpen((open) => !open)}
                    />

                    <ShopHeader />

                    <PixelSeparator />

                    <ProductRowCarousel
                        title="ALL WHITES"
                        products={whiteProducts}
                        sizes={sizes}
                        openDropdowns={openDropdowns}
                        selectedSizes={selectedSizes}
                        onToggleDropdown={toggleDropdown}
                        onSelectSize={selectSize}
                        onClearSize={clearSize}
                        intervalMs={5200}
                    />

                    <ProductRowCarousel
                        title="ALL BLACKS"
                        products={blackProducts}
                        sizes={sizes}
                        openDropdowns={openDropdowns}
                        selectedSizes={selectedSizes}
                        onToggleDropdown={toggleDropdown}
                        onSelectSize={selectSize}
                        onClearSize={clearSize}
                        intervalMs={5200}
                    />

                    <Footer />
                </div>
            </div>
        </>
    );
}
