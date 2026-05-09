# 🏢 Landing Page - Encuentro Intercluster Sucre 2026

## Informe de Diseño y Especificaciones Técnicas

**Evento Principal:** Encuentro Intercluster Sucre 2026  
**Fechas del evento:** 25-26 de junio de 2026  
**Lugar:** Departamento de Sucre, Colombia  
**Tipo de página:** Landing page informativa tipo folleto  
**Plataforma de publicación:** Vercel + GitHub  
**Estilo:** Corporativo moderno, institucional, colaborativo, regional  
**Fecha del informe:** 9 de mayo de 2026

---

## 📋 Resumen Ejecutivo

Esta landing page tiene como objetivo principal promocionar el **Encuentro Intercluster Sucre 2026**, un evento que conecta a empresas, instituciones y líderes de diferentes sectores económicos (clústeres) para impulsar la colaboración, la innovación y la competitividad en las regiones.

La página funciona como un **folleto informativo digital** que presenta el evento principal y complementa con la oferta turística del departamento de Sucre, incluyendo un banner promocional del Festival Nacional de Pito Atravesao como evento cultural paralelo.

### Objetivos Principales:
1. **Informar** sobre el Encuentro Intercluster (propósito, ejes temáticos, beneficios)
2. **Promocionar** la oferta turística de Sucre como valor agregado
3. **Facilitar** el contacto con hoteles y operadores turísticos
4. **Destacar** el Festival de Pito Atravesao como evento cultural paralelo (26-28 junio)
5. **Incentivar** la asistencia al encuentro empresarial

---

## 🏗️ Arquitectura de Información

La landing page se estructura en **6 secciones principales**:

### 1. Hero / Encabezado Principal (ENFOQUE INTERCLUSTER)
- **H1:** Encuentro Intercluster Sucre 2026
- **H2:** Conectando clústeres, impulsando la competitividad regional
- **Fechas:** 25-26 de junio de 2026
- **Lugar:** Departamento de Sucre, Colombia
- **CTA:** Confirma tu asistencia / Más información

### 2. Sobre el Encuentro Intercluster
- **Qué es:** Espacio de conexión empresarial regional
- **Propósito:** Impulsar colaboración, innovación y competitividad
- **A quién va dirigido:** Empresarios, instituciones, líderes de clústeres
- **Beneficios:** Networking, alianzas, desarrollo regional

### 3. Ejes Temáticos del Encuentro
- **Innovación:** Nuevas tecnologías y prácticas empresariales
- **Colaboración:** Alianzas intersectoriales
- **Competitividad:** Fortalecimiento de capacidades regionales
- **Desarrollo Sostenible:** Crecimiento económico responsable
- **Internacionalización:** Proyección global de clústeres
- **Economía Naranja:** Industrias creativas y culturales

### 4. Oferta Turística de Sucre (Valor Agregado)
- **Hoteles:** Coveñas (frente al mar) y Sincelejo (centro regional)
- **Experiencias:** MAPA TOURS, ECOTOUR ONNE COLOSO, MOMA EXCURSIONES
- **Gastronomía:** Marina y ancestral Zenú

### 5. Festival Nacional de Pito Atravesao (Banner Promocional)
- **Fechas:** 26-28 de junio de 2026
- **Lugar:** Municipio de Morroa
- **Versión:** 37ª edición
- **Homenaje:** Pablo Domínguez
- **Tipo:** Evento cultural paralelo

### 6. Footer / Pie de Página
- Información de contacto
- Redes sociales
- Enlaces a hoteles y agencias
- Logo institucional

---

## 🎨 Guía de Diseño Visual

### Paleta de Colores Institucionales

#### Colores Principales (Intercluster)
```css
/* Primary Colors - Institucional Intercluster */
--color-primary-violet: #7C3AED;   /* Violeta institucional - colaboración */
--color-primary-purple: #8B5CF6;  /* Morado corporativo - innovación */
--color-primary-indigo: #6366F1;  /* Añil - competitividad */
```

