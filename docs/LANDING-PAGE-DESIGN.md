# 🏖️ Landing Page Turística - Sucre y el Golfo de Morrosquillo

## Informe de Diseño y Especificaciones Técnicas

**Evento:** Festival Nacional de Pito Atravesao - Morroa  
**Fechas del evento:** 26-28 de junio de 2026  
**Tipo de página:** Landing page informativa tipo infografía  
**Plataforma de publicación:** Vercel + GitHub  
**Estilo:** Fresco, caribeño, natural, moderno  
**Fecha del informe:** 9 de mayo de 2026

---

## 📋 Resumen Ejecutivo

Esta landing page tiene como objetivo promocionar el turismo en la región de Sucre, Colombia, con énfasis en el **Festival Nacional de Pito Atravesao** que se llevará a cabo del 26 al 28 de junio de 2026 en Morroa.

La página será de **carácter informativo tipo infografía**, diseñada para ser visualmente atractiva, moderna y fácil de navegar, con un diseño fresco y caribeño que refleje la esencia del Golfo de Morrosquillo.

### Objetivos Principales:
1. **Informar** sobre las opciones de alojamiento, experiencias turísticas y gastronomía
2. **Promocionar** el Festival Nacional de Pito Atravesao 2026
3. **Facilitar** el contacto directo con operadores turísticos locales
4. **Posicionar** la región como destino turístico de primer orden

---

## 🏗️ Arquitectura de Información

La landing page se estructura en **6 secciones principales**:

### 1. Hero / Encabezado Principal
- **H1:** Descubre Sucre y el Golfo de Morrosquillo
- **H2:** Vive la magia del Caribe colombiano...
- **CTA:** ¡Planifica tu viaje ahora!

### 2. Dónde Hospedarte (Hoteles y Descuentos)
- **Bloque A:** Hoteles en Coveñas (Frente al Mar) - 5 hoteles
- **Bloque B:** Hoteles en Sincelejo (Centro de la Región) - 6 hoteles
- Descuentos especiales del 15% (25-29 junio 2026)

### 3. Experiencias y Rutas Turísticas
- **MAPA TOURS:** Experiencias bioculturales y de naturaleza
- **ECOTOUR ONNE COLOSO:** Turismo regenerativo Zenú
- **MOMA EXCURSIONES:** Aventura montemariana

### 4. Gastronomía Local
- **Frente al Mar (Coveñas):** Poblado Restaurante, El Parguito Feliz, Zumo e Coco
- **Gastronomía Ancestral Zenú:** Onne Coloso y su oferta cultural

### 5. Evento Destacado / Banner Promocional
- **Festival Nacional de Pito Atravesao**
- **Fechas:** 26-28 de junio de 2026
- **Lugar:** Morroa (Versión 37)

### 6. Footer / Pie de Página
- Información de contacto
- Redes sociales
- Enlaces a hoteles y agencias

---

## 🎨 Guía de Diseño Visual

### Paleta de Colores Caribeños

#### Colores Principales
```css
/* Primary Colors - Caribe */
--color-primary-turquoise: #06B6D4;  /* Turquesa Caribe - agua cristalina */
--color-primary-teal: #14B8A6;       /* Verde azulado - manglares */
--color-primary-coral: #F97316;      /* Coral atardecer - CTA */

/* Secondary Colors - Naturaleza */
--color-secondary-sand: #FEF3C7;     /* Arena dorada - playas */
--color-secondary-gold: #F59E0B;     /* Dorado tropical - sol */
--color-secondary-leaf: #10B981;     /* Verde hoja - bosque seco */
--color-secondary-forest: #059669;   /* Verde bosque - manglares */

/* Neutral Colors */
--color-neutral-white: #FFFFFF;
--color-neutral-cream: #FFFBEB;      /* Crema suave - fondo */
--color-neutral-light: #F3F4F6;
--color-neutral-gray: #6B7280;
--color-neutral-dark: #1F2937;
--color-neutral-black: #111827;

/* Accent Colors */
--color-accent-sunset: #EC4899;      /* Rosa atardecer */
--color-accent-ocean: #3B82F6;       /* Azul océano */
--color-accent-zebu: #8B5CF6;        /* Violeta cultural */
```

