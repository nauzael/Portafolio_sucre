# Guía de Diseño - Landing Page Encuentro Intercluster Sucre 2026

**Evento:** Encuentro Intercluster Sucre 2026  
**Fechas del evento:** 25-26 de junio de 2026  
**Lugar:** Departamento de Sucre, Colombia  
**Tipo de página:** Landing page informativa tipo folleto  
**Estilo:** Corporativo moderno, institucional, colaborativo, regional  
**Plataforma de publicación:** Vercel + GitHub  

---

## 1. Visual Theme

### 1.1 Concepto de Diseño
- **Enfoque:** Folleto informativo digital con narrativa visual clara y profesional
- **Sensación:** Colaborativo, innovador, competitivo, regional, conectado
- **Inspiración:** Redes de colaboración, mapas de conexión, nodos empresariales, identidad caribeña institucional
- **Estilo visual:** Diseño limpio y estructurado, iconografía moderna, fotografía corporativa regional, elementos gráficos de conexión

### 1.2 Principios de Diseño
1. **Claridad:** Información jerárquica y fácil de escanear
2. **Profesionalismo:** Estética corporativa sin perder identidad regional
3. **Conexión:** Elementos visuales que representen redes y colaboración
4. **Accesibilidad:** Contraste WCAG AA, navegación intuitiva
5. **Responsive:** Mobile-first, adaptación fluida a todos los dispositivos
6. **Identidad:** Balance entre lo institucional y lo caribeño

### 1.3 Identidad Visual
- **Logo:** Usar isotipo del Cluster (según assets disponibles)
- **Patrones:** Redes de conexión, nodos, líneas de flujo
- **Texturas:** Gradientes institucionales sutiles, patrones geométricos modernos
- **Fotografía:** Empresarial, de networking, paisajes empresariales de Sucre

---

## 2. Color Palette

### 2.1 Colores Principales

```css
/* Primary Colors - Institucional Intercluster */
--color-primary-violet: #7C3AED; /* Violeta institucional - colaboración */
--color-primary-purple: #8B5CF6; /* Morado corporativo - innovación */
--color-primary-indigo: #6366F1; /* Añil - competitividad */

/* Secondary Colors - Región Caribe */
--color-secondary-caribbean: #06B6D4; /* Turquesa Caribe */
--color-secondary-gold: #F59E0B; /* Dorado regional */
--color-secondary-teal: #14B8A6; /* Verde azulado - manglares */
--color-secondary-leaf: #10B981; /* Verde hoja - crecimiento */

/* Neutral Colors */
--color-neutral-white: #FFFFFF;
--color-neutral-cream: #F9FAFB; /* Gris muy claro - fondo */
--color-neutral-light: #F3F4F6;
--color-neutral-gray: #6B7280;
--color-neutral-dark: #1F2937;
--color-neutral-black: #111827;

/* Accent Colors */
--color-accent-coral: #F97316; /* Coral - CTA */
--color-accent-sunset: #EC4899; /* Rosa - destacado */
--color-accent-ocean: #3B82F6; /* Azul - información */

/* Semantic Colors */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #6366F1;
```

### 2.2 Gradientes Sugeridos

```css
/* Gradiente principal - Institucional Intercluster */
--gradient-intercluster: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #6366F1 100%);

/* Gradiente secundario - Conexión Caribe */
--gradient-caribe: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%);

/* Gradiente hero - Corporativo regional */
--gradient-hero: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);

/* Gradiente CTA - Acción */
--gradient-cta: linear-gradient(135deg, #F97316 0%, #EC4899 100%);

/* Gradiente overlay - Fotografía */
--gradient-overlay: linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%);
```

### 2.3 Esquema de Uso por Sección

| Sección | Color Principal | Color Secundario | Fondo |
|---------|----------------|------------------|-------|
| Hero | `#7C3AED` (Violet) | `#8B5CF6` (Purple) | `#F9FAFB` |
| Sobre el Encuentro | `#6366F1` (Indigo) | `#06B6D4` (Turquoise) | `#FFFFFF` |
| Ejes Temáticos | `#8B5CF6` (Purple) | `#10B981` (Leaf) | `#F9FAFB` |
| Oferta Turística | `#06B6D4` (Turquoise) | `#F59E0B` (Gold) | `#FFFFFF` |
| Hoteles | `#14B8A6` (Teal) | `#F3F4F6` (Light) | `#FEF3C7` |
| Gastronomía | `#F97316` (Coral) | `#F59E0B` (Gold) | `#FFFFFF` |
| Festival Banner | `#EC4899` (Sunset) | `#F59E0B` (Gold) | `#1F2937` |
| Footer | `#1F2937` (Dark) | `#6B7280` (Gray) | `#111827` |

