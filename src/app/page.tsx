import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileMenu } from "@/components/MobileMenu";
import { ProductCards } from "@/components/ProductCards";
import ScrollingFeatureSection from "@/components/ScrollingFeatureSection";
import LogoCarousel from "@/components/LogoCarousel";
import TextReveal from "@/components/TextReveal";
import HeroShrink from "@/components/HeroShrink";
import DynamicNav from "@/components/DynamicNav";
import ScrollCapture from "@/components/ScrollCapture";
import HoverVideoCard from "@/components/HoverVideoCard";
import TestimonialVideoCard from "@/components/TestimonialVideoCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth relative">
      {/* Floating Action Elements */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 space-y-4">
        {/* Floating Contact Button */}
        <div className="group relative">
          <button className="w-14 h-14 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white rounded-full shadow-2xl hover:shadow-[#E94E1B]/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center animate-pulse-glow">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </button>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Get in Touch
          </div>
        </div>
        
        {/* Floating Demo Button */}
        <div className="group relative">
          <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
            </svg>
          </button>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Watch Demo
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] transition-all duration-300 ease-out" style={{width: '0%'}} id="progress-bar"></div>
      </div>

      {/* Floating Section Navigator */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <div className="flex flex-col space-y-2">
          <div className="group relative">
            <div className="w-3 h-3 bg-[#E94E1B] rounded-full cursor-pointer hover:scale-150 transition-all duration-300 animate-pulse"></div>
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Hero
            </div>
          </div>
          <div className="group relative">
            <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Partners
            </div>
          </div>
          <div className="group relative">
            <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Platform
            </div>
          </div>
          <div className="group relative">
            <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Features
            </div>
          </div>
          <div className="group relative">
            <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Solutions
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <DynamicNav>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/3038591859/2107219446.svg"
              alt="Planhat Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <MobileMenu />
        </div>
      </DynamicNav>

      {/* Hero Section */}
      <HeroShrink>
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            {/* Progressive reveal background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20 z-10 animate-fade-in" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-15 animate-fade-in delay-200" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/10 via-transparent to-blue-500/10 z-12 animate-fade-in delay-400" />
            
            {/* Animated mesh gradient overlay */}
            <div className="absolute inset-0 opacity-30 animate-aurora z-8" style={{
              background: `linear-gradient(45deg, #E94E1B, #3B82F6, #8B5CF6, #E94E1B)`,
              backgroundSize: '400% 400%'
            }}></div>
            
            <Image
              src="https://ext.same-assets.com/3038591859/4223958807.png"
              alt="Hero Background"
              fill
              className="object-cover transform scale-105 animate-slow-zoom"
              priority
            />
          </div>
          
          {/* Enhanced floating ecosystem */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full animate-float delay-1000 backdrop-blur-sm border border-white/10 hover-glow"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#E94E1B]/30 to-[#E94E1B]/10 rounded-full animate-float-reverse delay-1500 backdrop-blur-sm hover-lift"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-full animate-particle-float delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full animate-magnetic-pull delay-2500"></div>
          <div className="absolute top-1/2 right-1/5 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full animate-breathe delay-3000"></div>
          
          {/* Advanced spotlight matrix */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl z-5"></div>
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-[#E94E1B]/10 to-transparent rounded-full blur-2xl animate-pulse-slow z-6"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-2xl animate-float z-7"></div>
          
          <div className="relative container mx-auto px-6 z-20">
            <div className="max-w-3xl text-white">
              {/* Progressive reveal badge with skeleton loading effect */}
              <div className="animate-fade-in-up delay-200">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm hover-lift group cursor-pointer">
                  <div className="w-4 h-4 mr-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0.5 bg-white rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="animate-typewriter overflow-hidden whitespace-nowrap">Trusted by enterprise leaders worldwide</span>
                </div>
              </div>
              
              {/* Enhanced title with staggered character animation */}
              <div className="animate-fade-in-up delay-300">
                <h1 className="text-8xl font-bold mb-2 leading-[0.9] transform transition-all duration-700 hover:scale-105 cursor-default group">
                  <span className="inline-block animate-slide-in-left bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent group-hover:animate-text-shadow-dance">
                    Know them.
                  </span>
                </h1>
              </div>
              <div className="animate-fade-in-up delay-500">
                <h1 className="text-8xl font-bold mb-8 leading-[0.9] transform transition-all duration-700 hover:scale-105 cursor-default group">
                  <span className="inline-block animate-slide-in-right bg-gradient-to-r from-[#E94E1B] via-orange-400 to-yellow-400 bg-clip-text text-transparent group-hover:animate-gradient-x">
                    Grow them.
                  </span>
                </h1>
              </div>
              
              {/* Enhanced description with reveal animation */}
              <div className="animate-fade-in-up delay-700">
                <div className="relative">
                  <p className="text-2xl mb-12 text-white/95 leading-relaxed font-light max-w-2xl">
                    The unified customer platform for growing lifelong revenue through 
                    <span className="relative inline-block mx-2">
                      <span className="bg-gradient-to-r from-[#E94E1B] to-orange-400 bg-clip-text text-transparent font-medium">data-driven insights</span>
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#E94E1B] to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 block"></span>
                    </span>
                    and intelligent automation.
                  </p>
                </div>
              </div>
              
              {/* Advanced CTA section with progressive reveal */}
              <div className="animate-fade-in-up delay-900">
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <button className="group relative bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] hover:from-[#D43D0A] hover:to-[#C02D00] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 active:scale-95 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Request a demo
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2 text-xl">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] opacity-0 group-hover:opacity-100 animate-ripple"></div>
                  </button>
                  
                  <button className="group relative border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg backdrop-blur-sm hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <div className="w-5 h-5 relative">
                        <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
                        <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      Watch Product Tour
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
              
              {/* Enhanced stats with progressive counters */}
              <div className="animate-fade-in-up delay-1100">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center group cursor-pointer hover-lift">
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#E94E1B] group-hover:to-orange-400 transition-all duration-500 animate-breathe">
                      500+
                    </div>
                    <div className="text-white/70 mt-1 text-sm group-hover:text-white/90 transition-colors duration-300">Enterprise Clients</div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2 group-hover:via-[#E94E1B] transition-colors duration-300"></div>
                  </div>
                  <div className="text-center group cursor-pointer hover-lift">
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#E94E1B] group-hover:to-orange-400 transition-all duration-500 animate-breathe delay-200">
                      99.9%
                    </div>
                    <div className="text-white/70 mt-1 text-sm group-hover:text-white/90 transition-colors duration-300">Platform Uptime</div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2 group-hover:via-[#E94E1B] transition-colors duration-300"></div>
                  </div>
                  <div className="text-center group cursor-pointer hover-lift">
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#E94E1B] group-hover:to-orange-400 transition-all duration-500 animate-breathe delay-400">
                      15M+
                    </div>
                    <div className="text-white/70 mt-1 text-sm group-hover:text-white/90 transition-colors duration-300">Records Processed</div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2 group-hover:via-[#E94E1B] transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-float"></div>
            </div>
          </div>
          
          {/* sentinel for nav visibility */}
          <div id="hero-sentinel" className="absolute bottom-0 left-0 w-full h-2 pointer-events-none" />
        </section>
      </HeroShrink>

      {/* Logo Section with Advanced Transitions */}
      <section className="py-20 border-b border-gray-100 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Morphing background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/20 to-transparent transform skew-y-1 animate-slow-zoom"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E94E1B]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-8 left-1/4 w-2 h-2 bg-[#E94E1B]/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-8 w-1 h-1 bg-indigo-500/50 rounded-full animate-breathe"></div>
        <div className="absolute top-1/2 right-8 w-1 h-1 bg-purple-500/50 rounded-full animate-magnetic-pull"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 animate-fade-in-up">
              {/* Enhanced badge with morphing effect */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-200/50 text-gray-700 text-sm font-medium mb-6 hover-lift group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#E94E1B] to-orange-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="tracking-wide uppercase font-semibold">Industry leaders trust Planhat to grow their revenue</span>
                </div>
              </div>
              
              {/* Animated divider */}
              <div className="relative mx-auto mb-8">
                <div className="w-32 h-1 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] mx-auto rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                </div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#E94E1B] rounded-full animate-pulse"></div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="max-w-full relative">
            {/* Enhanced gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            
            {/* LogoCarousel with enhanced container */}
            <div className="animate-fade-in delay-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/20 via-transparent to-gray-50/20 rounded-2xl"></div>
              <LogoCarousel
                logos={[
                  { src: "https://ext.same-assets.com/3038591859/261142533.svg", alt: "Trend Micro" },
                  { src: "https://ext.same-assets.com/3038591859/3258803340.svg", alt: "Tele Cryptic" },
                  { src: "https://ext.same-assets.com/3038591859/2128083783.svg", alt: "Anthology" },
                  { src: "https://ext.same-assets.com/3038591859/875789826.svg", alt: "Reisestarter" },
                  { src: "https://ext.same-assets.com/3038591859/583008813.svg", alt: "Nutanix" },
                  { src: "https://ext.same-assets.com/3038591859/505030711.svg", alt: "Customer.io" },
                  { src: "https://ext.same-assets.com/3038591859/576825794.svg", alt: "Trustpilot" },
                  { src: "https://ext.same-assets.com/3038591859/2651550302.svg", alt: "Dialpad" },
                  { src: "https://ext.same-assets.com/3038591859/3858024057.svg", alt: "Nasdaq" },
                  { src: "https://ext.same-assets.com/3038591859/3073128413.png", alt: "Medtronic" },
                ]}
                speed={80}
                pauseOnHover
              />
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex justify-center items-center space-x-8 animate-fade-in delay-500">
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">500+ Enterprise Clients</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                <span className="text-sm font-medium">99.9% Uptime SLA</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Visual Separator */}
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

      {/* One Customer Platform Section */}
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

      {/* Scrolling Feature Section */}
      <ScrollingFeatureSection />

      {/* Elegant Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-transparent via-gray-100/30 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E94E1B]/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="w-3 h-3 border-2 border-[#E94E1B]/30 rounded-full bg-white rotate-45"></div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
      </div>

      {/* Commercial AI Era */}
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
                      <span className="text-gray-300 text-sm">Predictive Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Smart Automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Real-time Insights</span>
                    </div>
                  </div>
                  
                  <div className="animate-fade-in-up delay-400">
                    <button className="group/btn bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white px-8 py-4 rounded-full hover:from-[#D43D0A] hover:to-[#C02D00] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold">
                      <span className="flex items-center gap-3">
                        Discover AIP
                        <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intuitive Section */}
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

      {/* Testimonial Section - video background with modal player */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex justify-center">
          <TestimonialVideoCard
            videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            quote={'"I\'m already getting a lot of phone calls from people in different functions that have heard about Planhat and want to get on board."'}
            author="Tracy Shouldice"
            role="Director of Customer Success"
            company="Trend Micro"
          />
        </div>
      </section>

      {/* Home to Every Customer - Enhanced with Premium Animations and Sticky Behavior */}
      <section id="home-every-customer" className="relative">
        {/* Sticky container that holds the animation */}
        <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
          {/* Enhanced background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#E94E1B]/5 to-[#D43D0A]/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 left-1/4 w-3 h-3 bg-[#E94E1B]/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-16 right-1/3 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 left-1/3 w-2.5 h-2.5 bg-indigo-500/35 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 bg-purple-500/45 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <ScrollCapture>
              <div className="scroll-area max-h-[80vh] overflow-y-auto touch-pan-y scroll-smooth bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
                <ScrollReveal direction="scale" duration={1.2} stickySync={true} scrollRange={[0, 0.3]}>
                  <h2 className="text-6xl md:text-8xl font-bold max-w-4xl mx-auto text-center leading-tight">
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
                <ScrollReveal delay={0.5} direction="up" className="mt-12" stickySync={true} scrollRange={[0.3, 0.8]}>
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-2 h-2 bg-[#E94E1B] rounded-full animate-pulse"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full"></div>
                    <div className="text-sm text-gray-500 font-medium">Scroll to explore</div>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-[#E94E1B] to-[#D43D0A] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#E94E1B] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollCapture>
          </div>
        </div>
        
        {/* Spacer to create scroll distance for the sticky effect */}
        <div className="h-[200vh]"></div>
      </section>

      {/* Unified Platform Experience - Premium Merged Section */}
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

      {/* Data Explorer with Advanced Visualizations */}
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
                        Real-time Data
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                        AI Insights
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                        Predictive Analytics
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA with progress indicator */}
                  <div className="animate-fade-in-up delay-600">
                    <button className="group/cta relative bg-gradient-to-r from-white to-gray-100 text-black px-8 py-4 rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg overflow-hidden">
                      <span className="relative z-10 flex items-center gap-3">
                        Explore Platform
                        <span className="transform transition-transform duration-300 group-hover/cta:translate-x-2">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/10 to-blue-500/10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Feature highlights */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up delay-800">
                    <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">No-Code Queries</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Real-time Insights</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Custom Dashboards</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center hover-lift cursor-pointer">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">AI-Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Unify Your Business */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E94E1B]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 animate-fade-in-up">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-gray-400">Unify your business</span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">on Planhat.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Planhat enables businesses all over the world, of every shape and size, to acquire, service and grow customers more successfully.
              </p>
              <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Software */}
            <ScrollReveal>
              <div className="group relative bg-gradient-to-br from-white via-gray-50/50 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
                {/* Card background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E94E1B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E94E1B]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="animate-fade-in-up">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E94E1B]/20 to-[#D43D0A]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#E94E1B]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-[#E94E1B] transition-colors duration-300">Software</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Run usage-based engagement campaigns. Deploy freemium and product-led growth models at scale.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-3 text-[#E94E1B] font-semibold hover:text-[#D43D0A] transition-all duration-300 group/link text-lg">
                      Explore Solution 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:scale-110">→</span>
                    </Link>
                  </div>
                </div>
                
                {/* Floating indicator */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-[#E94E1B] to-[#D43D0A] rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#E94E1B]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              </div>
            </ScrollReveal>

            {/* IT Services */}
            <ScrollReveal>
              <div className="group relative bg-gradient-to-br from-white via-blue-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="animate-fade-in-up delay-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v1z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">IT Services</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Forecast platform utilization. Deliver exceptional white-glove experiences from a collaborative portal.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group/link text-lg">
                      Explore Solution 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:scale-110">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              </div>
            </ScrollReveal>

            {/* Business Services */}
            <ScrollReveal>
              <div className="group relative bg-gradient-to-br from-white via-green-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="animate-fade-in-up delay-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">Business Services</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Optimize staffing. Track and report on project milestones and billables. Run referral programmes.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-3 text-green-600 font-semibold hover:text-green-700 transition-all duration-300 group/link text-lg">
                      Explore Solution 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:scale-110">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              </div>
            </ScrollReveal>

            {/* Connected Businesses */}
            <ScrollReveal>
              <div className="group relative bg-gradient-to-br from-white via-purple-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="animate-fade-in-up delay-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">Connected Businesses</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Monitor asset installation, schedule maintenance and measure value delivery.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-3 text-purple-600 font-semibold hover:text-purple-700 transition-all duration-300 group/link text-lg">
                      Explore Solution 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:scale-110">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              </div>
            </ScrollReveal>

            {/* Healthcare & Life Sciences */}
            <ScrollReveal>
              <div className="group relative bg-gradient-to-br from-white via-teal-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="animate-fade-in-up delay-400">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-teal-600 transition-colors duration-300">Healthcare & Life Sciences</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Contract and streamline stakeholder management. Audit inventory and predict demand.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-3 text-teal-600 font-semibold hover:text-teal-700 transition-all duration-300 group/link text-lg">
                      Explore Solution 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:scale-110">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              </div>
            </ScrollReveal>

            {/* Financial Services */}
            <ScrollReveal>
              <div className="group relative bg-gradient-to-br from-white via-orange-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="animate-fade-in-up delay-500">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">Financial Services</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Optimize staffing. Track and report on project milestones and billables. Run referral programmes.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-3 text-orange-600 font-semibold hover:text-orange-700 transition-all duration-300 group/link text-lg">
                      Explore Solution 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:scale-110">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Two hover-video cards side-by-side (full-bleed) */}
      <section className="w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2  w-full">
          <div className="w-full">
            <HoverVideoCard
              title="Powering 2.6 million customers."
              description="See the impact we're making in the world."
              cta={{ label: 'Our Impact', href: '#' }}
              videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </div>
          <div className="w-full">
            <HoverVideoCard
              title="No passengers. We're all crew."
              description="We've always got missions for the curious and daring."
              cta={{ label: 'Apply now', href: '#' }}
              videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
          </div>
        </div>
      </section>

      {/* System of Action */}
      <section className="py-32 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E94E1B]/5 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl p-16 text-center max-w-4xl mx-auto transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 cursor-pointer border border-white/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/10 to-[#D43D0A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="animate-fade-in-up">
                  <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Your new system of action
                  </h3>
                </div>
                <div className="animate-fade-in-up delay-200">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Act on customers as you analyze them.
                  </p>
                </div>
                <div className="animate-fade-in-up delay-400">
                  <button className="group/btn bg-[#E94E1B] hover:bg-[#D43D0A] text-white px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1 active:scale-95">
                    <span className="flex items-center gap-2">
                      Request a demo
                      <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-[#E94E1B]/20 rounded-full animate-pulse-slow"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 max-w-3xl mx-auto">
            <ProductCards />
          </div>
        </div>
      </section>

      {/* Newsletter with Premium Layout Harmonics */}
      <section className="py-40 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Advanced background composition */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#E94E1B]/5 via-transparent to-blue-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/3 to-transparent"></div>
        
        {/* Floating ecosystem */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-[#E94E1B]/10 to-orange-500/5 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/8 to-indigo-500/5 rounded-full blur-2xl animate-particle-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-500/8 to-pink-500/5 rounded-full blur-2xl animate-magnetic-pull"></div>
        
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #E94E1B 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #3B82F6 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 150px 150px',
            backgroundPosition: '0 0, 50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Content Column with Enhanced Typography */}
              <ScrollReveal>
                <div className="space-y-12 animate-fade-in-up">
                  {/* Premium badge */}
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-white/50 to-white/30 border border-white/40 text-gray-700 text-sm font-medium hover-lift cursor-pointer backdrop-blur-sm group">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#E94E1B] to-orange-400 rounded-full mr-3 animate-pulse group-hover:animate-none"></div>
                    <span className="tracking-wide uppercase font-semibold">Stay Connected</span>
                  </div>
                  
                  {/* Enhanced heading with golden ratio spacing */}
                  <div className="space-y-6">
                    <h2 className="text-7xl lg:text-8xl font-bold leading-[0.9] gradient-text-animated">
                      Know them.
                    </h2>
                    <h2 className="text-7xl lg:text-8xl font-bold leading-[0.9] bg-gradient-to-r from-[#E94E1B] via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                      Grow them.
                    </h2>
                  </div>
                  
                  {/* Premium description */}
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Get exclusive insights, product updates, and industry trends delivered to your inbox. Join thousands of customer success leaders.
                  </p>
                  
                  {/* Trust indicators */}
                  <div className="flex items-center space-x-8 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>10,000+ Subscribers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                      <span>Weekly Insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                      <span>No Spam</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Form Column with Advanced Interactions */}
              <ScrollReveal>
                <div className="animate-fade-in-up delay-300">
                  <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 interactive-card">
                    <form className="space-y-8">
                      {/* Enhanced email input */}
                      <div className="space-y-4 animate-fade-in-up delay-400">
                        <div className="relative group">
                          <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-6 py-5 bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#E94E1B] focus:bg-white transition-all duration-300 text-lg placeholder:text-gray-400 group-hover:border-gray-300 hover-magnetic"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/5 to-blue-500/5 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                        
                        {/* Premium input features */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Secure & encrypted</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                            </svg>
                            <span>Unsubscribe anytime</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Privacy notice with enhanced styling */}
                      <div className="animate-fade-in-up delay-500">
                        <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            By subscribing, you agree to receive marketing emails from Planhat. You can unsubscribe at any time. View our 
                            <Link href="#" className="text-[#E94E1B] hover:text-[#D43D0A] font-medium transition-colors duration-300 hover:underline mx-1">
                              Privacy Policy
                            </Link>
                            for more details.
                          </p>
                        </div>
                      </div>
                      
                      {/* Premium CTA button */}
                      <div className="animate-fade-in-up delay-600">
                        <button className="group w-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white px-8 py-5 rounded-2xl hover:from-[#D43D0A] hover:to-[#C02D00] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg btn-magnetic relative overflow-hidden">
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            Get Exclusive Insights
                            <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                          </span>
                        </button>
                      </div>
                      
                      {/* Social proof */}
                      <div className="animate-fade-in-up delay-700">
                        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-gray-600 font-bold">
                              +
                            </div>
                          </div>
                          <span>Join 10,000+ CS leaders</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Floating particles for ambiance */}
        <div className="absolute top-1/4 left-12 w-1 h-1 bg-[#E94E1B]/60 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-1/4 right-12 w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-float-reverse"></div>
        <div className="absolute top-3/4 left-1/3 w-0.5 h-0.5 bg-purple-500/80 rounded-full animate-breathe"></div>
        <div className="absolute bottom-1/2 right-1/4 w-1 h-1 bg-green-500/60 rounded-full animate-magnetic-pull"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-gray-50/50 py-20 border-t border-gray-100 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#E94E1B]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/3 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Logo section */}
          <div className="mb-16 text-center">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="https://ext.same-assets.com/3038591859/2107219446.svg"
                alt="Planhat Logo"
                width={140}
                height={40}
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="mt-4 text-gray-600 text-lg max-w-md mx-auto">
              The unified customer platform for growing lifelong revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="space-y-4">
              <h5 className="font-bold mb-6 text-sm text-gray-400 tracking-wider">PLANHAT</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">About</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">Press</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">Partnerships</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">Open</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 hover:translate-x-1 inline-block">Legal</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold mb-6 text-sm text-gray-400 tracking-wider">SOLUTIONS</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">CRM</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">CSP</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">PSA</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">Cisco CX</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">Processes</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">ADP</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block">Philanthropy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold mb-6 text-sm text-gray-400 tracking-wider">PLATFORM</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">Features</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">Views</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">Workflows</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">Metrics</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">Automations</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">Integrations</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 inline-block">AI</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold mb-6 text-sm text-gray-400 tracking-wider">RESOURCES</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">Pricing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">Editorial</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">Events</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">Developers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">RFP</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block">Changelog</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold mb-6 text-sm text-gray-400 tracking-wider">CUSTOMERS</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">Impact Studies</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">Software</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">Business Services</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">Connected Businesses</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">Financial Services</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">Healthcare & Life Sciences</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 hover:translate-x-1 inline-block">IT Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Enhanced bottom section */}
          <div className="border-t border-gray-200 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span>© 2025 Planhat Inc.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>All rights reserved</span>
              </div>
              
              <div className="flex gap-8 text-sm">
                <Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 relative group">
                  Status
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E94E1B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 relative group">
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E94E1B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 relative group">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E94E1B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#E94E1B] transition-colors duration-300 relative group">
                  Cookie Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E94E1B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">Follow us:</span>
                <Link href="#" className="group flex items-center gap-2 text-gray-600 hover:text-[#E94E1B] transition-colors duration-300">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </main>
  );
}
