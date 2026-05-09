# 🏖️ Sucre, Colombia - Portafolio Turístico
## Landing Page Tipo Infografía - Oferta Turística del Departamento de Sucre

**Enfoque:** Portafolio/catálogo digital de la oferta turística de Sucre  
**Tipo de página:** Landing page informativa tipo infografía  
**Plataforma de publicación:** Vercel + GitHub  
**Estilo:** Fresco, caribeño, natural, muy visual, tipo catálogo turístico  
**Fecha del informe:** 9 de mayo de 2026

---

## 📋 Resumen Ejecutivo

Esta landing page es un **portafolio turístico digital** que muestra de manera atractiva y visual toda la oferta turística del departamento de Sucre, Colombia. 

La página funciona como un **catálogo tipo infografía** que presenta:
- 🏨 **Hoteles** (Coveñas y Sincelejo)
- 🎯 **Operadores turísticos** (experiencias y rutas)
- 🍽️ **Gastronomía** (marina y ancestral)
- 🎉 **Eventos destacados** (Festival de Pito Atravesao como referencia cultural)

### Objetivo Principal:
**Mostrar la riqueza turística de Sucre** para atraer visitantes, con información práctica de contacto directa para facilitar la planificación de viajes.

### Público Objetivo:
- Turistas nacionales e internacionales
- Mochileros y viajeros independientes
- Familias buscando destinos de playa
- Amantes del ecoturismo y turismo cultural
- Fotógrafos de naturaleza

---

## 🏗️ Arquitectura de Información

La landing page se estructura en **5 secciones principales** tipo infografía:

### 1. Hero / Portada Impactante
- **H1:** Descubre Sucre y el Golfo de Morrosquillo
- **H2:** Vive la magia del Caribe colombiano. Conéctate con paraísos de sol y playa, maravíllate con el bosque seco tropical y descubre los saberes ancestrales de nuestras comunidades.
- **CTA:** ¡Planifica tu viaje ahora!
- **Visual:** Fotografía panorámica de playas del Golfo de Morrosquillo

### 2. Dónde Hospedarte (Catálogo de Hoteles)
**H2:** Tu descanso ideal: Hoteles en Sincelejo y Coveñas

**Bloque A - Hoteles en Coveñas (Frente al Mar):**
- Poblado Hotel ⭐⭐⭐⭐ (15% descuento 25-29 junio)
- Hotel Portoalegre ⭐⭐⭐⭐⭐ (15% descuento)
- Hotel Los Hermanos
- Hotel Vaia
- Cabañitas del Mar

**Bloque B - Hoteles en Sincelejo (Centro Regional):**
- Hotel Malibu
- Hotel Arawak Plaza
- Hotel Stanza Sincelejo
- Hotel Panorama
- Hotel Ancor
- Hotel Iraka Zenu

### 3. Experiencias y Operadores Turísticos
**H2:** Aventuras, Naturaleza y Cultura

**Tarjeta 1 - MAPA TOURS (Experiencias Bioculturales):**
- "Conñeque" - Bicitour en Morroa
- Bicitour histórico en Corozal y Betulia
- Ciénaga La Caimanera
- Astrotour nocturno
- SUP y buceo en Coveñas
- Plancton bioluminiscente en Rincón del Mar

**Tarjeta 2 - ECOTOUR ONNE COLOSO (Turismo Regenerativo Zenú):**
- Organización indígena en Montes de María
- 4 rutas inmersivas
- Arquitectura republicana
- Senderismo bosque seco tropical
- Avistamiento de fauna (monos aulladores, tití)
- Cascadas: El Arizal, El Sereno, La Angostura

**Tarjeta 3 - MOMA EXCURSIONES (Aventura Montemariana):**
- Senderismo Serranía de Coraza
- Parque Roca Madre (puentes tibetanos, cuevas, canopy)
- Snorkel en Rincón del Mar

### 4. Gastronomía Local
**H2:** ¡Los Mejores Sabores del Caribe!

**Frente al Mar (Coveñas):**
- Poblado Restaurante
- El Parguito Feliz
- Zumo e Coco