#### Colores Secundarios (Región Caribe)
```css
/* Secondary Colors - Región Caribe */
--color-secondary-caribbean: #06B6D4;  /* Turquesa Caribe */
--color-secondary-gold: #F59E0B;      /* Dorado regional */
--color-secondary-teal: #14B8A6;      /* Verde azulado - manglares */
--color-secondary-leaf: #10B981;      /* Verde hoja - crecimiento */

/* Neutral Colors */
--color-neutral-white: #FFFFFF;
--color-neutral-cream: #F9FAFB;       /* Gris muy claro - fondo */
--color-neutral-light: #F3F4F6;
--color-neutral-gray: #6B7280;
--color-neutral-dark: #1F2937;
--color-neutral-black: #111827;

/* Accent Colors */
--color-accent-coral: #F97316;   /* Coral - CTA */
--color-accent-sunset: #EC4899;  /* Rosa - destacado */
--color-accent-ocean: #3B82F6;   /* Azul - información */
```

#### Gradientes Sugeridos
```css
/* Gradiente principal - Institucional Intercluster */
--gradient-intercluster: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #6366F1 100%);

/* Gradiente secundario - Conexión Caribe */
--gradient-caribe: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%);

/* Gradiente CTA - Acción */
--gradient-cta: linear-gradient(135deg, #F97316 0%, #EC4899 100%);

/* Gradiente overlay - Fotografía */
--gradient-overlay: linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%);
```

### Tipografía

#### Fuentes Principales
- **Títulos:** Inter (700, 600)
- **Cuerpo:** Source Sans Pro (400)
- **Alternativas:** Montserrat, Poppins, Open Sans

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
// Hero / Intercluster
Users, Network, Target, ArrowRight, Calendar, MapPin

// Ejes Temáticos
Lightbulb, Handshake, TrendingUp, Globe, Leaf, Award

// Hoteles
Hotel, Bed, Wifi, Coffee, Car, Phone

// Experiencias
Tent, Mountain, Trees, Fish, Moon, Star, Anchor

// Gastronomía
Utensils, Fish, Coffee, Wine

