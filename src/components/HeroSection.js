import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection({ features }) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "LAST CALL ON ICONIC ALL-WHITE AF1S - HALF THE PRICE!";
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect for heading - Continuous loop
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    let pauseTimeout;

    const startTyping = () => {
      currentIndex = 0;
      setDisplayedText("");
      setShowCursor(true);

      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Pause for 2 seconds before restarting
          pauseTimeout = setTimeout(() => {
            startTyping();
          }, 2000);
        }
      }, 50); // Typing speed
    };

    startTyping();

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-1 lg:gap-12 items-center  rounded-2xl  overflow-hidden relative bg-[#57D5E6] ">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

          {/* Left Content Panel - Enhanced */}
          <div className="relative z-10 p-6 space-y-6 md:space-y-4 animate-fade-in">


            {/* Headline - Typewriter Effect with Enhanced Styling */}
            <div className="space-y-4">
              <div className="rounded-xl p-5 md:p-6  relative overflow-hidden">
                {/* subtle scanlines */}

                <h2 className="text-3xl font-extrabold text-[#2C3E50] pixel-text leading-tight uppercase min-h-[12rem] md:min-h-[8rem]">
                  <span className="text-white font-extrabold drop-shadow-[2px_2px_0px_rgba(44,62,80,0.25)]">
                    {displayedText}
                  </span>
                  {showCursor && (
                    <span className="animate-pulse text-white "> □ </span>
                  )}
                </h2>
              </div>
            </div>

            {/* Feature List - Premium Design */}
            <div className="space-y-3">
              {(features ?? []).map((feature, index) => {
                const imageNumber = index + 2;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden flex items-center gap-3 md:gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-3 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${0.15 * index + 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {/* Hover shine */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent"></span>
                    {/* Hover scanlines */}
                    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pixel-scanlines animate-scanlines mix-blend-overlay"></span>



                    {/* Text Content - Enhanced */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base lg:text-lg text-white font-extrabold pixel-text leading-snug drop-shadow-[2px_2px_0px_rgba(44,62,80,0.35)]">
                        {feature.text}
                      </p>

                      {/* animated lines below */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-[3px] w-10 bg-[#E74C3C] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50]"></div>
                        <div className="h-[2px] flex-1 bg-white/25"></div>
                        <div className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 bg-white/25 border-2 border-[#2C3E50] animate-pulse"></span>
                          <span
                            className="w-2.5 h-2.5 bg-white/15 border-2 border-[#2C3E50] animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></span>
                          <span
                            className="w-2.5 h-2.5 bg-white/10 border-2 border-[#2C3E50] animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></span>
                        </div>
                      </div>
                    </div>

                    {/* Image Container - Premium Styling */}
                    <div className="flex-shrink-0 w-[72px] h-[72px] md:w-[88px] md:h-[88px] relative  overflow-hidden group-hover:scale-110 transition-all duration-300  group-hover:border-white/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
                      <Image
                        src={`/${imageNumber}.webp`}
                        alt={feature.text}
                        width={96}
                        height={96}
                        className="object-contain w-full h-full p-2.5 relative z-10"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Simple Pixel Design */}
            <div className="pt-2">
              <a
                href="/shop"
                className="group relative block w-full bg-[#4A90E2] text-white px-6 py-4 md:py-5 font-extrabold text-base md:text-lg lg:text-xl pixel-text text-center uppercase transition-all duration-200 hover:bg-[#3A7BC8] active:scale-[0.98] overflow-visible"
                style={{
                  // border: "3px solid #2C3E50",
                  borderRadius: "0",
                  boxShadow: "4px 4px 0px 0px #2C3E50",
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
                  imageRendering: "pixelated",
                }}
              >
                {/* Button Text */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Shop & Save Now
                  <span className="hero-cta-arrow-lane" aria-hidden="true">
                    <span className="hero-cta-arrow text-xl">→</span>
                  </span>
                </span>

              </a>
            </div>
          </div>

          {/* Right Image Section - Enhanced with Frame */}
          <div className="relative z-10 flex justify-center items-center w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-8 md:p-8">
            <div className="relative w-full max-w-lg">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-xl"></div>


              {/* Top Right Corner */}
              <div>
                <div className="absolute -top-2 -right-2 z-20 flex flex-col gap-1">
                  <div className="w-3 h-3 bg-[#4A90E2] border-2 border-[#2C3E50]" style={{ boxShadow: '2px 2px 0px 0px #2C3E50' }}></div>
                  <div ></div>


                </div>
                <div className="absolute -top-2 -right-6 z-20 flex flex-col gap-1">
                  <div className="w-3 h-3 bg-[#4A90E2] border-2 border-[#2C3E50]" style={{ boxShadow: '2px 2px 0px 0px #2C3E50' }}></div>
                  <div className="w-3 h-3 bg-[#3A7BC8] border-2 border-[#2C3E50]" style={{ boxShadow: '2px 2px 0px 0px #2C3E50' }}></div>


                </div>

              </div>





              {/* Image Container with Enhanced Smooth Animation */}
              <div className="relative animate-smooth-sway hover:scale-105 transition-all duration-700 ease-in-out">
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl blur-2xl opacity-50 animate-pulse"></div>

                {/* Image with Smooth Transform */}
                <div className="relative z-10 transform-gpu will-change-transform">
                  <Image
                    src="/bitmap.webp"
                    alt="AF1 Sneakers"
                    width={600}
                    height={600}
                    className="object-contain max-w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] filter brightness-105"
                    priority
                    style={{
                      imageRendering: 'auto',
                      transform: 'translateZ(0)',
                    }}
                  />
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float-1"></div>
                  <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-float-2"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-float-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
