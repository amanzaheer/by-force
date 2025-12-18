import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";
import SocialProof from "../components/SocialProof";
import Footer from "../components/Footer";
import PixelBoxesBackground from "../components/PixelBoxesBackground";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedColor, setSelectedColor] = useState("all-white");
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bundles = [
    { id: 1, name: "STEPPER", pairs: 1, price: 59.99, savings: null },
    { id: 2, name: "BALLER", pairs: 3, price: 175.99, savings: "Save £4.98" },
    { id: 3, name: "BIG BALLER", pairs: 7, price: 399.99, savings: "Save £19.94" },
    { id: 4, name: "BIG BALLER DELUXE", pairs: 12, price: 689.99, savings: "Save £29.89" },
  ];

  const features = [
    { text: "Limited outlet stock. Authentic. 50% off retail." },
    { text: "200+ sneakerheads already copped theirs. Sizes are going fast." },
    { text: "Trusted by over 200 customers so far. Order yours today to join us on our journey reshaping value for money through quality, style and price." },
    { text: "Premium comfort, classic style, built to last. Your perfect everyday sneaker." },
    { text: "Free UK delivery within 3-5 days. International shipping available." },
    { text: "Limited stock available. Don't miss out on these incredible prices!" },
  ];

  return (
    <>
      <Head>
        <title>ByForce UK - Last Call on Iconic All-White AF1s — Half the Price!</title>
        <meta name="description" content="Limited outlet stock. Authentic AF1s at 50% off retail. Free UK delivery. Trusted by 200+ customers." />
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

          <HeroSection features={features} />
          <Footer />
        </div>
      </div>
    </>
  );
}
