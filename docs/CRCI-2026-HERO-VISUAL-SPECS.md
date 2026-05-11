# CRCI 2026 Hero - Visual Layout Specifications

Diagrama de posicionamiento, espaciado y elementos visuales.

---

## Desktop Layout (1024px+)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  Logo    AGENDA   UBICACIÓN   COMISIONES   IMPACTO            [AGÉNDATE BOTÓN]  │ Fixed h-20
│─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│                                                                                   │
│  ┌────────────────────────────┐  ┌──────────────────────────────────────────┐   │
│  │                             │  │                     ★ (Hibiscus)        │   │
│  │  CRCI 2026                  │  │                                          │   │
│  │  (Badge con glow)           │  │                                          │   │
│  │                             │  │         [Danzadores background]          │   │
│  │  Encuentro Nacional de      │  │               @ opacity-40%              │   │
│  │  Comisiones Regionales...   │  │                                          │   │
│  │  (H1 White + gradient)      │  │      🎩 (Sombrero floating)             │   │
│  │                             │  │                                          │   │
│  │  25 y 26 de Junio           │  │                                          │   │
│  │  · Sincelejo, Sucre         │  │     [Diagonal geometric pattern]        │   │
│  │  (Subheading secondary)     │  │                                          │   │
│  │                             │  │                                          │   │
│  │  El evento de innovación... │  │                                          │   │
│  │  (Body text, 500px max)     │  │                                          │   │
│  │                             │  │                                          │   │
│  │  [AGÉNDATE BUTTON]          │  │                                          │   │
│  │  (Neon glow, 56x56px)       │  │                                          │   │
│  │                             │  │                                          │   │
│  └────────────────────────────┘  └──────────────────────────────────────────┘   │
│                                                                                   │
│  Gap: 80px (5rem)                                                                │
│                                                                                   │
└────────────────────────────────────────────────────────────────────────────────┘
  px-20 (80px)                                                              px-20
  py-32 (128px)                                                             py-32
```

### Measurements (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│ Header Height: 80px (h-20)                                          │
│ Content Start: 80px (pt-20 on hero)                                 │
│ Max Width Container: 1280px                                          │
│ Horizontal Padding: 80px (px-20)                                    │
│ Grid Columns: 50% | 50%                                             │
│ Gap Between Columns: 80px (gap-20)                                  │
│ Left Column Width: ~480px (50% - 40px gap)                          │
│ Right Column Width: ~480px                                           │
└─────────────────────────────────────────────────────────────────────┘
```

### Element Positioning (Desktop)

```
LEFT COLUMN                     RIGHT COLUMN
├─ Gap: 32px (gap-8)           ├─ Min Height: 600px
│                               ├─ Position: Relative (container)
├─ Badge                        │
│  ├─ Width: fit-content        ├─ Hibiscus (Absolute)
│  ├─ Padding: 8px 16px         │  ├─ Top: 128px (top-32)
│  ├─ Font: 14px                │  ├─ Right: 80px (right-20)
│  └─ Border: 1px #36ffc4       │  ├─ Width: 128px (w-32)
│                               │  └─ Height: 128px (h-32)
├─ H1                           │
│  ├─ Font: 64px                ├─ Sombrero (Absolute)
│  ├─ Weight: 800               │  ├─ Bottom: 33% (bottom-1/3)
│  ├─ Line Height: 1.125        │  ├─ Right: 33% (right-1/3)
│  ├─ Color: Gradient           │  ├─ Width: 160px (w-40)
│  └─ Letter Spacing: +0.02em   │  └─ Height: 160px (h-40)
│                               │
├─ Date/Location                ├─ Danzadores (Absolute fill)
│  ├─ Font: 18px                │  ├─ Inset: 0 (absolute inset-0)
│  ├─ Weight: 600               │  ├─ Width: 100%
│  ├─ Color: #b8bcc2            │  ├─ Height: 100%
│  └─ Text: "25 y 26..."        │  ├─ Opacity: 40% (opacity-40)
│                               │  └─ Mix-blend: screen
├─ Subheading                   │
│  ├─ Font: 18px                └─ Pattern (Absolute overlay)
│  ├─ Weight: 400                  ├─ Inset: 0
│  ├─ Max Width: 500px             ├─ Opacity: 7% (opacity-7)
│  └─ Color: #b8bcc2               └─ Background: Diagonal lines
│
└─ CTA Button
   ├─ Padding: 16px 32px (py-4 px-8)
   ├─ Font: 16px, Weight 700
   ├─ Background: Gradient neon
   ├─ Box-shadow: Neon glow lg
   └─ Border-radius: 6px
```

