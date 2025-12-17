import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold pixel-text">BYFORCE</div>
          <div className="text-lg pixel-text">info@byforce.uk</div>
          <div className="text-lg pixel-text">+44 7500 324 868</div>
        </div>
      </div>
    </footer>
  );
}


