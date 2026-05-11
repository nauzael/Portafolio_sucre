"use client";

import { motion } from "framer-motion";
import { OperatorCard } from "@/components/ui/operator-card";

interface Experience {
  name: string;
  tagline: string;
  description?: string;
  phone: string | string[];
  email: string;
  website: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  experiences: string[];
  brochure?: string;
  image?: string;
}

interface ExperiencesProps {
  operators: Experience[];
}

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
            <OperatorCard
              key={index}
              name={operator.name}
              tagline={operator.tagline}
              description={operator.description}
              imageUrl={operator.image}
              imageAlt={`${operator.name} fotografía`}
              experiences={operator.experiences}
              phone={operator.phone}
              email={operator.email}
              website={operator.website}
              brochureUrl={operator.brochure}
              socials={operator.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
