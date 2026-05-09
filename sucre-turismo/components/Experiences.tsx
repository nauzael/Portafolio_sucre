"use client";

import { motion } from "framer-motion";
import { 
  Tent, 
  Mountain, 
  Trees, 
  Fish, 
  Moon, 
  Anchor, 
  Bike,
  MapPin,
  Phone,
  Mail,
  Globe
} from "lucide-react";

interface Experience {
  name: string;
  tagline: string;
  description?: string;
  phone: string | string[];
  email: string;
  website: string;
  experiences: string[];
}

interface ExperiencesProps {
  operators: Experience[];
}

const getIcon = (experience: string) => {
  if (experience.toLowerCase().includes('bici')) return <Bike className="w-5 h-5" />;
  if (experience.toLowerCase().includes('senderismo')) return <Mountain className="w-5 h-5" />;
  if (experience.toLowerCase().includes('bosque') || experience.toLowerCase().includes('selva')) return <Trees className="w-5 h-5" />;
  if (experience.toLowerCase().includes('buceo') || experience.toLowerCase().includes('snorkel')) return <Fish className="w-5 h-5" />;
  if (experience.toLowerCase().includes('nocturno') || experience.toLowerCase().includes('astro')) return <Moon className="w-5 h-5" />;
  if (experience.toLowerCase().includes('playa') || experience.toLowerCase().includes('mar')) return <Anchor className="w-5 h-5" />;
  if (experience.toLowerCase().includes('ciénaga') || experience.toLowerCase().includes('agua')) return <Tent className="w-5 h-5" />;
  return <MapPin className="w-5 h-5" />;
};

export default function Experiences({ operators }: ExperiencesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50/50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            Aventuras, Naturaleza y Cultura
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Elige entre rutas de manglares, senderismo en montañas o conexiones bioculturales guiadas por nuestros operadores expertos.
          </p>
        </motion.div>

        {/* Tarjetas de operadores */}
        <div className="space-y-12">
          {operators.map((operator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-cyan-500 hover-lift"
            >
              {/* Header del operador */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {operator.name}
                </h3>
                <p className="text-xl text-cyan-600 font-medium mb-2">
                  {operator.tagline}
                </p>
                {operator.description && (
                  <p className="text-gray-600">{operator.description}</p>
                )}
              </div>

              {/* Experiencias */}
              <ul className="space-y-3 mb-8">
                {operator.experiences.map((exp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1 flex-shrink-0">
                      {getIcon(exp)}
                    </span>
                    <span className="text-gray-700">{exp}</span>
                  </li>
                ))}
              </ul>

              {/* Contacto */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 pt-6 border-t border-gray-100">
                {typeof operator.phone === 'string' ? (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-500" />
                    <a href={`tel:${operator.phone.replace(/\s/g, '')}`} className="hover:text-cyan-600">
                      {operator.phone}
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Phone className="w-4 h-4 text-cyan-500" />
                    {operator.phone.map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-cyan-600">
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
                
                {operator.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-500" />
                    <a href={`mailto:${operator.email}`} className="hover:text-cyan-600">
                      {operator.email}
                    </a>
                  </div>
                )}
                
                {operator.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-500" />
                    <a
                      href={operator.website.startsWith('http') ? operator.website : `https://${operator.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-600"
                    >
                      {operator.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
