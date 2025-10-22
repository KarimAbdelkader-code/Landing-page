"use client";

import { motion } from "framer-motion";

export function ProductCards() {
  const cards = [
    {
      title: "Support",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      bgColor: "bg-pink-500",
      lightBg: "bg-pink-50",
    },
    {
      title: "Sales",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-50",
    },
    {
      title: "Customer Success",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      bgColor: "bg-orange-500",
      lightBg: "bg-orange-50",
    },
  ];

  return (
    <div className="space-y-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.02, x: 10 }}
          className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-6 ${card.lightBg} rounded-2xl cursor-pointer transition-all`}
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 ${card.bgColor} rounded-full flex items-center justify-center`}>
            {card.icon}
          </div>
          <span className="text-lg sm:text-xl font-bold">{card.title}</span>
        </motion.div>
      ))}
    </div>
  );
}
