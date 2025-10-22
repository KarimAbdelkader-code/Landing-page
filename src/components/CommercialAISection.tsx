'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const CommercialAISection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#E94E1B]/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-900/10 to-black/10 border border-gray-900/20 text-gray-900 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Innovation Spotlight
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the future of customer intelligence with our cutting-edge AI platform</p>
            </div>
            
            <div className="group bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-16 transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/10 to-[#D43D0A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Animated background elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-[#E94E1B]/20 to-[#D43D0A]/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-float-delay-1"></div>
              <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float-delay-2"></div>
              
              <div className="relative z-10">
                <div className="animate-fade-in-up">
                  <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    The Commercial AI Era
                  </h3>
                </div>
                <div className="animate-fade-in-up delay-200">
                  <p className="text-gray-300 mb-12 text-xl leading-relaxed max-w-2xl">
                    Discover Planhat's flexible, integrated and commercially rooted AI platform that transforms customer data into actionable business intelligence.
                  </p>
                </div>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up delay-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#E94E1B] rounded-full"></div>
                    <span className="text-gray-300 text-sm">Intelligent Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Predictive Insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Automated Actions</span>
                  </div>
                </div>
                
                <div className="animate-fade-in-up delay-400">
                  <button className="group/btn bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white px-8 py-4 rounded-full hover:from-[#D43D0A] hover:to-[#C02D00] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold">
                    <span className="flex items-center gap-2">
                      Explore AI Features
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};