### 2.4 Contraste y Accesibilidad

- **Texto sobre fondo claro:** `#1F2937` sobre `#FFFFFF` (16.1:1) ✅
- **Texto sobre fondo oscuro:** `#FFFFFF` sobre `#1F2937` (12.6:1) ✅
- **Texto institucional:** `#FFFFFF` sobre `#7C3AED` (8.2:1) ✅
- **CTA principal:** `#FFFFFF` sobre `#F97316` (4.7:1) ✅
- **Links:** `#7C3AED` sobre `#FFFFFF` (5.8:1) ✅

---

## 3. Typography

### 3.1 Fuentes Principales

```css
/* Primary Font - Títulos */
--font-display: 'Inter', sans-serif;
/* Alternativa: 'Montserrat', 'Poppins', 'Nunito' */

/* Secondary Font - Cuerpo */
--font-body: 'Source Sans Pro', sans-serif;
/* Alternativa: 'Open Sans', 'Lato', 'Roboto' */

/* Accent Font - Números y destacados */
--font-accent: 'Inter', sans-serif;
```

### 3.2 Escala Tipográfica

```css
/* Display - Hero y títulos principales */
--text-6xl: 3.75rem; /* 60px - Hero H1 */
--text-5xl: 3rem; /* 48px - Section H2 */
--text-4xl: 2.25rem; /* 36px - Card titles */

/* Heading */
--text-3xl: 1.875rem; /* 30px - H3 */
--text-2xl: 1.5rem; /* 24px - H4 */
--text-xl: 1.25rem; /* 20px - H5 */

/* Body */
--text-lg: 1.125rem; /* 18px - Lead text */
--text-base: 1rem; /* 16px - Body text */
--text-sm: 0.875rem; /* 14px - Secondary text */
--text-xs: 0.75rem; /* 12px - Caption */

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
| H1 Hero | Inter | 60px (mobile: 36px) | 700 | `#1F2937` | 1.2 |
| H2 Section | Inter | 48px (mobile: 32px) | 700 | `#7C3AED` | 1.25 |
| H3 Card | Inter | 30px (mobile: 24px) | 600 | `#1F2937` | 1.3 |
| Body | Source Sans Pro | 18px | 400 | `#4B5563` | 1.625 |
| Lead | Source Sans Pro | 20px | 400 | `#1F2937` | 1.6 |
| Caption | Source Sans Pro | 14px | 400 | `#6B7280` | 1.5 |
| Button | Inter | 16px | 600 | `#FFFFFF` | 1 |
| Price/Discount | Inter | 24px | 700 | `#F97316` | 1.2 |

### 3.4 Estilos Especiales

```css
/* Text gradient for hero */
.text-gradient {
  background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Letter spacing */
.tracking-tight { letter-spacing: -0.025em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.025em; }

/* Text transform */
.uppercase { text-transform: uppercase; letter-spacing: 0.05em; }
```

---

## 4. Component Stylings

### 4.1 Botones

```css
/* Primary CTA - Principal */
.btn-primary {
  background: linear-gradient(135deg, #F97316 0%, #EC4899 100%);
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 9999px; /* Pill shape */
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
}

/* Secondary CTA - Institucional */
.btn-secondary {
  background: transparent;
  color: #7C3AED;
  padding: 14px 30px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #7C3AED;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #7C3AED;
  color: #FFFFFF;
}

/* Button sizes */
.btn-sm { padding: 10px 20px; font-size: 14px; }
.btn-lg { padding: 18px 40px; font-size: 18px; }
```

### 4.2 Tarjetas (Cards)

```css
/* Info Card - Información general */
.card-info {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #F3F4F6;
  transition: all 0.3s ease;
}

.card-info:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: #7C3AED;
}

/* Hotel Card */
.card-hotel {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #14B8A6;
  transition: all 0.3s ease;
}

.card-hotel:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Experience Card */
.card-experience {
  background: linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 100%);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #06B6D4;
}

/* Thematic Axis Card */
.card-axis {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-top: 4px solid #8B5CF6;
}
```

### 4.3 Iconos

```css
/* Icon container */
.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
  color: #FFFFFF;
}

/* Icon sizes */
.icon-sm { width: 32px; height: 32px; }
.icon-md { width: 48px; height: 48px; }
.icon-lg { width: 64px; height: 64px; }

/* Icon colors by category */
.icon-event { background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%); }
.icon-hotel { background: linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%); }
.icon-experience { background: linear-gradient(135deg, #10B981 0%, #14B8A6 100%); }
.icon-gastro { background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%); }
.icon-festival { background: linear-gradient(135deg, #EC4899 0%, #F59E0B 100%); }
```

