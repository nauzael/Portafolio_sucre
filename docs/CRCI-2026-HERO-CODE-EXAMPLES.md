# CRCI 2026 Hero - Code Implementation Examples

Fragmentos de código listos para usar en la implementación.

---

## 1. Component Structure (React + TypeScript)

```typescript
// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { FloatingElements } from '@/components/FloatingElements';
import { GeometricPattern } from '@/components/GeometricPattern';

interface HeroProps {
  eventTitle?: string;
  eventDate?: string;
  eventLocation?: string;
  eventSubtitle?: string;
  ctaHref?: string;
  backgroundImage?: string;
  reduceMotion?: boolean;
}

export default function Hero({
  eventTitle = 'Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación',
  eventDate = '25 y 26 de Junio',
  eventLocation = 'Sincelejo, Sucre',
  eventSubtitle = 'El evento de innovación y competitividad que reúne a líderes empresariales del país',
  ctaHref = '#agendate',
  backgroundImage = '/images/danzadores-bg.jpg',
  reduceMotion = false
}: HeroProps) {
  return (
    <>
      <Navigation ctaHref={ctaHref} />
      
      <motion.section
        className="min-h-screen bg-gradient-to-b from-[#0a0b0c] to-[#1a1b1f] relative overflow-hidden px-6 py-20 lg:px-20 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Pattern */}
        <GeometricPattern />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto relative z-10 pt-20 lg:pt-0">
          
          {/* Left Column */}
          <motion.div
            className="flex flex-col justify-center gap-8 order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="w-fit px-4 py-2 border border-[#36ffc4]/50 rounded-full text-[#36ffc4] font-space-grotesk text-sm font-semibold uppercase tracking-widest bg-[#36ffc4]/5 shadow-[0_0_20px_rgba(54,255,196,0.3)] hover:shadow-[0_0_30px_rgba(54,255,196,0.5)] transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              CRCI 2026
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-white via-[#36ffc4] to-[#e9c400] bg-clip-text text-transparent"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8 }}
            >
              {eventTitle}
            </motion.h1>

            {/* Date & Location */}
            <motion.div
              className="text-lg font-plus-jakarta-sans font-semibold text-[#b8bcc2]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <strong>{eventDate}</strong> · {eventLocation}
            </motion.div>

            {/* Subheading */}
            <motion.p
              className="text-lg lg:text-xl font-plus-jakarta-sans font-light text-[#b8bcc2] max-w-xl leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              {eventSubtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                onClick={() => window.location.href = ctaHref}
                className="px-8 py-4 rounded-lg font-space-grotesk font-bold text-base uppercase tracking-wide text-[#111415] bg-gradient-to-r from-[#36ffc4] via-[#00d4ff] to-[#36ffc4] shadow-[0_0_30px_rgba(54,255,196,0.5)] focus-visible:outline-2 outline-offset-2 outline-[#36ffc4] transition-all duration-300 min-w-[200px] min-h-[56px]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 50px rgba(54,255,196,0.7), 0 0 100px rgba(54,255,196,0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Registrate en el evento CRCI 2026"
              >
                Agéndate
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Elements */}
          <div className="flex flex-col justify-center items-center order-1 lg:order-2 relative h-full min-h-[400px] lg:min-h-[600px]">
            <FloatingElements backgroundImage={backgroundImage} reduceMotion={reduceMotion} />
          </div>
        </div>
      </motion.section>
    </>
  );
}
```

---

## 2. Navigation Component

```typescript
// components/Navigation.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavigationProps {
  ctaHref?: string;
}

export default function Navigation({ ctaHref = '#agendate' }: NavigationProps) {
  const navItems = ['Agenda', 'Ubicación', 'Comisiones', 'Impacto'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0c]/80 backdrop-blur-md border-b border-[#2a2b2f]/30 h-20"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-20 lg:py-5 h-full max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <motion.div
          className="text-white font-montserrat font-bold text-xl"
          whileHover={{ scale: 1.05 }}
        >
          CRCI 2026
        </motion.div>

        {/* Nav Links - Desktop */}
        <div className="hidden lg:flex gap-8 items-center flex-1 justify-center">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#b8bcc2] hover:text-[#36ffc4] transition-colors duration-300 font-space-grotesk text-sm font-semibold uppercase tracking-wide"
              whileHover={{ scale: 1.1, color: '#36ffc4' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="text-[#b8bcc2] hover:text-[#36ffc4] text-2xl">
            ☰
          </button>
        </div>

        {/* CTA Button */}
        <motion.a
          href={ctaHref}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#36ffc4] to-[#00d4ff] text-[#111415] font-space-grotesk font-bold text-sm uppercase shadow-[0_0_30px_rgba(54,255,196,0.5)] hover:shadow-[0_0_50px_rgba(54,255,196,0.7)] transition-all duration-300 whitespace-nowrap hidden sm:inline-block focus-visible:outline-2 outline-offset-2 outline-[#36ffc4]"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 50px rgba(54,255,196,0.7)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Agéndate
        </motion.a>
      </div>
    </motion.nav>
  );
}
```

