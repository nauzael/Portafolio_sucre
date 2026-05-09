# 🏖️ Diseño de Portafolio Turístico - Sucre y el Golfo de Morrosquillo

## 1. Visual Theme

### 1.1 Concepto de Diseño
- **Enfoque:** Portafolio turístico tipo infografía - catálogo digital visual
- **Estilo:** Folleto turístico moderno, muy visual, poco texto, narrativa por imágenes
- **Sensación:** Tropical, fresco, auténtico, experiencial, inmersivo
- **Inspiración:** Revistas de viaje (Condé Nast Traveler), catálogos de turismo de lujo, Instagram travel guides, Airbnb Experiences
- **Público objetivo:** Turistas potenciales (nacionales e internacionales) interesados en sol y playa, cultura y naturaleza

### 1.2 Principios de Diseño
1. **Visual-first:** 80% imágenes, 20% texto - el texto solo complementa
2. **Narrativa por secciones:** Cada sección cuenta una experiencia diferente
3. **Inmersión:** El usuario debe "sentir" el destino
4. **Acción directa:** Contactos claros para reserva inmediata
5. **Autenticidad:** Mostrar la esencia real del Caribe colombiano
6. **Responsive:** Experiencia fluida en móvil (donde estará el 80% del tráfico)

### 1.3 Identidad Visual
- **Logo:** Cluster Turístico de Sucre (discreto, esquina superior)
- **Patrones:** Olas de mar, hojas de palma, texturas de arena (sutiles, opacity baja)
- **Texturas:** Degradados suaves tipo atardecer, granos de arena sutiles
- **Fotografía:** Alta calidad, colores vibrantes, gente disfrutando (no solo paisajes vacíos)
- **Iconografía:** Lineal moderna, minimalista, 2px stroke

### 1.4 Storytelling Visual
El diseño sigue una narrativa de viaje:
1. **Descubrimiento** (Hero): "¿Dónde estoy?" - Impacto visual inmediato
2. **Hospedaje** (Stay): "¿Dónde me quedo?" - Opciones claras y atractivas
3. **Experiencias** (Explore): "¿Qué hago?" - Aventuras memorables
4. **Gastronomía** (Taste): "¿Qué como?" - Sabores auténticos
5. **Cierre** (Plan): "¿Cómo reservo?" - Call-to-action claro

---

## 2. Color Palette

### 2.1 Colores Principales - Caribe Auténtico

```css
/* Primary Colors - Agua y Sol */
--color-primary-turquoise: #06B6D4;  /* Turquesa - aguas cristalinas */
--color-primary-coral: #F97316;       /* Coral - atardeceres */
--color-primary-gold: #F59E0B;        /* Dorado - sol caribeño */

/* Secondary Colors - Naturaleza */
--color-secondary-leaf: #10B981;      /* Verde - bosque seco */
--color-secondary-teal: #14B8A6;      /* Verde azulado - manglares */
--color-secondary-forest: #059669;    /* Verde bosque - selva */
--color-secondary-sand: #FEF3C7;      /* Arena - playas */

/* Neutral Colors */
--color-neutral-white: #FFFFFF;
--color-neutral-cream: #FFFBEB;       /* Crema suave - fondos */
--color-neutral-light: #F3F4F6;
--color-neutral-gray: #6B7280;
--color-neutral-dark: #1F2937;
--color-neutral-black: #111827;

/* Accent Colors */
--color-accent-sunset: #EC4899;       /* Rosa atardecer */
--color-accent-ocean: #3B82F6;        /* Azul océano */
--color-accent-zebu: #8B5CF6;         /* Violeta cultural */
```

### 2.2 Gradientes Sugeridos

```css
/* Gradiente principal - Atardecer caribeño */
--gradient-sunset: linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EC4899 100%);

/* Gradiente secundario - Aguas turquesas */
--gradient-ocean: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%);

/* Gradiente hero - Tropical cálido */
--gradient-tropical: linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%);

/* Gradiente naturaleza - Bosque seco */
--gradient-forest: linear-gradient(135deg, #10B981 0%, #059669 100%);

/* Gradiente arena - Playa */
--gradient-sand: linear-gradient(180deg, #FEF3C7 0%, #FFFBEB 100%);
```