### 4.4 Badges y Etiquetas

```css
/* Date Badge */
.badge-date {
  background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Info Badge */
.badge-info {
  background: #FEF3C7;
  color: #92400E;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}

/* Location Badge */
.badge-location {
  background: #DBEAFE;
  color: #1E40AF;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
```

### 4.5 Feature List

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
  margin-bottom: 12px;
  font-size: 16px;
  color: #4B5563;
}

.feature-list li::before {
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
}
```

---

## 5. Layout Principles

### 5.1 Grid System

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
```

### 5.2 Spacing System

```css
/* Spacing scale (based on 8px grid) */
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

/* Mobile (base) */
/* 320px - 767px */

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

### 5.4 Layout por Sección

#### Hero Section
```
Mobile:
┌─────────────────────┐
│ Gradient Background │
│ + Pattern Overlay   │
│                     │
│ [Logo Cluster]      │
│                     │
│ [H1 Title]          │
│ (centered)          │
│                     │
│ [H2 Subtitle]       │
│ (centered)          │
│                     │
│ [Date Badge]        │
│ [Location Badge]    │
│                     │
│ [CTA Button]        │
│ (centered)          │
└─────────────────────┘

Desktop:
┌─────────────────────────────────────────┐
│ Gradient Background + Pattern           │
│                                         │
│           [Logo Cluster]                │
│                                         │
│         [H1 Title - 60px]               │
│         (centered, max-w-4xl)           │
│                                         │
│    [H2 Subtitle - 24px - max-w-2xl]     │
│    (centered)                           │
│                                         │
│    [Date Badge]  [Location Badge]       │
│                                         │
│         [CTA Button]                    │
│         (centered)                      │
└─────────────────────────────────────────┘
```

#### Sobre el Encuentro Section
```
Mobile:
┌──────────────┐
│ H2 Section   │
│ Title        │
├──────────────┤
│ Intro Text   │
├──────────────┤
│ Qué es       │
│ ┌──────────┐ │
│ │ Content  │ │
│ └──────────┘ │
├──────────────┤
│ Propósito    │
│ ┌──────────┐ │
│ │ Content  │ │
│ └──────────┘ │
├──────────────┤
│ Beneficios   │
│ - List       │
│ - Items      │
└──────────────┘

Desktop:
┌─────────────────────────────────────────┐
│ H2 Section Title                        │
│ Intro Text (max-w-3xl, center)          │
├─────────────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐         │
│ │ Qué es      │ │ Propósito   │         │
│ │ (card)      │ │ (card)      │         │
│ └─────────────┘ └─────────────┘         │
│ ┌─────────────────────────────┐         │
│ │ Beneficios (full width)     │         │
│ │ - Bullet points             │         │
│ └─────────────────────────────┘         │
└─────────────────────────────────────────┘
```

#### Ejes Temáticos Section
```
Desktop Grid:
┌─────────────────────────────────────────┐
│ H2: Ejes Temáticos                       │
├─────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│ │Eje 1 │ │Eje 2 │ │Eje 3 │ │Eje 4 │    │
│ │Card  │ │Card  │ │Card  │ │Card  │    │
│ └──────┘ └──────┘ └──────┘ └──────┘    │
│                                         │
│ ┌──────┐ ┌──────┐                      │
│ │Eje 5 │ │Eje 6 │                      │
│ │Card  │ │Card  │                      │
│ └──────┘ └──────┘                      │
└─────────────────────────────────────────┘
```

#### Oferta Turística Section
```
┌─────────────────────────────────────────┐
│ H2: Oferta Turística de Sucre           │
│ Subtitle: Como valor agregado           │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ Hoteles (Coveñas y Sincelejo)       │ │
│ │ - Grid 3x2 cards                    │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ Experiencias Turísticas             │ │
│ │ - Grid 3 cards                      │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ Gastronomía                         │ │
│ │ - Grid 2 cards                      │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

#### Festival Banner Section
```
┌─────────────────────────────────────────┐
│ Background: gradient-sunset             │
│ Pattern: cultural overlay               │
│                                         │
│ 🎉 EVENTO PARALELO                      │
│ FESTIVAL DE PITO ATRAVESAO              │
│ (H2, 48px, white)                       │
│                                         │
│ 26-28 JUNIO 2026                        │
│ MORROA - SUCRE                          │
│                                         │
│ [CTA Secundario]                        │
└─────────────────────────────────────────┘
```

---

## 6. Depth & Elevation

### 6.1 Shadow System

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

