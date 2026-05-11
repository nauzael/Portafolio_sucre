"use client";

import { motion } from "framer-motion";
import { Fish, Coffee, Wine, Utensils, Waves } from "lucide-react";

interface GastronomyProps {
  mar: string[];
  ancestral: {
    operator: string;
    location: string;
    dishes: string[];
    drinks: string[];
    presentation: string;
  };
}

export default function Gastronomy({ mar, ancestral }: GastronomyProps) {
  return (
    <section className="py-20 bg-amber-50 relative overflow-hidden">
      {/* Patrón de olas sutil */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="wave" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 150 Q50 100 100 150 T200 150" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-500" />
            <path d="M0 160 Q50 110 100 160 T200 160" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-500" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              ¡Los Mejores Sabores del Caribe!
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frente al Mar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Frente al Mar</h3>
                <p className="text-cyan-600 font-medium">Coveñas</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Disfruta de la brisa y de los más exquisitos frutos del mar
            </p>

            <ul className="space-y-4">
              {mar.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Fish className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Gastronomía Ancestral */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Gastronomía Ancestral Zenú</h3>
                <p className="text-green-600 font-medium">{ancestral.location}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Sumérgete en los Montes de María
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-amber-500" />
                  Desayunos y Platos Típicos:
                </h4>
                <ul className="space-y-2">
                  {ancestral.dishes.map((dish, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-500 mt-1">•</span>
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Wine className="w-5 h-5 text-amber-500" />
                  Bebidas Tradicionales:
                </h4>
                <ul className="space-y-2">
                  {ancestral.drinks.map((drink, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-500 mt-1">•</span>
                      {drink}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600 italic mt-4 p-3 bg-amber-50 rounded-lg">
                {ancestral.presentation}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
