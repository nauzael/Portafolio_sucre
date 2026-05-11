"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface OperatorCardProps {
  name: string;
  tagline: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  experiences: string[];
  phone: string | string[];
  email?: string;
  website?: string;
  brochureUrl?: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  className?: string;
}

const OperatorCard = React.forwardRef<HTMLDivElement, OperatorCardProps>(
  (
    {
      name,
      tagline,
      description,
      imageUrl,
      imageAlt,
      experiences,
      phone,
      email,
      website,
      brochureUrl,
      socials,
      className,
    },
    ref
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-950 shadow-[0_30px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl",
          className
        )}
      >
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-8">
          <div className="flex flex-col justify-between">
            <div className="mb-6 space-y-4">
              <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 ring-1 ring-cyan-100">
                Operador local
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {name}
                </h2>
                <p className="mt-3 text-lg font-medium text-cyan-600">{tagline}</p>
              </div>

              {description && (
                <p className="text-slate-600 leading-7">{description}</p>
              )}
            </div>

            <div className="space-y-3">
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Experiencias destacadas
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {experiences.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-cyan-500">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-3xl border border-slate-100 bg-white p-3">
                  <Phone className="h-4 w-4 text-cyan-500" />
                  <div>
                    {typeof phone === "string" ? (
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-cyan-700">
                        {phone}
                      </a>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {phone.map((item, idx) => (
                          <a key={idx} href={`tel:${item.replace(/\s/g, "")}`} className="hover:text-cyan-700">
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {email && (
                  <div className="flex items-center gap-2 rounded-3xl border border-slate-100 bg-white p-3">
                    <Mail className="h-4 w-4 text-cyan-500" />
                    <a href={`mailto:${email}`} className="hover:text-cyan-700">
                      {email}
                    </a>
                  </div>
                )}

                {website && (
                  <div className="flex items-center gap-2 rounded-3xl border border-slate-100 bg-white p-3 sm:col-span-2">
                    <Globe className="h-4 w-4 text-cyan-500" />
                    <a
                      href={website.startsWith("http") ? website : `https://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-700"
                    >
                      {website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
              </div>

              {socials && (
                <div className="flex flex-wrap gap-3">
                  {socials.instagram && (
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100"
                    >
                      <Link2 className="h-4 w-4" />
                      Instagram
                    </a>
                  )}
                  {socials.facebook && (
                    <a
                      href={socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100"
                    >
                      <Link2 className="h-4 w-4" />
                      Facebook
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-4">
            {imageUrl ? (
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-sm ring-1 ring-slate-100">
                <img
                  src={imageUrl}
                  alt={imageAlt ?? name}
                  className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-[1.75rem] bg-slate-100" />
            )}

            {brochureUrl && (
              <a
                href={brochureUrl}
                download
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                Descargar brochure
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
);

OperatorCard.displayName = "OperatorCard";

export { OperatorCard };
