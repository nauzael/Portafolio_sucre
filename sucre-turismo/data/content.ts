// Datos del Portafolio Turístico de Sucre

export const siteData = {
  // Hero Section
  hero: {
    title: "Descubre Sucre y el Golfo de Morrosquillo",
    subtitle:
      "Vive la magia del Caribe colombiano. Conéctate con paraísos de sol y playa, maravíllate con el bosque seco tropical y descubre los saberes ancestrales de nuestras comunidades.",
    cta: "¡Planifica tu viaje ahora!",
  },

  logos: [
    {
      name: "Logo Naturaleza",
      image: "/logo naturaleza.png",
    },
    {
      name: "Logo Náutico",
      image: "/logo nautico.png",
    },
  ],

  // Hoteles en Coveñas
  hotelsCovenas: [
    {
      name: "Poblado Hotel",
      stars: 4,
      discount: "15% DESC",
      contact: "Melkin Narvaez",
      phone: ["3105935762", "3206345598"],
      email: "reservas@hotelpoblado.com",
      website: "",
      image: "/hotels/hotel-poblado.jpg",
    },
    {
      name: "Hotel Portoalegre",
      stars: 5,
      discount: "15% DESC",
      contact: "Diego Jaramillo",
      phone: ["300 2980993"],
      email: "",
      website: "hotelportoalegre.com.co",
      image: "/hotels/hotel-portoalegre.jpg",
    },
    {
      name: "Hotel Los Hermanos",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["3041117804", "3134725797"],
      email: "info@hotelloshermanos.com",
      website: "",
      image: "/hotels/hotel-los-hermanos.jpg",
    },
    {
      name: "Hotel Vaia",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["3001936990"],
      email: "reservas@vaiahoteles.com",
      website: "",
      image: "/hotels/hotel-vaia.jpg",
    },
    {
      name: "Cabañitas del Mar",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["313 3502889"],
      email: "reservas@cabanitasdelmar.co",
      website: "",
      image: "/hotels/cabanitas-del-mar.jpg",
    },
  ],

  // Hoteles en Sincelejo
  hotelsSincelejo: [
    {
      name: "Hotel Malibu",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["3145933714"],
      email: "reservas@hotelmalibu.co",
      website: "www.hotelmalibu.co",
      image: "/hotels/hotel-malibu.jpg",
    },
    {
      name: "Hotel Arawak Plaza",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["605 276 5555", "318 330 9737"],
      email: "arawakplaza@outlook.com",
      website: "www.arawakplaza.com",
      image: "/hotels/hotel-arawak-plaza.jpg",
    },
    {
      name: "Hotel Stanza Sincelejo",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["301 2673527"],
      email: "",
      website: "stanza-hotel-sincelejo.genesishotel.co",
      image: "/hotels/hotel-stanza-sincelejo.jpg",
    },
    {
      name: "Hotel Panorama",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["+57 5 282 1884", "320 531 8154"],
      email: "reservas@hotelpanoramasincelejo.com",
      website: "",
      image: "/hotels/hotel-panorama.png",
    },
    {
      name: "Hotel Ancor",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["318 2099588"],
      email: "",
      website: "hotel-ancor.genesishotel.co",
      image: "/hotels/hotel-ancor.webp",
    },
    {
      name: "Hotel Iraka Zenu",
      stars: 0,
      discount: "",
      contact: "",
      phone: ["321 6667404"],
      email: "",
      website: "",
      image: "/hotels/hotel-iraka-zenu.jpg",
    },
  ],

  // Operadores Turísticos
  operators: [
    {
      name: "MAPA TOURS",
      tagline: "Experiencias Bioculturales y de Naturaleza",
      description: "",
      phone: "+57 300 123 6173",
      email: "mapatoursporcolombia@gmail.com",
      website: "",
      socials: {
        instagram: "https://www.instagram.com/mapatoursporcolombia/",
        facebook: "https://www.facebook.com/mapatoursporcolombia/",
      },
      brochure: "/brochures/mapa-tours-brochure.pdf",
      image: "/mapa.jpg",
      experiences: [
        '"Conñeque" - Bicitour en Morroa con taller de ñeque',
        'Bicitour histórico en Corozal y Betulia',
        'Aventuras acuáticas en Ciénaga La Caimanera',
        'Recorrido nocturno "Astrotour"',
        'Stand Up Paddle (SUP)',
        'Primera experiencia de buceo en Coveñas',
        'Plancton bioluminiscente en Rincón del Mar',
      ],
    },
    {
      name: "ECOTOUR ONNE COLOSO",
      tagline: "Turismo Regenerativo Zenú",
      description: "Organización indígena en los Montes de María",
      phone: ["304 666 3693", "320 548 8336"],
      email: "ecoturismoindigenaonnecoloso@gmail.com",
      website: "",
      socials: {
        instagram: "https://www.instagram.com/ecoturismoindigenaonnecoloso/",
      },
      brochure: "/brochures/onne-coloso-brochure.pdf",
      image: "/onne.jpg",
      experiences: [
        '4 rutas inmersivas con arquitectura republicana',
        'Senderismo por el bosque seco tropical milenario',
        'Avistamiento de fauna (monos aulladores y tití)',
        'Baños en cascadas: El Arizal, El Sereno y La Angostura',
        "Desayunos de 'cabezas de gato'",
        'Sancochos de gallina y variedad de Motes',
        'Bebidas tradicionales: chicha y ron ñeque',
        'Servicio en auténticas totumas de calabazo',
      ],
    },
    {
      name: "MOMA EXCURSIONES",
      tagline: "Aventura Montemariana",
      description: "",
      phone: "+57 301 656 6932",
      email: "",
      website: "www.momaexcursiones.co",
      socials: {
        instagram: "https://www.instagram.com/momaexcursiones/",
      },
      brochure: "/brochures/moma-excursiones-brochure.pdf",
      image: "/moma.jpg",
      experiences: [
        'Senderismo en Reserva Forestal Serranía de Coraza (Los Caminos del Agua)',
        'Turismo de aventura en Parque Roca Madre (Toluviejo)',
        'Puentes tibetanos, cuevas y canopy',
        'Días de sol y playa con esnórquel en Rincón del Mar',
      ],
    },
    {
      name: "SUNSET TRAVEL COLOMBIA",
      tagline: "Agencia operadora con experiencia en Sucre",
      description: "Operadora con 7 años de experiencia y más de 5000 pasajeros movilizados. Especialistas en turismo de naturaleza, cultura y playa en Sucre.",
      phone: "+57 300 643 9532",
      email: "sunsettravelcolombia@gmail.com",
      website: "",
      socials: {
        instagram: "https://www.instagram.com/sunsettravelcolombia/",
      },
      brochure: "/brochures/sunset-travel-colombia-brochure.pdf",
      image: "/sunset.jpg",
      experiences: [
        'Tours de naturaleza en Montes de María y el Golfo de Morrosquillo',
        'Experiencias culturales y rutas ancestrales Zenú',
        'Aventuras en manglares, cascadas y avistamiento de aves',
        'Programas con alojamiento, transporte y gastronomía local',
      ],
    },
  ],

  // Gastronomía
  gastronomy: {
    mar: [
      'Poblado Restaurante',
      'El Parguito Feliz',
      'Zumo e Coco',
    ],
    ancestral: {
      operator: 'Onne Coloso',
      location: 'Montes de María',
      dishes: [
        "Desayunos de 'cabezas de gato'",
        'Sancochos de gallina',
        'Motes (de queso, guandul, palmito)',
      ],
      drinks: ['Chicha', 'Ron ñeque'],
      presentation: 'Servido en auténticas totumas de calabazo',
    },
  },

  // Festival Banner
  festival: {
    title: 'Festival Nacional de Pito Atravesao',
    subtitle: 'Tradición que nos une',
    dates: '26-28 de junio de 2026',
    location: 'Municipio de Morroa',
    version: '37ª Versión',
    honor: 'En honor a Pablo Domínguez',
    description: 'Música y raíces de la región',
  },

  // Footer
  footer: {
    text: '¿Tienes dudas o quieres un paquete a la medida? Contacta directamente a nuestros hoteles y agencias para armar el viaje de tus sueños.',
  },
};
