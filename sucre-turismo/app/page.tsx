import Hero from "../components/Hero";
import CrciHero from "../components/CrciHero";
import Hotels from "../components/Hotels";
import Experiences from "../components/Experiences";
import BrandLogos from "../components/BrandLogos";
import FestivalBanner from "../components/FestivalBanner";
import Footer from "../components/Footer";
import { siteData } from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* CRCI 2026 Hero Section */}
      <CrciHero />

      {/* Original Hero Section */}
      <Hero 
        title={siteData.hero.title}
        subtitle={siteData.hero.subtitle}
      />

      {/* Hoteles Section */}
      <section id="hoteles" className="py-20 bg-gradient-to-br from-cyan-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hoteles en Sincelejo y Coveñas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encuentra opciones de hospedaje y aprovecha beneficios exclusivos.
            </p>
          </div>

          <Hotels hotels={siteData.hotelsSincelejo} location="Hoteles en Sincelejo (Centro de la Región)" />
          <Hotels hotels={siteData.hotelsCovenas} location="Hoteles en Coveñas (Frente al Mar)" />
        </div>
      </section>

      {/* Experiencias Section */}
      <Experiences operators={siteData.operators} />

      {/* Aliados Section */}
      <BrandLogos logos={siteData.logos} />

      {/* Festival Banner */}
      <FestivalBanner
        title={siteData.festival.title}
        subtitle={siteData.festival.subtitle}
        dates={siteData.festival.dates}
        location={siteData.festival.location}
        version={siteData.festival.version}
        honor={siteData.festival.honor}
        description={siteData.festival.description}
      />

      {/* Footer */}
      <Footer text={siteData.footer.text} />
    </main>
  );
}