---

## 3. Floating Elements Component

```typescript
// components/FloatingElements.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FloatingElementsProps {
  backgroundImage?: string;
  reduceMotion?: boolean;
}

export function FloatingElements({ 
  backgroundImage = '/images/danzadores-bg.jpg',
  reduceMotion = false 
}: FloatingElementsProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const shouldReduceMotion = prefersReducedMotion || reduceMotion;

  const floatVariant = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const floatRotateVariant = {
    animate: {
      y: [0, -30, 0],
      rotate: [-5, 5, -5],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const disabledVariant = {
    animate: {}
  };

  return (
    <>
      {/* Hibiscus - Yellow Floating */}
      <motion.div
        className="absolute top-20 right-10 lg:top-32 lg:right-20 w-24 h-24 lg:w-32 lg:h-32 opacity-90 lg:opacity-100 drop-shadow-[0_0_20px_rgba(233,196,0,0.5)] z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        variants={shouldReduceMotion ? disabledVariant : floatVariant}
      >
        <Image
          src="/images/hibiscus.svg"
          alt=""
          role="presentation"
          aria-hidden="true"
          width={128}
          height={128}
          quality={85}
          priority={false}
          className="w-full h-full"
        />
      </motion.div>

      {/* Sombrero - Floating with Rotation */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 lg:bottom-1/3 lg:right-1/3 w-32 h-32 lg:w-40 lg:h-40 opacity-80 lg:opacity-100 drop-shadow-[0_0_15px_rgba(54,255,196,0.3)] z-15"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        variants={shouldReduceMotion ? disabledVariant : floatRotateVariant}
      >
        <Image
          src="/images/sombrero.svg"
          alt=""
          role="presentation"
          aria-hidden="true"
          width={160}
          height={160}
          quality={85}
          priority={false}
          className="w-full h-full"
        />
      </motion.div>

      {/* Danzadores Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full opacity-20 lg:opacity-40 z-0 overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <Image
          src={backgroundImage}
          alt="Danzadores en trajes tradicionales"
          fill
          className="object-cover mix-blend-screen"
          quality={75}
          priority={true}
        />
      </motion.div>
    </>
  );
}
```

---

## 4. Geometric Pattern Component

```typescript
// components/GeometricPattern.tsx
'use client';

export function GeometricPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.07] overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="diagonal-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#36ffc4"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        
        {/* Diagonal lines */}
        <rect
          width="100%"
          height="100%"
          fill="url(#diagonal-pattern)"
        />
        
        {/* Optional: Additional geometric shapes */}
        <circle
          cx="10%"
          cy="20%"
          r="150"
          fill="none"
          stroke="#36ffc4"
          strokeWidth="1"
          opacity="0.3"
        />
        <circle
          cx="90%"
          cy="80%"
          r="200"
          fill="none"
          stroke="#e9c400"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
```

---

