"use client"

import React, { useState, useRef, useEffect } from "react";
import VideoModal from "./VideoModal";

type Props = {
  videoSrc: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

export default function TestimonialVideoCard({ videoSrc, quote, author, role, company }: Props) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div 
      ref={cardRef}
      className="group relative rounded-3xl overflow-hidden max-w-6xl w-full cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl"
      onClick={() => setOpen(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced video background with premium effects */}
      <div className="relative overflow-hidden rounded-3xl">
        <video 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-75' : 'scale-100 brightness-50'
          }`}
          src={videoSrc} 
          autoPlay 
          muted 
          loop 
          playsInline 
          onLoadedData={() => setIsVideoLoaded(true)}
        />
        
        {/* Dynamic gradient overlay that follows mouse */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered 
              ? 'bg-gradient-to-br from-black/70 via-black/50 to-black/70' 
              : 'bg-gradient-to-br from-black/60 via-black/40 to-black/60'
          }`}
          style={{
            background: isHovered 
              ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(233, 78, 27, 0.3) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.8) 100%)`
              : undefined
          }}
        />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-8 left-8 w-4 h-4 bg-white/20 rounded-full transition-all duration-1000 ${
            isHovered ? 'animate-pulse scale-125 opacity-100' : 'opacity-60'
          }`} />
          <div className={`absolute top-20 right-16 w-3 h-3 bg-[#E94E1B]/40 rounded-full transition-all duration-1000 delay-200 ${
            isHovered ? 'animate-bounce scale-110 opacity-100' : 'opacity-50'
          }`} />
          <div className={`absolute bottom-16 left-16 w-2 h-2 bg-blue-400/30 rounded-full transition-all duration-1000 delay-400 ${
            isHovered ? 'animate-pulse scale-150 opacity-100' : 'opacity-40'
          }`} />
          <div className={`absolute bottom-8 right-8 w-5 h-5 border border-white/20 rounded-full transition-all duration-1000 delay-600 ${
            isHovered ? 'animate-spin-slow scale-125 opacity-100' : 'opacity-50'
          }`} />
        </div>

        {/* Premium play button overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="relative">
            <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-white/90 to-white/70 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800 ml-1">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </div>
            </div>
            {/* Animated rings around play button */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
            <div className="absolute inset-2 rounded-full border border-[#E94E1B]/50 animate-pulse" />
          </div>
        </div>

        {/* Enhanced content layout */}
        <div className="relative h-full min-h-[500px]">
          <div className="md:flex md:items-center h-full">
            <div className="hidden md:block md:w-2/3" />
            <div className="md:w-1/3 w-full p-6 md:p-12 lg:p-16 flex items-center">
              <div className="w-full">
                {/* Premium testimonial card */}
                <div className={`relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl text-gray-900 rounded-2xl p-8 md:p-10 shadow-2xl max-w-2xl ml-auto border border-white/50 transition-all duration-700 ${
                  isHovered 
                    ? 'transform scale-105 shadow-3xl bg-gradient-to-br from-white via-white/95 to-gray-50/90' 
                    : 'transform scale-100'
                }`}>
                  {/* Testimonial badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E94E1B]/10 to-[#D43D0A]/10 border border-[#E94E1B]/20 text-[#E94E1B] text-xs font-semibold mb-6 transition-all duration-500 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-1'
                  }`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full mr-2 animate-pulse" />
                    <span className="tracking-wide uppercase">Customer Story</span>
                  </div>

                  {/* Quote with enhanced typography */}
                  <div className="relative mb-8">
                    <div className={`absolute -top-4 -left-2 text-6xl text-[#E94E1B]/20 font-serif transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
                    }`}>"</div>
                    <p className={`text-lg md:text-xl leading-relaxed font-medium relative z-10 transition-all duration-500 ${
                      isHovered ? 'text-gray-900' : 'text-gray-800'
                    }`}>
                      {quote}
                    </p>
                    <div className={`absolute -bottom-4 -right-2 text-6xl text-[#E94E1B]/20 font-serif rotate-180 transition-all duration-500 delay-100 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
                    }`}>"</div>
                  </div>
                  
                  {/* Enhanced author section */}
                  <div className={`text-right transition-all duration-500 delay-200 ${
                    isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-1 opacity-90'
                  }`}>
                    <p className="font-bold text-lg text-gray-900 mb-1">{author}</p>
                    {role && <p className="text-sm text-gray-600 font-medium">{role}</p>}
                    {company && (
                      <p className="text-sm font-semibold bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] bg-clip-text text-transparent">
                        {company}
                      </p>
                    )}
                  </div>

                  {/* Interactive elements */}
                  <div className={`absolute bottom-4 left-4 right-4 transition-all duration-700 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Click to watch full story
                      </div>
                    </div>
                  </div>

                  {/* Premium border glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E94E1B]/20 via-transparent to-[#E94E1B]/20 transition-all duration-500 -z-10 ${
                    isHovered ? 'opacity-100 blur-xl' : 'opacity-0 blur-none'
                  }`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/30 rounded-tl-3xl transition-all duration-500 group-hover:border-white/50" />
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-white/30 rounded-tr-3xl transition-all duration-500 group-hover:border-white/50" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-white/30 rounded-bl-3xl transition-all duration-500 group-hover:border-white/50" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/30 rounded-br-3xl transition-all duration-500 group-hover:border-white/50" />
      </div>

      {open && <VideoModal videoSrc={videoSrc} onClose={() => setOpen(false)} />}
    </div>
  );
}