### 2.3 Esquema de Uso por Sección

| Sección | Color Principal | Color Secundario | Fondo |
|---------|----------------|------------------|-------|
| Hero | `#F97316` (Coral) | `#F59E0B` (Gold) | `#FEF3C7` |
| Hoteles Coveñas | `#06B6D4` (Turquoise) | `#3B82F6` (Ocean) | `#FFFFFF` |
| Hoteles Sincelejo | `#14B8A6` (Teal) | `#10B981` (Leaf) | `#FFFBEB` |
| Experiencias | `#10B981` (Leaf) | `#059669` (Forest) | `#F3F4F6` |
| Gastronomía | `#F97316` (Coral) | `#F59E0B` (Gold) | `#FFFFFF` |
| Festival Banner | `#EC4899` (Sunset) | `#F59E0B` (Gold) | `#1F2937` |
| Footer | `#1F2937` (Dark) | `#6B7280` (Gray) | `#111827` |

### 2.4 Contraste y Accesibilidad

- **Texto sobre fondo claro:** `#1F2937` sobre `#FFFFFF` (16.1:1) ✅
- **Texto sobre fondo oscuro:** `#FFFFFF` sobre `#1F2937` (12.6:1) ✅
- **Texto sobre coral:** `#FFFFFF` sobre `#F97316` (4.7:1) ✅
- **Links:** `#06B6D4` sobre `#FFFFFF` (3.8:1) - ⚠️ Aumentar a `#0891B2` para 4.5:1
- **Textos grandes (>18px):** Mínimo 3:1 ✅

---

## 3. Typography

### 3.1 Fuentes Principales

```css
/* Primary Font - Títulos y Display */
--font-display: 'Montserrat', sans-serif;
/* Alternativa: 'Poppins', 'Nunito', 'Playfair Display' (para toque editorial) */

/* Secondary Font - Cuerpo */
--font-body: 'Open Sans', sans-serif;
/* Alternativa: 'Source Sans Pro', 'Lato', 'Inter' */

/* Accent Font - Números y destacados */
--font-accent: 'Montserrat', sans-serif;
```

### 3.2 Escala Tipográfica - Estilo Editorial

```css
/* Display - Hero y títulos principales */
--text-7xl: 4.5rem;    /* 72px - Hero H1 desktop */
--text-6xl: 3.75rem;   /* 60px - Hero H1 mobile */
--text-5xl: 3rem;      /* 48px - Section H2 desktop */
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

/* Line heights */
--leading-none: 1;
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### 3.3 Jerarquía Tipográfica

| Elemento | Fuente | Tamaño | Peso | Color | Line-height |
|----------|--------|--------|------|-------|-------------|
| H1 Hero | Montserrat | 72px (mobile: 48px) | 700 | `#1F2937` | 1.1 |
| H2 Section | Montserrat | 48px (mobile: 36px) | 700 | `#F97316` | 1.2 |
| H3 Card | Montserrat | 30px (mobile: 24px) | 600 | `#1F2937` | 1.3 |
| Body | Open Sans | 18px | 400 | `#4B5563` | 1.625 |
| Lead | Open Sans | 20px | 400 | `#1F2937` | 1.6 |
| Caption | Open Sans | 14px | 400 | `#6B7280` | 1.5 |
| Button | Montserrat | 16px | 600 | `#FFFFFF` | 1 |
| Price/Discount | Montserrat | 24px | 700 | `#F97316` | 1.2 |
| Hotel Name | Montserrat | 20px | 600 | `#1F2937` | 1.3 |

### 3.4 Estilos Especiales

```css
/* Text gradient for hero */
.text-gradient {
  background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Letter spacing para títulos */
.tracking-tight { letter-spacing: -0.025em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.05em; }

/* Text transform */
.uppercase { 
  text-transform: uppercase; 
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  font-weight: 600;
}
```

