"use client";

import { motion } from "framer-motion";
import { Music, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

interface FestivalBannerProps {
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  version: string;
  honor: string;
  description: string;
}

export default function FestivalBanner({
  title,
  subtitle,
  dates,
  location,
  version,
  honor,
  description,
}: FestivalBannerProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient sunset */}
      <div className="absolute inset-0 gradient-sunset opacity-95" />
      
      {/* Patrón cultural Zenú sutil */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="zenu" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="2" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#zenu)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          {/* Icono de música */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Music className="w-10 h-10 md:w-14 md:h-14 text-white" />
            </div>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium mb-2 opacity-90"
          >
            {subtitle}
          </motion.p>

          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-montserrat"
          >
            {title}
          </motion.h2>

          {/* Afiche del festival */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 max-w-4xl mx-auto"
          >
            <div className="relative aspect-[3/4] md:aspect-auto md:h-[700px] rounded-2xl overflow-hidden">
              <Image
                src="/pito-atravesao-poster.jpeg"
                alt="Festival Nacional de Pito Atravesao - Pablo Domínguez"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Caja de información */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto mb-8"
          >
            {/* Fechas */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-amber-300">
                  {dates}
                </p>
              </div>
            </div>

            {/* Lugar */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-amber-300" />
              <p className="text-2xl font-semibold">{location}</p>
            </div>

            {/* Versión y homenaje */}
            <div className="space-y-3">
              <p className="text-xl font-bold text-amber-300">{version}</p>
              <p className="text-lg opacity-90">{honor}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <Users className="w-6 h-6 text-amber-300" />
                <p className="text-lg">{description}</p>
              </div>
            </div>
          </motion.div>

          {/* Nota de evento paralelo */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-white/80 text-sm italic"
          >
            Evento cultural paralelo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