#### Gradientes Sugeridos
```css
/* Gradiente principal - Atardecer caribeño */
--gradient-sunset: linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EC4899 100%);

/* Gradiente secundario - Aguas turquesas */
--gradient-ocean: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%);

/* Gradiente hero - Tropical */
--gradient-tropical: linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%);
```

### Tipografía

#### Fuentes Principales
- **Títulos:** Montserrat (700, 600)
- **Cuerpo:** Open Sans (400)
- **Alternativas:** Poppins, Nunito, Inter

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
```

### Iconografía

- **Librería:** Lucide React (https://lucide.dev)
- **Estilo:** Lineal moderno, 2px stroke
- **Tamaños:** 32px (sm), 48px (md), 64px (lg)
- **Bordes redondeados:** 12px en contenedores

#### Iconos por Sección
```javascript
// Hero
MapPin, Waves, Sun, ArrowRight

// Hoteles
Hotel, Bed, Wifi, Coffee, Car, Phone

// Experiencias
Tent, Mountain, Trees, Fish, Moon, Star, Anchor

// Gastronomía
Utensils, Fish, Coffee, Wine

// Evento
Music, PartyPopper, Calendar, Users

// Footer
Facebook, Instagram, Twitter, Mail, Phone, MapPin
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

### Sistema de Sombras

```css
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Sombras de color para tarjetas */
--shadow-turquoise: 0 10px 30px rgba(6, 182, 212, 0.3);
--shadow-coral: 0 10px 30px rgba(249, 115, 22, 0.3);
--shadow-gold: 0 10px 30px rgba(245, 158, 11, 0.3);
```

---

## 📐 Estructura por Sección

### 1. Hero Section
**Altura:** 100vh desktop, min 80vh mobile

**Composición:**
- Background: Fotografía de atardecer en playa
- Overlay: gradient-tropical (opacity 0.8)
- Icono central: Sol/Playa (64px, dorado)
- H1: "Descubre Sucre y el Golfo de Morrosquillo" (Montserrat 700, 60px desktop / 36px mobile)
- Subtítulo: "Vive la magia del Caribe colombiano..." (Open Sans 400, 20px)
- CTA: "¡PLANIFICA TU VIAJE AHORA!" (btn-primary con pulse animation)
- Indicador de scroll

**Padding:** 96px top/bottom desktop, 64px mobile

---

### 2. Hoteles Section
**Fondo:** #FFFBEB (cream)

**Composición:**
- H2: "Tu descanso ideal: Hoteles en Sincelejo y Coveñas"
- Icono: Bed (48px, gradient)
- Párrafo introductorio
- **Bloque A - Coveñas (Frente al Mar):**
  - Poblado Hotel ⭐⭐⭐⭐ (15% descuento)
  - Hotel Portoalegre ⭐⭐⭐⭐⭐ (15% descuento)
  - Hotel Los Hermanos
  - Hotel Vaia
  - Cabañitas del Mar
- **Bloque B - Sincelejo (Centro):**
  - Hotel Malibu, Hotel Arawak Plaza, Hotel Stanza, Hotel Panorama, Hotel Ancor, Hotel Iraka Zenu

**Grid:** 3 columnas desktop, 2 tablet, 1 mobile

**Padding:** 96px top/bottom

---

### 3. Experiencias Section
**Fondo:** gradient-tropical (suave)

**Composición:**
- H2: "Aventuras, Naturaleza y Cultura"
- Párrafo introductorio
- **Tarjeta 1 - MAPA TOURS:**
  - "Conñeque" Bicitour Morroa
  - Ciénaga La Caimanera
  - Astrotour nocturno
  - SUP, Buceo, Plancton bioluminiscente
- **Tarjeta 2 - ECOTOUR ONNE COLOSO:**
  - Rutas Zenú en Montes de María
  - Avistamiento de fauna
  - Cascadas y piscinas naturales
- **Tarjeta 3 - MOMA EXCURSIONES:**
  - Senderismo Serranía de Coraza
  - Parque Roca Madre (canopy, cuevas)
  - Snorkel en Rincón del Mar