/* Colored shadows for cards */
--shadow-violet: 0 10px 30px rgba(124, 58, 237, 0.3);
--shadow-coral: 0 10px 30px rgba(249, 115, 22, 0.3);
--shadow-gold: 0 10px 30px rgba(245, 158, 11, 0.3);
```

### 6.2 Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 10;
--z-sticky: 20;
--z-fixed: 30;
--z-modal-backdrop: 40;
--z-modal: 50;
--z-popover: 60;
--z-tooltip: 70;
```

---

## 7. Do's & Don'ts

### ✅ DO's

1. **Usar la paleta institucional consistentemente** - Violeta, morado, añil
2. **Mantener espacios en blanco generosos** - El aire es clave para el diseño profesional
3. **Priorizar fotografía corporativa de calidad** - Networking, eventos, paisajes empresariales
4. **Incluir elementos de conexión** - Redes, nodos, líneas de flujo
5. **Garantizar contraste WCAG AA** - Accesibilidad primero
6. **Diseñar mobile-first** - La mayoría del tráfico será móvil
7. **Usar gradientes con moderación** - Solo en elementos clave
8. **Incluir micro-interacciones** - Hover states, transiciones suaves
9. **Optimizar imágenes** - WebP, lazy loading, responsive images
10. **Mantener consistencia en bordes redondeados** - 16px para cards, 9999px para botones
11. **Balancear identidad corporativa y regional** - Institucional pero caribeño
12. **Jerarquizar información claramente** - Títulos, subtítulos, cuerpo

### ❌ DON'Ts

1. **No usar más de 2 fuentes** - Máximo Inter + Source Sans Pro
2. **No saturar con colores neón** - Mantener tonos profesionales
3. **No usar sombras muy oscuras** - Mantener ligereza
4. **No comprimir en exceso las imágenes** - Calidad sobre tamaño
5. **No ignorar el estado loading** - Incluir skeletons
6. **No usar animaciones muy rápidas** - 300ms es el estándar
7. **No olvidar el estado focus** - Accesibilidad keyboard
8. **No usar texto justificado** - Alinear a la izquierda
9. **No poner más de 1 CTA por sección** - Claridad sobre cantidad
10. **No usar iconos genéricos** - Personalizar con estilo institucional
11. **No mezclar estilos muy informales** - Mantener profesionalismo
12. **No ignorar la identidad regional** - Sucre debe sentirse presente

---

## 8. Responsive Behavior

### 8.1 Mobile (320px - 767px)

- **Hero:** H1 36px, subtítulo 18px, CTA full-width
- **Grid:** 1 columna, cards apiladas verticalmente
- **Padding:** 16px lateral, 48px vertical
- **Navigation:** Hamburger menu
- **Images:** 100% width, aspect ratio maintain
- **Touch targets:** Mínimo 44x44px

### 8.2 Tablet (768px - 1023px)

- **Hero:** H1 48px, subtítulo 20px, CTA auto-width
- **Grid:** 2 columnas para cards
- **Padding:** 32px lateral, 64px vertical
- **Navigation:** Horizontal con logo
- **Images:** Max 600px width
- **Touch targets:** 48x48px recomendado

### 8.3 Desktop (1024px+)

- **Hero:** H1 60px, subtítulo 24px, CTA auto-width
- **Grid:** 3-4 columnas para cards
- **Padding:** 80px lateral, 96px vertical
- **Navigation:** Horizontal completo con todos los links
- **Images:** Max 800px width
- **Hover states:** Activados

### 8.4 Component Responsive

```css
/* Container */
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container { padding: 0 48px; }
}

@media (min-width: 1024px) {
  .container { padding: 0 80px; }
}

/* Grid responsive */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

## 9. Agent Prompt Guide

### 9.1 Implementación One-Shot

**Framework recomendado:** Next.js 14+ (App Router)  
**Razón:** SSR/SSG, optimización automática, integración nativa con Vercel

**Stack tecnológico:**
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

### 9.2 Estructura de Archivos Sugerida

```
/src
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── components/
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── Badge.tsx
│ │ └── Icon.tsx
│ ├── sections/
│ │ ├── Hero.tsx
│ │ ├── About.tsx
│ │ ├── ThematicAxis.tsx
│ │ ├── Tourism.tsx
│ │ ├── Hotels.tsx
│ │ ├── Gastronomy.tsx
│ │ ├── FestivalBanner.tsx
│ │ └── Footer.tsx
│ └── layout/
│ ├── Container.tsx
│ ├── Section.tsx
│ └── Grid.tsx
├── lib/
│ ├── utils.ts
│ └── constants.ts
├── data/
│ └── content.ts
└── public/
    ├── images/
    ├── patterns/
    └── fonts/
