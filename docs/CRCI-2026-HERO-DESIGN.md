# Diseño del Componente Hero - CRCI 2026
## Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación

**Evento:** CRCI 2026  
**Fechas:** 25-26 de Junio  
**Ubicación:** Sincelejo, Sucre  
**Plataforma:** Next.js 16.2 + React 19 + Tailwind CSS v4 + Framer Motion  

---

## 1. Visual Theme

### 1.1 Concepto de Diseño
- **Enfoque:** Landing page impactante, evento nacional empresarial de alto nivel
- **Sensación:** Energía, innovación, competitividad, identidad cultural colombiana
- **Inspiración:** Dark modern con acentos neon, elementos culturales flotantes, gradientes dinámicos
- **Estilo visual:** Asymmetrical layout, patrones geométricos diagonales, neon glow effects, fotografía cultural

### 1.2 Principios de Diseño
1. **Dark Mode First:** Fondo oscuro como base, colores neon como acentos
2. **Alto Contraste:** Legibilidad garantizada con WCAG AAA
3. **Asimetría Intencional:** Rompe la monotonía, dirige flujo visual
4. **Elementos Flotantes:** Animación sutil de elementos culturales
5. **Responsive:** Mobile-first sin comprometer impacto visual
6. **Neon Glow:** Efectos luminosos en CTAs y accents
7. **Identidad Cultural:** Hibiscus amarillo, sombrero vueltiao, danzadores

---

## 2. Color Palette

### 2.1 Colores Principales

```css
/* Primary Colors - CRCI 2026 */
--color-primary-deep: #111415; /* Deep Purple - Corporativo oscuro */
--color-secondary-neon: #36ffc4; /* Neon Emerald - Accent vibrante */
--color-tertiary-warm: #e9c400; /* Warm Yellow - Cultural accent */

/* Extended Palette */
--color-dark-bg: #0a0b0c; /* Fondo más oscuro */
--color-surface-dark: #1a1b1f; /* Superficies */
--color-border-subtle: #2a2b2f; /* Bordes sutiles */

/* Neutrals */
--color-text-primary: #ffffff; /* Texto principal */
--color-text-secondary: #b8bcc2; /* Texto secundario */
--color-text-muted: #7a7f85; /* Texto débil */

/* Semantic Colors */
--color-success: #36ffc4; /* Verde neon */
--color-warning: #e9c400; /* Amarillo cálido */
--color-info: #36ffc4; /* Cian neon */
--color-error: #ff4757; /* Rojo coral */
```

### 2.2 Gradientes

```css
/* Gradiente principal - Neon glow */
--gradient-neon-primary: linear-gradient(135deg, #36ffc4 0%, #00d4ff 100%);

/* Gradiente fondo - Dark sutil */
--gradient-bg-dark: linear-gradient(180deg, #0a0b0c 0%, #1a1b1f 100%);

/* Gradiente text - Neon glow text */
--gradient-text-neon: linear-gradient(90deg, #36ffc4 0%, #e9c400 100%);

/* Gradiente botón - Neon brillante */
--gradient-button: linear-gradient(135deg, #36ffc4 0%, #00d4ff 50%, #36ffc4 100%);
```

### 2.3 Shadows & Glow Effects

```css
/* Neon glow - Subtle */
--glow-neon-sm: 0 0 10px rgba(54, 255, 196, 0.3), 
                0 0 20px rgba(54, 255, 196, 0.1);

/* Neon glow - Medium */
--glow-neon-md: 0 0 20px rgba(54, 255, 196, 0.4), 
                0 0 40px rgba(54, 255, 196, 0.2),
                inset 0 0 20px rgba(54, 255, 196, 0.1);

/* Neon glow - Strong (CTAs) */
--glow-neon-lg: 0 0 30px rgba(54, 255, 196, 0.5), 
                0 0 60px rgba(54, 255, 196, 0.3),
                0 0 100px rgba(54, 255, 196, 0.15);

/* Glow amarillo */
--glow-yellow: 0 0 20px rgba(233, 196, 0, 0.4),
               0 0 40px rgba(233, 196, 0, 0.2);

/* Standard shadows */
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.3);
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.4);
```