---

## 4. Component Stylings

### 4.1 Botones - Estilo Tropical Moderno

```css
/* Primary CTA - Principal */
.btn-primary {
  background: linear-gradient(135deg, #F97316 0%, #EC4899 100%);
  color: #FFFFFF;
  padding: 18px 36px;
  border-radius: 9999px; /* Pill shape */
  font-weight: 600;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary CTA - Borde coral */
.btn-secondary {
  background: transparent;
  color: #F97316;
  padding: 16px 32px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #F97316;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-secondary:hover {
  background: #F97316;
  color: #FFFFFF;
}

/* Button sizes */
.btn-sm { 
  padding: 12px 24px; 
  font-size: 14px; 
}

.btn-lg { 
  padding: 20px 44px; 
  font-size: 18px; 
}

/* Full width for mobile */
.btn-full-mobile {
  @media (max-width: 767px) {
    width: 100%;
  }
}
```

### 4.2 Tarjetas de Hoteles - Diseño de Catálogo

```css
/* Hotel Card - Estilo catálogo */
.card-hotel {
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #F3F4F6;
}

.card-hotel:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: #06B6D4;
}

/* Image container */
.card-hotel__image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

/* Content */
.card-hotel__content {
  padding: 24px;
}

/* Hotel name */
.card-hotel__name {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
}

/* Location badge */
.card-hotel__location {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #FEF3C7;
  color: #92400E;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
}

/* Discount badge */
.card-hotel__discount {
  background: linear-gradient(135deg, #F97316 0%, #EC4899 100%);
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 12px;
}

/* Contact info */
.card-hotel__contact {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
}

/* Star rating */
.card-hotel__stars {
  color: #F59E0B;
  font-size: 16px;
  margin: 8px 0;
}
```

### 4.3 Tarjetas de Experiencias - Estilo Revista de Viajes

```css
/* Experience Card */
.card-experience {
  background: linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 100%);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #06B6D4;
  transition: all 0.3s ease;
}

.card-experience:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Operator name */
.card-experience__operator {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 8px;
}

/* Experience list */
.card-experience__list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.card-experience__list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  color: #4B5563;
}

.card-experience__list li::before {
  content: "✓";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10B981;
  color: white;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Contact button */
.card-experience__contact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #06B6D4;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-experience__contact:hover {
  color: #0891B2;
}
```

### 4.4 Iconos - Estilo Minimalista

```css
/* Icon container */
.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
  color: #FFFFFF;
}

/* Icon sizes */
.icon-sm { width: 32px; height: 32px; }
.icon-md { width: 48px; height: 48px; }
.icon-lg { width: 64px; height: 64px; }

/* Icon colors by category */
.icon-hotel { 
  background: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%); 
}
.icon-experience { 
  background: linear-gradient(135deg, #10B981 0%, #059669 100%); 
}
.icon-gastro { 
  background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%); 
}
.icon-festival { 
  background: linear-gradient(135deg, #EC4899 0%, #F59E0B 100%); 
}
.icon-beach { 
  background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%); 
}
```

### 4.5 Badges y Etiquetas

```css
/* Date Badge - Festival */
.badge-date {
  background: linear-gradient(135deg, #F97316 0%, #EC4899 100%);
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Location Badge */
.badge-location {
  background: #DBEAFE;
  color: #1E40AF;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* New Badge */
.badge-new {
  background: #10B981;
  color: #FFFFFF;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
```

### 4.6 Feature List - Checklist de Experiencias

```css
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #4B5563;
  line-height: 1.6;
}

.feature-list li::before {
  content: "✓";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #10B981;
  color: white;
  font-size: 13px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 1px;
}
```

---

## 5. Layout Principles

### 5.1 Grid System - Estilo Infografía

```css
/* Container widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;

/* Grid columns */
--grid-cols: 12;
--grid-gap: 24px;

/* Section padding */
--section-padding-x: 24px; /* mobile */
--section-padding-x-md: 48px; /* tablet */
--section-padding-x-lg: 80px; /* desktop */

--section-padding-y: 64px;
--section-padding-y-lg: 96px;

/* Card grid */
--card-gap: 24px;
```

