# CRCI 2026 Hero Component - Complete Design Package

## 📋 Índice de Documentos

Este paquete contiene especificaciones completas de diseño para el componente Hero del evento **CRCI 2026**. Cada documento cubre un aspecto específico del diseño.

---

## 📚 Documentos Incluidos

### 1. **[CRCI-2026-HERO-DESIGN.md](./CRCI-2026-HERO-DESIGN.md)** ⭐ PRINCIPAL
**Especificaciones técnicas completas (15 secciones)**

Contenido:
- Visual Theme & Concepto de diseño
- Color Palette completa con CSS variables
- Typography (font stack, type scale, weights)
- Component Structure (layout architecture, component tree, content specs)
- Tailwind Classes (segmentadas por elemento)
- Layout Principles (desktop, tablet, mobile)
- Depth & Elevation (z-index, shadows, glow)
- Design Lint Rules (validación automática)
- Iteration Guide (mejoras iterativas)
- Agent Prompt Guide (para implementadores)
- Technical Specifications (fonts, config, optimization)

**Quién debe leerlo:** Designers, UX leads, developers (referencia principal)

---

### 2. **[CRCI-2026-HERO-QUICK-REFERENCE.md](./CRCI-2026-HERO-QUICK-REFERENCE.md)** ⚡ PARA DESARROLLADORES
**Guía rápida con copy-paste ready**

Contenido:
- Color Palette (copy-paste CSS)
- Typography Quick Reference (tabla)
- Tailwind Classes Template (código JSX listo)
- Framer Motion Animations (snippets)
- Responsive Breakpoints (guía)
- Glow Effects (copy-paste)
- Accessibility Checklist
- Font Imports (Google Fonts)
- Common Implementation Patterns
- Files to Create/Update (lista)
- Performance Tips
- Testing Guide
- Design Decision Rationale

**Quién debe leerlo:** Developers, implementadores (referencia rápida durante coding)

---

### 3. **[CRCI-2026-HERO-VISUAL-SPECS.md](./CRCI-2026-HERO-VISUAL-SPECS.md)** 🎨 VISUALIZACIÓN
**Diagramas ASCII y especificaciones de posicionamiento**

Contenido:
- Desktop Layout (1024px+) con diagrama ASCII
- Measurements Desktop (dimensiones exactas)
- Element Positioning (left/right columns detalles)
- Tablet Layout (768px - 1023px)
- Mobile Layout (320px - 767px)
- Z-Index Stack visualization
- Floating Elements Animation visualization
- Color Contrast & Glow Visualization
- Spacing System (vertical/horizontal rhythm)
- Typography Positioning & Sizes
- Responsive Component Diagram
- Implementation Checklist - Visual
- File Structure Reference
- Breakpoint Strategy

**Quién debe leerlo:** Designers, visual QA, developers que necesitan entender layouts

---

### 4. **[CRCI-2026-HERO-CODE-EXAMPLES.md](./CRCI-2026-HERO-CODE-EXAMPLES.md)** 💻 IMPLEMENTACIÓN
**Fragmentos de código listos para usar**

Contenido:
- Component Structure (React + TypeScript)
- Navigation Component (completo)
- Floating Elements Component (animaciones)
- Geometric Pattern Component (SVG)
- Tailwind Configuration (extensiones)
- Global Styles (CSS + imports)
- Layout Root Component (layout.tsx)
- Main Page Component (page.tsx)
- PostCSS Configuration
- TypeScript Configuration
- ESLint Configuration
- Next.js Configuration
- Testing & QA (Jest examples)
- Git Setup (.gitignore, scripts)
- Deployment (Vercel config)

**Quién debe leerlo:** Developers, implementadores (copiar-pegar durante desarrollo)

---

## 🎯 Resumen Ejecutivo