---

## Tablet Layout (768px - 1023px)

```
┌──────────────────────────────────────────────────────┐
│ Logo  AGENDA   UBICACIÓN   COMISIONES    [AGÉNDATE]  │ h-16
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────────────────┐  ┌──────────────────────┐   │
│  │                      │  │                      │   │
│  │  CRCI 2026           │  │  ★ Hibiscus (smaller)  │
│  │  (Badge)             │  │                      │   │
│  │                      │  │  [Danzadores]       │   │
│  │  Encuentro Nacional  │  │  @ opacity-30%      │   │
│  │  de Comisiones...    │  │                      │   │
│  │  (H2: 52px)          │  │  🎩 Sombrero        │   │
│  │                      │  │  (smaller)          │   │
│  │  25 y 26 de Junio    │  │                      │   │
│  │  · Sincelejo         │  │  [Pattern @ 5%]     │   │
│  │  (16px)              │  │                      │   │
│  │                      │  │                      │   │
│  │  El evento...        │  └──────────────────────┘   │
│  │  (16px)              │                             │
│  │                      │  Gap: 48px (gap-12)         │
│  │  [AGÉNDATE]          │                             │
│  │  (Smaller button)    │                             │
│  │                      │                             │
│  └─────────────────────┘                              │
│                                                       │
│ px-12 (48px)                                          │
│ py-24 (96px)                                          │
└──────────────────────────────────────────────────────┘
```

### Measurements (Tablet)

```
Header Height: 64px (h-16)
Content Padding: 48px (px-12), 96px top/bottom
Column Gap: 48px (gap-12)
Max Width: 100% (full with padding)
Left Column Width: ~45%
Right Column Width: ~45%
Element Sizes: -20% from desktop
```

---

## Mobile Layout (320px - 767px)

```
┌──────────────────────┐
│ ☰  CRCI 2026   ⋯     │ h-16 (sticky)
├──────────────────────┤
│                      │
│  ┌──────────────────┐│
│  │   ★ Hibiscus   ││  20vw width
│  │  (floating)    ││
│  │                ││
│  │  🎩 Sombrero   ││  25vw width
│  │  (floating)    ││
│  │                ││
│  │ [Danzadores]   ││  opacity-20
│  └──────────────────┘│
│                      │
│  CRCI 2026           │
│  (Badge, 12px)       │
│                      │
│  Encuentro Nacional  │
│  de Comisiones...    │
│  (H1: 40px)          │
│                      │
│  25 y 26 de Junio    │
│  Sincelejo, Sucre    │
│  (16px)              │
│                      │
│  El evento de        │
│  innovación que      │
│  reúne a líderes...  │
│  (16px)              │
│                      │
│  ┌──────────────────┐│
│  │   AGÉNDATE       ││  Fullwidth - 12px padding
│  └──────────────────┘│
│                      │
│                      │
│ px-6 (24px)          │
│ py-20 (80px)         │
└──────────────────────┘
  Width: 375px (example, but responsive)
```

### Measurements (Mobile)

```
Header: 64px (h-16), sticky
Content: 100% - 24px padding (px-6)
Stack: Single column (order-1/order-2 swap)
Order: Visuals first (top), then content
Gap between sections: 32px (gap-8)
Element widths: Responsive (clamp/vw)
Hero starts: pt-20 (80px, to clear nav)
```

### Mobile Element Order

```
1. Navigation (fixed top, z-50)
2. Floating Elements Container (order-1)
   - Hibiscus: top-20 right-10, 100px width
   - Sombrero: bottom-1/4 right-1/4, 128px width
3. Content Container (order-2, stack below)
   - Badge
   - H1 Heading
   - Date/Location
   - Subheading
   - CTA Button (fullwidth)
```

---

## Z-Index Stack

