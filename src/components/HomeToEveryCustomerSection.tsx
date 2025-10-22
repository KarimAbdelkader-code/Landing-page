'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import ScrollCapture from './ScrollCapture';
import { TextReveal } from './TextReveal';

export const HomeToEveryCustomerSection = () => {
  return (
    <section id="home-every-customer" className="relative">
      {/* Sticky container that holds the animation */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#E94E1B]/5 to-[#D43D0A]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-8 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-[#E94E1B]/30 rounded-full animate-bounce hidden sm:block" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-16 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500/40 rounded-full animate-pulse hidden sm:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 left-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-indigo-500/35 rounded-full animate-bounce hidden sm:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500/45 rounded-full animate-pulse hidden sm:block" style={{ animationDelay: '3s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <ScrollCapture>
            <div className="scroll-area max-h-[70vh] sm:max-h-[80vh] overflow-y-auto touch-pan-y scroll-smooth bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/50 shadow-2xl">
              <ScrollReveal direction="scale" duration={1.2} stickySync={true} scrollRange={[0, 0.3]}>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold max-w-4xl mx-auto text-center leading-tight">
                  <TextReveal
                    text={"Home to every customer. And opportunity. And conversation. And ticket. And click. And action."}
                    scrollHighlight
                    containerSelector="#home-every-customer .scroll-area"
                    split="words"
                    animationType="slide"
                    staggerDelay={0.05}
                    duration={0.8}
                    stickySync={true}
                    scrollRange={[0.1, 0.9]}
                  />
                </h2>
              </ScrollReveal>
              
              {/* Enhanced progress indicator */}
              <ScrollReveal delay={0.5} direction="up" className="mt-8 sm:mt-12" stickySync={true} scrollRange={[0.3, 0.8]}>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E94E1B] rounded-full animate-pulse"></div>
                  <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full"></div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">Scroll to explore</div>
                  <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-[#E94E1B] to-[#D43D0A] rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E94E1B] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollCapture>
        </div>
      </div>
      
      {/* Spacer to create scroll distance for the sticky effect */}
      <div className="h-[200vh]"></div>
    </section>
  );
};