# CRCI 2026 Hero Component - Quick Reference

Guía rápida para implementadores. Ver `CRCI-2026-HERO-DESIGN.md` para especificaciones completas.

---

## Color Palette (Copy-Paste Ready)

```css
:root {
  --primary-deep: #111415;
  --secondary-neon: #36ffc4;
  --tertiary-warm: #e9c400;
  
  --bg-dark: #0a0b0c;
  --bg-surface: #1a1b1f;
  --border-subtle: #2a2b2f;
  
  --text-primary: #ffffff;
  --text-secondary: #b8bcc2;
  --text-muted: #7a7f85;
  
  --glow-sm: 0 0 10px rgba(54, 255, 196, 0.3), 0 0 20px rgba(54, 255, 196, 0.1);
  --glow-md: 0 0 20px rgba(54, 255, 196, 0.4), 0 0 40px rgba(54, 255, 196, 0.2);
  --glow-lg: 0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3);
}
```

---

## Typography Quick Reference

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Color |
|---------|------|---|---|---|---|
| Badge | Space Grotesk | 14px | 12px | 600 | #36ffc4 |
| H1 Heading | Montserrat | 64px | 40px | 800 | White → gradient |
| Subheading | Plus Jakarta | 24px | 18px | 600 | #b8bcc2 |
| Body | Plus Jakarta | 18px | 16px | 400 | #b8bcc2 |
| CTA | Space Grotesk | 16px | 14px | 700 | #111415 |
| Date/Loc | Plus Jakarta | 18px | 16px | 600 | #b8bcc2 |

---

## Tailwind Classes Template

```jsx
// Hero Container
<div className="min-h-screen bg-gradient-to-b from-[#0a0b0c] to-[#1a1b1f] relative overflow-hidden px-6 py-20 lg:px-20 lg:py-32">

  {/* Nav Bar */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0c]/80 backdrop-blur-md border-b border-[#2a2b2f]/30">
    {/* ... nav content */}
  </nav>

  {/* Main Content Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto relative z-10 pt-20 lg:pt-0">
    
    {/* Left Column */}
    <div className="flex flex-col justify-center gap-8 order-2 lg:order-1">
      
      {/* Badge */}
      <div className="w-fit px-4 py-2 border border-[#36ffc4]/50 rounded-full text-[#36ffc4] font-space-grotesk text-sm font-semibold uppercase tracking-widest bg-[#36ffc4]/5 shadow-[0_0_20px_rgba(54,255,196,0.3)]">
        CRCI 2026
      </div>
      
      {/* H1 */}
      <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-white via-[#36ffc4] to-[#e9c400] bg-clip-text text-transparent">
        Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación
      </h1>
      
      {/* Date & Location */}
      <div className="text-lg font-plus-jakarta-sans font-semibold text-[#b8bcc2]">
        25 y 26 de Junio · Sincelejo, Sucre
      </div>
      
      {/* Subheading */}
      <p className="text-lg lg:text-xl font-plus-jakarta-sans font-light text-[#b8bcc2] max-w-xl leading-relaxed">
        El evento de innovación y competitividad que reúne a líderes empresariales del país
      </p>
      
      {/* CTA Button */}
      <button className="w-fit px-8 py-4 rounded-lg font-space-grotesk font-bold text-base uppercase tracking-wide text-[#111415] bg-gradient-to-r from-[#36ffc4] via-[#00d4ff] to-[#36ffc4] shadow-[0_0_30px_rgba(54,255,196,0.5)] hover:shadow-[0_0_50px_rgba(54,255,196,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-2 outline-offset-2 outline-[#36ffc4]">
        Agéndate
      </button>
    </div>
    
    {/* Right Column - Floating Elements */}
    <div className="flex flex-col justify-center items-center order-1 lg:order-2 relative h-full min-h-[400px] lg:min-h-[600px]">
      
      {/* Hibiscus - Floating */}
      <div className="absolute top-20 right-10 lg:top-32 lg:right-20 w-24 h-24 lg:w-32 lg:h-32 opacity-90 lg:opacity-100 drop-shadow-[0_0_20px_rgba(233,196,0,0.5)] z-20">
        {/* Image or SVG */}
      </div>
      
      {/* Sombrero - Floating */}
      <div className="absolute bottom-1/4 right-1/4 lg:bottom-1/3 lg:right-1/3 w-32 h-32 lg:w-40 lg:h-40 opacity-80 lg:opacity-100 drop-shadow-[0_0_15px_rgba(54,255,196,0.3)] z-15">
        {/* Image or SVG */}
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-20 lg:opacity-40 z-0">
        {/* Image or SVG */}
      </div>
    </div>
  </div>

  {/* Geometric Pattern Background */}
  <div className="absolute inset-0 z-0 opacity-[0.07] overflow-hidden">
    {/* SVG or pattern */}
  </div>
</div>
```

---

## Framer Motion Animations

```jsx
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const floatVariants = {
  animate: {
    y: [-20, 20, -20],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

// Apply to elements:
<motion.h1 variants={itemVariants} />
<motion.div variants={floatVariants} animate="animate" />
```