```
50  ┌─ Navigation (fixed, sticky)
    │
45  ├─ Mobile menu overlay
    │
30  ├─ Modals, alerts
    │
20  ├─ Floating hibiscus
    ├─ Floating sombrero (lower z)
15  │
    │
10  ├─ CTA button shadow
    ├─ Badge shadow
    │
5   ├─ Subtle borders
    │
0   ├─ Content (hero section)
    ├─ Background pattern
    │
-1  └─ Background image (danzadores)
```

---

## Floating Elements Animation Visualization

```
HIBISCUS - Subtle vertical float
┌─────────────────────┐
│        ★ (y: -20px) │  ← Peak
│                      │
│       ★ (y: 0px)    │  ← Center (initial)
│                      │
│        ★ (y: 20px)  │  ← Trough
└─────────────────────┘
Duration: 4 seconds
Loop: Infinite
Ease: easeInOut

SOMBRERO - Float + subtle rotate
┌─────────────────────┐
│  🎩 y:-30px r:-5°   │  ← Peak left
│      y:0px r:0°     │  ← Center
│  🎩 y:-30px r:5°    │  ← Peak right
└─────────────────────┘
Duration: 5 seconds
Loop: Infinite
Rotation: ±5°

PATTERN OPACITY PULSE
┌─────────────────────┐
│ Pattern @ 5%        │  ← Subtle
│ Pattern @ 7%        │  ← Normal
│ Pattern @ 5%        │  ← Subtle
└─────────────────────┘
Duration: 3 seconds (subtle pulse)
```

---

## Color Contrast & Glow Visualization

```
TEXT OVER BACKGROUND

White (#fff) on #0a0b0c
█████████████████████████████████
█ WHITE TEXT (21:1 contrast) ✓✓✓ █
█████████████████████████████████

#b8bcc2 on #0a0b0c
█████████████████████████████████
█ Secondary Text (7.2:1 contrast) ✓✓ █
█████████████████████████████████

#36ffc4 on #0a0b0c
█████████████████████████████████
█ Neon Accent (4.8:1 contrast) ✓ █
█████████████████████████████████


BUTTON GLOW EFFECT VISUALIZATION

Normal State:
┌─────────────────────┐
│   AGÉNDATE          │ ← Soft glow (#36ffc4)
│   AGÉNDATE          │
└─────────────────────┘

Hover State:
┏━━━━━━━━━━━━━━━━━━━━━┓  ← Intense glow
┃  AGÉNDATE SCALE 1.05 ┃
┗━━━━━━━━━━━━━━━━━━━━━┛

Focus State:
┌─────────────────────┐
│   AGÉNDATE          │ ← 2px outline #36ffc4
│   AGÉNDATE          │
└─────────────────────┘
```

---

## Spacing System

```
Vertical Rhythm

Hero Section:
├─ Top padding: 80px desktop, 80px mobile (pt-20)
├─ Content gap: 32px (gap-8)
├─ Badge to heading: 32px
├─ Heading to date: 32px
├─ Date to subheading: 32px
├─ Subheading to button: 32px
└─ Bottom padding: 128px (py-32)

Horizontal Spacing

Container:
├─ Padding left: 80px (desktop), 48px (tablet), 24px (mobile)
├─ Padding right: 80px (desktop), 48px (tablet), 24px (mobile)
├─ Column gap: 80px (desktop), 48px (tablet), 32px (mobile)
└─ Max content width: 1280px

Button:
├─ Padding horizontal: 32px (px-8)
├─ Padding vertical: 16px (py-4)
├─ Min width: 44px
└─ Min height: 44px
```

---

## Typography Positioning & Sizes

```
DESKTOP HIERARCHY

Montserrat Bold 800 - 64px
Encuentro Nacional de Comisiones Regionales...

Plus Jakarta Sans 600 - 18px
25 y 26 de Junio · Sincelejo, Sucre

Plus Jakarta Sans 400 - 18px
El evento de innovación y competitividad...

Space Grotesk Bold 700 - 16px uppercase
AGÉNDATE


TABLET HIERARCHY

Montserrat Bold 800 - 52px
Encuentro Nacional de Comisiones Regionales...

Plus Jakarta Sans 600 - 16px
25 y 26 de Junio · Sincelejo, Sucre

Plus Jakarta Sans 400 - 16px
El evento de innovación...

Space Grotesk Bold 700 - 14px uppercase
AGÉNDATE


MOBILE HIERARCHY

Montserrat Bold 800 - 40px
Encuentro Nacional de...

Plus Jakarta Sans 600 - 16px
25 y 26 de Junio · Sincelejo, Sucre

Plus Jakarta Sans 400 - 16px
El evento de innovación...

Space Grotesk Bold 700 - 14px uppercase
AGÉNDATE
```