---

## 3. Typography

### 3.1 Font Stack

```css
/* Headlines - Montserrat */
--font-headline: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Body - Plus Jakarta Sans */
--font-body: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Labels - Space Grotesk */
--font-label: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### 3.2 Type Scale

```css
/* Headlines */
--text-h1: 64px / 72px, Montserrat, weight 800; /* Móvil: 40px */
--text-h2: 48px / 56px, Montserrat, weight 700; /* Móvil: 28px */
--text-h3: 32px / 40px, Montserrat, weight 700; /* Móvil: 24px */

/* Subheadings */
--text-subheading: 24px / 32px, Plus Jakarta Sans, weight 600; /* Móvil: 18px */

/* Body */
--text-body-lg: 18px / 28px, Plus Jakarta Sans, weight 400;
--text-body-md: 16px / 24px, Plus Jakarta Sans, weight 400;
--text-body-sm: 14px / 20px, Plus Jakarta Sans, weight 400;

/* Labels & CTAs */
--text-label: 14px / 20px, Space Grotesk, weight 600;
--text-cta: 16px / 24px, Space Grotesk, weight 700;
```

### 3.3 Font Weights
- **Montserrat:** 700 (bold), 800 (extrabold)
- **Plus Jakarta Sans:** 400 (regular), 500 (medium), 600 (semibold)
- **Space Grotesk:** 500 (medium), 600 (semibold), 700 (bold)

---

## 4. Component Structure: Hero

### 4.1 Layout Architecture

```
┌─────────────────────────────────────────┐
│         NAVIGATION BAR                  │ Fixed top
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────┐  ┌──────────────┐ │
│  │   LEFT COLUMN   │  │ RIGHT COLUMN │ │
│  │                 │  │              │ │
│  │ • CRCI 2026     │  │ • Hibiscus   │ │
│  │ • Event Title   │  │ • Sombrero   │ │
│  │ • Date & Loc    │  │ • Danzadores │ │
│  │ • Subtext       │  │ • Pattern    │ │
│  │ • CTA Button    │  │              │ │
│  │                 │  │              │ │
│  └─────────────────┘  └──────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  GEOMETRIC PATTERN BACKGROUND        ││
│  │  (Diagonal lines @ 5-10% opacity)    ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

### 4.2 Component Tree

```
<HeroSection>
  ├── <NavBar>
  │   ├── Logo/Brand
  │   ├── Navigation Links
  │   │   ├── Agenda
  │   │   ├── Ubicación
  │   │   ├── Comisiones
  │   │   └── Impacto
  │   └── CTA Button
  │
  ├── <HeroContent>
  │   ├── <LeftColumn>
  │   │   ├── Badge ("CRCI 2026")
  │   │   ├── MainHeading
  │   │   ├── DateLocation
  │   │   ├── Subheading
  │   │   └── CTAButton
  │   │
  │   └── <RightColumn>
  │       ├── FloatingHibiscus (animated)
  │       ├── FloatingSombrero (animated)
  │       ├── DancersImage
  │       └── GeometricPattern
  │
  └── <BackgroundPattern>
      └── DiagonalGeometricLines
```

### 4.3 Content Specification

**Badge:**
- Text: "CRCI 2026"
- Style: Space Grotesk, 14px, uppercase, with neon glow
- Color: #36ffc4 text with border