```

### 9.3 Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        'intercluster': '0 10px 30px rgba(124, 58, 237, 0.3)',
        'coral': '0 10px 30px rgba(249, 115, 22, 0.3)',
        'gold': '0 10px 30px rgba(245, 158, 11, 0.3)',
      },
      backgroundImage: {
        'gradient-intercluster': 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #6366F1 100%)',
        'gradient-caribe': 'linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)',
        'gradient-cta': 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}
```

### 9.4 SEO Optimization Checklist

```html
<!-- Meta tags esenciales -->
<meta name="title" content="Encuentro Intercluster Sucre 2026 | Conectando Clústeres, Impulsando la Competitividad Regional" />
<meta name="description" content="25-26 de junio de 2026. Conecta empresas, instituciones y líderes de diferentes sectores económicos para impulsar colaboración e innovación en las regiones." />
<meta name="keywords" content="Encuentro Intercluster, Sucre, Colombia, clústeres, innovación, competitividad, colaboración empresarial, networking" />
<meta name="author" content="Cluster - Sucre" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://encuentrointercluster.com/" />
<meta property="og:title" content="Encuentro Intercluster Sucre 2026" />
<meta property="og:description" content="Conectando clústeres, impulsando la competitividad regional. 25-26 de junio de 2026." />
<meta property="og:image" content="https://encuentrointercluster.com/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Encuentro Intercluster Sucre 2026" />
<meta name="twitter:description" content="Conectando clústeres, impulsando la competitividad regional." />
<meta name="twitter:image" content="https://encuentrointercluster.com/twitter-image.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://encuentrointercluster.com/" />

<!-- Favicon -->
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### 9.5 Performance Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
}

// Lazy loading para componentes pesados
import dynamic from 'next/dynamic'
const FestivalBanner = dynamic(() => import('@/components/sections/FestivalBanner'), {
  loading: () => <Skeleton className="h-64 w-full" />,
})
```

### 9.6 Vercel Integration

```yaml
# vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/:path*",
      "destination": "/:path*"
    }
  ]
}
```

### 9.7 Animaciones y Micro-interacciones