**Gastronomía Ancestral Zenú:**
- Onne Coloso (Montes de María)
- Desayunos: "cabezas de gato"
- Sancochos de gallina
- Motes (queso, guandul, palmito)
- Bebidas: chicha, ron ñeque
- Presentación en totumas de calabazo

### 5. Banner Promocional - Festival de Pito Atravesao
**H2:** 🎉 Tradición que nos une: Festival Nacional de Pito Atravesao

**Información:**
- Fechas: 26-28 de junio de 2026
- Lugar: Municipio de Morroa
- Versión: 37ª edición
- Homenaje: Pablo Domínguez
- Descripción: Música y raíces de la región

### 6. Footer / Contacto
- Texto: ¿Tienes dudas o quieres un paquete a la medida? Contacta directamente a nuestros hoteles y agencias para armar el viaje de tus sueños.
- Iconos de redes sociales
- Enlaces directos a contactos

---

## 🎨 Guía de Diseño Visual

### Paleta de Colores Caribeños

#### Colores Principales (Inspirados en el Caribe)
```css
/* Primary Colors - Caribe Colombiano */
--color-primary-turquoise: #06B6D4;  /* Turquesa - aguas del Golfo */
--color-primary-teal: #14B8A6;      /* Verde azulado - manglares */
--color-primary-coral: #F97316;     /* Coral - atardeceres */

/* Secondary Colors - Naturaleza */
--color-secondary-sand: #FEF3C7;    /* Arena dorada - playas */
--color-secondary-gold: #F59E0B;   /* Dorado - sol tropical */
--color-secondary-leaf: #10B981;   /* Verde hoja - bosque seco */
--color-secondary-forest: #059669; /* Verde bosque - manglares */

/* Neutral Colors */
--color-neutral-white: #FFFFFF;
--color-neutral-cream: #FFFBEB;    /* Crema suave - fondo */
--color-neutral-light: #F3F4F6;
--color-neutral-gray: #6B7280;
--color-neutral-dark: #1F2937;
--color-neutral-black: #111827;

/* Accent Colors */
--color-accent-sunset: #EC4899;   /* Rosa atardecer */
--color-accent-ocean: #3B82F6;    /* Azul océano */
```

#### Gradientes Sugeridos
```css
/* Gradiente principal - Atardecer caribeño */
--gradient-sunset: linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EC4899 100%);

/* Gradiente secundario - Aguas turquesas */
--gradient-ocean: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%);

/* Gradiente hero - Tropical */
--gradient-tropical: linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%);

/* Gradiente CTA - Llamativo */
--gradient-cta: linear-gradient(135deg, #F97316 0%, #EC4899 100%);
```

### Tipografía

#### Fuentes Principales
- **Títulos:** Montserrat (700, 600) - Moderna, legible
- **Cuerpo:** Open Sans (400) - Clara, amigable
- **Alternativas:** Poppins, Nunito, Lato

#### Escala Tipográfica
```css
/* Display - Hero y títulos principales */
--text-6xl: 3.75rem;   /* 60px - Hero H1 */
--text-5xl: 3rem;      /* 48px - Section H2 */
--text-4xl: 2.25rem;   /* 36px - Card titles */

/* Heading */
--text-3xl: 1.875rem;  /* 30px - H3 */
--text-2xl: 1.5rem;    /* 24px - H4 */
--text-xl: 1.25rem;    /* 20px - H5 */

/* Body */
--text-lg: 1.125rem;   /* 18px - Lead text */
--text-base: 1rem;     /* 16px - Body text */
--text-sm: 0.875rem;   /* 14px - Secondary text */
--text-xs: 0.75rem;    /* 12px - Caption */
```

### Iconografía