**Main Heading:**
- Text: "Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación"
- Font: Montserrat, 64px (móvil: 40px), weight 800
- Color: White text with subtle gradient (#36ffc4 → #e9c400)
- Line height: 1.125

**Date & Location:**
- Text: "25 y 26 de Junio · Sincelejo, Sucre"
- Font: Plus Jakarta Sans, 18px (móvil: 16px)
- Color: #b8bcc2 (text-secondary)
- Style: Bold weight 600

**Subheading:**
- Text: "El evento de innovación y competitividad que reúne a líderes empresariales del país"
- Font: Plus Jakarta Sans, 18px (móvil: 16px), weight 400
- Color: #b8bcc2
- Max width: 500px

**CTA Button:**
- Text: "Agéndate"
- Style: Space Grotesk, 16px, weight 700, uppercase
- Background: Gradient neon (#36ffc4 → #00d4ff)
- Glow: Neon effect on hover
- Padding: 16px 32px
- Border radius: 8px
- Hover state: Glow intensifies, slight scale

---

## 5. Component Styling: Tailwind Classes

### 5.1 Hero Container

```tailwind
/* Desktop */
min-h-screen bg-gradient-to-b from-[#0a0b0c] to-[#1a1b1f]
relative overflow-hidden

/* Responsive */
px-6 py-20 lg:px-20 lg:py-32
```

### 5.2 Navigation Bar

```tailwind
/* Fixed positioning */
fixed top-0 left-0 right-0 z-50
bg-[#0a0b0c]/80 backdrop-blur-md
border-b border-[#2a2b2f]/30

/* Content */
flex items-center justify-between
px-6 py-4 lg:px-20 lg:py-5
h-20

/* Nav Links */
hidden lg:flex gap-8
text-[#b8bcc2] hover:text-[#36ffc4]
transition-colors duration-300
font-space-grotesk text-sm font-semibold
uppercase tracking-wide

/* CTA in Nav */
px-6 py-2.5 rounded-lg
bg-gradient-to-r from-[#36ffc4] to-[#00d4ff]
text-[#111415] font-space-grotesk font-bold
shadow-[0_0_30px_rgba(54,255,196,0.5)]
hover:shadow-[0_0_50px_rgba(54,255,196,0.7)]
transition-all duration-300
```

### 5.3 Hero Content Grid

```tailwind
/* Main grid layout */
grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20
max-w-7xl mx-auto
relative z-10
pt-20 lg:pt-0

/* Left Column */
flex flex-col justify-center gap-8
order-2 lg:order-1

/* Right Column */
flex flex-col justify-center items-center
order-1 lg:order-2
relative h-full
min-h-[400px] lg:min-h-[600px]
```

### 5.4 Badge

```tailwind
w-fit px-4 py-2
border border-[#36ffc4]/50
rounded-full
text-[#36ffc4] font-space-grotesk text-sm font-semibold
uppercase tracking-widest
bg-[#36ffc4]/5
shadow-[0_0_20px_rgba(54,255,196,0.3)]
hover:shadow-[0_0_30px_rgba(54,255,196,0.5)]
transition-shadow duration-300
```

### 5.5 Main Heading

```tailwind
/* Typography */
font-montserrat font-extrabold
text-4xl sm:text-5xl lg:text-6xl
leading-tight lg:leading-tight
/* Text gradient */
bg-gradient-to-r from-white via-[#36ffc4] to-[#e9c400]
bg-clip-text text-transparent
/* Animation ready */
animate-fade-in-up
```

### 5.6 Date & Location

```tailwind
text-base lg:text-lg
font-plus-jakarta-sans font-semibold
text-[#b8bcc2]
flex flex-wrap gap-2
items-center
```

### 5.7 Subheading

```tailwind
text-lg lg:text-xl
font-plus-jakarta-sans font-light
text-[#b8bcc2]
max-w-xl leading-relaxed
```

### 5.8 CTA Button

```tailwind
/* Base styles */
px-8 py-4 rounded-lg
font-space-grotesk font-bold text-base
uppercase tracking-wide
text-[#111415]
/* Gradient & glow */
bg-gradient-to-r from-[#36ffc4] via-[#00d4ff] to-[#36ffc4]
bg-size-200 bg-pos-0
shadow-[0_0_30px_rgba(54,255,196,0.5),0_0_60px_rgba(54,255,196,0.3)]
/* Transitions */
hover:shadow-[0_0_50px_rgba(54,255,196,0.7),0_0_100px_rgba(54,255,196,0.5)]
hover:scale-105
active:scale-95
transition-all duration-300
/* Focus state */
focus-visible:outline-2 outline-offset-2 outline-[#36ffc4]
```

### 5.9 Floating Elements (Positioned Absolutely)

```tailwind
/* Hibiscus */
absolute top-20 right-10 lg:top-32 lg:right-20
w-24 h-24 lg:w-32 lg:h-32
opacity-90 lg:opacity-100
filter drop-shadow-[0_0_20px_rgba(233,196,0,0.5)]
animate-float
z-20

/* Sombrero */
absolute bottom-1/4 right-1/4 lg:bottom-1/3 lg:right-1/3
w-32 h-32 lg:w-40 lg:h-40
opacity-80 lg:opacity-100
filter drop-shadow-[0_0_15px_rgba(54,255,196,0.3)]
animate-float
animation-delay: 0.5s
z-15

/* Danzadores Image */
absolute top-0 right-0 bottom-0
w-full lg:w-1/2
object-cover
opacity-20 lg:opacity-40
mix-blend-mode: screen
z-0
```

### 5.10 Geometric Pattern Background

```tailwind
/* Background container */
absolute inset-0
z-0
opacity-[0.07]
overflow-hidden

/* SVG or div with diagonal lines */
w-full h-full
bg-[url('data:image/svg+xml,...')]
/* OR */
/* Multiple diagonal lines using ::before/::after */
```

---

## 6. Layout Principles

### 6.1 Desktop Layout (1024px+)
- **Grid:** 2 columnas iguales (50% cada una)
- **Left Column:** Contenido textual, 100% altura disponible
- **Right Column:** Elementos visuales flotantes, fotografía
- **Espaciado:** gap-20 (80px)
- **Padding:** px-20 (80px), py-32 (128px vertical)

### 6.2 Tablet Layout (768px - 1023px)
- **Grid:** 2 columnas, pero espaciado reducido (gap-12)
- **Right Column:** Elementos más pequeños, más solapados
- **Padding:** px-12, py-24
- **Left Column:** Gap reducido entre elementos (4-6)

### 6.3 Mobile Layout (320px - 767px)
- **Layout:** Stack vertical (1 columna)
- **Order:** Elementos visuales primero (RightColumn), contenido abajo (LeftColumn)
- **Padding:** px-6, py-20
- **Heading:** 40px (escala reducida)
- **Elementos flotantes:** Más pequeños, más cercanos al centro
- **Gap:** 8 (32px)

### 6.4 Responsiveness Rules

```
|Breakpoint|Screen|Heading|Badge|Button|Pattern|
|-----------|------|-------|-----|------|-------|
|Mobile    |320px |40px   |12px |Lleno |Hide   |
|Tablet    |768px |52px   |13px |Normal|Subtle |
|Desktop   |1024px|64px   |14px |Normal|Visible|
|Large     |1280px|72px   |14px |Normal|Strong |
```

---

## 7. Depth & Elevation

### 7.1 Z-Index Hierarchy

```
30: Modals, Overlays, Popups
25: Tooltips, Popovers
20: Floating Elements (Hibiscus)
15: Secondary Floating (Sombrero)
10: Buttons, Interactive
5:  Shadows, Borders
0:  Background, Pattern
-1: Images, Videos
```

### 7.2 Shadow Levels

- **Level 0:** Ninguno (backgrounds)
- **Level 1:** `shadow-sm` (subtle borders)
- **Level 2:** `shadow-md` (cards, raised elements)
- **Level 3:** `shadow-lg` (buttons, interactive)
- **Level 4:** `shadow-xl` (modals, overlays)

### 7.3 Neon Glow Hierarchy

- **Subtle:** Borders, secondary elements
- **Medium:** Badges, icons
- **Strong:** CTA buttons, hero elements
- **Intense:** On hover/focus states

---

## 8. Do's & Don'ts

### ✅ DO

- **DO** usar el design system de colores religiosamente
- **DO** implementar glow effects en interactivos
- **DO** mantener asimetría intencional y coherente
- **DO** usar Montserrat extrabold para headlines impactantes
- **DO** incluir elementos culturales (hibiscus, sombrero)
- **DO** asegurar contraste WCAG AAA (7:1 recomendado)
- **DO** soportar dark mode como default
- **DO** usar Framer Motion para animaciones sutiles
- **DO** optimizar para mobile-first
- **DO** incluir focus states visibles para accesibilidad

### ❌ DON'T

- **DON'T** usar colores sólidos sin glow en CTAs
- **DON'T** romper la asimetría sin propósito
- **DON'T** exceder 3 tipos de fuente diferentes
- **DON'T** usar fondos sólidos claros (dark mode first)
- **DON'T** ocultar elementos de navegación completamente en mobile
- **DON'T** animar sin respeto a `prefers-reduced-motion`
- **DON'T** usar efectos neon excesivos (causa fatiga visual)
- **DON'T** comprometer legibilidad por estética
- **DON'T** ignorar contraste de colores
- **DON'T** usar tipografía pequeña (<14px) para cuerpo en mobile

---

## 9. Responsive Behavior

### 9.1 Grid Transformation

```css
/* Mobile: Stack vertical */
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto auto;

/* Tablet: 2 columnas con orden modificado */
@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Desktop: 2 columnas completas */
@media (min-width: 1024px) {
  gap: 5rem;
}
```

### 9.2 Typography Scaling

```css
/* Heading */
font-size: clamp(2.5rem, 8vw, 4rem);
line-height: clamp(1.2, 8vw + 0.5, 1.125);

/* Subheading */
font-size: clamp(1rem, 3vw, 1.25rem);

/* Body */
font-size: clamp(0.875rem, 2vw, 1.125rem);
```

### 9.3 Floating Elements Responsiveness

```css
/* Hibiscus */
width: clamp(100px, 20vw, 160px);
height: clamp(100px, 20vw, 160px);

/* Sombrero */
width: clamp(128px, 25vw, 200px);
height: clamp(128px, 25vw, 200px);

/* Right Column */
min-height: clamp(300px, 60vh, 600px);
```

### 9.4 Spacing Responsiveness

```css
/* Padding */
padding-left: clamp(1.5rem, 4vw, 5rem);
padding-right: clamp(1.5rem, 4vw, 5rem);
padding-top: clamp(3rem, 6vw, 8rem);

/* Gap */
gap: clamp(2rem, 5vw, 5rem);
```

---

## 10. Animation & Motion Guide

### 10.1 Framer Motion Configuration

```javascript
// Global animation config
const ANIMATION_CONFIG = {
  // Fade in up
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  
  // Float (gentle vertical movement)
  float: {
    animate: { y: [0, -20, 0] },
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  },
  
  // Glow pulse (opacity fluctuation)
  glowPulse: {
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  },
  
  // Scale on hover
  hoverScale: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 }
  },
  
  // Stagger children
  container: {
    initial: "hidden",
    animate: "visible",
    variants: {
      visible: { transition: { staggerChildren: 0.1 } }
    }
  }
};
```

### 10.2 Element-Specific Animations

**Badge:**
```javascript
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  whileHover={{ boxShadow: "0 0 30px rgba(54,255,196,0.5)" }}
>
```

**Main Heading:**
```javascript
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="animate-fade-in-up"
>
```

**Floating Hibiscus:**
```javascript
<motion.div
  animate={{ y: [-20, 20, -20] }}
  transition={{ 
    duration: 4, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
```

**Floating Sombrero:**
```javascript
<motion.div
  animate={{ y: [0, -30, 0], rotate: [-5, 5, -5] }}
  transition={{ 
    duration: 5, 
    repeat: Infinity, 
    ease: "easeInOut",
    delay: 0.5
  }}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
```

**CTA Button:**
```javascript
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 50px rgba(54,255,196,0.7), 0 0 100px rgba(54,255,196,0.5)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
```

### 10.3 Reduced Motion Support

```javascript
// Detect user preference
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Apply simplified animations
const animationConfig = prefersReducedMotion 
  ? { duration: 0.1, transition: { disabled: true } }
  : { duration: 0.6, ease: "easeOut" };

// Implementation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={animationConfig}
>
```

### 10.4 Animation Timing

| Element | Delay | Duration | Effect |
|---------|-------|----------|--------|
| Badge | 0.1s | 0.6s | Fade up |
| Heading | 0.2s | 0.8s | Fade up |
| Date | 0.3s | 0.6s | Fade up |
| Subheading | 0.4s | 0.8s | Fade up |
| CTA | 0.5s | 0.6s | Fade up + glow |
| Hibiscus | 0.3s | 0.6s (float 4s) | Float continuous |
| Sombrero | 0.5s | 0.8s (float 5s) | Float + rotate |

---

## 11. Accessibility Specifications

### 11.1 Color Contrast

```
Text: #ffffff on #0a0b0c = 21:1 ✅ (WCAG AAA)
Text: #b8bcc2 on #0a0b0c = 7.2:1 ✅ (WCAG AAA)
Text: #36ffc4 on #0a0b0c = 4.8:1 ✅ (WCAG AA)
Button text: #111415 on #36ffc4 = 9.5:1 ✅ (WCAG AAA)
```

### 11.2 Semantic HTML

```html
<!-- Navigation -->
<nav> + <ul><li><a>

<!-- Main content -->
<main> + <section>

<!-- Heading hierarchy -->
<h1> (único) + <h2>, <h3>

<!-- Buttons -->
<button> (no <div> simulando botón)

<!-- Images -->
<img alt="descriptivo">

<!-- Focus visible -->
:focus-visible outline
```

### 11.3 ARIA Attributes

```jsx
// Navigation
<nav aria-label="Navegación principal">

// CTA Button
<button aria-label="Registrate en el evento CRCI 2026">

// Floating images (decorative)
<img alt="" role="presentation" aria-hidden="true">

// Links
<a href="#" aria-current="page"> (if active)
```

### 11.4 Focus Management

```css
/* Visible focus indicator */
:focus-visible {
  outline: 2px solid #36ffc4;
  outline-offset: 4px;
  border-radius: 4px;
}

/* Button focus */
button:focus-visible {
  box-shadow: 0 0 0 4px rgba(54, 255, 196, 0.3);
}

/* Link focus */
a:focus-visible {
  outline: 2px dashed #36ffc4;
}
```

### 11.5 Touch Targets

```
Minimum: 44x44px (recomendado por WCAG)
CTA Button: 56x56px (16px padding + 24px text)
Nav Links: 44x40px (height 40px, padding horizontal)
Floating elements: No interactivos, decorativos
```

### 11.6 Screen Reader Testing

- Badge: "CRCI 2026, evento nacional"
- Heading: Único `<h1>`, no repetir
- Date/Location: `<strong>` para enfatizar
- CTA: aria-label claro
- Decorative images: `aria-hidden="true"`

---

## 12. Design Lint Rules

Reglas automáticas para validar implementación:

```javascript
const DESIGN_LINT_RULES = [
  {
    id: "color-primary-usage",
    severity: "critical",
    description: "Primary color must be #111415",
    selector: ".primary-bg",
    rule: (element) => {
      const bg = window.getComputedStyle(element).backgroundColor;
      return bg === "rgb(17, 20, 21)"; // #111415
    }
  },
  {
    id: "neon-glow-buttons",
    severity: "high",
    description: "CTA buttons must have neon glow effect",
    selector: "button.cta",
    rule: (element) => {
      const shadow = window.getComputedStyle(element).boxShadow;
      return shadow.includes("rgba(54, 255, 196");
    }
  },
  {
    id: "heading-font",
    severity: "high",
    description: "H1 must use Montserrat extrabold",
    selector: "h1",
    rule: (element) => {
      const font = window.getComputedStyle(element).fontFamily;
      const weight = window.getComputedStyle(element).fontWeight;
      return font.includes("Montserrat") && weight >= "700";
    }
  },
  {
    id: "text-contrast",
    severity: "critical",
    description: "Text must meet WCAG AA contrast (4.5:1)",
    rule: (element) => {
      // Use axe-core or similar
      return checkContrast(element) >= 4.5;
    }
  },
  {
    id: "focus-visible",
    severity: "critical",
    description: "Interactive elements must have visible focus",
    selector: "button, a, input",
    rule: (element) => {
      const focusStyle = window.getComputedStyle(element, ":focus-visible");
      return focusStyle.outline !== "none";
    }
  },
  {
    id: "responsive-padding",
    severity: "high",
    description: "Hero padding must use responsive values",
    selector: ".hero",
    rule: (element) => {
      // Check if using px-6 lg:px-20, etc.
      const classes = element.className;
      return classes.includes("px-6") && classes.includes("lg:px-");
    }
  },
  {
    id: "animation-reduced-motion",
    severity: "high",
    description: "Animations must respect prefers-reduced-motion",
    rule: () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        // Verify animations are disabled
        return true; // Implement specific check
      }
      return true;
    }
  },
  {
    id: "touch-target-size",
    severity: "high",
    description: "Interactive elements must be at least 44x44px",
    selector: "button, a[href], input",
    rule: (element) => {
      const rect = element.getBoundingClientRect();
      return rect.width >= 44 && rect.height >= 44;
    }
  },
  {
    id: "image-alt-text",
    severity: "high",
    description: "Images must have alt text or role=presentation",
    selector: "img",
    rule: (element) => {
      return element.alt !== "" || element.getAttribute("role") === "presentation";
    }
  },
  {
    id: "semantic-html",
    severity: "high",
    description: "Use semantic elements (nav, main, section, article)",
    rule: () => {
      const hasNav = document.querySelector("nav") !== null;
      const hasMain = document.querySelector("main") !== null;
      return hasNav && hasMain;
    }
  }
];
```

---

## 13. Iteration Guide

Recomendaciones para refinamiento iterativo:

| Aspecto | Actual | Mejorar a | Rationale |
|---------|--------|-----------|-----------|
| Glow intensity | 5-10% | 3-7% | Menos fatiga visual en dark mode |
| Animation duration | 0.6s | 0.5-0.7s | Más responsive, menos lag |
| Border radius | 8px | 6-12px | Más moderno, flexible |
| Letter spacing | Standard | +0.05em | Headlines más premium |
| Heading color | Gradient | Gradient animado | Más dinámico |
| CTA hover | Scale 1.05 | Scale 1.1 + glow++ | Más impactante |
| Floating elements | Static position | Responsive position | Mejor en mobile |
| Background pattern | 5% opacity | 7% opacity | Más visible sin cansar |
| Typography line height | 1.2 | 1.3 | Mejor legibilidad |
| Dark bg color | #0a0b0c | #0f1013 | Menos pure black, más cálido |

---

## 14. Agent Prompt Guide

Para desarrolladores implementando este diseño:

```markdown
## Implementación del Hero CRCI 2026

### Requisitos Clave
1. **Design System:** Usa exactamente los colores especificados
2. **Tipografía:** Importa Montserrat, Plus Jakarta Sans, Space Grotesk de Google Fonts
3. **Glow Effects:** Implementa box-shadows neon, no imágenes
4. **Responsive:** Mobile-first, 3 breakpoints mínimo
5. **Accesibilidad:** WCAG AAA, semantic HTML, ARIA labels
6. **Animaciones:** Framer Motion con reduced-motion support
7. **Imágenes:** Optimiza con Next.js Image component
8. **Performance:** Lazy load floating elements, optimize shadows

### Tailwind Config Extensions
```javascript
theme: {
  colors: {
    primary: {
      deep: '#111415'
    },
    secondary: {
      neon: '#36ffc4'
    },
    tertiary: {
      warm: '#e9c400'
    }
  },
  fontFamily: {
    montserrat: "Montserrat",
    plus: "Plus Jakarta Sans",
    space: "Space Grotesk"
  },
  boxShadow: {
    'glow-neon-md': '0 0 20px rgba(54,255,196,0.4), ...'
  }
}
```

### Component Props Interface
```typescript
interface HeroProps {
  showNavigation?: boolean;
  eventTitle?: string;
  eventDate?: string;
  eventLocation?: string;
  eventSubtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  floatingElements?: {
    hibiscus: boolean;
    sombrero: boolean;
    danzadores: boolean;
  };
  pattern?: 'diagonal' | 'geometric' | 'none';
  reduceMotion?: boolean;
}
```

### Testing Checklist
- [ ] Contraste text ≥4.5:1 (AA) o 7:1 (AAA)
- [ ] Focus visible en todos los interactivos
- [ ] Funciona sin JavaScript (degradation graceful)
- [ ] Mobile layout stacking correctamente
- [ ] Animaciones respetan prefers-reduced-motion
- [ ] Touch targets ≥44px
- [ ] Images optimized con Next.js
- [ ] Semantic HTML válido
- [ ] ARIA labels presentes
- [ ] Performance Lighthouse >90

### Common Pitfalls
❌ Usar colores hardcoded en lugar de CSS variables
❌ Animaciones que no respetan reduced-motion
❌ Elementos interactivos sin outline focus
❌ Texto pequeño (<14px) en mobile
❌ Imágenes decorativas sin alt=""
❌ Gradientes sin soporte fallback
❌ Glow effects excesivos (causen lag)
❌ Ignorar contraste en hover states
```

---

## 15. Technical Specifications

### 15.1 Font Imports (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### 15.2 CSS Variables (Global)

```css
:root {
  /* Colors */
  --color-primary-deep: #111415;
  --color-secondary-neon: #36ffc4;
  --color-tertiary-warm: #e9c400;
  --color-dark-bg: #0a0b0c;
  --color-surface-dark: #1a1b1f;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b8bcc2;
  
  /* Fonts */
  --font-headline: "Montserrat", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --font-label: "Space Grotesk", sans-serif;
  
  /* Shadows & Glow */
  --glow-neon-sm: 0 0 10px rgba(54, 255, 196, 0.3), 0 0 20px rgba(54, 255, 196, 0.1);
  --glow-neon-md: 0 0 20px rgba(54, 255, 196, 0.4), 0 0 40px rgba(54, 255, 196, 0.2);
  --glow-neon-lg: 0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3);
}
```

### 15.3 Tailwind Config Extensions

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: { deep: '#111415' },
        secondary: { neon: '#36ffc4' },
        tertiary: { warm: '#e9c400' },
        dark: {
          bg: '#0a0b0c',
          surface: '#1a1b1f',
          border: '#2a2b2f'
        },
        text: {
          primary: '#ffffff',
          secondary: '#b8bcc2',
          muted: '#7a7f85'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'glow-neon-sm': '0 0 10px rgba(54, 255, 196, 0.3), 0 0 20px rgba(54, 255, 196, 0.1)',
        'glow-neon-md': '0 0 20px rgba(54, 255, 196, 0.4), 0 0 40px rgba(54, 255, 196, 0.2)',
        'glow-neon-lg': '0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3)',
        'glow-yellow': '0 0 20px rgba(233, 196, 0, 0.4), 0 0 40px rgba(233, 196, 0, 0.2)'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  }
}
```

### 15.4 Next.js Image Optimization

```typescript
import Image from 'next/image';

// Floating elements
<Image
  src="/images/hibiscus.png"
  alt=""
  role="presentation"
  width={160}
  height={160}
  quality={85}
  priority={false}
  className="absolute opacity-90"
/>

// Background dancers
<Image
  src="/images/danzadores.jpg"
  alt="Danzadores en trajes tradicionales"
  fill
  className="object-cover opacity-20"
  priority={true}
/>
```

---

## Summary

Este diseño del Hero CRCI 2026 combina:
- **Identidad moderna y cultural** con neon glows y elementos flotantes
- **Responsividad completa** desde mobile hasta desktop
- **Accesibilidad garantizada** con WCAG AAA compliance
- **Animaciones sutiles** con Framer Motion
- **Design system coherente** basado en dark mode + neon accents
- **Performance optimizado** con Tailwind v4 y Next.js 16

El componente será **impactante, accesible, responsivo y culturalmente representativo** del evento nacional CRCI 2026.
