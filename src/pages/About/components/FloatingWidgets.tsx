import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Bottom Head Office Banner section */}
      <div className="bg-[#0084CA] py-6 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-[#FFB800] font-bold text-lg md:text-xl tracking-tight">
            Head Office
          </h2>
        </div>
      </div>

      {/* Floating Bottom Right Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gray-400/80 hover:bg-gray-500 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Floating Chat Widget with "Talk to our Consultant" tooltip */}
        <div className="relative group flex flex-col items-end">
          {/* Tooltip speech bubble */}
          <div className="bg-white text-gray-800 text-xs md:text-sm font-semibold py-2 px-4 rounded-2xl shadow-xl border border-gray-100 relative mb-2 flex items-center gap-1 animate-pulse-subtle">
            <span>Talk to our</span>
            <span className="text-[#0084CA] font-bold">Consultant</span>
            {/* Triangle pointer */}
            <div className="absolute right-5 -bottom-1.5 w-3 h-3 bg-white rotate-45 border-b border-r border-gray-100" />
          </div>

          {/* Chat Circle Button */}
          <button
            type="button"
            aria-label="Open chat"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0084CA] hover:bg-[#0073B2] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 text-white stroke-[2.5]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingWidgets;
