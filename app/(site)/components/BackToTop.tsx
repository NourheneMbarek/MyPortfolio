"use client";

import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-purple-500 text-white
        shadow-lg shadow-purple-500/30
        transition-all duration-300
        hover:scale-110 hover:shadow-purple-500/50
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <BiChevronUp size={24} />
    </button>
  );
}