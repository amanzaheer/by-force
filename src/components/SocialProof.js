import React from "react";

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#87CEEB] to-[#98D8C8]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 pixel-border pixel-shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] pixel-text mb-8">
            TRUSTED BY 200+ SNEAKERHEADS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-5xl pixel-text">🔥</div>
              <div className="text-2xl font-bold text-[#E74C3C] pixel-text">
                200+
              </div>
              <div className="text-lg text-[#2C3E50] pixel-text">
                Happy Customers
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl pixel-text">⭐</div>
              <div className="text-2xl font-bold text-[#E74C3C] pixel-text">
                4.9/5
              </div>
              <div className="text-lg text-[#2C3E50] pixel-text">
                Average Rating
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl pixel-text">🚚</div>
              <div className="text-2xl font-bold text-[#E74C3C] pixel-text">
                3-5 Days
              </div>
              <div className="text-lg text-[#2C3E50] pixel-text">
                Free UK Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


