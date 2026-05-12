"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  // PLAYA Y MAR
  "/01-whatsapp-beach-1.jpeg",
  "/02-whatsapp-beach-2.jpeg",
  
  // CIÉNAGAS Y MANGLARES
  "/03-experience-paddleboard.jpeg",
  "/04-experience-waterfall.jpeg",
  
  // NATURALEZA
  "/05-carousel-1.jpg",
  "/06-carousel-2.jpg",
  "/07-carousel-3.jpg",
  "/08-carousel-4.jpg",
  "/09-carousel-6.jpg",
  "/10-carousel-7.jpg",
  "/11-DSC_2515.jpg",
  "/12-DSC_3861.jpg",
  "/13-DSC_3866.jpg",
  "/14-DSC_3941.jpg",
  "/15-experience-natural-pool.jpeg",
];

const CAROUSEL_INTERVAL = 5000; // 5 segundos por imagen

// Función para mezclar array usando Fisher-Yates
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ImageCarousel() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Inicializar con imágenes mezcladas
  useEffect(() => {
    setShuffledImages(shuffleArray(CAROUSEL_IMAGES));
  }, []);

  useEffect(() => {
    if (!isAutoPlay || shuffledImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlay, shuffledImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (shuffledImages.length === 0) {
    return <div className="absolute inset-0 bg-black z-0" />;
  }

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
            src={shuffledImages[currentIndex]}
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
        {shuffledImages.map((_, index) => (
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
            (prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length
          );
          setIsAutoPlay(false);
        }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 cursor-pointer group pointer-events-auto"
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
          setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
          setIsAutoPlay(false);
        }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 cursor-pointer group pointer-events-auto"
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