### 5.2 Spacing System - Basado en 8px

```css
/* Spacing scale */
--spacing-0: 0;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;
--spacing-32: 128px;

/* Component spacing */
--card-gap: 24px;
--section-gap: 64px;
--content-gap: 32px;
```

### 5.3 Breakpoints Responsive

```css
/* Mobile First Approach */

/* Mobile (base) - 320px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* md: breakpoint */
}

/* Desktop */
@media (min-width: 1024px) {
  /* lg: breakpoint */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* xl: breakpoint */
}

/* Extra Large */
@media (min-width: 1536px) {
  /* 2xl: breakpoint */
}
```

### 5.4 Layout por Sección - Estructura de Portafolio

#### Hero Section - Portada de Revista
```
Mobile:
┌─────────────────────┐
│ Full-bleed image    │
│ Background: Playa   │
│ Overlay gradient    │
│                     │
│ [Logo discreto]     │
│                     │
│ H1: Descubre Sucre  │
│ (centered, 48px)    │
│                     │
│ H2: Vive la magia   │
│ (centered, 18px)    │
│                     │
│ [CTA Button]        │
│                     │
│ ↓ scroll indicator  │
└─────────────────────┘

Desktop:
┌─────────────────────────────────────────┐
│ Full-bleed hero image                   │
│ Background: Fotografía atardecer playa  │
│ Overlay: gradient-tropical (opacity .8) │
│                                         │
│ [Logo - esquina superior]               │
│                                         │
│           H1: Descubre Sucre            │
│        y el Golfo de Morrosquillo       │
│           (Montserrat 700, 72px)        │
│                                         │
│    "Vive la magia del Caribe            │
│     colombiano. Conéctate con           │
│     paraísos de sol y playa..."         │
│    (Open Sans 400, 20px, max-w-2xl)     │
│                                         │
│         [¡PLANIFICA TU VIAJE NOW!]      │
│                                         │
│              ↓ scroll down              │
└─────────────────────────────────────────┘

Altura: 100vh desktop, auto mobile (min 80vh)
Padding: 96px top/bottom desktop, 64px mobile
```

#### Hoteles Section - Catálogo Visual
```
Desktop Layout:
┌────────────────────────────────────────────┐
│ Background: #FFFBEB (cream)                │
│                                            │
│ [icon-wrapper: Bed]                        │
│                                            │
│ H2: Tu descanso ideal                      │
│     Hoteles en Sincelejo y Coveñas         │
│     (Montserrat 700, 48px)                 │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ COVEÑAS (Frente al Mar)                    │
│ ─────────────────────────────────────────  │
│                                            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│ │ [img]    │ │ [img]    │ │ [img]    │    │
│ │ Hotel 1  │ │ Hotel 2  │ │ Hotel 3  │    │
│ │ ⭐⭐⭐⭐  │ │ ⭐⭐⭐⭐⭐│ │ ⭐⭐⭐⭐  │    │
│ │ -15%     │ │ -15%     │ │          │    │
│ └──────────┘ └──────────┘ └──────────┘    │
│                                            │
│ ┌──────────┐ ┌──────────┐                 │
│ │ [img]    │ │ [img]    │                  │
│ │ Hotel 4  │ │ Hotel 5  │                  │
│ └──────────┘ └──────────┘                 │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ SINCELEJO (Centro de la Región)            │
│ ─────────────────────────────────────────  │
│                                            │
│ Grid similar con 6 hoteles                 │
│                                            │
└────────────────────────────────────────────┘

Grid: 3 columnas desktop, 2 tablet, 1 mobile
Padding: 96px top/bottom
```

