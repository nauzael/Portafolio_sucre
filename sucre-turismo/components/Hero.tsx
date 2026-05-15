"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("content");
    contentSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Colores responsive
  const bgColor = "#2C2559";

  return (
    <>
      {/* Nuevo Hero Principal - Imagen con Cobranding */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: bgColor }}
      >
        {/* Contenedor principal con distribucion 100vh */}
        <div className="relative w-full h-full flex flex-col items-center justify-between px-4 md:px-6 pt-8 md:pt-12 pb-24 md:pb-32">
          {/* Imagen responsive con animación - Ocupa el espacio central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-6xl flex items-center justify-center flex-1"
          >
            {/* Desktop Image (16x9) */}
            <div className="hidden md:flex w-full items-center justify-center">
              <div className="relative w-full aspect-video max-w-7xl">
                <Image
                  src="/16x9_CRCI_2026_c.png"
                  alt="CRCI 2026 Hero"
                  fill
                  priority
                  quality={95}
                  className="object-contain"
                  sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1024px, (min-width: 1024px) 896px, (min-width: 768px) 100vw, 100vw"
                />
              </div>
            </div>

            {/* Mobile Image (9x16) */}
            <div className="flex md:hidden w-full items-center justify-center max-h-[40rem]">
              <div className="relative w-auto h-[40rem]">
                <Image
                  src="/9x16_CRCI_2026_b.png"
                  alt="CRCI 2026 Hero Mobile"
                  width={320}
                  height={568}
                  priority
                  quality={95}
                  className="object-contain h-full w-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Cobranding SVG - Centrado debajo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 md:mt-8 flex items-center justify-center"
          >
            <div className="relative w-80 md:w-[28rem] h-auto">
              <Image
                src="/Cobranding2.svg"
                alt="Cobranding"
                width={200}
                height={80}
                priority
                quality={95}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        </div>


      </section>

      {/* Hero con Carrusel Original */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="content">
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
    </>
  );
}