---

## Responsive Breakpoints

```
Mobile:   320px - 767px   | Stack vertical, smaller text/elements
Tablet:   768px - 1023px  | 2-col grid, reduced gaps
Desktop:  1024px +        | Full 2-col with gaps, large elements
```

### Key Size Changes

```css
/* Heading */
64px (desktop) → 52px (tablet) → 40px (mobile)

/* Gaps */
5rem (desktop) → 3rem (tablet) → 2rem (mobile)

/* Floating elements */
160px (desktop) → 120px (tablet) → 80px (mobile)
```

---

## Glow Effects - Copy-Paste

```css
/* Button glow */
box-shadow: 0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3);

/* Hover glow */
box-shadow: 0 0 50px rgba(54, 255, 196, 0.7), 0 0 100px rgba(54, 255, 196, 0.5);

/* Badge glow */
box-shadow: 0 0 20px rgba(54, 255, 196, 0.3);

/* Yellow glow */
box-shadow: 0 0 20px rgba(233, 196, 0, 0.4), 0 0 40px rgba(233, 196, 0, 0.2);
```

---

## Accessibility Checklist

- [ ] White text on #0a0b0c = 21:1 contrast ✓
- [ ] #b8bcc2 text on dark = 7.2:1 contrast ✓
- [ ] All buttons/links have :focus-visible
- [ ] Outline: 2px solid #36ffc4
- [ ] Touch targets minimum 44x44px
- [ ] Semantic HTML (<nav>, <main>, <h1>, <button>)
- [ ] ARIA labels on links/buttons
- [ ] prefers-reduced-motion respected
- [ ] Alt text on all images
- [ ] No keyboard traps

---

## Font Imports

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## Common Implementation Patterns

### 1. Sticky Navigation with Blur

```jsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0c]/80 backdrop-blur-md border-b border-[#2a2b2f]/30 h-20">
  {/* nav items */}
</nav>

{/* Add padding-top to hero to account for nav */}
<section className="pt-20 lg:pt-0"> {/* Hero content */}
```

### 2. Asymmetric Grid with Order

```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="order-2 lg:order-1">{/* Left content on desktop, bottom on mobile */}</div>
  <div className="order-1 lg:order-2">{/* Visuals first on mobile */}</div>
</div>
```

### 3. Text Gradient

```jsx
<h1 className="bg-gradient-to-r from-white via-[#36ffc4] to-[#e9c400] bg-clip-text text-transparent">
  {/* Text with gradient */}
</h1>
```

### 4. Floating Animation with Framer

```jsx
<motion.div
  animate={{ y: [-20, 20, -20] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-20 right-10"
>
  {/* Content */}
</motion.div>
```

### 5. Neon Glow Button Hover

```jsx
<motion.button
  whileHover={{
    boxShadow: "0 0 50px rgba(54,255,196,0.7), 0 0 100px rgba(54,255,196,0.5)"
  }}
  whileTap={{ scale: 0.95 }}
>
  Agéndate
</motion.button>
```

---

## Files to Create/Update

1. **components/Hero.tsx** - Main hero component
2. **components/Navigation.tsx** - Sticky nav bar
3. **public/images/hibiscus.svg** (or .png) - Yellow flower
4. **public/images/sombrero.svg** (or .png) - Traditional hat
5. **public/images/danzadores-bg.jpg** - Cultural dancers background
6. **tailwind.config.ts** - Extended theme with custom colors/fonts
7. **postcss.config.mjs** - PostCSS config for Tailwind v4
8. **styles/globals.css** - CSS variables + Google Fonts import

---

## Performance Tips

1. **Image optimization:** Use Next.js Image component
2. **Lazy load:** Floating elements use `priority={false}`
3. **CSS-only glow:** No PNG/SVG shadows, pure CSS
4. **Reduce animations:** Respect `prefers-reduced-motion`
5. **Minimal JS:** Animations via Framer, not heavy scripts
6. **Responsive images:** Use srcSet and sizes
7. **Bundle analysis:** Monitor Tailwind CSS output

---

## Testing the Design

```bash
# Check contrast
# Use WebAIM Contrast Checker on final implementation

# Check responsive
# Desktop: 1920px, Tablet: 768px, Mobile: 375px

# Check animations
# Verify all animations work with reduced-motion disabled

# Check a11y
# Run: npx axe-core or use axe DevTools
```

---

## Design Decision Rationale

| Decision | Why |
|----------|-----|
| Dark first | Neon glow es más impactante en dark mode |
| Asymmetric | Rompe monotonía, dirige atención |
| Montserrat Bold | Headlines profesionales, legibles |
| Floating elements | Referencia cultural + dinamismo visual |
| Gradient text | Sofistica sin exceso, distinguible |
| Glow effects | Neon = innovación, tecnología, futuro |
| Mobile-first | 80% tráfico es mobile, mejor UX |
| Grid 2-col | Equilibrio visual, asimetría intencional |

---

## Status

✅ Design complete and approved
⏳ Awaiting implementation in Next.js
📋 See CRCI-2026-HERO-DESIGN.md for full specifications
