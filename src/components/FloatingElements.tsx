'use client';

import React from 'react';

export const FloatingActionElements = () => {
  return (
    <div className="fixed top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-50 space-y-3 sm:space-y-4">
      {/* Floating Contact Button */}
      <div className="group relative">
        <button className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] text-white rounded-full shadow-2xl hover:shadow-[#E94E1B]/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center animate-pulse-glow">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </button>
        <div className="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Get in Touch
        </div>
      </div>
      
      {/* Floating Demo Button */}
      <div className="group relative">
        <button className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
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
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div className="h-full bg-gradient-to-r from-[#E94E1B] to-[#D43D0A] transition-all duration-300 ease-out" style={{width: '0%'}} id="progress-bar"></div>
    </div>
  );
};

export const FloatingSectionNavigator = () => {
  return (
    <div className="fixed left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-40 space-y-2 sm:space-y-3 hidden md:flex">
      <div className="flex flex-col space-y-2">
        <div className="group relative">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#E94E1B] rounded-full cursor-pointer hover:scale-150 transition-all duration-300 animate-pulse"></div>
          <div className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Hero
          </div>
        </div>
        <div className="group relative">
          <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
          <div className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Partners
          </div>
        </div>
        <div className="group relative">
          <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
          <div className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Platform
          </div>
        </div>
        <div className="group relative">
          <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
          <div className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Features
          </div>
        </div>
        <div className="group relative">
          <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:scale-150 hover:bg-[#E94E1B] transition-all duration-300"></div>
          <div className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Solutions
          </div>
        </div>
      </div>
    </div>
  );
};