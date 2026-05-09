import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://descubresucre.com"
  ),
  title: "Descubre Sucre y el Golfo de Morrosquillo | Turismo Caribe Colombiano",
  description:
    "Vive la magia del Caribe colombiano. Hoteles, experiencias, gastronomía y cultura en Sucre. ¡Planifica tu viaje ahora!",
  keywords:
    "Sucre, turismo, Caribe, Colombia, Golfo de Morrosquillo, playas, hoteles, ecoturismo, gastronomía, Coveñas, Sincelejo",
  authors: [{ name: "Turismo Sucre" }],
  openGraph: {
    title: "Descubre Sucre y el Golfo de Morrosquillo",
    description: "Vive la magia del Caribe colombiano. Hoteles, experiencias, gastronomía y cultura.",
    type: "website",
    locale: "es_CO",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sucre - Caribe Colombiano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descubre Sucre y el Golfo de Morrosquillo",
    description: "Vive la magia del Caribe colombiano",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
