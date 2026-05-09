"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  "/carousel-1.jpg",
  "/carousel-2.jpg",
  "/carousel-3.jpg",
  "/carousel-4.jpg",
  "/carousel-5.jpg",
  "/carousel-6.jpg",
  "/carousel-7.jpg",
];

const CAROUSEL_INTERVAL = 5000; // 5 segundos por imagen

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={CAROUSEL_IMAGES[currentIndex]}
            alt={`Carousel slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            quality={75}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradiente mejorado - múltiples capas para mejor efecto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Indicadores de slides */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {CAROUSEL_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles de navegación */}
      <motion.button
        onClick={() => {
          setCurrentIndex(
            (prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
          );
          setIsAutoPlay(false);
        }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseLeave={() => setIsAutoPlay(true)}
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
          setIsAutoPlay(false);
        }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseLeave={() => setIsAutoPlay(true)}
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
}
