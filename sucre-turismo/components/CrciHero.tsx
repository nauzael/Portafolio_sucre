"use client";

import { motion } from "framer-motion";

export default function CrciHero() {
  return (
    <section className="relative h-screen bg-[#111415] text-[#e1e3e4] overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonalPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="40" y2="40" stroke="#cbbeff" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="0" y2="40" stroke="#cbbeff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
        </svg>
      </div>

      {/* Neon Accent Squares */}
      <motion.div
        className="absolute top-20 left-8 md:left-20 w-4 h-4 bg-[#36ffc4] rounded-sm"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ boxShadow: "0 0 20px rgba(54, 255, 196, 0.6)" }}
      />
      <motion.div
        className="absolute bottom-40 right-8 md:right-20 w-3 h-3 bg-[#36ffc4] rounded-sm"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ boxShadow: "0 0 15px rgba(54, 255, 196, 0.5)" }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center h-auto">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start w-full">
              <img 
                src="/logo-gob.png" 
                alt="Logo GOB"
                className="h-32 sm:h-28 md:h-32 lg:h-40 xl:h-44 w-auto"
              />
              <div className="space-y-0 sm:space-y-1 w-full text-center lg:text-left">
                <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-[#cbbeff]">
                  Encuentro Nacional
                </h1>
                <h2 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#cbbeff]">
                  de Comisiones Regionales
                </h2>
                <h3 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-[#e9c400]">
                  de Competitividad e Innovación
                </h3>
              </div>
              
              <div className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#36ffc4] pt-2 sm:pt-3 md:pt-4 lg:pt-4 leading-none">
                2026
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Elements */}
          <motion.div
            className="relative w-full h-96 sm:h-96 md:h-[32rem] lg:h-[36rem] xl:h-[44rem] order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Container */}
            <motion.div
              className="absolute inset-0 bg-[#2d1b69] opacity-20 z-0"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(203, 190, 255, 0.1) 0, rgba(203, 190, 255, 0.1) 1px, transparent 1px, transparent 10px)",
              }}
            />

            {/* Main Image */}
            <div className="w-full h-full overflow-hidden z-10 bg-[#111415] flex items-center justify-center">
              <img 
                src="/hero.jpeg" 
                alt="Encuentro CRCI 2026 Danzadores Culturales"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#36ffc4] to-transparent opacity-30" />
    </section>
  );
}
