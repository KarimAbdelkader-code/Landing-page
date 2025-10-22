"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 z-50 relative"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 overflow-y-auto"
          >
            <div className="container mx-auto px-6 pt-24 pb-12">
              <nav className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 mb-4">PLATFORM</h3>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>Features</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>Views</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>Workflows</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>AI</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 mb-4">SOLUTIONS</h3>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>CRM</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>CSP</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>PSA</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 mb-4">RESOURCES</h3>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>Pricing</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>Events</Link></li>
                    <li><Link href="#" className="text-2xl font-medium hover:text-[#E94E1B]" onClick={() => setIsOpen(false)}>Help Center</Link></li>
                  </ul>
                </div>
                <div className="pt-8 border-t">
                  <button className="bg-[#E94E1B] hover:bg-[#D43D0A] text-white px-8 py-3 rounded-full font-medium transition-colors w-full">
                    Request a demo
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
