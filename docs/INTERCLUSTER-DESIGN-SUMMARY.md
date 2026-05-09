# 📋 Resumen Ejecutivo de Diseño - Encuentro Intercluster Sucre 2026

## 🎯 Información Clave del Evento

| Concepto | Detalle |
|----------|---------|
| **Evento** | Encuentro Intercluster Sucre 2026 |
| **Fechas** | 25-26 de junio de 2026 |
| **Lugar** | Departamento de Sucre, Colombia |
| **Propósito** | Conectar empresas, instituciones y líderes de diferentes sectores económicos para impulsar colaboración, innovación y competitividad |
| **Tipo de Página** | Landing page informativa tipo folleto |
| **Estilo** | Corporativo moderno, institucional, colaborativo, regional |

---

## 🏗️ Estructura de la Landing Page

### 1. Hero / Encabezado Principal
- **H1:** "Encuentro Intercluster Sucre 2026"
- **H2:** "Conectando clústeres, impulsando la competitividad regional"
- **Badges:** Fechas (25-26 junio 2026) + Lugar (Sucre, Colombia)
- **CTA Principal:** "Confirma tu asistencia" o "Más información"
- **Fondo:** Gradiente institucional violeta-morado con patrón de red

### 2. Sobre el Encuentro Intercluster
- **Qué es:** Descripción del evento
- **Propósito:** Conectar clústeres para impulsar competitividad
- **Beneficios:** 
  - Networking estratégico
  - Alianzas público-privadas
  - Innovación colaborativa
  - Desarrollo regional
- **Público objetivo:** Empresas, instituciones, líderes sectoriales

### 3. Ejes Temáticos (Grid 6 cards)
1. Innovación
2. Competitividad
3. Colaboración
4. Desarrollo Regional
5. Alianzas Público-Privadas
6. Transformación

### 4. Oferta Turística de Sucre (Valor Agregado)
- **Hoteles:**
  - Coveñas (frente al mar)
  - Sincelejo (centro regional)
- **Experiencias Turísticas:**
  - Rutas bioculturales
  - Naturaleza y aventura
  - Cultura Zenú
- **Gastronomía:**
  - Frente al mar (Coveñas)
  - Gastronomía ancestral Zenú

### 5. Festival de Pito Atravesao (Banner Final)
- **Tipo:** Evento paralelo/cultural
- **Fechas:** 26-28 de junio de 2026
- **Lugar:** Morroa, Sucre
- **Edición:** 37ª versión
- **CTA:** "Reserva tu cupo ahora"

---

## 🎨 Paleta de Colores

### Colores Principales (Institucional Intercluster)

```css
--color-primary-violet: #7C3AED;   /* Violeta institucional - colaboración */
--color-primary-purple: #8B5CF6;  /* Morado corporativo - innovación */
--color-primary-indigo: #6366F1;  /* Añil - competitividad */
```

### Colores Secundarios (Región Caribe)

```css
--color-secondary-caribbean: #06B6D4; /* Turquesa Caribe */
--color-secondary-gold: #F59E0B;      /* Dorado regional */
--color-secondary-teal: #14B8A6;      /* Verde azulado */
--color-secondary-leaf: #10B981;      /* Verde crecimiento */
```

### Colores de Acento

```css
--color-accent-coral: #F97316;   /* Coral - CTA */
--color-accent-sunset: #EC4899;  /* Rosa - destacado */
--color-accent-ocean: #3B82F6;   /* Azul - información */
```

### Gradientes

```css
/* Principal - Institucional */
--gradient-intercluster: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #6366F1 100%);

/* CTA - Acción */
--gradient-cta: linear-gradient(135deg, #F97316 0%, #EC4899 100%);

/* Hero */
--gradient-hero: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
```

---

## 📐 Tipografía

### Fuentes
- **Títulos:** Inter (700, 600)
- **Cuerpo:** Source Sans Pro (400)
- **Alternativas:** Montserrat, Poppins, Open Sans

### Escala Tipográfica

| Elemento | Tamaño Desktop | Tamaño Mobile | Peso |
|----------|---------------|---------------|------|
| H1 Hero | 60px | 36px | 700 |
| H2 Section | 48px | 32px | 700 |
| H3 Card | 30px | 24px | 600 |
| Body | 18px | 16px | 400 |
| Lead | 20px | 18px | 400 |
| Button | 16px | 16px | 600 |

---

## 🧩 Componentes Clave

### Botones
- **Primary:** Gradiente coral, pill shape (9999px), shadow
- **Secondary:** Borde violeta, fondo transparente
- **Sizes:** sm (14px), md (16px), lg (18px)

### Tarjetas (Cards)
- **Info Card:** Blanca, shadow md, hover lift, border violet
- **Hotel Card:** Blanca, border-left teal
- **Axis Card:** Blanca, border-top purple
- **Radius:** 16px
- **Padding:** 24px

### Badges
- **Date Badge:** Gradiente violeta, pill shape
- **Location Badge:** Fondo azul claro, texto azul oscuro
- **Info Badge:** Fondo dorado claro, texto café

### Iconos
- **Librería:** Lucide React
- **Tamaño:** 48px (md), 64px (lg)
- **Fondo:** Gradiente institucional
- **Stroke:** 2px

---

