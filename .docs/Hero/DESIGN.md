---
name: Cultural Innovation Framework
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#cac4d2'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#938f9c'
  outline-variant: '#484550'
  surface-tint: '#cbbeff'
  primary: '#cbbeff'
  on-primary: '#33226f'
  primary-container: '#2d1b69'
  on-primary-container: '#9686d9'
  inverse-primary: '#6252a1'
  secondary: '#ffffff'
  on-secondary: '#003828'
  secondary-container: '#36ffc4'
  on-secondary-container: '#007255'
  tertiary: '#e9c400'
  on-tertiary: '#3a3000'
  tertiary-container: '#c9a900'
  on-tertiary-container: '#4c3f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e7deff'
  primary-fixed-dim: '#cbbeff'
  on-primary-fixed: '#1e055a'
  on-primary-fixed-variant: '#4a3a87'
  secondary-fixed: '#36ffc4'
  secondary-fixed-dim: '#00e1ab'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#00513c'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style

This design system captures a high-contrast, dynamic aesthetic that bridges the gap between institutional stability and vibrant regional culture. It is designed for the "Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación 2026," evoking a sense of forward-thinking progress rooted in Sucre's heritage.

The visual style is **High-Contrast / Bold** with a strong emphasis on **Cultural Maximalism**. It utilizes a deep, immersive background to make neon accents and organic textures "pop." The personality is energetic, professional, and celebratory, using geometric patterns (diagonal lines and squares) to represent technical innovation, juxtaposed with organic motifs like the hibiscus flower and the "sombrero vueltiao" to ground the technology in human experience.

## Colors

This design system uses a dark-mode first approach to ensure maximum vibration from the accent colors.

*   **Primary (Deep Purple):** The foundational canvas. It represents institutional depth, wisdom, and the night sky over the Savannah.
*   **Secondary (Neon Emerald):** Used for calls to action, highlights, and innovation-related messaging. It provides a high-energy contrast against the purple.
*   **Tertiary (Warm Yellow):** Inspired by the hibiscus and the sun, this color is used for organic accents and secondary highlights to provide warmth and approachability.
*   **Neutrals:** Clean whites and light grays are reserved for body text and secondary labels to maintain legibility against the saturated background.

## Typography

The typography is bold, modern, and highly legible. 

*   **Headlines:** Utilize a heavy-weight geometric sans-serif to convey authority and impact. Tight tracking and leading are used for a "locked-in" editorial feel.
*   **Body Text:** A slightly friendlier, high-x-height sans-serif is used to balance the intensity of the headlines, ensuring long-form content remains accessible.
*   **Technical Labels:** A monospaced or tech-leaning sans-serif is used for dates, locations, and data points to emphasize the innovation theme.

## Layout & Spacing

The design system employs a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

The layout philosophy is "Asymmetrical Balance." Key visual elements, such as photography and geometric patterns, should break the grid slightly to create movement. Large margins are used to give the dense color palette room to breathe. Components should follow an 8px base unit for consistent rhythm. Layouts should utilize large vertical gaps between sections to distinguish between the "Innovation" (geometric) and "Culture" (organic) content areas.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Vibrant Glows** rather than traditional shadows.

1.  **Base Layer:** The Deep Purple background.
2.  **Middle Layer:** Semi-transparent diagonal patterns and "sombrero" textures at 10-20% opacity.
3.  **Action Layer:** Buttons and cards with a slight "Neon Glow" (a drop shadow using the Secondary Emerald color with high blur and low opacity) to simulate light emission.
4.  **Floating Layer:** Organic elements like hibiscus flowers should appear to float above the UI, using soft, tinted ambient shadows to create a 3D effect.

## Shapes

The shape language is a mix of **Hard Geometric** and **Organic Softness**. 

UI containers (cards, inputs) use a **Soft (0.25rem)** corner radius to maintain an institutional and professional feel. However, decorative elements—such as the square pattern fragments—must remain perfectly sharp (0px) to contrast with the fluid, rounded forms of the hibiscus flowers and the curved edges of the sombrero vueltiao. This duality represents the meeting of structured industry and fluid culture.

## Components

*   **Buttons:** Primary buttons should be solid Neon Emerald with Deep Purple text. Secondary buttons are "ghost" style with a 2px Emerald border.
*   **Cards:** Use a slightly lighter shade of purple than the background with a 1px border in Neon Emerald at 30% opacity.
*   **Chips/Tags:** Small, pill-shaped elements in Warm Yellow to highlight categories like "Innovation" or "Tradition."
*   **Inputs:** Dark background, light border, and a Neon Emerald focus state.
*   **Graphic Accents:**
    *   **Diagonal Lines:** Use 45-degree stroke patterns to lead the eye toward CTAs.
    *   **Cultural Icons:** Sombreros and flowers should overlap containers to break the boxy feel of the UI.
    *   **Data Visualization:** Use the Neon Emerald for growth lines and the Warm Yellow for data points.