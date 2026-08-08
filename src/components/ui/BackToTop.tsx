"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      className={`
        fixed
        bottom-5
        right-5
        z-50

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full
        border
        border-white/20

        bg-[#073456]
        text-white

        shadow-[0_12px_30px_rgba(4,31,49,0.25)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#1675b9]
        hover:shadow-[0_16px_36px_rgba(4,31,49,0.3)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1675b9]
        focus-visible:ring-offset-2

        sm:bottom-6
        sm:right-6

        ${
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <ArrowUp size={19} strokeWidth={2.3} />
    </button>
  );
}