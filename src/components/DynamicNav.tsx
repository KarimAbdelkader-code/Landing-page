"use client";

import React, { useEffect, useRef, useState } from "react";

export default function DynamicNav({ children, heroSelector = "#hero-sentinel" }: { children: React.ReactNode; heroSelector?: string }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const sentinelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sentinel = document.querySelector(heroSelector) as Element | null;
    if (!sentinel) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when sentinel is visible, hero is in view -> keep nav transparent
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0 }
    );

    obs.observe(sentinel);
    return () => obs.disconnect();
  }, [heroSelector]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isHeroVisible ? "bg-transparent" : "bg-white/90 backdrop-blur-sm border-b border-gray-100"}`}>
      {children}
    </div>
  );
}
