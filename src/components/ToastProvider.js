import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const ToastContext = createContext(null);

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map());

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) clearTimeout(timer);
    timersRef.current.delete(id);
  }, []);

  const toast = useCallback(
    ({ title, message, variant = "success", durationMs = 2600 } = {}) => {
      const id = uid();
      setToasts((prev) => [
        ...prev,
        { id, title, message, variant, createdAt: Date.now() },
      ]);

      const timer = setTimeout(() => dismiss(id), durationMs);
      timersRef.current.set(id, timer);
      return id;
    },
    [dismiss]
  );

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Toaster */}
      <div className="fixed top-20 right-4 z-[9999] flex flex-col gap-3 w-[320px] max-w-[calc(100vw-2rem)] pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto relative overflow-hidden rounded-xl border-2 border-[#2C3E50] shadow-[6px_6px_0px_0px_#2C3E50] bg-white/85 backdrop-blur-md px-4 py-3 animate-pixel-toast-in ${
              t.variant === "success" ? "" : ""
            }`}
            role="status"
            aria-live="polite"
          >
            <div className="absolute inset-0 opacity-20 pixel-scanlines animate-scanlines pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#4A90E2]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="pixel-text font-extrabold text-[#2C3E50] text-sm">
                    {t.title ?? "ADDED TO CART"}
                  </div>
                  {t.message && (
                    <div className="mt-1 text-xs text-[#2C3E50]/80 pixel-text font-bold clamp-2">
                      {t.message}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => dismiss(t.id)}
                  className="pixel-text font-extrabold text-[#2C3E50] text-xs hover:underline"
                >
                  CLOSE
                </button>
              </div>

              {/* progress bar */}
              <div className="mt-3 h-[6px] bg-[#2C3E50]/10 rounded">
                <div className="h-full w-full bg-[#4A90E2] animate-pixel-toast-progress origin-left" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}