- **Librería:** Lucide React (https://lucide.dev)
- **Estilo:** Lineal moderno, 2px stroke, minimalista
- **Tamaños:** 32px (sm), 48px (md), 64px (lg)
- **Bordes redondeados:** 12px en contenedores

#### Iconos por Sección
```javascript
// Hero
MapPin, Waves, Sun, ArrowRight, PalmTree

// Hoteles
Hotel, Bed, Wifi, Coffee, Car, Phone, Mail, Globe

// Experiencias
Tent, Mountain, Trees, Fish, Moon, Star, Anchor, Bike, 
Binoculars, Droplets

// Gastronomía
Utensils, Fish, Coffee, Wine, Citrus

// Festival
Music, PartyPopper, Calendar, Users, Guitar

// Footer
Facebook, Instagram, Twitter, Mail, Phone, MapPin, Share2
```

### Spacing & Grid System

```css
/* Container widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;

/* Spacing scale (basado en grid de 8px) */
--spacing-4: 16px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;

/* Breakpoints responsive */
Mobile:  320px - 767px
Tablet:  768px - 1023px
Desktop: 1024px+
```

---

## 📐 Estructura Visual por Sección

### 1. Hero Section - Portada Impactante
**Altura:** 100vh desktop, min 80vh mobile

**Composición Visual:**
- Background: Fotografía panorámica playa (Golfo de Morrosquillo atardecer)
- Overlay: gradient-tropical (opacity 0.8)
- Icono: Sol (64px, gold)
- H1: "DESCUBRE SUCRE Y EL GOLFO DE MORROSQUILLO" (Montserrat 700, 60px desktop)
- Subtítulo: "Vive la magia del Caribe colombiano..." (Open Sans 400, 20px)
- CTA: "¡PLANIFICA TU VIAJE AHORA!" (btn-primary, pulse animation)
- Scroll indicator

**Colores:**
- Fondo: Fotografía con overlay tropical
- Texto: Blanco o #1F2937 según contraste
- CTA: Gradiente coral-rosa (#F97316 → #EC4899)

---

### 2. Hoteles Section - Catálogo de Alojamiento
**Fondo:** #FFFBEB (cream) - Color arena suave

**Composición:**
- H2: "Tu descanso ideal: Hoteles en Sincelejo y Coveñas"
- Icono: Bed (48px, gradient)
- Intro: "Contamos con las mejores opciones..."
- **Bloque Coveñas:** 5 hoteles frente al mar
- **Bloque Sincelejo:** 6 hoteles centro regional
- Grid: 3 columnas desktop, 2 tablet, 1 mobile
- Badges: "15% DESC" para hoteles con descuento

**Colores:**
- Fondo: #FFFBEB (cream)
- Tarjetas: Blanco (#FFFFFF)
- Badges: Gradiente coral
- Iconos: Turquesa/Teal

---

### 3. Experiencias y Operadores - Aventuras
**Fondo:** gradient-tropical (suave)

**Composición:**
- H2: "Aventuras, Naturaleza y Cultura"
- Intro: "Elige entre rutas de manglares..."
- 3 Tarjetas grandes de operadores:
  - MAPA TOURS (Experiencias bioculturales)
  - ECOTOUR ONNE COLOSO (Turismo regenerativo Zenú)
  - MOMA EXCURSIONES (Aventura montemariana)
- Cada tarjeta incluye:
  - Icono grande (48px)
  - Nombre del operador
  - Lista de experiencias
  - Contacto (teléfono, email, web)

**Colores:**
- Fondo: Gradiente tropical suave
- Tarjetas: Blanco con sombra turquesa
- Iconos: Gradientes por categoría

---

### 4. Gastronomía - Sabores del Caribe
**Fondo:** #FEF3C7 (sand) con wave-pattern (opacity 0.05)

**Composición:**
- H2: "¡Los Mejores Sabores del Caribe!"
- Dos bloques:
  - 🏖️ Frente al Mar (Coveñas): Poblado Restaurante, El Parguito Feliz, Zumo e Coco
  - 🌿 Gastronomía Ancestral Zenú: Onne Coloso, "cabezas de gato", sancochos, motes, chicha, ron ñeque

**Colores:**
- Fondo: #FEF3C7 (arena)
- Títulos: Gradiente coral-dorado
- Iconos: Naranja/coral para mar, verde para ancestral

---

### 5. Banner Festival - Pito Atravesao
**Fondo:** gradient-sunset con zenu-pattern (opacity 0.1)

**Composición:**
- Icono: Music (64px, blanco)
- Título: "🎉 TRADICIÓN QUE NOS UNE"
- "FESTIVAL NACIONAL DE PITO ATRAVESAO"
- Fechas: "26-28 JUNIO 2026" (destacado)
- Lugar: "MUNICIPIO DE MORROA"
- "37ª VERSIÓN (En honor a Pablo Domínguez)"
- Nota: "Evento cultural paralelo"

**Colores:**
- Fondo: Gradiente sunset (naranja-rosa)
- Texto: Blanco
- Iconos: Blanco/Dorado

---

### 6. Footer - Contacto
**Fondo:** #111827 (dark)

**Composición:**
- Texto: "¿TIENES DUDAS? Contacta directamente..."
- Accesos directos a secciones
- Redes sociales
- Copyright

**Colores:**
- Fondo: #111827 (muy oscuro)
- Texto: #F3F4F6 (gris claro)
- Iconos: Turquesa/dorado

---

## 🛠️ Especificaciones Técnicas

### Stack Tecnológico
```json
{
  "framework": "Next.js 14+",
  "language": "TypeScript",
  "styling": "Tailwind CSS 3.4+",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "fonts": "next/font (Google Fonts)",
  "deployment": "Vercel",
  "imageOptimization": "next/image"
}
```

### Estructura de Archivos
```
/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── ui/
│   │   ├── sections/
│   │   └── layout/
│   ├── lib/
│   └── data/
├── public/
│   ├── images/
│   └── patterns/
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

### SEO Optimization
```html
<meta name="title" content="Descubre Sucre y el Golfo de Morrosquillo | Turismo Caribe Colombiano" />
<meta name="description" content="Vive la magia del Caribe colombiano. Hoteles, experiencias, gastronomía y cultura en Sucre. ¡Planifica tu viaje ahora!" />
<meta name="keywords" content="Sucre, turismo, Caribe, Colombia, Golfo de Morrosquillo, playas, hoteles, ecoturismo, gastronomía, Coveñas, Sincelejo" />
```

---

## 🚀 Plan de Implementación One-Shot

### Paso 1: Inicialización
```bash
npx create-next-app@latest sucre-turismo --typescript --tailwind --app
cd sucre-turismo
npm install framer-motion lucide-react
```

### Paso 2: Configuración
1. Configurar `tailwind.config.js` con paleta caribeña
2. Configurar `next.config.js` para imágenes
3. Agregar fuentes en `layout.tsx`

### Paso 3: Desarrollo
1. UI Components: Button, Card, Badge, Icon
2. Section Components: Hero, Hotels, Experiences, Gastronomy, FestivalBanner, Footer

### Paso 4: Contenido
1. Crear `data/content.ts` con información de hoteles, operadores, gastronomía
2. Importar datos en cada sección
3. Verificar contactos

### Paso 5: Pruebas
- Responsive (mobile, tablet, desktop)
- Accesibilidad (WCAG AA)
- Performance (Lighthouse > 90)
- Validar contactos

### Paso 6: Despliegue
```bash
git init
git add .
git commit -m "Initial commit: Portafolio turístico Sucre"
git remote add origin https://github.com/tu-usuario/sucre-turismo-portafolio.git
git push -u origin main
vercel
```

---

## ✅ Checklist de Calidad

### Visual
- [ ] Colores consistentes con paleta caribeña
- [ ] Espacios en blanco generosos
- [ ] Fotografías de alta calidad optimizadas
- [ ] Iconografía consistente (2px stroke, Lucide)
- [ ] Gradientes usados con moderación

### Accesibilidad
- [ ] Contraste 4.5:1 mínimo texto normal
- [ ] Contraste 3:1 mínimo texto grande (>18px)
- [ ] Focus states visibles
- [ ] ARIA labels en botones/iconos
- [ ] Alt text en imágenes
- [ ] Touch targets 44x44px mínimo

### Responsive
- [ ] Mobile-first implementation
- [ ] Breakpoints: 768px, 1024px, 1280px
- [ ] Images responsive (srcset)
- [ ] No horizontal scroll

### Performance
- [ ] Images: WebP/AVIF format
- [ ] Lazy loading for images
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms

### SEO
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags
- [ ] Twitter Card
- [ ] Canonical URL

---

## 📚 Recursos y Referencias

### Archivos del Proyecto
- **Guía de Diseño Completa:** `docs/DESIGN.md`
- **Contenido Base:** `.docs/Informacion.md`
- **Este Informe:** `docs/SUCRE-PORTAFOLIO.md`

### Fuentes de Imágenes Sugeridas
- Unsplash (gratis, alta calidad)
- Pexels (gratis)
- Adobe Stock (premium)
- Fotografías oficiales de turismo de Sucre

### Paletas de Referencia
- [Caribe Sunset](https://coolors.co/f97316-f59e0b-06b6d4)
- [Tropical Beach](https://coolors.co/06b6d4-14b8a6-fef3c7)
- [Cultural Gold](https://coolors.co/f59e0b-ec4899-8b5cf6)

### Herramientas Recomendadas
- **Diseño:** Figma, Adobe XD
- **Prototipado:** Framer
- **Optimización imágenes:** Squoosh, TinyPNG
- **Testing:** Lighthouse, WebPageTest
- **Accesibilidad:** axe DevTools, WAVE

---

## 📞 Información de Contacto de Operadores

### Hoteles Coveñas
| Hotel | Contacto | Teléfono | Email |
|-------|----------|----------|-------|
| Poblado Hotel | Melkin Narvaez | 3105935762 - 3206345598 | reservas@hotelpoblado.com |
| Hotel Portoalegre | Diego Jaramillo | 300 2980993 | hotelportoalegre.com.co |
| Hotel Los Hermanos | - | 3041117804 - 3134725797 | info@hotelloshermanos.com |
| Hotel Vaia | - | 3001936990 | reservas@vaiahoteles.com |
| Cabañitas del Mar | - | 313 3502889 | reservas@cabanitasdelmar.co |

### Hoteles Sincelejo
| Hotel | Teléfono | Email/Web |
|-------|----------|-----------|
| Hotel Malibu | 3145933714 | reservas@hotelmalibu.co |
| Hotel Arawak Plaza | 605 276 5555 - 318 330 9737 | arawakplaza@outlook.com |
| Hotel Stanza | 301 2673527 | stanza-hotel-sincelejo.genesishotel.co |
| Hotel Panorama | +57 5 282 1884 - 320 531 8154 | reservas@hotelpanoramasincelejo.com |
| Hotel Ancor | 318 2099588 | hotel-ancor.genesishotel.co |
| Hotel Iraka Zenu | 321 6667404 | - |

### Operadores Turísticos
| Operador | Servicios | Contacto |
|----------|-----------|----------|
| MAPA TOURS | Experiencias bioculturales | +57 300 123 6173 |
| ECOTOUR ONNE COLOSO | Turismo regenerativo Zenú | 304 666 3693 - 320 548 8336 |
| MOMA EXCURSIONES | Aventura montemariana | +57 301 656 6932 |

---

## 🎯 Próximos Pasos

1. **Revisar** este documento y `docs/DESIGN.md`
2. **Implementar** usando el stack recomendado (Next.js + Tailwind)
3. **Subir** a GitHub
4. **Desplegar** en Vercel
5. **Validar** con los operadores turísticos
6. **Monitorear** performance y analytics

---

**Documento creado:** 9 de mayo de 2026  
**Versión:** 1.0  
**Autor:** Gem-Team (Designer + Documentation Writer)  
**Próxima revisión:** Post-implementación

---

## 📄 Archivos Relacionados

- `docs/DESIGN.md` - Guía de diseño visual completa
- `.docs/Informacion.md` - Información base y contenido
- `.docs/Información turística de Santander (3) Copy.pdf` - Referencia de diseño
- `.docs/Isotipo.jpg.jpeg` - Assets de marca
- `.docs/Logo Cluster Náutico .JPG.jpeg` - Logo oficial

---

**¡Listo para implementación one-shot!** 🚀
