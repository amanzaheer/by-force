export default function PixelSeparator() {
  return (
    <div
      className="flex justify-center items-center gap-2 py-6 px-4 relative"
      style={{ zIndex: 1 }}
    >
      <div className="flex gap-1">
        <div className="w-3 h-3 bg-[#4A90E2] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"></div>
        <div
          className="w-3 h-3 bg-[#3A7BC8] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 bg-[#2C3E50] border-2 border-[#2C3E50] shadow-[2px_2px_0px_0px_#2C3E50] animate-pulse"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}