// Festival
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
--shadow-violet: 0 10px 30px rgba(124, 58, 237, 0.3);
--shadow-turquoise: 0 10px 30px rgba(6, 182, 212, 0.3);
--shadow-gold: 0 10px 30px rgba(245, 158, 11, 0.3);
```

---

## 📐 Estructura por Sección

### 1. Hero Section - Encuentro Intercluster
**Altura:** 100vh desktop, min 80vh mobile

**Composición:**
- Background: Fotografía corporativa regional o skyline de Sincelejo
- Overlay: gradient-overlay (opacity 0.9)
- Logo: Isotipo del Cluster (centro superior)
- H1: "ENCUENTRO INTERCLUSTER SUCRE 2026" (Inter 700, 60px desktop / 36px mobile)
- H2: "Conectando clústeres, impulsando la competitividad regional" (Source Sans Pro 400, 20px)
- Fechas: "25-26 JUNIO 2026" (destacado)
- Lugar: "DEPARTAMENTO DE SUCRE, COLOMBIA"
- CTA: "CONFIRMA TU ASISTENCIA" (btn-primary con pulse animation)
- Indicador de scroll

**Padding:** 96px top/bottom desktop, 64px mobile

**Colores:**
- Fondo: Gradiente institucional
- Texto: Blanco sobre overlay
- CTA: Gradiente coral-rosa

---

### 2. Sobre el Encuentro
**Fondo:** #FFFFFF (blanco)

**Composición:**
- H2: "¿Qué es el Encuentro Intercluster?"
- Icono: Network o Users (64px, gradient)
- Párrafo introductorio:
  > "El Encuentro Intercluster es un espacio de conexión empresarial que reúne a líderes, empresarios e instituciones de diferentes sectores económicos para impulsar la colaboración, la innovación y la competitividad en las regiones."
- **Objetivos:**
  - 🔗 Conectar clústeres de diferentes sectores
  - 💡 Fomentar la innovación colaborativa
  - 📈 Fortalecer la competitividad regional
  - 🤝 Generar alianzas estratégicas
- **Beneficios:**
  - Networking empresarial
  - Intercambio de mejores prácticas
  - Oportunidades de negocio
  - Proyección regional

**Padding:** 96px top/bottom

---

### 3. Ejes Temáticos
**Fondo:** #F9FAFB (gris muy claro)

**Composición:**
- H2: "Ejes Temáticos"
- Subtítulo: "Áreas clave para el desarrollo empresarial regional"
- Grid 3x2 (desktop) o 1x6 (mobile) con tarjetas:

**Tarjeta 1: Innovación**
- Icono: Lightbulb (48px, gradient)
- Título: "Innovación"
- Descripción: "Nuevas tecnologías y prácticas empresariales"

**Tarjeta 2: Colaboración**
- Icono: Handshake
- Título: "Colaboración"
- Descripción: "Alianzas intersectoriales estratégicas"

**Tarjeta 3: Competitividad**
- Icono: TrendingUp
- Título: "Competitividad"
- Descripción: "Fortalecimiento de capacidades regionales"

**Tarjeta 4: Desarrollo Sostenible**
- Icono: Leaf
- Título: "Desarrollo Sostenible"
- Descripción: "Crecimiento económico responsable"

**Tarjeta 5: Internacionalización**
- Icono: Globe
- Título: "Internacionalización"
- Descripción: "Proyección global de clústeres"

**Tarjeta 6: Economía Naranja**
- Icono: Award
- Título: "Economía Naranja"
- Descripción: "Industrias creativas y culturales"

**Grid:** 3 columnas desktop, 2 tablet, 1 mobile

**Padding:** 96px top/bottom

---

### 4. Oferta Turística de Sucre
**Fondo:** #FFFFFF (blanco)

**Composición:**
- H2: "Descubre Sucre y el Golfo de Morrosquillo"
- Subtítulo: "Complementa tu visita con nuestra oferta turística"
- Párrafo introductorio:
  > "Aprovecha tu asistencia al Encuentro Intercluster para conocer los atractivos turísticos de Sucre. Conéctate con paraísos de sol y playa, maravíllate con el bosque seco tropical y descubre los saberes ancestrales de nuestras comunidades."

**Secciones:**
1. **Hoteles:** Coveñas y Sincelejo
2. **Experiencias:** Operadores turísticos
3. **Gastronomía:** Marina y ancestral

**Padding:** 96px top/bottom

---

### 5. Hoteles (Subsección)
**Fondo:** #FEF3C7 (arena)

**Composición:**
- H3: "Tu descanso ideal: Hoteles en Sincelejo y Coveñas"
- Párrafo: "Contamos con las mejores opciones de alojamiento..."
- **Bloque A - Coveñas (Frente al Mar):**
  - Poblado Hotel ⭐⭐⭐⭐ (15% descuento 25-29 junio)
  - Hotel Portoalegre ⭐⭐⭐⭐⭐ (15% descuento)
  - Hotel Los Hermanos
  - Hotel Vaia
  - Cabañitas del Mar
- **Bloque B - Sincelejo (Centro Regional):**
  - Hotel Malibu, Hotel Arawak Plaza, Hotel Stanza, Hotel Panorama, Hotel Ancor, Hotel Iraka Zenu

**Grid:** 3 columnas desktop, 2 tablet, 1 mobile

**Padding:** 64px top/bottom

---

### 6. Experiencias y Gastronomía (Subsección)
**Fondo:** #FFFFFF (blanco)

**Composición:**
- H3: "Aventuras, Naturaleza y Cultura"
- **Operadores:**
  - MAPA TOURS (Experiencias bioculturales)
  - ECOTOUR ONNE COLOSO (Turismo regenerativo Zenú)
  - MOMA EXCURSIONES (Aventura montemariana)
- **Gastronomía:**
  - Frente al mar (Coveñas)
  - Ancestral Zenú (Montes de María)

**Padding:** 64px top/bottom

---

### 7. Banner Festival de Pito Atravesao
**Fondo:** gradient-sunset con zenu-pattern (opacity 0.1)

**Composición:**
- Icono: Music o PartyPopper (64px, blanco)
- H2: "🎉 TRADICIÓN QUE NOS UNE"
- Título: "FESTIVAL NACIONAL DE PITO ATRAVESAO"
- Fechas: "26-28 JUNIO 2026" (destacado)
- Lugar: "MUNICIPIO DE MORROA"
- Descripción: "37ª VERSIÓN - En honor a Pablo Domínguez"
- Texto: "Música y raíces de la región"
- Nota: "Evento paralelo al Encuentro Intercluster"

**Altura:** 500px desktop, auto mobile  
**Padding:** 64px top/bottom

---

### 8. Footer
**Fondo:** #111827 (dark)  
**Texto:** #F3F4F6 (light gray)

**Composición:**
- Texto: "¿Tienes dudas o quieres un paquete a la medida? Contacta directamente a nuestros hoteles y agencias para armar el viaje de tus sueños."
- Iconos de navegación rápida: Inicio, Sobre el Evento, Hoteles, Experiencias
- Redes sociales: Facebook, Instagram, Twitter, LinkedIn
- Logo institucional
- Copyright: "© 2026 Encuentro Intercluster Sucre. Todos los derechos reservados."

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
│   │   │   ├── About.tsx
│   │   │   ├── Axes.tsx
│   │   │   ├── Tourism.tsx
│   │   │   ├── Hotels.tsx
│   │   │   ├── Gastronomy.tsx
│   │   │   ├── FestivalBanner.tsx
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
          violet: '#7C3AED',
          purple: '#8B5CF6',
          indigo: '#6366F1',
        },
        secondary: {
          caribbean: '#06B6D4',
          gold: '#F59E0B',
          teal: '#14B8A6',
          leaf: '#10B981',
        },
        accent: {
          coral: '#F97316',
          sunset: '#EC4899',
          ocean: '#3B82F6',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      },
      boxShadow: {
        'institutional': '0 10px 30px rgba(124, 58, 237, 0.3)',
        'tropical': '0 10px 30px rgba(6, 182, 212, 0.3)',
      },
      backgroundImage: {
        'gradient-intercluster': 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #6366F1 100%)',
        'gradient-caribe': 'linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)',
        'gradient-cta': 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
      },
    },
  },
  plugins: [],
}
```

