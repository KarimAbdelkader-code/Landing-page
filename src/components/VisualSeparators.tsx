'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const VisualSeparator = () => {
  return (
    <div className="relative h-32 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#E94E1B]/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#E94E1B]/20 rounded-full bg-white shadow-lg">
        <div className="absolute inset-2 bg-gradient-to-br from-[#E94E1B]/10 to-[#D43D0A]/10 rounded-full"></div>
      </div>
      {/* Floating particles */}
      <div className="absolute top-4 left-1/4 w-2 h-2 bg-[#E94E1B]/30 rounded-full animate-float"></div>
      <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-blue-500/30 rounded-full animate-float-delay-1"></div>
      <div className="absolute top-6 right-1/3 w-1 h-1 bg-indigo-500/40 rounded-full animate-float-delay-2"></div>
    </div>
  );
};

export const ElegantSectionDivider = () => {
  return (
    <div className="relative h-24 bg-gradient-to-b from-transparent via-gray-100/30 to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E94E1B]/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
        <div className="w-3 h-3 border-2 border-[#E94E1B]/30 rounded-full bg-white rotate-45"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
      </div>
    </div>
  );
};