'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

export const DataExplorerSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background enhancements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-[#E94E1B]/5 to-orange-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            {/* Section header with data metrics */}
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-black/5 to-gray-800/5 border border-black/10 text-black text-sm font-medium mb-8 hover-lift">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
                <span className="tracking-wide uppercase font-semibold">Advanced Analytics Engine</span>
              </div>
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                Data explorer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Access your data like never before. Anyone can transform a no-code query into customer action in a matter of clicks.
              </p>
            </div>
            
            {/* Enhanced data visualization container */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-16 text-center relative overflow-hidden group hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-[#E94E1B]/20 to-[#D43D0A]/20 rounded-full animate-float"></div>
              
              {/* Floating data points */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-particle-float"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-float-reverse"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-breathe"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-magnetic-pull"></div>
              
              <div className="relative z-10">
                {/* Data metrics grid */}
                <div className="grid grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-200">
                  <div className="text-center group/metric cursor-pointer hover-lift">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover/metric:animate-pulse">
                      15M+
                    </div>
                    <div className="text-gray-400 text-sm">Data Points Processed</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group/metric cursor-pointer hover-lift">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover/metric:animate-pulse">
                      &lt;1s
                    </div>
                    <div className="text-gray-400 text-sm">Query Response Time</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group/metric cursor-pointer hover-lift">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover/metric:animate-pulse">
                      500+
                    </div>
                    <div className="text-gray-400 text-sm">Custom Integrations</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-2"></div>
                  </div>
                </div>
                
                {/* Enhanced image container with data visualization overlay */}
                <div className="relative aspect-video max-w-5xl mx-auto mb-12 group/image">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover/image:border-white/30 transition-colors duration-500"></div>
                  <Image
                    src="https://ext.same-assets.com/3038591859/3066803291.png"
                    alt="Data Explorer"
                    fill
                    className="object-contain rounded-2xl transform group-hover/image:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Data visualization overlays */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Real-time Data</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Active Queries: 847</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span>ML Processing</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced CTA with progress indicator */}
                <div className="animate-fade-in-up delay-600">
                  <button className="group/cta relative bg-gradient-to-r from-white to-gray-100 text-black px-8 py-4 rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Data Tools
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover/cta:translate-x-1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
                
                {/* Feature highlights */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up delay-800">
                  <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">No-Code Queries</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Real-time Results</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Smart Suggestions</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Export Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};