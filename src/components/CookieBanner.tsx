"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Delay showing the banner for a smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 md:inset-auto md:bottom-6 md:right-6 z-50 p-4 md:p-0">
      <div className="mx-auto md:mx-0 md:ml-0 max-w-3xl">
        <div 
          className={`
            relative bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 
            backdrop-blur-xl text-white p-6 md:p-5 rounded-2xl md:rounded-3xl 
            shadow-2xl border border-white/10 
            flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6
            transform transition-all duration-500 ease-out
            hover:scale-[1.02] hover:shadow-3xl
            ${isVisible && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
            ${isAnimating ? 'translate-y-full opacity-0' : ''}
          `}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl md:rounded-3xl animate-pulse"></div>
          <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg animate-float-reverse"></div>
          
          {/* Cookie icon with animation */}
          <div className="relative flex-shrink-0 mb-2 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce-gentle">
              <svg className="w-6 h-6 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            {/* Floating particles around icon */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-10 flex-1">
            <div className="mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 animate-fade-in">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Privacy Notice
              </span>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-gray-200 animate-fade-in-delay">
              We use cookies to enhance your browsing experience and provide personalized content. 
              By continuing, you agree to our use of cookies.{' '}
              <Link 
                href="#" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-all duration-300 hover:scale-105"
              >
                Learn more
                <svg className="w-3 h-3 ml-1 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </p>
          </div>

          <div className="relative z-10 flex gap-3 ml-0 md:ml-4 w-full md:w-auto">
            <button
              onClick={handleClose}
              className="
                group relative flex-1 md:flex-none
                bg-white/10 hover:bg-white/20 active:bg-white/30
                text-white border border-white/20 hover:border-white/30
                px-6 py-3 rounded-xl text-sm font-medium
                transition-all duration-300 ease-out
                hover:scale-105 active:scale-95
                hover:shadow-lg hover:shadow-white/10
                animate-fade-in-delay-2
              "
            >
              <span className="relative z-10">Manage</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleClose}
              className="
                group relative flex-1 md:flex-none
                bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                text-white px-6 py-3 rounded-xl text-sm font-medium
                transition-all duration-300 ease-out
                hover:scale-105 active:scale-95
                hover:shadow-lg hover:shadow-blue-500/25
                animate-fade-in-delay-3
              "
            >
              <span className="relative z-10 flex items-center justify-center">
                Accept All
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="
              absolute top-3 right-3 md:top-4 md:right-4
              w-8 h-8 rounded-full
              bg-white/10 hover:bg-white/20
              text-white/70 hover:text-white
              transition-all duration-300
              hover:scale-110 hover:rotate-90
              flex items-center justify-center
              animate-fade-in-delay-4
            "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
