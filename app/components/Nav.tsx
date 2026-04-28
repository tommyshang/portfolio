"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-[background-color,backdrop-filter] duration-200 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md"
          : "bg-[#0a0a0a]"
      }`}
    >
      <div className="max-w-[900px] mx-auto px-10 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#ededed] tracking-tight">
          Niu Shang
        </span>
        <div className="hidden md:flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] text-[#888] hover:text-[#aaa] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
