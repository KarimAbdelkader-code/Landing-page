"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";

interface Section {
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
  icon: string;
  bgGradient: string;
}

export default function ScrollingFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const lastScrollTop = useRef(0);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasInitialScroll, setHasInitialScroll] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isInStickyZone, setIsInStickyZone] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Optimized sections with enhanced text splitting
  const sections: Section[] = useMemo(() => [
    {
      title: "Customer Success",
      description: "Drive successful outcomes with data-driven insights and proactive engagement.",
      link: "#",
      linkText: "Explore Success Platform",
      color: "#E94E1B",
      icon: "🎯",
      bgGradient: "from-red-500/10 to-orange-500/10",
    },
    {
      title: "Professional Services",
      description: "Convert clients into promoters with streamlined project management.",
      link: "#",
      linkText: "Discover PSA Solutions",
      color: "#3B82F6",
      icon: "⚡",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Sales Excellence",
      description: "Close more deals faster with intelligent CRM automation and analytics.",
      link: "#",
      linkText: "Optimize Sales Pipeline",
      color: "#8B5CF6",
      icon: "🚀",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
  ], []);

  // Optimized scroll handler with RAF and throttling
  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Calculate if we're within the section boundaries
      const beforeSection = scrollTop < sectionTop - windowHeight * 0.1;
      const afterSection = scrollTop > sectionBottom - windowHeight * 1.1;
      const inSection = !beforeSection && !afterSection;

      // Batch state updates for better performance
      if (inSection !== isInStickyZone) {
        setIsInStickyZone(inSection);
      }

      if (!inSection) {
        // Reset states when outside section
        if (beforeSection) {
          setHasInitialScroll(false);
          setContentVisible(false);
          setActiveSection(0);
        }
        return;
      }

      // Calculate progress only when in section
      const relativeScrollTop = Math.max(0, scrollTop - sectionTop);
      const scrollableHeight = sectionHeight - windowHeight;
      const normalizedProgress = Math.min(
        Math.max(relativeScrollTop / scrollableHeight, 0),
        1
      );
      
      const progressPercent = normalizedProgress * 100;
      setScrollProgress(progressPercent);

      // Enhanced scroll direction detection
      const deltaScroll = scrollTop - lastScrollTop.current;
      const isScrollingUpNow = deltaScroll < 0;
      
      if (Math.abs(deltaScroll) > 1) {
        setIsScrollingUp(isScrollingUpNow);
      }
      lastScrollTop.current = scrollTop;

      // Optimized state transitions with better thresholds
      const shouldShowInitial = normalizedProgress >= 0.05;
      const shouldShowContent = normalizedProgress >= 0.15;
      
      if (shouldShowInitial !== hasInitialScroll) {
        setHasInitialScroll(shouldShowInitial);
      }
      
      if (shouldShowContent !== contentVisible) {
        setContentVisible(shouldShowContent);
      }

      // Section transitions with smoother calculation
      const sectionProgress = Math.max(
        0,
        Math.min(1, (normalizedProgress - 0.2) / 0.6)
      );
      const currentSection = Math.floor(sectionProgress * sections.length);
      const newActiveSection = Math.min(currentSection, sections.length - 1);
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    });
  }, [sections.length, hasInitialScroll, contentVisible, activeSection, isInStickyZone]);

  // Setup scroll listener with performance optimizations
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Throttled scroll event for better performance
    let ticking = false;
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        ticking = true;
        handleScroll();
        setTimeout(() => {
          ticking = false;
        }, 16); // ~60fps
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  // Mobile detection and optimization
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
      style={{
        height: `${200}vh`, // Reduced height for more compact section
        willChange: 'auto', // Optimize for performance
      }}
    >
      {/* Optimized Background Effects */}
      <div className="absolute inset-0">
        {/* Simplified gradient mesh for better performance */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(233, 78, 27, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
            `,
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />

        {/* Reduced floating particles for better performance */}
        {isInStickyZone && (
          <>
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full"
              style={{ 
                animation: "float 8s ease-in-out infinite",
                animationDelay: "0s",
                transform: 'translateZ(0)',
              }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full"
              style={{ 
                animation: "float 10s ease-in-out infinite",
                animationDelay: "2s",
                transform: 'translateZ(0)',
              }}
            />
            <div
              className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-red-400/30 rounded-full"
              style={{ 
                animation: "float 12s ease-in-out infinite",
                animationDelay: "4s",
                transform: 'translateZ(0)',
              }}
            />
          </>
        )}
      </div>

      <div
        className={`sticky top-0 left-0 w-full h-screen flex items-center transition-all duration-300 ease-out ${
          !isInStickyZone
            ? "invisible opacity-0 pointer-events-none"
            : "visible opacity-100"
        }`}
        style={{ willChange: 'opacity, visibility' }}
      >
        {/* Enhanced Left Content */}
        <div
          className={`w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center transform transition-all duration-500 ease-out relative z-10 ${
            hasInitialScroll
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8 pointer-events-none"
          }`}
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl -z-10" />

          <div className="max-w-2xl relative">
            {/* Enhanced header section */}
            <div
              className={`transition-all duration-400 mb-6 sm:mb-8 ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Premium badge */}
              <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-white/50 to-white/30 border border-white/50 text-gray-700 text-xs font-medium mb-3 sm:mb-4 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-1.5 sm:mr-2 animate-pulse group-hover:animate-none" />
                <span className="tracking-wide uppercase font-semibold">
                  Customer Journey Platform
                </span>
              </div>

              {/* Enhanced title - now simplified without animation */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800">
                Unite your customer journey.
              </h3>

              {/* Enhanced CTA with better performance */}
              <button className="group relative bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] hover:from-[#D43D0A] hover:to-[#C02D00] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Book a demo
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Enhanced sections with optimized progress indicator */}
            <div className="space-y-4 sm:space-y-6 relative">
              {/* Optimized progress bar */}
              <div className="absolute right-0 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                  className="w-full rounded-full transition-transform duration-500 ease-out relative overflow-hidden"
                  style={{
                    height: `${100 / sections.length}%`,
                    transform: `translateY(${activeSection * 100}%)`,
                    background: `linear-gradient(180deg, ${
                      sections[activeSection]?.color || "#E94E1B"
                    }, ${sections[activeSection]?.color || "#E94E1B"}90)`,
                    willChange: 'transform',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>

              {sections.map((section, index) => (
                <div
                  key={section.title}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`group transform transition-all duration-300 ease-out pr-8 cursor-pointer relative ${
                    index === activeSection
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-70 -translate-x-1 scale-98"
                  } ${contentVisible ? "translate-y-0" : "translate-y-6"} ${
                    hoverIndex === index ? "scale-102 translate-x-1" : ""
                  }`}
                  style={{
                    transitionDelay: contentVisible ? `${index * 30}ms` : "0ms",
                    willChange: 'opacity, transform',
                  }}
                >
                  {/* Card background with gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  />
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  {/* Content */}
                  <div className="relative p-3 sm:p-4 rounded-xl">
                    {/* Icon and title */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-base sm:text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{
                          background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                          border: `2px solid ${section.color}30`,
                        }}
                      >
                        {section.icon}
                      </div>
                      <h4
                        className="text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 group-hover:scale-105"
                        style={{
                          color:
                            index === activeSection ? section.color : "inherit",
                        }}
                      >
                        {section.title}
                      </h4>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                      {section.description}
                    </p>

                    <a
                      href={section.link}
                      className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link text-sm sm:text-base hover:translate-x-2 relative overflow-hidden"
                      style={{ color: section.color }}
                    >
                      <span className="relative z-10">{section.linkText}</span>
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover/link:scale-110">
                        →
                      </span>
                      <div
                        className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full"
                        style={{ backgroundColor: section.color }}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Right Image Area */}
        <div
          className={`transform transition-all duration-700 ease-out absolute ${
            hasInitialScroll
              ? "w-1/2 right-0"
              : "w-1/2 left-1/2 transform -translate-x-1/2"
          }`}
        >
          {/* Optimized container with enhanced effects */}
          <div
            className={`relative aspect-[4/3] transition-all duration-300 ease-out ${
              isScrollingUp && !hasInitialScroll ? "scale-105" : "scale-100"
            }`}
            style={{ willChange: 'transform' }}
          >
            {/* Advanced background layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-3xl z-10 transition-opacity duration-300" />
            <div
              className="absolute inset-0 rounded-3xl z-10 transition-all duration-500 opacity-30"
              style={{
                background: `linear-gradient(135deg, ${
                  sections[activeSection]?.color || "#E94E1B"
                }20, transparent)`,
              }}
            />

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full animate-float blur-sm z-5" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float-delayed blur-sm z-5" />
            <div className="absolute top-1/4 -right-2 w-12 h-12 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full animate-bounce-slow blur-xs z-5" />

            {/* Dynamic border glow */}
            <div
              className="absolute inset-0 rounded-3xl transition-all duration-500 z-5"
              style={{
                boxShadow: `inset 0 0 0 2px ${
                  sections[activeSection]?.color || "#E94E1B"
                }30, 0 0 30px ${sections[activeSection]?.color || "#E94E1B"}20`,
              }}
            />

            {/* Enhanced main image */}
            <Image
              src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef123456"
              alt="Team collaborating over customer data"
              fill
              className={`object-cover rounded-3xl shadow-xl transition-all duration-300 ease-out ${
                isScrollingUp && !hasInitialScroll
                  ? "brightness-110 saturate-110"
                  : "brightness-100 saturate-100"
              }`}
              style={{ willChange: 'filter' }}
              priority
            />

            {/* Interactive overlay content */}
            <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/60 transition-all duration-400 ${
                  contentVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-4"
                }`}
              >
                {/* Section indicator */}
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-lg border-2 transition-all duration-300"
                  style={{
                    backgroundColor: `${
                      sections[activeSection]?.color || "#E94E1B"
                    }20`,
                    borderColor: `${
                      sections[activeSection]?.color || "#E94E1B"
                    }60`,
                    color: sections[activeSection]?.color || "#E94E1B",
                  }}
                >
                  {sections[activeSection]?.icon}
                </div>

                {/* Active section title */}
                <h4
                  className="text-base font-bold text-center mb-2"
                  style={{ color: sections[activeSection]?.color || "#E94E1B" }}
                >
                  {sections[activeSection]?.title}
                </h4>

                {/* Progress indicator */}
                <div className="flex justify-center space-x-2">
                  {sections.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeSection ? "scale-125" : "scale-100"
                      }`}
                      style={{
                        backgroundColor:
                          index === activeSection
                            ? sections[index].color
                            : "rgba(255,255,255,0.5)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer to ensure proper section end */}
      <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </div>
  );
}
