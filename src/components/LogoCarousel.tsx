"use client"
import React, { useEffect, useRef, useState } from "react";

type Logo = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export function LogoCarousel({
  logos,
  speed = 60, // pixels per second
  pauseOnHover = true,
  reverse = false,
}: {
  logos: Logo[];
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let lastTime: number | null = null;

    const scrollWidthHalf = () => el.scrollWidth / 2;

    const step = (time: number) => {
      if (lastTime == null) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        const distance = (speed * delta) / 1000; // px to move this frame
        if (reverse) {
          el.scrollLeft -= distance;
          if (el.scrollLeft <= 0) {
            // jump forward by half the width to loop
            el.scrollLeft += scrollWidthHalf();
          }
        } else {
          el.scrollLeft += distance;
          if (el.scrollLeft >= scrollWidthHalf()) {
            // jump back by half the width to loop smoothly
            el.scrollLeft -= scrollWidthHalf();
          }
        }
      }
      rafId = requestAnimationFrame(step);
    };

    // duplicate content already present in markup; ensure starting position
    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isPaused, speed, reverse]);

  // Duplicate list so we can seamlessly loop
  const logosDup = [...logos, ...logos];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-12 items-center whitespace-nowrap will-change-scroll"
        style={{
          // prevent flex from wrapping; allow horizontal scroll
          overflowX: "auto",
          scrollbarWidth: "none" as any,
        }}
      >
        {logosDup.map((l, i) => (
          <div key={i} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <img src={l.src} alt={l.alt || "logo"} className="h-10 w-auto max-h-10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;
