'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const BusinessUnificationSection = () => {
  return (
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E94E1B] to-[#D43D0A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E94E1B] transition-colors duration-300">Software</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    From startup to enterprise, software companies rely on Planhat to scale their customer success operations and drive revenue growth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">SaaS</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">B2B Tech</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Enterprise</span>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-[#E94E1B] to-[#D43D0A] rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#E94E1B]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
            </div>
          </ScrollReveal>

          {/* IT Services */}
          <ScrollReveal>
            <div className="group relative bg-gradient-to-br from-white via-blue-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="animate-fade-in-up">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">IT Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Managed service providers and IT consultancies use Planhat to deliver exceptional client experiences and optimize service delivery.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">MSP</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Consulting</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Support</span>
                  </div>
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
                <div className="animate-fade-in-up">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Business Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professional service firms leverage Planhat to manage client relationships, track project success, and drive business growth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Consulting</span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Agency</span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Professional</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
            </div>
          </ScrollReveal>

          {/* Financial Services */}
          <ScrollReveal>
            <div className="group relative bg-gradient-to-br from-white via-purple-50/30 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100/50 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="animate-fade-in-up">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Financial Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Banks, fintech companies, and investment firms trust Planhat to enhance client relationships and drive revenue through data-driven insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">FinTech</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">Banking</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">Investment</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};