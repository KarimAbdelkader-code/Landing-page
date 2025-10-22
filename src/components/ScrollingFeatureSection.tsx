"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Section {
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
  icon: string;
  bgGradient: string;
}

export default function ScrollingFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const scrollVelocity = useRef(0);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasInitialScroll, setHasInitialScroll] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'idle'>('idle');
  const [isResetting, setIsResetting] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const [isInStickyZone, setIsInStickyZone] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sections: Section[] = [
    {
      title: "Customer Success",
      description: "Drive successful outcomes. Grow revenue through data-driven customer insights and proactive engagement strategies.",
      link: "#",
      linkText: "Explore Success Platform",
      color: "#E94E1B",
      icon: "🎯",
      bgGradient: "from-red-500/10 to-orange-500/10"
    },
    {
      title: "Professional Services",
      description: "World-class service delivery. Convert clients into promoters with streamlined project management and automated workflows.",
      link: "#",
      linkText: "Discover PSA Solutions",
      color: "#3B82F6",
      icon: "⚡",
      bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Sales Excellence",
      description: "Streamline your sales process. Close more deals faster with intelligent CRM automation and predictive analytics.",
      link: "#",
      linkText: "Optimize Sales Pipeline",
      color: "#8B5CF6",
      icon: "🚀",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Calculate if we're within the section boundaries
      const beforeSection = scrollTop < sectionTop - windowHeight * 0.1;
      const afterSection = scrollTop > sectionBottom - windowHeight * 1.1;
      const inSection = !beforeSection && !afterSection;
      
      // Set section visibility
      setSectionInView(inSection);
      setIsInStickyZone(inSection);
      
      if (!inSection) {
        // Reset states when outside section
        if (beforeSection) {
          setHasInitialScroll(false);
          setContentVisible(false);
          setActiveSection(0);
        }
        return;
      }

      // Calculate progress only when in section
      const relativeScrollTop = Math.max(0, scrollTop - sectionTop);
      const scrollableHeight = sectionHeight - windowHeight;
      const normalizedProgress = Math.min(Math.max(relativeScrollTop / scrollableHeight, 0), 1);
      setScrollProgress(normalizedProgress * 100);
      
      // Calculate scroll direction
      const deltaScroll = scrollTop - lastScrollTop.current;
      const isScrollingUpNow = deltaScroll < 0;
      setIsScrollingUp(isScrollingUpNow);
      
      if (Math.abs(deltaScroll) > 2) {
        setScrollDirection(isScrollingUpNow ? 'up' : 'down');
      }

      lastScrollTop.current = scrollTop;

      // State transitions
      if (normalizedProgress >= 0.1 && !hasInitialScroll) {
        setHasInitialScroll(true);
      } else if (normalizedProgress < 0.05) {
        setHasInitialScroll(false);
        setContentVisible(false);
      }
      
      if (normalizedProgress >= 0.2 && !contentVisible) {
        setContentVisible(true);
      } else if (normalizedProgress < 0.15) {
        setContentVisible(false);
      }
      
      // Section transitions
      const sectionProgress = Math.max(0, Math.min(1, (normalizedProgress - 0.2) / 0.6));
      const currentSection = Math.floor(sectionProgress * sections.length);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Trigger initial scroll calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sections.length, hasInitialScroll, contentVisible]);

  return (
    <div 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
      style={{
        height: `${250}vh` // Reduced height to prevent excessive scrolling
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(233, 78, 27, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
            animation: 'aurora 20s ease-in-out infinite'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" 
             style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float" 
             style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-red-400/50 rounded-full animate-float" 
             style={{ animationDelay: '4s', animationDuration: '12s' }} />
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-indigo-400/30 rounded-full animate-float" 
             style={{ animationDelay: '6s', animationDuration: '9s' }} />
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(233, 78, 27, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(233, 78, 27, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
            }}
          />
        </div>
      </div>

      <div className={`sticky top-0 left-0 w-full h-screen flex items-center transition-all duration-500 ease-out ${
        !sectionInView
          ? 'invisible opacity-0 pointer-events-none'
          : 'visible opacity-100'
      }`}>
          {/* Enhanced Left Content */}
          <div 
            className={`w-1/2 p-16 flex flex-col justify-center transform transition-all duration-700 ease-out relative z-10 ${
              hasInitialScroll ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'
            }`}
          >
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl -z-10" />
            
            <div className="max-w-2xl relative">
              {/* Enhanced header section */}
              <div className={`transition-all duration-400 mb-12 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {/* Premium badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-white/60 to-white/40 border border-white/60 text-gray-700 text-sm font-medium mb-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3 animate-pulse group-hover:animate-none" />
                  <span className="tracking-wide uppercase font-semibold">Customer Journey Platform</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                  Unite your customer journey.
                </h3>
                
                {/* Enhanced CTA */}
                <button className="group relative bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] hover:from-[#D43D0A] hover:to-[#C02D00] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                    </svg>
                    Book a demo
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </div>

              {/* Enhanced sections with progress indicator */}
              <div className="space-y-8 relative">
                {/* Advanced progress bar */}
                <div className="absolute right-0 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="w-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden"
                    style={{
                      height: `${100 / sections.length}%`,
                      transform: `translateY(${activeSection * 100}%)`,
                      background: `linear-gradient(180deg, ${sections[activeSection]?.color || '#E94E1B'}, ${sections[activeSection]?.color || '#E94E1B'}90)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
                
                {sections.map((section, index) => (
                  <div
                    key={section.title}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className={`group transform transition-all duration-400 ease-out pr-8 cursor-pointer relative ${
                      index === activeSection
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-70 -translate-x-2 scale-95'
                    } ${
                      contentVisible ? 'translate-y-0' : 'translate-y-8'
                    } ${
                      hoverIndex === index ? 'scale-105 translate-x-2' : ''
                    }`}
                    style={{
                      transitionDelay: contentVisible 
                        ? `${index * 50}ms`
                        : '0ms'
                    }}
                  >
                    {/* Card background with gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    {/* Content */}
                    <div className="relative p-6 rounded-2xl">
                      {/* Icon and title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                          style={{ 
                            background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                            border: `2px solid ${section.color}30`
                          }}
                        >
                          {section.icon}
                        </div>
                        <h4 
                          className="text-2xl font-bold transition-all duration-300 group-hover:scale-105"
                          style={{ 
                            color: index === activeSection ? section.color : 'inherit'
                          }}
                        >
                          {section.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                        {section.description}
                      </p>
                      
                      <a
                        href={section.link}
                        className="inline-flex items-center gap-3 font-semibold transition-all duration-300 group/link text-lg hover:translate-x-2 relative overflow-hidden"
                        style={{ color: section.color }}
                      >
                        <span className="relative z-10">{section.linkText}</span>
                        <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover/link:scale-110">→</span>
                        <div 
                          className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full"
                          style={{ backgroundColor: section.color }}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right Image Area */}
          <div 
            className={`transform transition-all duration-700 ease-out absolute ${
              hasInitialScroll 
                ? 'w-1/2 right-0' 
                : 'w-1/2 left-1/2 transform -translate-x-1/2'
            }`}
          >
            {/* Sophisticated container with enhanced effects */}
            <div 
              className={`relative aspect-[4/3] transition-all duration-400 ease-out ${
                isScrollingUp && !hasInitialScroll ? 'scale-105' : 'scale-100'
              } ${
                hasInitialScroll ? 'rotate-0' : 'rotate-0'
              } ${
                isResetting ? 'scale-110 rotate-2' : ''
              }`}
            >
              {/* Advanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-3xl z-10 transition-opacity duration-300" />
              <div 
                className="absolute inset-0 rounded-3xl z-10 transition-all duration-500 opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${sections[activeSection]?.color || '#E94E1B'}20, transparent)`
                }}
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full animate-float blur-sm z-5" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float-delayed blur-sm z-5" />
              <div className="absolute top-1/4 -right-2 w-12 h-12 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full animate-bounce-slow blur-xs z-5" />
              
              {/* Dynamic border glow */}
              <div 
                className="absolute inset-0 rounded-3xl transition-all duration-500 z-5"
                style={{
                  boxShadow: `inset 0 0 0 2px ${sections[activeSection]?.color || '#E94E1B'}30, 0 0 30px ${sections[activeSection]?.color || '#E94E1B'}20`
                }}
              />
              
              {/* Reset animation overlay */}
              {isResetting && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#E94E1B]/30 to-[#D43D0A]/30 rounded-3xl z-20 animate-pulse" />
              )}
              
              {/* Enhanced main image */}
              <Image
                src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef123456"
                alt="Team collaborating over customer data"
                fill
                className={`object-cover rounded-3xl shadow-2xl transition-all duration-400 ease-out ${
                  isScrollingUp && !hasInitialScroll ? 'brightness-110 saturate-110' : 'brightness-100 saturate-100'
                } ${
                  hasInitialScroll ? 'shadow-2xl' : 'shadow-3xl'
                } ${
                  isResetting ? 'brightness-125 saturate-125' : ''
                }`}
                priority
              />
              
              {/* Interactive overlay content */}
              <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
                <div 
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/60 transition-all duration-400 ${
                    contentVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
                  }`}
                >
                  {/* Section indicator */}
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl border-2 transition-all duration-300"
                    style={{
                      backgroundColor: `${sections[activeSection]?.color || '#E94E1B'}20`,
                      borderColor: `${sections[activeSection]?.color || '#E94E1B'}60`,
                      color: sections[activeSection]?.color || '#E94E1B'
                    }}
                  >
                    {sections[activeSection]?.icon}
                  </div>
                  
                  {/* Active section title */}
                  <h4 
                    className="text-lg font-bold text-center mb-2"
                    style={{ color: sections[activeSection]?.color || '#E94E1B' }}
                  >
                    {sections[activeSection]?.title}
                  </h4>
                  
                  {/* Progress indicator */}
                  <div className="flex justify-center space-x-2">
                    {sections.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeSection ? 'scale-125' : 'scale-100'
                        }`}
                        style={{
                          backgroundColor: index === activeSection 
                            ? sections[index].color 
                            : 'rgba(255,255,255,0.5)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom spacer to ensure proper section end */}
        <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </div>
  );
}