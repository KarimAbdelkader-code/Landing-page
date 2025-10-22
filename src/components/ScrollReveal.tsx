"use client";

import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  distance?: number;
  duration?: number;
  stagger?: boolean;
  once?: boolean;
  stickySync?: boolean; // New prop for sticky behavior sync
  scrollRange?: [number, number]; // Range for scroll-based animation
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up",
  distance = 50,
  duration = 0.8,
  stagger = false,
  once = true,
  stickySync = false,
  scrollRange = [0, 1]
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !stickySync, margin: "-50px" });
  
  // Scroll-based animation for sticky sync
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getScrollTransforms = () => {
    if (!stickySync) return {};
    
    switch (direction) {
      case "up":
        return {
          y: useTransform(scrollYProgress, scrollRange, [distance, 0]),
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
      case "down":
        return {
          y: useTransform(scrollYProgress, scrollRange, [-distance, 0]),
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
      case "left":
        return {
          x: useTransform(scrollYProgress, scrollRange, [distance, 0]),
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
      case "right":
        return {
          x: useTransform(scrollYProgress, scrollRange, [-distance, 0]),
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
      case "scale":
        return {
          scale: useTransform(scrollYProgress, scrollRange, [0.8, 1]),
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
      case "fade":
        return {
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
      default:
        return {
          y: useTransform(scrollYProgress, scrollRange, [distance, 0]),
          opacity: useTransform(scrollYProgress, scrollRange, [0, 1])
        };
    }
  };

  const getInitialVariant = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      case "fade":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateVariant = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      case "fade":
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const itemVariants: Variants = {
    hidden: getInitialVariant(),
    visible: {
      ...getAnimateVariant(),
      transition: {
        duration,
        delay: stagger ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const // Fixed easing type
      }
    }
  };

  // For sticky sync, use scroll-based transforms
  if (stickySync) {
    const scrollTransforms = getScrollTransforms();
    
    return (
      <motion.div
        ref={ref}
        style={scrollTransforms}
        className={className}
      >
        {stagger ? (
          Array.isArray(children) ? 
          children.map((child, index) => (
            <motion.div 
              key={index}
              style={{
                ...scrollTransforms,
                // Add stagger delay to scroll-based animation
                transition: `all ${duration}s ease-out ${index * 0.1}s`
              }}
            >
              {child}
            </motion.div>
          )) : 
          <motion.div style={scrollTransforms}>
            {children}
          </motion.div>
        ) : children}
      </motion.div>
    );
  }

  // Default behavior for non-sticky animations
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger ? containerVariants : itemVariants}
      className={className}
    >
      {stagger ? (
        Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )) : 
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      ) : children}
    </motion.div>
  );
}
