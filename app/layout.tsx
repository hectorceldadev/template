import Navbar from "@/components/NavBar";
import "./globals.css";
import { Footer } from "@/components/Footer";
import BackgroundSelector from "@/components/backgrounds/BackgroundSelector";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
        data-theme='slate'
      >
        <div className="relative z-10">
          <BackgroundSelector >
            <Navbar />
            {children}
            <Footer />
          </BackgroundSelector>
        </div>
      </body>
    </html>
  );
}