#### Experiencias Section - Guía de Aventuras
```
┌────────────────────────────────────────────┐
│ Background: gradient-tropical (suave)      │
│                                            │
│ [icon-wrapper: Mountain/Tent]              │
│                                            │
│ H2: Aventuras, Naturaleza y Cultura        │
│ (Montserrat 700, 48px)                     │
│                                            │
│ Párrafo intro (max-w-2xl, center)          │
│                                            │
│ ┌──────────────────────────────────────┐  │
│ │ MAPA TOURS                           │  │
│ │ [Background card: gradient sand]     │  │
│ │ ✓ Bicitour Morroa                    │  │
│ │ ✓ Ciénaga La Caimanera               │  │
│ │ ✓ Astrotour nocturno                 │  │
│ │ ✓ SUP y buceo                        │  │
│ │ [Contact button]                     │  │
│ └──────────────────────────────────────┘  │
│                                            │
│ Grid 3 columnas con los 3 operadores       │
│                                            │
└────────────────────────────────────────────┘

Padding: 96px top/bottom
```

#### Gastronomía Section - Menú Visual
```
┌────────────────────────────────────────────┐
│ Background: #FEF3C7 (sand)                 │
│ Pattern: wave-pattern (opacity 0.05)       │
│                                            │
│ [icon-wrapper: Utensils]                   │
│                                            │
│ H2: ¡Los Mejores Sabores del Caribe!       │
│ (Montserrat 700, gradient text)            │
│                                            │
│ ┌─────────────────┐ ┌─────────────────┐   │
│ │ FRENTE AL MAR   │ │ GASTRONOMÍA     │   │
│ │ (Coveñas)       │ │ ANCESTRAL ZENÚ  │   │
│ │                 │ │                 │   │
│ │ [img food 1]    │ │ [img food 2]    │   │
│ │                 │ │                 │   │
│ │ • Poblado       │ │ • Onne Coloso   │   │
│ │   Restaurante   │ │ • Cabezas de    │   │
│ │ • El Parguito   │ │   gato          │   │
│ │   Feliz         │ │ • Sancochos     │   │
│ │ • Zumo e Coco   │ │ • Motes         │   │
│ └─────────────────┘ └─────────────────┘   │
│                                            │
└────────────────────────────────────────────┘

Padding: 96px top/bottom
```

#### Festival Banner - Cierre Promocional
```
┌────────────────────────────────────────────┐
│ Background: gradient-sunset                │
│ Pattern: zenu-pattern (opacity 0.1)        │
│                                            │
│ 🎉 EVENTO PARALELO                         │
│ (uppercase, white, 14px)                   │
│                                            │
│ FESTIVAL NACIONAL                          │
│ DE PITO ATRAVESAO                          │
│ (H2, Montserrat 700, 48px, white)          │
│                                            │
│ ┌──────────────────────────────────────┐  │
│ │                                      │  │
│ │      26 - 28 JUNIO 2026              │  │
│ │      (Montserrat 700, 36px)           │  │
│ │                                      │  │
│ │      MUNICIPIO DE MORROA             │  │
│ │      37ª VERSIÓN                     │  │
│ │      (En honor a Pablo Domínguez)    │  │
│ │                                      │  │
│ │      🎵 Música y raíces de la región │  │
│ │                                      │  │
│ └──────────────────────────────────────┘  │
│                                            │
│ [CTA Secundario: "Más información"]        │
│                                            │
└────────────────────────────────────────────┘

Altura: 600px desktop, auto mobile
Padding: 96px top/bottom
```

#### Footer - Información de Contacto
```
┌────────────────────────────────────────────┐
│ Background: #111827 (dark)                 │
│ Text: #F3F4F6 (light gray)                 │
│                                            │
│ ¿TIENES DUDAS?                             │
│ Contacta directamente a nuestros           │
│ hoteles y agencias para armar el           │
│ viaje de tus sueños.                       │
│ (Open Sans 400, 18px, center)              │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│ │ 🏨      │ │ 🎯      │ │ 📍      │      │
│ │ Hoteles │ │ Experi. │ │ Mapa    │      │
│ └─────────┘ └─────────┘ └─────────┘      │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ [Facebook] [Instagram] [Twitter] [YouTube]│
│                                            │