### Visión del Componente
Hero impactante, moderno y accesible para el evento nacional **CRCI 2026** que combine:
- **Design System neon**: Dark mode first con acentos vibrantes (#36ffc4 verde neon, #e9c400 amarillo cálido)
- **Identidad cultural**: Elementos flotantes (hibiscus, sombrero vueltiao), danzadores tradicionales
- **Asimetría intencional**: Layout dinámico que rompe monotonía
- **Responsive completo**: Mobile-first, 3+ breakpoints
- **Accesibilidad garantizada**: WCAG AAA compliance

### Especificaciones Clave

| Aspecto | Detalle |
|---------|---------|
| **Framework** | Next.js 16.2 + React 19 + Tailwind CSS v4 |
| **Animaciones** | Framer Motion 12.38 |
| **Tipografía** | Montserrat (headlines), Plus Jakarta Sans (body), Space Grotesk (labels) |
| **Colores Primarios** | #111415 (deep), #36ffc4 (neon), #e9c400 (warm) |
| **Breakpoints** | Mobile (320px), Tablet (768px), Desktop (1024px) |
| **Accesibilidad** | WCAG AAA, semantic HTML, ARIA labels, reduced-motion support |
| **Elementos** | Badge, H1 gradient, date/location, subheading, CTA, hibiscus flotante, sombrero flotante, danzadores BG, patrón geométrico |

### Flujo de Trabajo Recomendado

```
1. Lee CRCI-2026-HERO-DESIGN.md (comprensión completa)
2. Usa CRCI-2026-HERO-CODE-EXAMPLES.md (setup inicial)
3. Consulta CRCI-2026-HERO-QUICK-REFERENCE.md (desarrollo)
4. Referencia CRCI-2026-HERO-VISUAL-SPECS.md (validación visual)
```

---

## 🚀 Inicio Rápido

### 1. Setup Inicial
```bash
# Crear proyecto Next.js (si no existe)
npx create-next-app@latest crci-2026 --typescript --tailwind

# Instalar Framer Motion
npm install framer-motion@^12.38.0 lucide-react@^1.14.0

# Instalar fuentes (Google Fonts)
# Agregar a globals.css:
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');
```

### 2. Copiar Componentes
1. Copiar `components/Hero.tsx` de CODE-EXAMPLES.md
2. Copiar `components/Navigation.tsx`
3. Copiar `components/FloatingElements.tsx`
4. Copiar `components/GeometricPattern.tsx`

### 3. Configurar Tailwind
1. Actualizar `tailwind.config.ts` con extensiones de CODE-EXAMPLES.md
2. Actualizar `globals.css` con CSS variables

### 4. Agregar Imágenes
- `/public/images/hibiscus.svg` (o .png)
- `/public/images/sombrero.svg` (o .png)
- `/public/images/danzadores-bg.jpg`

### 5. Implementar en página
```typescript
// app/page.tsx
import Hero from '@/components/Hero';

export default function Home() {
  return <Hero />;
}
```

---

## 🎨 Color Palette (Quick Reference)

```css
/* Primarios */
--primary-deep: #111415;         /* Deep Purple corporativo */
--secondary-neon: #36ffc4;       /* Neon Emerald vibrante */
--tertiary-warm: #e9c400;        /* Warm Yellow cultural */

/* Fondo */
--bg-dark: #0a0b0c;              /* Fondo base oscuro */
--bg-surface: #1a1b1f;           /* Superficies */
--border-subtle: #2a2b2f;        /* Bordes sutiles */

/* Texto */
--text-primary: #ffffff;         /* Texto principal */
--text-secondary: #b8bcc2;       /* Texto secundario */
--text-muted: #7a7f85;           /* Texto débil */

/* Glow Effects */
--glow-sm: 0 0 10px rgba(54, 255, 196, 0.3);
--glow-md: 0 0 20px rgba(54, 255, 196, 0.4), 0 0 40px rgba(54, 255, 196, 0.2);
--glow-lg: 0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3);
```

---

## 📏 Responsive Grid

```
┌─────────────────────────────────────────────┐
│ DESKTOP (1024px+)    │  Grid 2-col, gap 80px │
├─────────────────────────────────────────────┤
│ TABLET (768-1023px)  │  Grid 2-col, gap 48px │
├─────────────────────────────────────────────┤
│ MOBILE (320-767px)   │  Stack 1-col vertical │
└─────────────────────────────────────────────┘
```

---

## ✨ Key Features

### Visual Design
- ✅ Dark mode first (superior en neon glow)
- ✅ Asymmetric layout (dinámico, profundo)
- ✅ Neon glow effects en CTAs
- ✅ Elementos culturales flotantes
- ✅ Patrón geométrico diagonal subtle
- ✅ Text gradients impactantes

### Functionality
- ✅ Fully responsive (mobile-first)
- ✅ Navigation sticky con blur
- ✅ Smooth animations (Framer Motion)
- ✅ Hover states neon-enhanced
- ✅ CTA con tracking de clics

### Accessibility
- ✅ WCAG AAA color contrast (7:1+)
- ✅ Semantic HTML (<nav>, <main>, <h1>, <button>)
- ✅ ARIA labels en links/buttons
- ✅ Focus visible indicators
- ✅ Keyboard navigation completa
- ✅ Touch targets ≥44x44px
- ✅ prefers-reduced-motion support
- ✅ Screen reader friendly

### Performance
- ✅ Next.js Image optimization
- ✅ Lazy loading de elementos
- ✅ CSS-only glow effects
- ✅ Minimal JavaScript
- ✅ Tailwind CSS purged
- ✅ ~45-50KB JS bundle (sin deps)

---

## 🧪 Checklist de Implementación

- [ ] Setup Next.js + dependencies
- [ ] Configurar Tailwind config
- [ ] Importar Google Fonts
- [ ] Crear carpeta components/
- [ ] Implementar Hero.tsx
- [ ] Implementar Navigation.tsx
- [ ] Implementar FloatingElements.tsx
- [ ] Implementar GeometricPattern.tsx
- [ ] Agregar imágenes a /public
- [ ] Configurar globals.css
- [ ] Probar responsividad (3 breakpoints)
- [ ] Validar contraste (axe-core)
- [ ] Probar animaciones (reduced-motion)
- [ ] Probar navegación (keyboard)
- [ ] Ejecutar Lighthouse
- [ ] Deploy a Vercel

---

## 🎯 Validación de Diseño

### Visual Validation
- [ ] Colores exactos según palette
- [ ] Tipografía correcta (pesos, sizes)
- [ ] Glow effects visibles en dark bg
- [ ] Elementos flotantes animados
- [ ] Patrón geométrico visible (5-7%)
- [ ] Espaciado simétrico/asimétrico correcto
- [ ] Responsive en todos breakpoints

### Accessibility Validation
- [ ] Contrast ratio ≥7:1 (AAA)
- [ ] Focus indicators visibles
- [ ] ARIA labels presentes
- [ ] Keyboard navigation funcional
- [ ] Screen reader test (NVDA/JAWS)
- [ ] Touch targets ≥44px
- [ ] Reduced motion respetado

### Performance Validation
- [ ] Lighthouse ≥90 (todas categorías)
- [ ] Page speed <2.5s (mobile)
- [ ] Bundle size <100KB
- [ ] No console errors/warnings
- [ ] CLS <0.1
- [ ] LCP <2.5s

---

## 📞 Contacto & Soporte

Para preguntas sobre el diseño:
1. Consulta los documentos en orden (DESIGN → CODE → VISUAL → QUICK-REF)
2. Verifica DESIGN.md sección 13 (Iteration Guide) para refactorización
3. Usa CODE-EXAMPLES.md para patterns específicos
4. Valida contra QUICK-REFERENCE.md checklist

---

## 📝 Notas de Implementación

### Best Practices
1. **Usar CSS variables** para todos los colores
2. **Tailwind utilities** antes de custom CSS
3. **Framer Motion** para animaciones complejas
4. **Next.js Image** para todas las imágenes
5. **Semantic HTML** en toda la estructura
6. **Testing** en cada iteración

### Common Pitfalls Evitar
- ❌ Hardcoded colors (usar CSS vars)
- ❌ Animations sin reduced-motion (usar mediaQuery)
- ❌ Elementos interactivos sin focus states
- ❌ Texto pequeño en mobile (<14px)
- ❌ Images sin alt text
- ❌ Glow effects excesivos (causan lag)
- ❌ Ignorar contraste en hover states

---

## 🏆 Success Criteria

Al finalizar la implementación, el componente Hero debe:

1. ✅ **Visualmente impactante**: Neon glow visible, colores vibrantes, elementos culturales
2. ✅ **Completamente responsivo**: Se adapta perfectamente a 320px, 768px, 1024px
3. ✅ **100% accesible**: Pasa axe-core, WCAG AAA, keyboard navigation
4. ✅ **Bien optimizado**: Lighthouse >90, <2.5s mobile, <50KB JS
5. ✅ **Animaciones suave**: Framer Motion sin lag, respeta reduced-motion
6. ✅ **Mantenible**: Código limpio, CSS variables, componentes reutilizables

---

## 📅 Roadmap (Post-Implementación)

### Fase 2: Secciones Adicionales
- Section "Comisiones" (grid de cards)
- Section "Ubicación" (mapa integrado)
- Section "Agenda" (timeline o tabs)
- Section "Impacto" (statistics/metrics)
- Contact form / CTA secundaria

### Fase 3: Enhancements
- Dark/light mode toggle
- i18n support (ES/EN)
- Analytics tracking
- Email capture
- Social sharing buttons
- Video background option

### Fase 4: Optimización
- A/B testing de CTAs
- Performance profiling
- PWA capabilities
- SEO optimization
- Cache strategies

---

## 📄 Documentación Externa

### Google Fonts
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

### Librerías
- [Next.js 16](https://nextjs.org/docs)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

### Herramientas
- [WCAG Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://chromedev tools.webinars.google.com)
- [WebPageTest](https://www.webpagetest.org)

---

## 🎓 Conclusión

Este paquete de diseño proporciona **todo lo necesario** para implementar un componente Hero profesional, accesible y de alto impacto para el evento CRCI 2026.

### Siguientes pasos:
1. 📖 Lee CRCI-2026-HERO-DESIGN.md completamente
2. 💻 Usa fragmentos de CRCI-2026-HERO-CODE-EXAMPLES.md
3. ⚡ Consulta CRCI-2026-HERO-QUICK-REFERENCE.md durante desarrollo
4. 🎨 Valida con CRCI-2026-HERO-VISUAL-SPECS.md

**Status:** ✅ Diseño completo y aprobado | ⏳ Aguardando implementación

---

**Versión:** 1.0  
**Fecha:** Mayo 11, 2026  
**Evento:** CRCI 2026  
**Ubicación:** Sincelejo, Sucre, Colombia
