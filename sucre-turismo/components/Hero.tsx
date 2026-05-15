"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#2F255A' }}>
      {/* Contenedor principal responsivo */}
      <div className="w-full h-screen flex flex-col items-center justify-center px-4 md:px-6">
        {/* Imagen Hero - Desktop (16x9) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-full max-w-5xl aspect-video items-center justify-center"
        >
          <Image
            src="/16x9_CRCI_2026_c.png"
            alt="CRCI 2026 Hero Desktop"
            width={1280}
            height={720}
            priority
            quality={90}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Imagen Hero - Mobile (9x16) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:hidden w-full max-w-sm aspect-[9/16] items-center justify-center flex"
        >
          <Image
            src="/9x16_CRCI_2026_b.png"
            alt="CRCI 2026 Hero Mobile"
            width={360}
            height={640}
            priority
            quality={90}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Cobranding Logo - Debajo de la imagen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-12 flex items-center justify-center"
        >
          <Image
            src="/Cobranding2.svg"
            alt="Cobranding"
            width={280}
            height={80}
            quality={95}
            className="w-48 md:w-64 h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
