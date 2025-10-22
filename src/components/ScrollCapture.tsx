"use client";

import React, { useEffect, useRef } from "react";

export default function ScrollCapture({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // find the actual scrollable element inside wrapper (e.g. .scroll-area) or fallback to wrapper
    const scroller = (el.querySelector<HTMLElement>(".scroll-area") as HTMLElement) || el;

    const onWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      const atTop = scroller.scrollTop <= 0;
      const atBottom = Math.ceil(scroller.scrollTop + scroller.clientHeight) >= scroller.scrollHeight - 1;

      // If inner can scroll in the wheel direction, prevent page scroll and scroll inner instead
      if ((delta < 0 && !atTop) || (delta > 0 && !atBottom)) {
        e.preventDefault();
        e.stopPropagation();
        scroller.scrollTop += delta;
      } else {
        // let the event bubble so page can scroll when inner is at edge
      }
    };

    // For touch devices, handle touchmove similarly
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const dy = startY - currentY; // positive -> scrolling down
      const atTop = scroller.scrollTop <= 0;
      const atBottom = Math.ceil(scroller.scrollTop + scroller.clientHeight) >= scroller.scrollHeight - 1;

      if ((dy < 0 && !atTop) || (dy > 0 && !atBottom)) {
        e.preventDefault();
        e.stopPropagation();
        scroller.scrollTop += dy;
        startY = currentY; // update start so movement is incremental
      } else {
        // allow page to handle
      }
    };

    // attach listeners to the scroller so we capture scrolls originating from it
    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("touchstart", onTouchStart, { passive: true });
    scroller.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      scroller.removeEventListener("wheel", onWheel as EventListener);
      scroller.removeEventListener("touchstart", onTouchStart as EventListener);
      scroller.removeEventListener("touchmove", onTouchMove as EventListener);
    };
  }, []);

  return (
    <div ref={ref} className="scroll-capture">
      {children}
    </div>
  );
}
