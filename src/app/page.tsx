import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Static imports for components that don't need dynamic loading
import { FloatingActionElements, ProgressIndicator, FloatingSectionNavigator } from '@/components/FloatingElements';
import { VisualSeparator, ElegantSectionDivider } from '@/components/VisualSeparators';
import DynamicNav from '@/components/DynamicNav';
import { MobileMenu } from '@/components/MobileMenu';
import { CookieBanner } from '@/components/CookieBanner';
import { ScrollReveal } from '@/components/ScrollReveal';

// Dynamic imports for better performance
const HeroShrink = dynamic(() => import('@/components/HeroShrink'));
const LogoCarousel = dynamic(() => import('@/components/LogoCarousel'));
const OnePlatformSection = dynamic(() => import('@/components/OnePlatformSection').then(mod => ({ default: mod.OnePlatformSection })));
const ScrollingFeatureSection = dynamic(() => import('@/components/ScrollingFeatureSection'));
const CommercialAISection = dynamic(() => import('@/components/CommercialAISection').then(mod => ({ default: mod.CommercialAISection })));
const IntuitiveSection = dynamic(() => import('@/components/IntuitiveSection').then(mod => ({ default: mod.IntuitiveSection })));
const TestimonialVideoCard = dynamic(() => import('@/components/TestimonialVideoCard'));
const HomeToEveryCustomerSection = dynamic(() => import('@/components/HomeToEveryCustomerSection').then(mod => ({ default: mod.HomeToEveryCustomerSection })));
const UnifiedPlatformSection = dynamic(() => import('@/components/UnifiedPlatformSection'));
const DataExplorerSection = dynamic(() => import('@/components/DataExplorerSection').then(mod => ({ default: mod.DataExplorerSection })));
const BusinessUnificationSection = dynamic(() => import('@/components/BusinessUnificationSection').then(mod => ({ default: mod.BusinessUnificationSection })));
const HoverVideoCard = dynamic(() => import('@/components/HoverVideoCard'));
const ProductCards = dynamic(() => import('@/components/ProductCards').then(mod => ({ default: mod.ProductCards })));

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth relative">
      {/* Floating UI Elements */}
      <FloatingActionElements />
      <ProgressIndicator />
      <FloatingSectionNavigator />
      
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
                  <div className="w-2 h-2 bg-gradient-to-r from-[#E94E1B] to-orange-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="tracking-wide uppercase font-semibold">Trusted by 500+ Companies Worldwide</span>
                  <div className="ml-3 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              {/* Enhanced title with staggered character animation */}
              <div className="animate-fade-in-up delay-300">
                <h1 className="text-8xl font-bold mb-2 leading-[0.9] transform transition-all duration-700 hover:scale-105 cursor-default group">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-[#E94E1B] group-hover:via-orange-400 group-hover:to-[#E94E1B] transition-all duration-700">
                    Customer
                  </span>
                </h1>
              </div>
              <div className="animate-fade-in-up delay-500">
                <h1 className="text-8xl font-bold mb-8 leading-[0.9] transform transition-all duration-700 hover:scale-105 cursor-default group">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-700">
                    Success
                  </span>
                </h1>
              </div>
              
              {/* Enhanced description with reveal animation */}
              <div className="animate-fade-in-up delay-700">
                <div className="relative">
                  <p className="text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                    The customer platform that scales with your business. 
                    <span className="text-white font-semibold"> Acquire, engage, and grow </span>
                    your customer base with intelligent automation and data-driven insights.
                  </p>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#E94E1B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Advanced CTA section with progressive reveal */}
              <div className="animate-fade-in-up delay-900">
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <button className="group relative bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-[#D43D0A] hover:to-[#C02D00] transition-all duration-300 hover:shadow-xl hover:shadow-[#E94E1B]/25 transform hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Free
                      <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                  
                  <button className="group relative border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg backdrop-blur-sm hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Watch Demo
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
              
              {/* Enhanced stats with progressive counters */}
              <div className="animate-fade-in-up delay-1100">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center group cursor-pointer hover-lift">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#E94E1B] transition-colors duration-300">500+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Enterprise Clients</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2 group-hover:via-[#E94E1B] transition-colors duration-300"></div>
                  </div>
                  <div className="text-center group cursor-pointer hover-lift">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">99.9%</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Uptime SLA</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2 group-hover:via-blue-400 transition-colors duration-300"></div>
                  </div>
                  <div className="text-center group cursor-pointer hover-lift">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">15M+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Data Points Daily</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2 group-hover:via-green-400 transition-colors duration-300"></div>
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

      {/* Visual Separator */}
      <VisualSeparator />

      {/* One Customer Platform Section */}
      <OnePlatformSection />

      {/* Scrolling Feature Section */}
      <ScrollingFeatureSection />

      {/* Elegant Section Divider */}
      <ElegantSectionDivider />

      {/* Commercial AI Era */}
      <CommercialAISection />

      {/* Intuitive Section */}
      <IntuitiveSection />

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
      <HomeToEveryCustomerSection />

      {/* Unified Platform Experience - Premium Merged Section */}
      <UnifiedPlatformSection />

      {/* Data Explorer with Advanced Visualizations */}
      <DataExplorerSection />

      {/* Unify Your Business */}
      <BusinessUnificationSection />

      {/* Two hover-video cards side-by-side (full-bleed) */}
      <section className="w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <HoverVideoCard
            videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            title="Customer Success in Action"
            description="See how leading companies use Planhat to drive customer success and revenue growth."
            cta={{ label: "Watch Success Stories" }}
          />
          <HoverVideoCard
            videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            title="Platform Deep Dive"
            description="Discover the powerful features that make Planhat the choice for customer success teams."
            cta={{ label: "Explore Features" }}
          />
        </div>
      </section>

      {/* System of Action */}
      <section className="py-32 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E94E1B]/5 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                System of Action
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Transform your customer data into actionable insights that drive real business outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E94E1B] to-[#D43D0A] rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collect</h3>
                  <p className="text-gray-600">Aggregate data from all customer touchpoints</p>
                </div>
                <div className="group hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analyze</h3>
                  <p className="text-gray-600">AI-powered insights and predictive analytics</p>
                </div>
                <div className="group hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Act</h3>
                  <p className="text-gray-600">Automated workflows and intelligent actions</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <ProductCards />
        </div>
      </section>

      {/* Newsletter with Premium Layout Harmonics */}
      <section className="py-40 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E94E1B]/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#E94E1B]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E94E1B]/10 to-[#D43D0A]/10 border border-[#E94E1B]/20 text-[#E94E1B] text-sm font-medium mb-8">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Stay Connected
                </div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                  Get the latest insights
                </h2>
              </div>
              <div className="animate-fade-in-up delay-300">
                <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                  Subscribe to our newsletter for customer success strategies, product updates, and industry insights delivered to your inbox.
                </p>
              </div>
              
              <div className="animate-fade-in-up delay-500">
                <div className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                    />
                    <button className="group bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white px-8 py-4 rounded-full hover:from-[#D43D0A] hover:to-[#C02D00] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold whitespace-nowrap">
                      <span className="flex items-center gap-2">
                        Subscribe
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="https://ext.same-assets.com/3038591859/2107219446.svg"
                alt="Planhat Logo"
                width={120}
                height={32}
                className="h-8 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-gray-400 mb-6">
                The customer platform that scales with your business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Planhat. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </main>
  );
}