---

## Responsive Component Diagram

```
Component Transformation Flow:

DESKTOP (1024px)                TABLET (768px)               MOBILE (320px)
┌────────────────────────┐     ┌──────────────────┐         ┌──────────┐
│ Logo | Nav | [CTA BTN] │     │ Logo | Nav [CTA] │         │ ☰ Nav   │
├──────────────────────────    ├──────────────────┤         ├──────────┤
│ [ Left Col ] [ Vis ]   │     │ [L] [V]          │         │ [Visuals]│
│ Grid 2-col | order 1/2 │     │ Grid 2-col       │         │[Content] │
│ gap: 80px              │     │ gap: 48px        │         │ Stack    │
│ 50% width ea.          │     │ ~45% width ea.   │         │ 100%     │
└────────────────────────┘     └──────────────────┘         └──────────┘

Key breakpoints:
- 1024px: Full 2-col layout with 80px gap
- 768px: 2-col layout with 48px gap
- 320px: Single-col stack with reordered elements
```

---

## Implementation Checklist - Visual

- [ ] Navigation bar: Fixed top, 80px height, dark bg with blur
- [ ] Hero section: Min-height screen, gradient dark background
- [ ] Left column: Flex column, centered vertically, 50% width desktop
- [ ] Right column: Relative positioned, floating elements absolute
- [ ] Badge: 14px Space Grotesk, neon glow, centered padding
- [ ] H1: 64px Montserrat, gradient text, leading-tight
- [ ] Date: 18px Plus Jakarta, bold, #b8bcc2
- [ ] Subheading: 18px Plus Jakarta, light, max-w-xl
- [ ] CTA button: Space Grotesk, gradient bg, neon glow, 56px min height
- [ ] Hibiscus: Absolute 128px, top-32 right-20, float animation
- [ ] Sombrero: Absolute 160px, bottom-1/3 right-1/3, float+rotate
- [ ] Danzadores: Absolute fill, opacity-40, screen blend
- [ ] Pattern: Diagonal lines, 7% opacity overlay
- [ ] Mobile order: Swap order-1/2 to show visuals first
- [ ] Typography scales: Clamp() functions for fluid scaling
- [ ] Glow effects: Box-shadow with rgba neon colors
- [ ] Animations: Framer Motion with reduced-motion check
- [ ] Accessibility: Focus visible, contrasts, semantic HTML

---

## File Structure Reference

```
components/
├── Hero.tsx
│   ├── Navigation sub-component
│   ├── HeroContent
│   ├── LeftColumn
│   ├── RightColumn
│   ├── FloatingElements
│   └── GeometricPattern
│
└── common/
    ├── HeroImage.tsx (optimized Next.js Image)
    └── FloatingElement.tsx (Framer Motion wrapper)

public/images/
├── hibiscus.svg
├── sombrero.svg
└── danzadores-bg.jpg

styles/
├── globals.css (imports fonts, CSS vars)
├── hero.module.css (optional module)
└── animations.css (or in Tailwind)

tailwind.config.ts
├── colors (primary, secondary, dark, text)
├── fontFamily (montserrat, plus-jakarta, space-grotesk)
├── boxShadow (glow-neon-*, glow-yellow)
├── animation (fade-in-up, float)
└── keyframes (definedin config)
```

---

## Breakpoint Strategy

```javascript
// Mobile First Approach
// Apply base styles for mobile, then override with @media up

// Tailwind breakpoints used:
// sm: 640px  (not used much in this design)
// md: 768px  (tablet, secondary col start appearing)
// lg: 1024px (desktop, full layout visible)
// xl: 1280px (large desktop, max width container)

// Key responsive classes:
text-4xl sm:text-5xl lg:text-6xl
grid-cols-1 lg:grid-cols-2
order-2 lg:order-1
hidden lg:flex
px-6 md:px-12 lg:px-20
```

This document provides complete visual specifications for implementation. Reference alongside CRCI-2026-HERO-DESIGN.md for technical details.
