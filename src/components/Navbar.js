import Link from "next/link";
import React, { useState } from "react";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar({ isScrolled, mobileMenuOpen, onToggleMobile }) {
  const [activePage, setActivePage] = useState("home");
  const [cartCount, setCartCount] = useState(0); // Cart item count

  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "shop", label: "SHOP", href: "/shop" },
    { id: "games", label: "GAMES", href: "#games" },
    { id: "about", label: "ABOUT", href: "#about" },
  ];

  const handleNavClick = (id, href) => {
    setActivePage(id);
    if (onToggleMobile && mobileMenuOpen) {
      onToggleMobile();
    }
  };

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Left Side (Start) */}
          <Link href="/" className="flex-shrink-0 pixel-logo-glow select-none">
            <span className={`${pressStart.className} pixel-logo text-3xl md:text-4xl  leading-none`}>
              BYFORCEUK
            </span>
          </Link>

          {/* Navigation Items - Center */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`nav-link relative px-4 lg:px-6 py-2 rounded-lg font-extrabold text-sm lg:text-base text-white pixel-text transition-all duration-300 transform hover:scale-110 active:scale-95 group
                    ${isActive
                      ? "nav-link--active bg-[#4A90E2] shadow-[0_4px_0_0_#2C3E50]"
                      : "bg-[#3A7BC8]/80 hover:bg-[#4A90E2] shadow-[0_3px_0_0_#2C3E50]"
                    }
                  `}
                >
                  {/* Button Text */}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart Icon - Right Side (End) */}
          <div className="flex items-center gap-4">
            {/* Desktop Cart Icon - Simple Shopping Cart */}
            <button
              className="hidden md:flex relative w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] items-center justify-center rounded-lg transition-all duration-300 border-2 border-[#2C3E50] shadow-[0_3px_0_0_#2C3E50] active:scale-95"
              aria-label="Shopping cart"
            >
              {/* Shopping Cart Icon - Simple White */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C5.9 18 5.01 18.9 5.01 20S5.9 22 7 22 8.99 21.1 8.99 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.5C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20S15.9 22 17 22 18.99 21.1 18.99 20 18.1 18 17 18Z"
                  fill="white"
                  stroke="none"
                />
              </svg>

              {/* Cart Count Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-[#2C3E50] text-xs font-bold pixel-text rounded-full flex items-center justify-center border-2 border-[#2C3E50] shadow-[0_2px_0_0_#2C3E50]">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={onToggleMobile}
              className="md:hidden relative w-12 h-12 bg-[#3A7BC8] hover:bg-[#4A90E2] flex items-center justify-center rounded-lg transition-all duration-300 border-2 border-[#2C3E50] shadow-[0_3px_0_0_#2C3E50] active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-[#3A7BC8]/95 backdrop-blur-md rounded-xl border-2 border-[#2C3E50] shadow-[0_4px_0_0_#2C3E50] p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`nav-link block px-4 py-3 rounded-lg font-extrabold text-white pixel-text transition-all duration-200 transform active:scale-95
                    ${isActive
                      ? "nav-link--active bg-[#4A90E2] shadow-[0_3px_0_0_#2C3E50]"
                      : "bg-[#2C3E50]/50 hover:bg-[#4A90E2]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Cart Button */}
            <button
              className="w-full px-4 py-3 rounded-lg font-extrabold text-white pixel-text transition-all duration-200 transform active:scale-95 bg-[#2C3E50]/50 hover:bg-[#4A90E2] flex items-center justify-center gap-2 border-2 border-[#2C3E50]"
              style={{
                textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C5.9 18 5.01 18.9 5.01 20S5.9 22 7 22 8.99 21.1 8.99 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.5C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20S15.9 22 17 22 18.99 21.1 18.99 20 18.1 18 17 18Z"
                  fill="white"
                  stroke="none"
                />
              </svg>
              <span>CART</span>
              {cartCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-white text-[#2C3E50] text-xs font-bold rounded border border-[#2C3E50]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