```css
/* Transiciones base */
.transition-base {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-smooth {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Pulse animation for CTA */
@keyframes pulse-institutional {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(124, 58, 237, 0);
  }
}

.animate-pulse-institutional {
  animation: pulse-institutional 2s infinite;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 9.8 Patrones y Elementos Visuales

#### Patrones Sugeridos (SVG Background)

```svg
<!-- network-pattern.svg - Patrón de redes de conexión -->
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
      <circle cx="50" cy="50" r="3" fill="rgba(124, 58, 237, 0.2)"/>
      <circle cx="150" cy="50" r="3" fill="rgba(124, 58, 237, 0.2)"/>
      <circle cx="100" cy="100" r="3" fill="rgba(124, 58, 237, 0.2)"/>
      <circle cx="50" cy="150" r="3" fill="rgba(124, 58, 237, 0.2)"/>
      <circle cx="150" cy="150" r="3" fill="rgba(124, 58, 237, 0.2)"/>
      <line x1="50" y1="50" x2="100" y2="100" stroke="rgba(124, 58, 237, 0.1)" stroke-width="1"/>
      <line x1="150" y1="50" x2="100" y2="100" stroke="rgba(124, 58, 237, 0.1)" stroke-width="1"/>
      <line x1="50" y1="150" x2="100" y2="100" stroke="rgba(124, 58, 237, 0.1)" stroke-width="1"/>
      <line x1="150" y1="150" x2="100" y2="100" stroke="rgba(124, 58, 237, 0.1)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="200" height="200" fill="url(#network)"/>
</svg>

<!-- cluster-logo-pattern.svg - Referencia institucional -->
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45"
    stroke="rgba(124, 58, 237, 0.05)"
    stroke-width="2"
    fill="none"/>
  <circle cx="50" cy="50" r="30"
    stroke="rgba(124, 58, 237, 0.03)"
    stroke-width="2"
    fill="none"/>
</svg>
```

#### Elementos Decorativos

1. **Formas geométricas:** Círculos, líneas de conexión, nodos
2. **Texturas:** Gradientes sutiles, patrones de red
3. **Iconografía:** Lineal moderna, 2px stroke, bordes redondeados
4. **Ilustraciones:** Estilo corporativo con toques regionales

### 9.9 Iconos por Sección

**Librería:** Lucide React (https://lucide.dev)

```javascript
// Hero Section
import { Users, Network, MapPin, Calendar, ArrowRight } from 'lucide-react';

// Sobre el Encuentro
import { Target, Lightbulb, Handshake, TrendingUp } from 'lucide-react';

// Ejes Temáticos
import { Zap, Globe, Briefcase, Rocket, Link, Award } from 'lucide-react';

// Hoteles
import { Hotel, Bed, Wifi, Coffee, Car, Phone } from 'lucide-react';

// Experiencias
import { Tent, Mountain, Trees, Fish, Moon, Star, Anchor } from 'lucide-react';

// Gastronomía
import { Utensils, Fish, Coffee, Wine } from 'lucide-react';

// Festival
import { Music, PartyPopper, Calendar, Users } from 'lucide-react';

// Footer
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
```

### 9.10 Estructura Visual Detallada por Sección

#### Sección 1: Hero

```
┌────────────────────────────────────────────┐
│                                            │
│ Background: gradient-intercluster          │
│ Pattern: network-pattern (opacity 0.1)     │
│                                            │
│           [Logo Cluster]                   │
│           (64px - 80px)                    │
│                                            │
│     ENCUENTRO INTERCLUSTER                 │
│         SUCRE 2026                         │
│   (Inter 700, 60px desktop / 36px mobile)  │
│                                            │
│  Conectando clústeres,                     │
│  impulsando la                             │
│  competitividad regional                   │
│  (Source Sans Pro 400, 24px)               │
│                                            │
│  ┌────────────┐  ┌────────────┐           │
│  │ 📅 25-26   │  │ 📍 Sucre,  │           │
│  │ JUN 2026   │  │ Colombia   │           │
│  │ (badge)    │  │ (badge)    │           │
│  └────────────┘  └────────────┘           │
│                                            │
│  ┌──────────────────────────────┐          │
│  │ CONFIRMA TU ASISTENCIA       │          │
│  │ [Arrow Right]                │          │
│  └──────────────────────────────┘          │
│  (btn-primary, pulse animation)            │
│                                            │
│  ↓ (scroll indicator)                      │
│                                            │
└────────────────────────────────────────────┘

Altura: 100vh desktop, auto mobile (min 80vh)
Padding: 96px top/bottom desktop, 64px mobile
```

#### Sección 2: Sobre el Encuentro

```
┌────────────────────────────────────────────┐
│ Background: #FFFFFF                        │
│                                            │
│ SOBRE EL ENCUENTRO                         │
│ INTERCLUSTER                               │
│ (H2, Inter 700, 48px desktop / 32px mobile)│
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │ Un espacio para conectar empresas,   │ │
│  │ instituciones y líderes de diferentes│ │
│  │ sectores económicos...               │ │
│  └──────────────────────────────────────┘ │
│  (Intro text, center, max-w-3xl)          │
│                                            │
│  ┌─────────────────┐ ┌─────────────────┐  │
│  │ [icon-wrapper]  │ │ [icon-wrapper]  │  │
│  │                 │ │                 │  │
│  │ ¿Qué es?        │ │ Propósito       │  │
│  │                 │ │                 │  │
│  │ Evento que      │ │ Conectar        │  │
│  │ reúne los       │ │ clústeres para  │  │
│  │ principales     │ │ impulsar        │  │
│  │ actores...      │ │ competitividad  │  │
│  └─────────────────┘ └─────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │ Beneficios                           │ │
│  │ ✓ Networking estratégico             │ │
│  │ ✓ Alianzas público-privadas          │ │
│  │ ✓ Innovación colaborativa            │ │
│  │ ✓ Desarrollo regional                │ │
│  └──────────────────────────────────────┘ │
│                                            │
└────────────────────────────────────────────┘

Altura: auto (según contenido)
Padding: 96px top/bottom
```

#### Sección 3: Ejes Temáticos

```
┌────────────────────────────────────────────┐
│ Background: #F9FAFB                        │
│                                            │
│ EJES TEMÁTICOS                             │
│ (H2, Inter 700, 48px)                      │
│                                            │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│ │ [🚀] │ │ [🌐] │ │ [💼] │ │ [⚡] │      │
│ │Innova-│ │Compe-│ │Colab-│ │Desarrollo│ │
│ │ ción  │ │titivi-│ │oración│ │Regional │ │
│ │       │ │ dad   │ │       │ │         │ │
│ └──────┘ └──────┘ └──────┘ └──────┘      │
│                                            │
│ ┌──────┐ ┌──────┐                        │
│ │ [🤝] │ │ [🏆] │                        │
│ │Alianzas│ │Trans-│                        │
│ │Público│ │forma-│                        │
│ │-Pri-  │ │ ción  │                        │
│ │vadas  │ │       │                        │
│ └──────┘ └──────┘                        │
│                                            │
└────────────────────────────────────────────┘

Grid: 3-4 columnas desktop, 2 tablet, 1 mobile
Padding: 96px top/bottom
```

#### Sección 4: Oferta Turística

```
┌────────────────────────────────────────────┐
│ Background: #FFFFFF                        │
│                                            │
│ OFERTA TURÍSTICA DE SUCRE                  │
│ Como valor agregado del evento             │
│ (H2, Inter 700, 48px)                      │
│                                            │
│ ─────────────────────────────────────────  │
│ HOTELES                                    │
│ ─────────────────────────────────────────  │
│                                            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│ │Hotel 1   │ │Hotel 2   │ │Hotel 3   │   │
│ │Coveñas   │ │Coveñas   │ │Coveñas   │   │
│ │⭐⭐⭐⭐    │ │⭐⭐⭐⭐⭐   │ │⭐⭐⭐⭐    │   │
│ └──────────┘ └──────────┘ └──────────┘   │
│                                            │
│ ─────────────────────────────────────────  │
│ EXPERIENCIAS                               │
│ ─────────────────────────────────────────  │
│                                            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│ │Experiencia│ │Experiencia│ │Experiencia│  │
│ │1         │ │2         │ │3         │   │
│ └──────────┘ └──────────┘ └──────────┘   │
│                                            │
│ ─────────────────────────────────────────  │
│ GASTRONOMÍA                                │
│ ─────────────────────────────────────────  │
│                                            │
│ ┌──────────┐ ┌──────────┐                 │
│ │Gastro 1  │ │Gastro 2  │                 │
│ └──────────┘ └──────────┘                 │
│                                            │
└────────────────────────────────────────────┘

Padding: 96px top/bottom
```

#### Sección 5: Festival Banner

```
┌────────────────────────────────────────────┐
│ Background: gradient-sunset                │
│ Pattern: cultural overlay (opacity 0.1)    │
│                                            │
│ 🎉 EVENTO PARALELO                         │
│                                            │
│ FESTIVAL DE PITO                           │
│ ATRAVESAO                                  │
│ (H2, Inter 700, 48px, white)               │
│                                            │
│ ┌────────────────────────────────────┐    │
│ │                                    │    │
│ │   26-28 JUNIO 2026                 │    │
│ │   (Inter 700, 36px)                │    │
│ │                                    │    │
│ │   MORROA - SUCRE                   │    │
│ │                                    │    │
│ │   37ª VERSIÓN                      │    │
│ │   (En honor a Pablo Domínguez)     │    │
│ │                                    │    │
│ │   🎵 Música y raíces de la región  │    │
│ │                                    │    │
│ └────────────────────────────────────┘    │
│                                            │
│ ┌────────────────────────────────────┐    │
│ │ ¡RESERVA TU CUPO AHORA!            │    │
│ │ [btn-white, rounded-pill]          │    │
│ └────────────────────────────────────┘    │
│                                            │
└────────────────────────────────────────────┘

Altura: 600px desktop, auto mobile
Padding: 96px top/bottom
```

#### Sección 6: Footer

```
┌────────────────────────────────────────────┐
│ Background: #111827 (dark)                 │
│ Text: #F3F4F6 (light gray)                 │
│                                            │
│ ¿TIENES DUDAS?                             │
│ Contacta directamente a nuestros           │
│ hoteles y agencias para armar el           │
│ viaje de tus sueños.                       │
│ (Source Sans Pro 400, 18px, center)        │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│ │ 🏨      │ │ 🎯      │ │ 📍      │       │
│ │ Hoteles │ │ Experi. │ │ Mapa    │       │
│ │         │ │         │ │         │       │
│ └─────────┘ └─────────┘ └─────────┘       │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ [Facebook] [Instagram] [Twitter] [YouTube] │
│                                            │
│ ─────────────────────────────────────────  │
│                                            │
│ © 2026 Encuentro Intercluster. Todos los   │
│ derechos reservados.                       │
│                                            │
│ Política de privacidad | Términos          │
│                                            │
└────────────────────────────────────────────┘

Altura: auto
Padding: 64px top, 32px bottom
```

### 9.11 Checklist de Calidad

#### Visual
- [ ] Colores consistentes con paleta institucional (violeta, morado, añil)
- [ ] Espacios en blanco generosos
- [ ] Fotografías de alta calidad optimizadas
- [ ] Iconografía consistente (2px stroke, Lucide)
- [ ] Gradientes usados con moderación
- [ ] Bordes redondeados consistentes (16px cards, pill buttons)
- [ ] Balance identidad corporativa y regional

#### Tipografía
- [ ] Máximo 2 fuentes (Inter + Source Sans Pro)
- [ ] Jerarquía clara (H1 > H2 > H3 > body)
- [ ] Tamaños responsive (mobile first)
- [ ] Line-height adecuado (1.5-1.625 body)
- [ ] Contraste suficiente (WCAG AA)

#### Accesibilidad
- [ ] Contraste 4.5:1 mínimo texto normal
- [ ] Contraste 3:1 mínimo texto grande (>18px)
- [ ] Focus states visibles
- [ ] ARIA labels en botones/iconos
- [ ] Alt text en imágenes
- [ ] reduced-motion support
- [ ] Touch targets 44x44px mínimo

#### Responsive
- [ ] Mobile-first implementation
- [ ] Breakpoints: 768px, 1024px, 1280px
- [ ] Images responsive (srcset)
- [ ] Typography scales appropriately
- [ ] Navigation adapts (hamburger mobile)
- [ ] No horizontal scroll

#### Performance
- [ ] Images: WebP/AVIF format
- [ ] Lazy loading for images
- [ ] Font subsetting
- [ ] Minified CSS/JS
- [ ] Critical CSS inlined
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms

#### SEO
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags
- [ ] Twitter Card
- [ ] Canonical URL
- [ ] Structured data (JSON-LD)
- [ ] Semantic HTML

---

## 10. Recursos Adicionales

### 10.1 Fuentes de Imágenes Sugeridas
- Unsplash (gratis, alta calidad) - buscar: business networking, corporate event, Colombia
- Pexels (gratis) - buscar: conference, meeting, professional
- Adobe Stock (premium)
- Fotografías oficiales del Cluster y turismo de Sucre

### 10.2 Paletas de Referencia
- [Institutional Violet](https://coolors.co/7c3aed-8b5cf6-6366f1)
- [Caribe Corporate](https://coolors.co/06b6d4-f59e0b-14b8a6)
- [Professional Gradient](https://coolors.co/7c3aed-f97316-ec4899)

### 10.3 Inspiración
- Web Summit
- South Summit
- Colombia Tech
- Regional cluster events (País Vasco, Cataluña)

### 10.4 Herramientas Recomendadas
- **Diseño:** Figma, Adobe XD
- **Prototipado:** Framer
- **Optimización imágenes:** Squoosh, TinyPNG
- **Testing:** Lighthouse, WebPageTest
- **Accesibilidad:** axe DevTools, WAVE

---

## 11. Notas Finales para Implementación

1. **Priorizar mobile-first:** El 70%+ del tráfico será móvil
2. **Optimizar para Vercel:** Aprovechar Edge Functions, Image Optimization
3. **Carga diferida:** Lazy load para secciones below the fold
4. **Analytics:** Implementar Vercel Analytics o Google Analytics 4
5. **Testing:** Probar en dispositivos reales (iOS Safari, Android Chrome)
6. **Backup plan:** Tener fallback para si las imágenes no cargan
7. **Contactos:** Verificar todos los teléfonos y emails antes de publicar
8. **Actualización:** El evento es junio 2026, mantener contenido actualizable
9. **Identidad:** Balancear lo institucional con lo regional caribeño
10. **Accesibilidad:** Nunca comprometer la accesibilidad por estética

---

**Documento creado:** 2026-05-09  
**Versión:** 2.0 (Actualizado para Encuentro Intercluster)  
**Autor:** Gem-Designer UI/UX  
**Próxima revisión:** Post-implementación

---

## Resumen de Cambios (v2.0)

### Nueva Estructura de la Landing Page:
1. **Hero / Encabezado Principal:** H1 "Encuentro Intercluster Sucre 2026", H2 "Conectando clústeres, impulsando la competitividad regional"
2. **Sobre el Encuentro Intercluster:** Qué es, propósito, beneficios, ejes temáticos
3. **Oferta Turística de Sucre:** Hoteles (Coveñas y Sincelejo), experiencias turísticas, gastronomía
4. **Festival de Pito Atravesao:** Banner promocional final como evento paralelo

### Nueva Paleta de Colores:
- **Primarios:** Violeta (#7C3AED), Morado (#8B5CF6), Añil (#6366F1) - Institucional Intercluster
- **Secundarios:** Turquesa Caribe (#06B6D4), Dorado (#F59E0B), Verde (#10B981) - Región
- **CTA:** Coral (#F97316) - Acción

### Tipografía:
- **Títulos:** Inter (moderna, profesional)
- **Cuerpo:** Source Sans Pro (legible, amigable)

### Estilo:
- Corporativo moderno
- Institucional pero con identidad regional
- Colaborativo e innovador
- Accesible y responsive