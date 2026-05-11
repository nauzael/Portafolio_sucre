"use client";

import { motion } from "framer-motion";
import { 
  Heart,
  Hotel,
  Tent,
  Utensils,
  Link as LinkIcon,
  Share2
} from "lucide-react";

interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">
            ¿TIENES DUDAS?
          </h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            {text}
          </p>
        </motion.div>

        {/* Accesos directos */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <motion.a
            href="#hoteles"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-4 bg-gray-800 rounded-2xl hover:bg-cyan-600 transition-colors group"
          >
            <Hotel className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors" />
            <span className="font-medium">Hoteles</span>
          </motion.a>

          <motion.a
            href="#experiencias"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-4 bg-gray-800 rounded-2xl hover:bg-teal-600 transition-colors group"
          >
            <Tent className="w-8 h-8 text-teal-500 group-hover:text-white transition-colors" />
            <span className="font-medium">Experiencias</span>
          </motion.a>

          <motion.a
            href="#gastronomia"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-4 bg-gray-800 rounded-2xl hover:bg-orange-600 transition-colors group"
          >
            <Utensils className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
            <span className="font-medium">Gastronomía</span>
          </motion.a>
        </div>

        {/* Redes sociales - usando iconos genéricos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
            aria-label="Facebook"
          >
            <LinkIcon className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <Heart className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
            aria-label="Twitter"
          >
            <Share2 className="w-6 h-6" />
          </a>
        </motion.div>

        <div className="border-t border-gray-800 my-8" />

        {/* Copyright y legales */}
        <div className="text-center text-sm text-gray-400">
          <p className="mb-4">
            © {currentYear} Turismo Sucre. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de privacidad
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
