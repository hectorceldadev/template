import Navbar from "@/components/NavBar";
import "./globals.css";
import { Footer } from "@/components/Footer";
import BackgroundSelector from "@/components/backgrounds/BackgroundSelector";
import { Anton, Geist, Lato, Open_Sans, Oswald, Playfair_Display } from "next/font/google";
import { SITE_CONFIG } from "@/config";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap'
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-geist',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-playfair',
  display: 'swap'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap'
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Usaremos 500 o 700 para títulos
  variable: '--font-oswald',
  display: 'swap'
})

// 3. CONFIGURAMOS OPEN SANS (Lectura Amable)
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-opensans',
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased ${geist.variable} ${anton.variable} ${playfair.variable} ${lato.variable} ${oswald.variable} ${openSans.variable}`}
        data-theme={SITE_CONFIG.design.paleta}
        data-font={SITE_CONFIG.design.typography}
      >
        <BackgroundSelector >
          <Navbar />
          {children}
          <Footer />
        </BackgroundSelector>
      </body>
    </html>
  );
}
