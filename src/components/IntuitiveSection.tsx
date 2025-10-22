'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const IntuitiveSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-100/50 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="group bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 text-black rounded-3xl p-12 max-w-2xl ml-auto transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/5 to-[#D43D0A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="animate-fade-in-up">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Intuitive yet deep
                </h3>
              </div>
              <div className="animate-fade-in-up delay-200">
                <p className="text-gray-700 mb-8 leading-relaxed">
                  A scalable platform your team can adopt in days.
                </p>
              </div>
              <div className="animate-fade-in-up delay-400">
                <button className="group/btn border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                    Discover
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-black/5 rounded-full animate-bounce-slow"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};