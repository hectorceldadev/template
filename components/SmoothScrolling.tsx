'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    // 1. Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing por defecto
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // touchMultiplier: 2, // Ajusta la sensibilidad en táctil si es necesario
    })

    // 2. Sincronizar Lenis con el Ticker de GSAP
    // Esto es vital para que ScrollTrigger no "baile" o vaya con retraso
    function update(time: number) {
      lenis.raf(time * 1000)
    }

    // Añadimos la función al ticker de GSAP
    gsap.ticker.add(update)

    // Desactivamos el suavizado de lag de GSAP porque Lenis ya maneja la suavidad
    gsap.ticker.lagSmoothing(0)

    // 3. Limpieza al desmontar el componente
    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  )
}