"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";

export function TextReveal({
  text,
  split = "words",
  className = "",
  delay = 0,
  scrollHighlight = false,
  containerSelector,
  animationType = "slide",
  staggerDelay = 0.03,
  duration = 0.6,
  stickySync = false, // New prop for sticky behavior sync
  scrollRange = [0, 1], // Range for scroll-based highlighting
}: {
  text: string;
  split?: "words" | "chars";
  className?: string;
  delay?: number;
  scrollHighlight?: boolean;
  containerSelector?: string;
  animationType?: "slide" | "fade" | "scale" | "blur" | "typewriter";
  staggerDelay?: number;
  duration?: number;
  stickySync?: boolean;
  scrollRange?: [number, number];
}) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: !stickySync, margin: "-50px" });

  // For reliable rendering we split into words (or chars) and render explicit spaces between words.
  const words = split === "chars" ? text.split("") : text.split(/\s+/).filter(Boolean);

  // Scroll-based highlighting for sticky sync
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to highlight index for sticky sync
  const highlightProgress = useTransform(
    scrollYProgress,
    scrollRange,
    [0, Math.max(0, words.length - 1)]
  );

  const getVariants = () => {
    switch (animationType) {
      case "slide":
        return {
          hidden: { y: "100%", opacity: 0 },
          show: { 
            y: "0%", 
            opacity: 1, 
            transition: { 
              duration, 
              ease: [0.25, 0.46, 0.45, 0.94] as const
            } 
          },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          show: { 
            opacity: 1, 
            transition: { duration } 
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          show: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
              duration, 
              ease: [0.25, 0.46, 0.45, 0.94] as const 
            } 
          },
        };
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(10px)" },
          show: { 
            opacity: 1, 
            filter: "blur(0px)", 
            transition: { duration } 
          },
        };
      case "typewriter":
        return {
          hidden: { width: 0, opacity: 0 },
          show: { 
            width: "auto", 
            opacity: 1, 
            transition: { 
              duration: duration * 2, 
              ease: [0.25, 0.46, 0.45, 0.94] as const 
            } 
          },
        };
      default:
        return {
          hidden: { y: "100%", opacity: 0 },
          show: { 
            y: "0%", 
            opacity: 1, 
            transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] as const } 
          },
        };
    }
  };

  const containerVars = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  // Use DOM updates for scroll-driven highlighting (no React state updates) to reduce re-renders
  useEffect(() => {
    if (!scrollHighlight) return;
    const root = ref.current as HTMLElement | null;
    if (!root) return;

    const setActiveIndex = (idx: number) => {
      const children = Array.from(root.querySelectorAll<HTMLSpanElement>('.tr-word'));
      const clamped = Math.max(0, Math.min(children.length - 1, idx));
      children.forEach((el, i) => {
        el.classList.toggle('active', i === clamped);
      });
      root.setAttribute('data-highlight', String(clamped));
    };

    // Sticky sync: listen to framer motion derived transform value for reliable progress
    if (stickySync) {
      const unsub = highlightProgress.onChange((latest) => {
        const idx = Math.round(latest);
        setActiveIndex(idx);
      });
      // initial
      setActiveIndex(0);
      return () => unsub();
    }

    // Non-sticky: compute from container scroll or viewport position
    if (!containerSelector) return;
    const container = document.querySelector(containerSelector) as HTMLElement | null;
    if (!container) return;

    let raf: number | null = null;

    const computeFromContainer = () => {
      if (container.scrollHeight > container.clientHeight) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        const progress = Math.min(Math.max(container.scrollTop / Math.max(1, maxScroll), 0), 1);
        return progress;
      }
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return Math.min(Math.max((vh - rect.top) / (rect.height + vh), 0), 1);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const progress = computeFromContainer();
        const idx = Math.floor(progress * words.length);
        setActiveIndex(idx);
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // initial
    onScroll();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      container.removeEventListener('scroll', onScroll as EventListener);
      window.removeEventListener('scroll', onScroll as EventListener);
      window.removeEventListener('resize', onScroll as EventListener);
    };
  }, [scrollHighlight, containerSelector, words.length, stickySync, highlightProgress]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={containerVars}
      className={className}
    >
      {words.map((w, i) => {
        // When using scrollHighlight, render lightweight DOM spans (no framer-motion per-word)
        if (scrollHighlight) {
          return (
            <span
              key={i}
              role="text"
              aria-hidden={false}
              data-idx={i}
              className={`tr-word inline-block transition-colors duration-300 ease-out text-gray-500`}>
              <span className="inline-block will-change-transform">
                {w}
              </span>
              {i < words.length - 1 ? <span aria-hidden="true">{"\u00A0"}</span> : null}
            </span>
          );
        }

        // Fallback: original framer-motion powered reveal
        return (
          <motion.span key={i} variants={wordVars} className="inline-block overflow-hidden align-middle">
            <motion.span variants={getVariants()} className="inline-block">
              {w}
            </motion.span>
            {i < words.length - 1 ? <span aria-hidden="true">{"\u00A0"}</span> : null}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export default TextReveal;