**Padding:** 96px top/bottom

---

### 4. Gastronomía Section
**Fondo:** #FEF3C7 (sand) con wave-pattern (opacity 0.05)

**Composición:**
- H2: "¡Los Mejores Sabores del Caribe!" (gradient text)
- **Bloque 1 - Frente al Mar (Coveñas):**
  - Poblado Restaurante
  - El Parguito Feliz
  - Zumo e Coco
- **Bloque 2 - Gastronomía Ancestral Zenú:**
  - Onne Coloso
  - "Cabezas de gato", sancochos, motes
  - Bebidas: chicha, ron ñeque
  - Servido en totumas de calabazo

**Padding:** 96px top/bottom

---

### 5. Banner Evento
**Fondo:** gradient-sunset con zenu-pattern (opacity 0.1)

**Composición:**
- H2: "🎉 TRADICIÓN QUE NOS UNE"
- Título: "FESTIVAL NACIONAL DE PITO ATRAVESAO"
- Fechas: "26 - 28 JUNIO 2026" (destacado)
- Lugar: "MUNICIPIO DE MORROA"
- "37ª VERSIÓN (En honor a Pablo Domínguez)"
- Descripción: "Música y raíces de la región"
- CTA: "¡RESERVA TU CUPO AHORA!"

**Altura:** 600px desktop, auto mobile  
**Padding:** 96px top/bottom

---

### 6. Footer
**Fondo:** #111827 (dark)  
**Texto:** #F3F4F6 (light gray)

**Composición:**
- Texto: "¿TIENES DUDAS? Contacta directamente..."
- Iconos de navegación rápida: Hoteles, Experiencias, Mapa
- Redes sociales: Facebook, Instagram, Twitter, YouTube
- Copyright y enlaces legales

**Padding:** 64px top, 32px bottom

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
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Icon.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hotels.tsx
│   │   │   ├── Experiences.tsx
│   │   │   ├── Gastronomy.tsx
│   │   │   ├── EventBanner.tsx
│   │   │   └── Footer.tsx
│   │   └── layout/
│   │       ├── Container.tsx
│   │       ├── Section.tsx
│   │       └── Grid.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── data/
│       └── content.ts
├── public/
│   ├── images/
│   ├── patterns/
│   └── fonts/
├── tailwind.config.js
├── next.config.js
├── vercel.json
└── package.json
```

### Configuración Tailwind

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          turquoise: '#06B6D4',
          teal: '#14B8A6',
          coral: '#F97316',
        },
        secondary: {
          sand: '#FEF3C7',
          gold: '#F59E0B',
          leaf: '#10B981',
          forest: '#059669',
        },
        accent: {
          sunset: '#EC4899',
          ocean: '#3B82F6',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      },
      boxShadow: {
        'tropical': '0 10px 30px rgba(6, 182, 212, 0.3)',
        'sunset': '0 10px 30px rgba(249, 115, 22, 0.3)',
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EC4899 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)',
        'gradient-tropical': 'linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}
```

### SEO Optimization

```html
<!-- Meta tags esenciales -->
<meta name="title" content="Descubre Sucre y el Golfo de Morrosquillo | Turismo Caribe Colombiano" />
<meta name="description" content="Vive la magia del Caribe colombiano. Hoteles, experiencias, gastronomía y el Festival Nacional de Pito Atravesao. ¡Planifica tu viaje ahora!" />
<meta name="keywords" content="Sucre, turismo, Caribe, Colombia, Festival Pito Atravesao, Morroa, Coveñas, Sincelejo, playas" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://tusucrecaribe.com/" />
<meta property="og:title" content="Descubre Sucre y el Golfo de Morrosquillo" />
<meta property="og:description" content="Vive la magia del Caribe colombiano" />
<meta property="og:image" content="https://tusucrecaribe.com/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Descubre Sucre y el Golfo de Morrosquillo" />
<meta name="twitter:image" content="https://tusucrecaribe.com/twitter-image.jpg" />

<!-- Canonical y Favicon -->
<link rel="canonical" href="https://tusucrecaribe.com/" />
<link rel="icon" href="/favicon.ico" />
```

