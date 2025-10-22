"use client";

import React, { useEffect, useRef } from "react";

export default function HeroShrink({ children, maxShrink = 0.65 }: { children: React.ReactNode; maxShrink?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        // compute progress between 0 and 1 over the hero height
        const heroHeight = el.offsetHeight;
        const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

        // scale from 1 down to maxShrink
        const scale = 1 - (1 - maxShrink) * progress;
        const translateY = -progress * 24; // small upward shift

        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.transformOrigin = "center top";
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxShrink]);

  return (
    <div ref={ref} className="w-full will-change-transform transition-transform duration-200">
      {children}
    </div>
  );
}
