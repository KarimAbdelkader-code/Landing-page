"use client";

import React, { useEffect, useState, useCallback } from "react";

// Section configuration for navigation
const SECTIONS = [
  { id: "hero", name: "Hero", selector: "#hero-section" },
  { id: "partners", name: "Partners", selector: "#partners-section" },
  { id: "platform", name: "Platform", selector: "#platform-section" },
  { id: "features", name: "Features", selector: "#features-section" },
  { id: "solutions", name: "Solutions", selector: "#solutions-section" },
];

export const FloatingActionElements = () => {
  const handleContactClick = () => {
    // You can customize this to open a contact modal, navigate to contact form, etc.
    const contactSection = document.querySelector("#contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: you could open a modal or navigate to a contact page
      console.log(
        "Contact button clicked - add your contact functionality here"
      );
    }
  };

  const handleDemoClick = () => {
    // You can customize this to open a demo video modal, navigate to demo page, etc.
    const demoSection = document.querySelector("#demo-section");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: you could open a demo modal or video
      console.log("Demo button clicked - add your demo functionality here");
    }
  };

  return (
    <div className="fixed top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-50 space-y-3 sm:space-y-4">
      {/* Floating Contact Button */}
      <div className="group relative">
        <button
          onClick={handleContactClick}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white rounded-full shadow-2xl hover:shadow-[#E94E1B]/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center animate-pulse-glow"
          aria-label="Contact Us"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
        <div className="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Get in Touch
        </div>
      </div>

      {/* Floating Demo Button */}
      <div className="group relative">
        <button
          onClick={handleDemoClick}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          aria-label="Watch Demo"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Watch Demo
        </div>
      </div>
    </div>
  );
};

export const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full  bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export const FloatingSectionNavigator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const scrollToSection = useCallback((index: number) => {
    const section = SECTIONS[index];
    const element = document.querySelector(section.selector);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: scroll to a percentage of the page
      const scrollPosition =
        (index / (SECTIONS.length - 1)) *
        (document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Hide navigator when near the bottom to avoid conflicts with footer
      if (scrollTop + windowHeight >= docHeight - 100) {
        setIsVisible(false);
        return;
      } else {
        setIsVisible(true);
      }

      // Determine active section based on scroll position
      let currentSection = 0;

      // Try to find sections by their selectors first
      SECTIONS.forEach((section, index) => {
        const element = document.querySelector(section.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = index;
          }
        }
      });

      // Fallback: calculate based on scroll percentage
      if (currentSection === 0) {
        const scrollPercentage = scrollTop / (docHeight - windowHeight);
        currentSection = Math.min(
          Math.floor(scrollPercentage * SECTIONS.length),
          SECTIONS.length - 1
        );
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-40 space-y-2 sm:space-y-3 hidden md:flex">
      <div className="flex flex-col space-y-2">
        {SECTIONS.map((section, index) => (
          <div key={section.id} className="group relative">
            <button
              onClick={() => scrollToSection(index)}
              className={`rounded-full cursor-pointer hover:scale-150 transition-all duration-300 ${
                index === activeSection
                  ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#E94E1B] animate-pulse"
                  : "w-2 h-2 bg-gray-400 hover:bg-[#E94E1B]"
              }`}
              aria-label={`Navigate to ${section.name}`}
            />
            <div className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
