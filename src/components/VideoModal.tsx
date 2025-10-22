"use client"

import React, { useEffect, useRef, useState } from "react";

type Props = {
  videoSrc: string;
  onClose: () => void;
};

export default function VideoModal({ videoSrc, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    // Animate in
    setIsVisible(true);
    
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    // try to autoplay when modal opens
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.muted = false;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current ?? videoRef.current;
    if (!el) return;
    
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.log('Fullscreen not supported');
    }
  };

  const handleVideoProgress = () => {
    const video = videoRef.current;
    if (video) {
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress || 0);
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isVisible && !isClosing 
          ? 'bg-black/90 backdrop-blur-sm opacity-100' 
          : 'bg-black/0 backdrop-blur-none opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Enhanced modal container */}
      <div 
        ref={containerRef} 
        className={`relative w-full max-w-[1200px] max-h-[90vh] transition-all duration-500 transform ${
          isVisible && !isClosing 
            ? 'scale-100 translate-y-0 opacity-100' 
            : 'scale-95 translate-y-8 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Premium video container */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black rounded-2xl"
            src={videoSrc}
            controls
            autoPlay
            onTimeUpdate={handleVideoProgress}
          />

          {/* Enhanced control overlay */}
          <div className={`absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            {/* Premium progress bar */}
            <div className="mb-4">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Premium logo/brand */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E94E1B] to-[#D43D0A] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">Premium Player</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Fullscreen button */}
                <button
                  aria-label="Toggle fullscreen"
                  onClick={toggleFullscreen}
                  className="group relative bg-white/10 hover:bg-white/20 text-white rounded-xl p-3 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    {isFullscreen ? (
                      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 0 2-2h3M3 16h3a2 2 0 0 0 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    ) : (
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                  </svg>
                </button>

                {/* Close button */}
                <button
                  aria-label="Close video"
                  onClick={handleClose}
                  className="group relative bg-red-500/20 hover:bg-red-500/30 text-white rounded-xl p-3 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-red-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Premium corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />

          {/* Floating decorative elements */}
          <div className="absolute top-8 left-1/4 w-2 h-2 bg-[#E94E1B]/50 rounded-full animate-pulse" />
          <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
        </div>

        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/20 via-transparent to-[#E94E1B]/20 rounded-2xl blur-xl -z-10 animate-pulse" />
      </div>
    </div>
  );
}
