"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

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
  const ref = useRef(null);
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
    [0, words.length - 1]
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
        delayChildren: delay 
      } 
    },
  };

  const wordVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const innerVars = getVariants();

  // scroll-driven highlight state
  const [highlightIdx, setHighlightIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!scrollHighlight) return;
    
    if (stickySync) {
      // For sticky sync, use scroll progress directly
      const unsubscribe = highlightProgress.onChange((latest) => {
        const idx = Math.round(latest);
        const clamped = Math.max(0, Math.min(words.length - 1, idx));
        setHighlightIdx(clamped);
      });
      
      return unsubscribe;
    }
    
    // Original container-based scroll logic for non-sticky behavior
    if (!containerSelector) return;
    const container = document.querySelector(containerSelector) as HTMLElement | null;
    if (!container) return;

    let raf: number | null = null;
    const highlightables = words;

    const computeFromContainer = () => {
      // If the container itself can scroll, compute progress from its scrollTop
      if (container.scrollHeight > container.clientHeight) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        const progress = Math.min(Math.max(container.scrollTop / Math.max(1, maxScroll), 0), 1);
        return progress;
      }
      // Fallback: compute based on container position in viewport
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return Math.min(Math.max((vh - rect.top) / (rect.height + vh), 0), 1);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const progress = computeFromContainer();
        const idx = Math.floor(progress * highlightables.length);
        const clamped = Math.max(0, Math.min(highlightables.length - 1, idx));
        setHighlightIdx(clamped);
      });
    };

    // listen to both container scroll (for inner scroll areas) and window scroll/resize
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // initial calc
    onScroll();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      container.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onScroll as EventListener);
    };
  }, [scrollHighlight, containerSelector, words.length, stickySync, highlightProgress, words]);

  return (
    <motion.span 
      ref={ref}
      initial="hidden" 
      animate={isInView ? "show" : "hidden"}
      variants={containerVars} 
      className={className}
    >
      {words.map((w, i) => {
        const isHighlighted = highlightIdx === i;
        const baseClasses = "inline-block overflow-hidden align-middle transition-all duration-500";
        const colorClass = scrollHighlight && isHighlighted 
          ? "text-[#E94E1B] font-bold transform scale-110" 
          : scrollHighlight 
            ? "text-gray-400 font-normal" 
            : "";
        
        return (
          <motion.span 
            key={i} 
            variants={wordVars} 
            className={`${baseClasses} ${colorClass}`}
            whileHover={!scrollHighlight ? { 
              scale: 1.05, 
              color: "#E94E1B",
              transition: { duration: 0.2 } 
            } : {}}
          >
            <motion.span 
              variants={innerVars} 
              className="inline-block"
              style={{
                filter: scrollHighlight && isHighlighted ? "drop-shadow(0 0 8px rgba(233, 78, 27, 0.3))" : undefined
              }}
            >
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