### SEO Optimization

```html
<!-- Meta tags esenciales -->
<meta name="title" content="Encuentro Intercluster Sucre 2026 | Conectando Clústeres" />
<meta name="description" content="Participa en el Encuentro Intercluster Sucre 2026. Conecta con líderes empresariales, impulsa la innovación y la competitividad regional. 25-26 junio 2026." />
<meta name="keywords" content="Intercluster, Sucre, empresarios, clústeres, innovación, competitividad, networking, empresarial, Caribe, Colombia" />
<meta name="author" content="Encuentro Intercluster Sucre" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://interclustersucre2026.com/" />
<meta property="og:title" content="Encuentro Intercluster Sucre 2026" />
<meta property="og:description" content="Conectando clústeres, impulsando la competitividad regional" />
<meta property="og:image" content="https://interclustersucre2026.com/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Encuentro Intercluster Sucre 2026" />
<meta name="twitter:image" content="https://interclustersucre2026.com/twitter-image.jpg" />

<!-- Canonical y Favicon -->
<link rel="canonical" href="https://interclustersucre2026.com/" />
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
npx create-next-app@latest intercluster-sucre --typescript --tailwind --app
cd intercluster-sucre
npm install framer-motion lucide-react
```

### Paso 2: Configuración
1. Configurar `tailwind.config.js` con la paleta institucional
2. Configurar `next.config.js` para optimización de imágenes
3. Agregar fuentes en `layout.tsx`
4. Crear estructura de carpetas

