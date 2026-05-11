"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hotel, Phone, Mail, Globe, Star } from "lucide-react";

interface Hotel {
  name: string;
  stars: number;
  discount: string;
  contact: string;
  phone: string[];
  email: string;
  website: string;
  image?: string;
}

interface HotelsProps {
  hotels: Hotel[];
  location: string;
}

export default function Hotels({ hotels, location }: HotelsProps) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 font-montserrat">
        <Hotel className="w-8 h-8 text-cyan-500" />
        {location}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-3xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover-lift ${hotel.discount ? 'border-2 border-cyan-300 ring-1 ring-cyan-100' : 'border border-gray-100'}`}
          >
            {hotel.image && (
              <div className="mb-4 overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={640}
                  height={360}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            {/* Nombre y estrellas */}
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h4>
              {hotel.stars > 0 && (
                <div className="flex gap-1">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Badge de descuento */}
            {hotel.discount && (
              <div className="mb-4">
                <span className="inline-block px-4 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 text-white text-base font-bold rounded-full shadow-lg">
                  {hotel.discount}
                </span>
                <p className="mt-2 text-sm text-cyan-700 font-semibold">
                  Descuento exclusivo para participantes del Encuentro de Comisiones Regionales de Competitividad e Innovación.
                </p>
              </div>
            )}

            {/* Contacto */}
            <div className="space-y-3 text-sm text-gray-600">
              {hotel.contact && (
                <p className="text-gray-900 font-medium">{hotel.contact}</p>
              )}
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-500" />
                <div className="flex flex-wrap gap-2">
                  {hotel.phone.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="hover:text-cyan-600 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {hotel.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-500" />
                  <a
                    href={`mailto:${hotel.email}`}
                    className="hover:text-cyan-600 transition-colors truncate"
                  >
                    {hotel.email}
                  </a>
                </div>
              )}

              {hotel.website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-500" />
                  <a
                    href={hotel.website.startsWith('http') ? hotel.website : `https://${hotel.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 transition-colors truncate"
                  >
                    {hotel.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
