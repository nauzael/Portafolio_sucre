import React from "react";

interface LogoItem {
  name: string;
  image: string;
}

interface BrandLogosProps {
  logos: LogoItem[];
}

export default function BrandLogos({ logos }: BrandLogosProps) {
  return (
    <section id="logos" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Aliados
          </h2>
        </div>

        <div className="mx-auto grid max-w-xl gap-6 grid-cols-1 sm:grid-cols-2 justify-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center p-4 transition hover:-translate-y-1">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
