const BOXES = [
    // top-left cluster
    { top: "12%", left: "8%", size: 16, dx: 22, dy: -18, dur: 18, spin: 60, opacity: 0.22, color: "rgba(74,144,226,0.40)" },
    { top: "22%", left: "16%", size: 12, dx: -18, dy: 16, dur: 16, spin: 46, opacity: 0.18, color: "rgba(231,76,60,0.32)" },
    { top: "32%", left: "6%", size: 20, dx: 16, dy: 22, dur: 22, spin: 80, opacity: 0.16, color: "rgba(58,123,200,0.32)" },
    { top: "16%", left: "22%", size: 10, dx: 14, dy: -12, dur: 15, spin: 44, opacity: 0.16, color: "rgba(255,255,255,0.20)" },
    { top: "36%", left: "20%", size: 14, dx: -16, dy: 18, dur: 19, spin: 72, opacity: 0.16, color: "rgba(74,144,226,0.28)" },
    { top: "8%", left: "20%", size: 12, dx: -10, dy: 14, dur: 14, spin: 40, opacity: 0.15, color: "rgba(58,123,200,0.22)" },
    // extra left edge column
    { top: "14%", left: "3%", size: 12, dx: 18, dy: -14, dur: 17, spin: 62, opacity: 0.16, color: "rgba(255,255,255,0.18)" },
    { top: "26%", left: "2%", size: 16, dx: 22, dy: 16, dur: 21, spin: 84, opacity: 0.14, color: "rgba(74,144,226,0.26)" },
    { top: "40%", left: "4%", size: 10, dx: 14, dy: -18, dur: 14, spin: 44, opacity: 0.16, color: "rgba(231,76,60,0.20)" },
    { top: "54%", left: "3%", size: 18, dx: 24, dy: 14, dur: 24, spin: 96, opacity: 0.12, color: "rgba(58,123,200,0.20)" },
    { top: "66%", left: "2%", size: 12, dx: 16, dy: -12, dur: 16, spin: 56, opacity: 0.15, color: "rgba(74,144,226,0.22)" },
    { top: "82%", left: "4%", size: 14, dx: 18, dy: -16, dur: 19, spin: 70, opacity: 0.14, color: "rgba(255,255,255,0.16)" },

    // top-right
    { top: "10%", left: "86%", size: 18, dx: -26, dy: 20, dur: 20, spin: 70, opacity: 0.18, color: "rgba(255,255,255,0.26)" },
    { top: "24%", left: "78%", size: 14, dx: 18, dy: -24, dur: 17, spin: 52, opacity: 0.18, color: "rgba(74,144,226,0.34)" },
    { top: "18%", left: "92%", size: 10, dx: -12, dy: 14, dur: 14, spin: 40, opacity: 0.16, color: "rgba(58,123,200,0.28)" },
    { top: "30%", left: "90%", size: 12, dx: -14, dy: 18, dur: 16, spin: 54, opacity: 0.16, color: "rgba(231,76,60,0.22)" },
    { top: "14%", left: "72%", size: 16, dx: 20, dy: -16, dur: 21, spin: 88, opacity: 0.14, color: "rgba(255,255,255,0.18)" },
    { top: "34%", left: "76%", size: 10, dx: 12, dy: -10, dur: 13, spin: 38, opacity: 0.15, color: "rgba(74,144,226,0.24)" },
    // extra right edge column
    { top: "12%", left: "96%", size: 12, dx: -16, dy: 16, dur: 16, spin: 56, opacity: 0.16, color: "rgba(74,144,226,0.22)" },
    { top: "22%", left: "98%", size: 10, dx: -14, dy: -12, dur: 14, spin: 44, opacity: 0.15, color: "rgba(255,255,255,0.18)" },
    { top: "36%", left: "95%", size: 18, dx: -22, dy: 14, dur: 24, spin: 96, opacity: 0.12, color: "rgba(58,123,200,0.20)" },
    { top: "50%", left: "97%", size: 12, dx: -16, dy: -18, dur: 17, spin: 62, opacity: 0.15, color: "rgba(231,76,60,0.18)" },
    { top: "64%", left: "96%", size: 16, dx: -20, dy: 12, dur: 22, spin: 88, opacity: 0.13, color: "rgba(255,255,255,0.16)" },
    { top: "78%", left: "98%", size: 14, dx: -18, dy: -14, dur: 19, spin: 74, opacity: 0.14, color: "rgba(74,144,226,0.20)" },

    // middle
    { top: "46%", left: "10%", size: 24, dx: 28, dy: 10, dur: 26, spin: 90, opacity: 0.14, color: "rgba(255,255,255,0.22)" },
    { top: "52%", left: "88%", size: 22, dx: -24, dy: -12, dur: 24, spin: 84, opacity: 0.14, color: "rgba(58,123,200,0.26)" },
    { top: "58%", left: "70%", size: 12, dx: -18, dy: 22, dur: 14, spin: 40, opacity: 0.18, color: "rgba(231,76,60,0.26)" },
    { top: "40%", left: "56%", size: 14, dx: 18, dy: -14, dur: 19, spin: 66, opacity: 0.16, color: "rgba(255,255,255,0.20)" },
    { top: "64%", left: "54%", size: 10, dx: -14, dy: 16, dur: 15, spin: 50, opacity: 0.18, color: "rgba(74,144,226,0.30)" },
    { top: "44%", left: "34%", size: 16, dx: 22, dy: 14, dur: 23, spin: 92, opacity: 0.13, color: "rgba(58,123,200,0.22)" },
    { top: "60%", left: "28%", size: 12, dx: -16, dy: -12, dur: 17, spin: 58, opacity: 0.16, color: "rgba(255,255,255,0.18)" },
    { top: "54%", left: "46%", size: 10, dx: 12, dy: -18, dur: 14, spin: 42, opacity: 0.17, color: "rgba(231,76,60,0.20)" },
    { top: "48%", left: "62%", size: 18, dx: -18, dy: 16, dur: 25, spin: 96, opacity: 0.12, color: "rgba(74,144,226,0.20)" },
    { top: "66%", left: "76%", size: 14, dx: 16, dy: -14, dur: 20, spin: 74, opacity: 0.15, color: "rgba(255,255,255,0.16)" },

    // bottom
    { top: "82%", left: "14%", size: 14, dx: 18, dy: -16, dur: 16, spin: 64, opacity: 0.18, color: "rgba(74,144,226,0.28)" },
    { top: "86%", left: "84%", size: 16, dx: -18, dy: -18, dur: 18, spin: 58, opacity: 0.17, color: "rgba(255,255,255,0.22)" },
    { top: "76%", left: "92%", size: 12, dx: -12, dy: -16, dur: 15, spin: 44, opacity: 0.16, color: "rgba(231,76,60,0.22)" },
    { top: "78%", left: "6%", size: 18, dx: 22, dy: -10, dur: 22, spin: 86, opacity: 0.12, color: "rgba(58,123,200,0.20)" },
    { top: "72%", left: "64%", size: 10, dx: -12, dy: 14, dur: 13, spin: 38, opacity: 0.16, color: "rgba(255,255,255,0.18)" },
    { top: "90%", left: "30%", size: 12, dx: 16, dy: -12, dur: 16, spin: 56, opacity: 0.16, color: "rgba(74,144,226,0.22)" },
    { top: "88%", left: "58%", size: 14, dx: -16, dy: -14, dur: 19, spin: 70, opacity: 0.14, color: "rgba(231,76,60,0.18)" },
    { top: "84%", left: "72%", size: 20, dx: 18, dy: -18, dur: 26, spin: 100, opacity: 0.10, color: "rgba(255,255,255,0.14)" },
];

export default function PixelBoxesBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div className="pixel-boxes-bg">
                {BOXES.map((b, i) => (
                    <span
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        className="pixel-box-wrap"
                        style={{
                            top: b.top,
                            left: b.left,
                            "--size": `${b.size}px`,
                            "--dx": `${b.dx}px`,
                            "--dy": `${b.dy}px`,
                            "--dur": `${b.dur}s`,
                            "--spin": `${b.spin}s`,
                            "--delay": `${-i * 0.6}s`,
                            "--tw": `${8 + (i % 6)}s`,
                            "--twDelay": `${-i * 0.9}s`,
                        }}
                    >
                        <span
                            className="pixel-box"
                            style={{
                                background: b.color,
                                "--o": b.opacity,
                            }}
                        />
                    </span>
                ))}
            </div>
            {/* soft vignette to keep it modern/clean */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
        </div>
    );
}