## 📐 Layout y Spacing

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
```

### Spacing (basado en 8px grid)
```css
--spacing-4: 16px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;
```

### Breakpoints
```css
Mobile:  320px - 767px  (1 columna)
Tablet:  768px - 1023px  (2 columnas)
Desktop: 1024px+         (3-4 columnas)
```

---

## 🎯 Especificaciones por Sección

### Hero Section
- **Altura:** 100vh desktop, min 80vh mobile
- **Fondo:** gradient-intercluster + network pattern (opacity 0.1)
- **Elementos:** Logo, H1, H2, Date badge, Location badge, CTA
- **Padding:** 96px desktop, 64px mobile

### Sobre el Encuentro
- **Fondo:** Blanco
- **Layout:** 2 cards lado a lado (qué es, propósito) + beneficios full-width
- **Grid:** 2 columnas desktop, 1 mobile
- **Padding:** 96px

### Ejes Temáticos
- **Fondo:** Gris muy claro (#F9FAFB)
- **Layout:** Grid 3x2 cards
- **Iconos:** 6 iconos temáticos
- **Padding:** 96px

### Oferta Turística
- **Fondo:** Blanco
- **Subsecciones:** Hoteles, Experiencias, Gastronomía
- **Grid:** 3 columnas hoteles, 3 experiencias, 2 gastronomía
- **Padding:** 96px

### Festival Banner
- **Fondo:** gradient-sunset (naranja-rosa)
- **Pattern:** Cultural overlay
- **Elementos:** Título, fechas, lugar, CTA
- **Altura:** 600px desktop
- **Padding:** 96px

### Footer
- **Fondo:** Oscuro (#111827)
- **Texto:** Claro (#F3F4F6)
- **Elementos:** Texto contacto, links rápidos, redes sociales
- **Padding:** 64px top, 32px bottom

---

## 🛠️ Stack Tecnológico

```json
{
  "framework": "Next.js 14+ (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS 3.4+",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "fonts": "next/font (Inter, Source Sans Pro)",
  "deployment": "Vercel",
  "imageOptimization": "next/image"
}
```

---

## ✅ Checklist de Implementación

### Visual
- [ ] Paleta institucional (violeta, morado, añil)
- [ ] Espacios en blanco generosos
- [ ] Fotografías corporativas de calidad
- [ ] Iconografía consistente (Lucide, 2px stroke)
- [ ] Gradientes moderados
- [ ] Bordes: 16px cards, 9999px buttons

### Accesibilidad
- [ ] Contraste 4.5:1 mínimo (texto normal)
- [ ] Contraste 3:1 mínimo (texto grande)
- [ ] Focus states visibles
- [ ] ARIA labels en botones/iconos
- [ ] Alt text en imágenes
- [ ] reduced-motion support
- [ ] Touch targets 44x44px mínimo

### Responsive
- [ ] Mobile-first
- [ ] Breakpoints: 768px, 1024px, 1280px
- [ ] Images responsive (srcset)
- [ ] Typography escala apropiada
- [ ] Navigation hamburger mobile
- [ ] Sin scroll horizontal

### Performance
- [ ] Images: WebP/AVIF
- [ ] Lazy loading images
- [ ] Font subsetting
- [ ] CSS/JS minificado
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

## 🎨 Ejemplo de Código Tailwind

### Hero Section
```tsx
<section className="relative min-h-screen bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#6366F1]">
  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/patterns/network.svg)' }} />
  
  <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
    {/* Logo */}
    <div className="mb-8">
      <img src="/logo-cluster.svg" alt="Logo Cluster" className="h-20 w-auto" />
    </div>
    
    {/* H1 */}
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
      ENCUENTRO INTERCLUSTER<br />SUCRE 2026
    </h1>
    
    {/* H2 */}
    <h2 className="text-2xl md:text-3xl font-normal text-white/90 max-w-2xl mb-8">
      Conectando clústeres, impulsando la competitividad regional
    </h2>
    
    {/* Badges */}
    <div className="flex gap-4 mb-8">
      <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">
        📅 25-26 JUN 2026
      </span>
      <span className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">
        📍 Sucre, Colombia
      </span>
    </div>
    
    {/* CTA */}
    <button className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      CONFIRMA TU ASISTENCIA →
    </button>
  </div>
</section>
```

### Card Component
```tsx
<Card className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#8B5CF6]">
  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white mb-4">
    <Icon className="w-6 h-6" />
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">Título</h3>
  <p className="text-gray-600">Descripción del contenido...</p>
</Card>
```

---

## 📞 Contacto y Recursos

### Archivos Relacionados
- `docs/DESIGN.md` - Guía de diseño completa
- `docs/LANDING-PAGE-DESIGN.md` - Diseño anterior (Festival Pito Atravesao)
- `.docs/Informacion.md` - Información base y contenido

### Recursos Visuales
- **Logo:** Ver assets en `.docs/Logo Cluster Náutico .JPG.jpeg`
- **Isotipo:** Ver `.docs/Isotipo.jpg.jpeg`
- **Patrones:** network.svg, cluster-logo-pattern.svg

### Próximos Pasos
1. Revisar esta guía de diseño
2. Implementar usando Next.js + Tailwind
3. Subir a GitHub
4. Desplegar en Vercel
5. Validar con organizadores del evento
6. Monitorear analytics

---

**Documento creado:** 2026-05-09  
**Versión:** 1.0 (Resumen Ejecutivo)  
**Autor:** Gem-Designer UI/UX  
**Propósito:** Guía rápida de implementación one-shot
