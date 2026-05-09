"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de fondo */}
      <ImageCarousel />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Icono decorativo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 inline-block"
        >
          <Image
            src="/crcis-logo.png"
            alt="CRCIS Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl font-montserrat"
        >
          {title.split(' ').slice(0, 3).join(' ')}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
            {title.split(' ').slice(3).join(' ')}
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-medium"
        >
          {subtitle}
        </motion.p>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={scrollToContent}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-caribe"
          >
            {cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
