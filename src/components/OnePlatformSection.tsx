'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

export const OnePlatformSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#E94E1B]/5 to-[#D43D0A]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-float"></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #E94E1B 25%, transparent 25%), linear-gradient(-45deg, #E94E1B 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E94E1B 75%), linear-gradient(-45deg, transparent 75%, #E94E1B 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E94E1B]/10 to-[#D43D0A]/10 border border-[#E94E1B]/20 text-[#E94E1B] text-sm font-medium mb-8">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                Platform Overview
              </div>
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                One customer platform.
              </h2>
            </div>
            <div className="animate-fade-in-up delay-300">
              <p className="text-6xl text-gray-400 font-light leading-tight mb-8">
                Everyone's business.
              </p>
            </div>
            <div className="animate-fade-in-up delay-500">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Unite your customer data, drive engagement, and accelerate growth with our comprehensive platform designed for modern enterprises.
              </p>
            </div>
            <div className="mt-8 animate-fade-in-up delay-700">
              <div className="w-32 h-1 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full mb-8"></div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-[#E94E1B] rounded-full"></div>
                  <span className="text-sm font-medium">360° Customer View</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm font-medium">Automated Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};