"use client";

import React, { useRef, useState } from "react";

export default function HoverVideoCard({
  title,
  description,
  cta,
  videoSrc,
}: {
  title: string;
  description: string;
  cta?: { label: string; href?: string };
  videoSrc: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className="group relative w-full h-64 sm:h-80 md:h-[420px] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer border border-gray-200/50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100/30 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-float hidden sm:block" />
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-[#E94E1B]/20 to-[#D43D0A]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 animate-pulse" />
      
      {/* Premium video container */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-700 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
        } ${isLoaded ? 'filter-none' : 'blur-sm'}`}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
        aria-hidden="true"
      />

      {/* Advanced overlay system */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isHovered 
          ? 'bg-gradient-to-br from-black/50 via-black/30 to-transparent' 
          : 'bg-gradient-to-br from-gray-900/5 via-transparent to-transparent'
      }`} />
      
      {/* Animated border glow */}
      <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
        isHovered 
          ? 'shadow-[inset_0_0_0_2px_rgba(233,78,27,0.3),_0_0_30px_rgba(233,78,27,0.2)]' 
          : 'shadow-none'
      }`} />

      {/* Enhanced content container */}
      <div className="relative p-8 md:p-12 h-full flex flex-col justify-center backdrop-blur-[1px]">
        {/* Premium content badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-white/80 to-white/60 border border-white/40 text-gray-700 text-xs font-medium mb-6 backdrop-blur-sm transition-all duration-500 self-start ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
        }`}>
          <div className="w-2 h-2 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full mr-2 animate-pulse" />
          <span className="tracking-wide uppercase font-semibold">Featured</span>
        </div>

        {/* Enhanced title with text effects */}
        <h3 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 leading-tight ${
          isHovered 
            ? 'text-white transform translate-y-0 scale-100' 
            : 'text-gray-900 transform translate-y-1 scale-95'
        }`}>
          <span className="bg-gradient-to-r from-current to-current bg-clip-text">
            {title}
          </span>
        </h3>

        {/* Enhanced description */}
        <p className={`mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed transition-all duration-700 delay-100 ${
          isHovered 
            ? 'text-gray-100 transform translate-y-0 opacity-100' 
            : 'text-gray-600 transform translate-y-2 opacity-90'
        }`}>
          {description}
        </p>

        {/* Premium CTA with advanced animations */}
        {cta && (
          <div className={`transition-all duration-700 delay-200 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-80'
          }`}>
            <a
              href={cta.href || '#'}
              className="group/cta inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full bg-gradient-to-r from-white/90 to-white/70 border border-white/60 text-gray-900 hover:from-[#E94E1B] hover:to-[#D43D0A] hover:text-white hover:border-transparent transition-all duration-500 backdrop-blur-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="transition-all duration-300">{cta.label}</span>
              <div className="relative overflow-hidden">
                <span
                  className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] transition-all duration-500 group-hover/cta:scale-110 group-hover/cta:rotate-45"
                >
                  <svg width="10" height="10" className="sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        )}

        {/* Interactive progress indicator */}
        <div className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 transition-all duration-700 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-full h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
          <div className="mt-1 sm:mt-2 flex justify-between text-xs text-white/80 font-medium">
            <span>Experience</span>
            <span className="hidden sm:inline">Premium Quality</span>
            <span className="sm:hidden">Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
}
