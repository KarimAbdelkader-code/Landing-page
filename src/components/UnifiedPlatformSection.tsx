'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

export default function UnifiedPlatformSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen background image with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Tech Workspace"
          fill
          className="object-cover transform scale-105 transition-transform duration-[2000ms] group-hover:scale-110"
          priority
        />
        
        {/* Advanced layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/20 via-transparent to-green-500/20 opacity-60"></div>
        
        {/* Animated mesh overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `radial-gradient(circle at 25% 25%, #E94E1B 0%, transparent 50%), 
                      radial-gradient(circle at 75% 75%, #10B981 0%, transparent 50%)`,
          animation: 'aurora 8s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 py-32">
          
          {/* Section Header */}
          <ScrollReveal direction="up" duration={1.0}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 hover-lift">
                <div className="w-2 h-2 bg-gradient-to-r from-[#E94E1B] to-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="tracking-wide uppercase font-semibold">Complete Platform Experience</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                Unified Ecosystem
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of powerful functionality and consumer-ready usability in one comprehensive platform
              </p>
            </div>
          </ScrollReveal>

          {/* Dual Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Platform Ecosystem Card */}
            <ScrollReveal direction="left" duration={1.2} delay={0.2}>
              <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
                {/* Card background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E94E1B]/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E94E1B]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-[#E94E1B]/20 border border-[#E94E1B]/30 rounded-full text-[#E94E1B] text-sm font-semibold mb-6">
                    <div className="w-2 h-2 bg-[#E94E1B] rounded-full mr-2 animate-pulse"></div>
                    <span className="tracking-wide uppercase">Platform Core</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-[#E94E1B] transition-colors duration-500">
                    Unified Customer Action Hub
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    Your single source of truth and everyday customer-centric control centre for sales, service, and success teams.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#E94E1B] to-orange-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">360° Customer Intelligence</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#E94E1B] to-orange-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Real-time Action Center</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#E94E1B] to-orange-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Cross-team Collaboration</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#E94E1B] to-orange-500 text-white px-8 py-4 rounded-full hover:from-orange-500 hover:to-[#E94E1B] transition-all duration-500 font-semibold transform hover:scale-105 hover:shadow-xl">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Platform
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-8 right-8 w-12 h-12 border border-[#E94E1B]/30 rounded-full animate-spin-slow opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#E94E1B]/20 rounded-full animate-pulse"></div>
              </div>
            </ScrollReveal>

            {/* User Experience Card */}
            <ScrollReveal direction="right" duration={1.2} delay={0.4}>
              <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
                {/* Card background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="tracking-wide uppercase">User Experience</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-green-400 transition-colors duration-500">
                    Consumer-Ready Simplicity
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    Intuitive design meets powerful functionality. Experience Scandi simplicity with enterprise-grade capabilities.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Action-First Interface</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M9 11H1v4h8v4l8-6-8-6v2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Smart Shortcuts & Formulas</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M12 2L2 12h10l-1 8 10-8H11l1-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Mobile-First Design</span>
                    </div>
                  </div>

                  {/* Mobile Preview */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative group/phone">
                      <div className="w-48 h-80 bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                        <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                          <div className="relative z-10 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="space-y-2">
                              <div className="w-20 h-2 bg-white/40 rounded-full mx-auto"></div>
                              <div className="w-16 h-2 bg-white/30 rounded-full mx-auto"></div>
                              <div className="w-24 h-2 bg-white/20 rounded-full mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="absolute -top-2 -right-2 bg-green-400 w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full hover:from-emerald-500 hover:to-green-500 transition-all duration-500 font-semibold transform hover:scale-105 hover:shadow-xl">
                    <span className="relative z-10 flex items-center gap-2">
                      Try Interface
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-8 right-8 w-10 h-10 border border-green-400/30 rounded-full animate-pulse opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-green-400/20 rounded-full animate-bounce"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom CTA Section */}
          <ScrollReveal direction="up" duration={1.0} delay={0.6}>
            <div className="text-center mt-20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to transform your customer experience?
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of companies using Planhat to deliver exceptional customer outcomes
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group relative bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Request Demo
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B] to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </button>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-sm">or</span>
                  </div>
                  
                  <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 font-semibold backdrop-blur-sm">
                    <span className="flex items-center gap-2">
                      Start Free Trial
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Premium border glow */}
      <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-r from-[#E94E1B]/20 via-transparent to-green-500/20 opacity-60 blur-xl"></div>
    </section>
  );
}