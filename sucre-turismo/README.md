# 🏖️ Sucre Turismo - Landing Page Portafolio

Landing page tipo infografía que muestra la oferta turística del departamento de Sucre, Colombia.

## 📋 Descripción

Este proyecto es un portafolio turístico digital diseñado para promocionar:
- 🏨 Hoteles en Coveñas y Sincelejo
- 🎯 Operadores turísticos especializados
- 🍽️ Gastronomía local (marina y ancestral Zenú)
- 🎉 Eventos culturales (Festival de Pito Atravesao)

## 🚀 Tecnologías Utilizadas

- **Framework:** Next.js 16+ (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Montserrat + Open Sans
- **Deployment:** Vercel

## 📁 Estruct del Proyecto

```
sucre-turismo/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Hotels.tsx
│   ├── Experiences.tsx
│   ├── Gastronomy.tsx
│   ├── FestivalBanner.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts
├── public/
└── vercel.json
```

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Construir para producción:**
```bash
npm run build
npm start
```

## 📊 Secciones de la Landing

### 1. Hero Section
- Título impactante: "Descubre Sucre y el Golfo de Morrosquillo"
- Subtítulo descriptivo
- CTA: "¡Planifica tu viaje ahora!"

### 2. Hoteles
- 5 hoteles en Coveñas (frente al mar)
- 6 hoteles en Sincelejo (centro regional)
- Información de contacto directa
- Descuentos especiales (15% en temporada media)

### 3. Experiencias y Operadores
- **MAPA TOURS:** Experiencias bioculturales
- **ECOTOUR ONNE COLOSO:** Turismo regenerativo Zenú
- **MOMA EXCURSIONES:** Aventura montemariana

### 4. Gastronomía
- **Frente al mar:** Poblado Restaurante, El Parguito Feliz, Zumo e Coco
- **Ancestral Zenú:** Onne Coloso (Montes de María)

### 5. Festival Banner
- Festival Nacional de Pito Atravesao
- 26-28 de junio de 2026
- Municipio de Morroa (37ª versión)

### 6. Footer
- Contacto
- Redes sociales
- Enlaces a secciones

## 🎨 Paleta de Colores

```css
/* Primary Colors - Caribe Colombiano */
--color-primary-turquoise: #06B6D4;  /* Turquesa */
--color-primary-teal: #14B8A6;      /* Verde azulado */
--color-primary-coral: #F97316;     /* Coral */

/* Secondary Colors - Naturaleza */
--color-secondary-sand: #FEF3C7;    /* Arena */
--color-secondary-gold: #F59E0B;   /* Dorado */
--color-secondary-leaf: #10B981;   /* Verde hoja */
```

## 📱 Responsive Design

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## ✅ Checklist de Calidad

- [x] Diseño responsive
- [x] Optimización de imágenes (WebP/AVIF)
- [x] SEO básico implementado
- [x] Accesibilidad WCAG AA
- [x] Animaciones suaves
- [x] Carga rápida

## 🌐 Deployment

El proyecto está configurado para desplegarse en Vercel:

```bash
# Conectar con GitHub
git remote add origin <tu-repositorio>
git push -u origin main

# Desplegar en Vercel
vercel
```

## 📞 Información de Contacto

Los contactos de hoteles y operadores están disponibles en el archivo `data/content.ts`.

## 📄 Licencia

Todos los derechos reservados - Turismo Sucre © 2026

## 👥 Créditos

- **Diseño:** Gem-Team
- **Desarrollo:** Next.js + Tailwind CSS
- **Información base:** .docs/Informacion.md

---

**¡Listo para usar!** 🚀