## 5. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#111415'
        },
        secondary: {
          neon: '#36ffc4'
        },
        tertiary: {
          warm: '#e9c400'
        },
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
      fontSize: {
        'h1-lg': ['64px', { lineHeight: '72px', letterSpacing: '0.02em' }],
        'h1-md': ['52px', { lineHeight: '60px', letterSpacing: '0.01em' }],
        'h1-sm': ['40px', { lineHeight: '48px' }],
        'subheading': ['24px', { lineHeight: '32px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'label': ['14px', { lineHeight: '20px', letterSpacing: '0.05em' }]
      },
      boxShadow: {
        'glow-neon-sm': '0 0 10px rgba(54, 255, 196, 0.3), 0 0 20px rgba(54, 255, 196, 0.1)',
        'glow-neon-md': '0 0 20px rgba(54, 255, 196, 0.4), 0 0 40px rgba(54, 255, 196, 0.2)',
        'glow-neon-lg': '0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3)',
        'glow-yellow': '0 0 20px rgba(233, 196, 0, 0.4), 0 0 40px rgba(233, 196, 0, 0.2)',
        'glow-neon-intense': '0 0 50px rgba(54, 255, 196, 0.7), 0 0 100px rgba(54, 255, 196, 0.5)'
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
  },
  plugins: []
};

export default config;
```

---

## 6. Global Styles

```css
/* app/globals.css */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colors */
  --color-primary-deep: #111415;
  --color-secondary-neon: #36ffc4;
  --color-tertiary-warm: #e9c400;
  --color-dark-bg: #0a0b0c;
  --color-surface-dark: #1a1b1f;
  --color-border-subtle: #2a2b2f;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b8bcc2;
  --color-text-muted: #7a7f85;

  /* Shadows & Glow */
  --glow-neon-sm: 0 0 10px rgba(54, 255, 196, 0.3), 0 0 20px rgba(54, 255, 196, 0.1);
  --glow-neon-md: 0 0 20px rgba(54, 255, 196, 0.4), 0 0 40px rgba(54, 255, 196, 0.2);
  --glow-neon-lg: 0 0 30px rgba(54, 255, 196, 0.5), 0 0 60px rgba(54, 255, 196, 0.3);
}

* {
  @apply border-border-subtle;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-dark-bg text-text-primary;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Remove focus ring for mouse users, show for keyboard */
@media (prefers-reduced-motion: no-preference) {
  button:focus-visible,
  a:focus-visible,
  input:focus-visible {
    @apply outline-2 outline-offset-2 outline-secondary-neon;
  }
}

/* Reduced motion support */
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

/* Typography */
h1 {
  @apply font-montserrat font-extrabold;
}

h2,
h3,
h4 {
  @apply font-montserrat font-bold;
}

p {
  @apply font-plus-jakarta;
}

button,
a.btn,
[role='button'] {
  @apply font-space-grotesk;
}

/* Smooth transitions */
@media (prefers-reduced-motion: no-preference) {
  button,
  a,
  input,
  textarea,
  select {
    @apply transition-all duration-300;
  }
}
```

---

## 7. Layout Root Component

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRCI 2026 - Encuentro Nacional',
  description: 'Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación. 25-26 de Junio en Sincelejo, Sucre.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    title: 'CRCI 2026',
    description: 'Evento nacional de competitividad e innovación',
    type: 'website',
    locale: 'es_CO'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0b0c" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```

---

## 8. Main Page Component

```typescript
// app/page.tsx
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero
        eventTitle="Encuentro Nacional de Comisiones Regionales de Competitividad e Innovación"
        eventDate="25 y 26 de Junio"
        eventLocation="Sincelejo, Sucre"
        eventSubtitle="El evento de innovación y competitividad que reúne a líderes empresariales del país"
        ctaHref="#agendate"
        backgroundImage="/images/danzadores-bg.jpg"
      />
      
      {/* More sections here */}
    </main>
  );
}
```

---

## 9. PostCSS Configuration

```javascript
// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
};

export default config;
```

---

## 10. TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "allowJs": true,
    "esModuleInterop": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", ".next"]
}
```

---

## 11. ESLint Configuration

```javascript
// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals')
];

export default eslintConfig;
```

---

## 12. Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60
  },
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  }
};

export default nextConfig;
```

---

## Testing & QA

```typescript
// __tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero Component', () => {
  it('renders main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('has accessible CTA button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /agéndate/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label');
  });

  it('renders navigation', () => {
    render(<Hero />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('respects prefers-reduced-motion', () => {
    const { container } = render(<Hero reduceMotion={true} />);
    // Verify animations are disabled
    const elements = container.querySelectorAll('[class*="animate-"]');
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      expect(style.animationDuration).toBe('0.01ms');
    });
  });
});
```

---

## Git Setup

```bash
# .gitignore additions
.env.local
.env.*.local
.next/
out/
node_modules/
*.log
.DS_Store

# package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:a11y": "axe-core"
  }
}
```

---

## Deployment (Vercel)

```json
// vercel.json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_SITE_URL": {
      "required": true
    }
  }
}
```

---

Todos estos fragmentos pueden ser combinados directamente en tu proyecto. Referencia los documentos principales para especificaciones completas de diseño.