### Paso 3: Desarrollo de Componentes
1. **UI Components:** Button, Card, Badge, Icon
2. **Layout Components:** Container, Section, Grid
3. **Section Components:**
   - Hero (Intercluster)
   - About (Sobre el encuentro)
   - Axes (Ejes temáticos)
   - Tourism (Oferta turística)
   - Hotels (Hoteles)
   - Gastronomy (Gastronomía)
   - FestivalBanner (Pito Atravesao)
   - Footer

### Paso 4: Integración de Contenido
1. Crear archivo `data/content.ts` con:
   - Información del Encuentro Intercluster
   - Ejes temáticos
   - Oferta turística (hoteles, experiencias, gastronomía)
   - Datos del Festival de Pito Atravesao
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
git commit -m "Initial commit: Landing page Encuentro Intercluster Sucre 2026"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/intercluster-sucre-2026.git
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
- [ ] Colores consistentes con paleta institucional (violeta/morado)
- [ ] Espacios en blanco generosos
- [ ] Fotografías de alta calidad optimizadas
- [ ] Iconografía consistente (2px stroke, Lucide)
- [ ] Gradientes institucionales usados con moderación
- [ ] Bordes redondeados consistentes (16px cards, pill buttons)

### Tipografía
- [ ] Máximo 2 fuentes (Inter + Source Sans Pro)
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
- **Este Informe:** `docs/INTERCLUSTER-DESIGN.md`

### Fuentes de Imágenes Sugeridas
- Unsplash (empresarial, networking)
- Pexels (gratis)
- Adobe Stock (premium)
- Fotografías oficiales de Sucre y eventos empresariales

### Paletas de Referencia
- [Institucional Violeta](https://coolors.co/7c3aed-8b5cf6-6366f1)
- [Caribe Profesional](https://coolors.co/06b6d4-f59e0b-14b8a6)
- [Corporativo Moderno](https://coolors.co/1f2937-6b7280-f9fafb)

### Herramientas Recomendadas
- **Diseño:** Figma, Adobe XD
- **Prototipado:** Framer
- **Optimización imágenes:** Squoosh, TinyPNG
- **Testing:** Lighthouse, WebPageTest
- **Accesibilidad:** axe DevTools, WAVE

---

## 📞 Información de Contacto

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
2. **Validar** información del Encuentro Intercluster con el organizador
3. **Implementar** usando el stack recomendado (Next.js + Tailwind)
4. **Subir** a GitHub
5. **Desplegar** en Vercel
6. **Validar** con los organizadores del evento
7. **Monitorear** performance y analytics

---

**Documento creado:** 9 de mayo de 2026  
**Versión:** 1.0  
**Autor:** Gem-Team (Designer + Documentation Writer)  
**Próxima revisión:** Post-implementación

---

## 📄 Archivos Relacionados

- `docs/DESIGN.md` - Guía de diseño visual completa (1100+ líneas)
- `.docs/Informacion.md` - Información base y contenido
- `.docs/Información turística de Santander (3) Copy.pdf` - Referencia de diseño
- `.docs/Isotipo.jpg.jpeg` - Assets de marca
- `.docs/Logo Cluster Náutico .JPG.jpeg` - Logo oficial
- `.docs/MAPA TOURS - Portafolio de experiencias. (1).pdf` - Portafolio operador
- `.docs/PORTAFOLIO ONNE COLOSO...-1-1.pdf` - Portafolio operador

---

**¡Listo para implementación one-shot!** 🚀