### Vercel Integration

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## 🚀 Plan de Implementación One-Shot

### Paso 1: Inicialización del Proyecto
```bash
npx create-next-app@latest sucre-turismo --typescript --tailwind --app
cd sucre-turismo
npm install framer-motion lucide-react
```

### Paso 2: Configuración
1. Configurar `tailwind.config.js` con la paleta de colores
2. Configurar `next.config.js` para optimización de imágenes
3. Agregar fuentes en `layout.tsx`
4. Crear estructura de carpetas

### Paso 3: Desarrollo de Componentes
1. **UI Components:** Button, Card, Badge, Icon
2. **Layout Components:** Container, Section, Grid
3. **Section Components:** Hero, Hotels, Experiences, Gastronomy, EventBanner, Footer

### Paso 4: Integración de Contenido
1. Crear archivo `data/content.ts` con toda la información
2. Importar datos en cada sección
3. Verificar contactos (teléfonos, emails)

### Paso 5: Pruebas
- [ ] Pruebas responsive (mobile, tablet, desktop)
- [ ] Pruebas de accesibilidad (WCAG AA)
- [ ] Pruebas de performance (Lighthouse score > 90)
- [ ] Validar enlaces y contactos

### Paso 6: Despliegue
```bash
# Commit inicial
git init
git add .
git commit -m "Initial commit: Landing page turística Sucre"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/sucre-turismo.git
git push -u origin main

# Desplegar en Vercel
vercel
```

### Paso 7: Post-Despliegue
1. Configurar dominio personalizado (opcional)
2. Habilitar Vercel Analytics
3. Configurar redirects si es necesario
4. Monitorear performance

---

## ✅ Checklist de Calidad

### Visual
- [ ] Colores consistentes con paleta caribeña
- [ ] Espacios en blanco generosos
- [ ] Fotografías de alta calidad optimizadas
- [ ] Iconografía consistente (2px stroke, Lucide)
- [ ] Gradientes usados con moderación
- [ ] Bordes redondeados consistentes (16px cards, pill buttons)

### Tipografía
- [ ] Máximo 2 fuentes (Montserrat + Open Sans)
- [ ] Jerarquía clara (H1 > H2 > H3 > body)
- [ ] Tamaños responsive (mobile first)
- [ ] Line-height adecuado (1.5-1.625 body)
- [ ] Contraste suficiente (WCAG AA)

### Accesibilidad
- [ ] Contraste 4.5:1 mínimo texto normal
- [ ] Contraste 3:1 mínimo texto grande (>18px)
- [ ] Focus states visibles
- [ ] ARIA labels en botones/iconos
- [ ] Alt text en imágenes
- [ ] reduced-motion support
- [ ] Touch targets 44x44px mínimo

### Responsive
- [ ] Mobile-first implementation
- [ ] Breakpoints: 768px, 1024px, 1280px
- [ ] Images responsive (srcset)
- [ ] Typography scales appropriately
- [ ] Navigation adapts (hamburger mobile)
- [ ] No horizontal scroll

### Performance
- [ ] Images: WebP/AVIF format
- [ ] Lazy loading for images
- [ ] Font subsetting
- [ ] Minified CSS/JS
- [ ] Critical CSS inlined
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms

### SEO
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags
- [ ] Twitter Card
- [ ] Canonical URL
- [ ] Structured data (JSON-LD)
- [ ] Semantic HTML

---

## 📚 Recursos y Referencias

### Archivos del Proyecto
- **Guía de Diseño Completa:** `docs/DESIGN.md`
- **Contenido Base:** `.docs/Informacion.md`
- **Este Informe:** `docs/LANDING-PAGE-DESIGN.md`

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

### Inspiración
- Airbnb Experiences
- Colombia Travel official site
- Caribbean tourism boards
- Boutique hotel websites

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
- `.docs/MAPA TOURS - Portafolio de experiencias. (1).pdf` - Portafolio operador
- `.docs/PORTAFOLIO ONNE COLOSO...-1-1.pdf` - Portafolio operador

---

**¡Listo para implementación one-shot!** 🚀
