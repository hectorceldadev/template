'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// 1. Importamos el tipo 'LucideIcon' para que TypeScript sea feliz
import { ChevronDown, Menu, X, CalendarDays, ArrowUpRight, Scissors, User, Zap, Star, ArrowRight, type LucideIcon } from 'lucide-react'
import { SITE_CONFIG } from '@/config'

// 2. Definimos que este objeto tiene claves string y valores LucideIcon
const iconMap: Record<string, LucideIcon> = {
  Scissors: Scissors,
  User: User,
  Zap: Zap,
  Star: Star,
  // Añade aquí más si los necesitas en el futuro
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { navBar, servicios } = SITE_CONFIG;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Bloquear scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [isOpen]);

  return (
    <div className="relative z-100">
      
      {/* --- NAVBAR FLOTANTE --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] max-w-7xl 
                      bg-background backdrop-blur-md border border-white/10 
                      rounded-full shadow-2xl transition-all duration-300 z-50 py-2">
        
        <div className="px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">

            {/* LOGO */}
            <Link href={navBar.logo.href} className="text-[42px] font-extrabold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
              {navBar.logo.textOrImage}
            </Link>

            {/* NAVEGACIÓN DESKTOP */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navBar.navegacion.map((item, index) => {
                
                // --- MEGA MENU SERVICIOS ---
                if (item.text === 'Servicios') {
                  return (
                    <div key={index} className="group relative h-full flex items-center">
                      <button className="flex items-center gap-1 text-md font-bold text-foreground hover:text-primary transition-colors py-4 tracking-wide">
                        {item.text}
                        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-260 lg:w-200 pt-4
                                      opacity-0 invisible translate-y-2 
                                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                                      transition-all duration-300 ease-out origin-top">
                        
                        <div className="bg-background border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-6 relative">
                          
                          {/* Fondo decorativo */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                          {/* Grid Servicios */}
                          <div className="grid grid-cols-2 gap-4 relative z-10">
                            {servicios.items.slice(0, 6).map((service, i) => {
                              // 4. Arreglado: TypeScript ya sabe que esto es seguro
                              const Icon = iconMap[service.icon] || Star;
                              
                              return (
                                <Link
                                  key={i}
                                  href={`/servicios/${service.slug}`}
                                  className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-background/50 border border-white/10 flex items-center justify-center text-foreground group-hover/item:text-primary group-hover/item:border-primary/30 transition-colors">
                                    <Icon size={20} />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-foreground text-sm font-bold leading-none mb-1 group-hover/item:text-primary transition-colors">
                                      {service.title}
                                    </h4>
                                    <span className="text-[10px] text-muted font-bold uppercase tracking-wider">
                                      {service.price} · Reservar
                                    </span>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                </Link>
                              )
                            })}
                          </div>

                          <Link href="/servicios" className="block mt-4 pt-4 border-t border-white/10 text-center text-xs font-bold text-foreground hover:text-white uppercase tracking-[0.2em] transition-colors">
                            Ver carta completa →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }

                // Enlaces Normales
                return (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className="text-md font-bold text-foreground hover:text-primary transition-colors tracking-wide"
                  >
                    {item.text}
                  </Link>
                )
              })}
            </div>

            {/* CTA & BURGER */}
            <div className="flex items-center gap-4">
              <Link
                href={navBar.cta.href}
                target="_blank"
                className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full ring ring-white/10 text-md font-bold transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-95 uppercase tracking-wider"
              >
                {navBar.cta.text}
              </Link>

              <button 
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors relative z-60"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- MENU MÓVIL (OVERLAY) --- */}
      <div 
        className={`
          fixed inset-0 bg-background z-40 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto">
          
          <div className="space-y-6 flex-1">
            {navBar.navegacion.map((item, index) => {
              
              // Versión Móvil de Servicios
              if (item.text === 'Servicios') {
                return (
                  <div key={index} className="border-b border-white/5 pb-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-4 mt-2">
                      Nuestros Servicios
                    </p>
                    <div className="grid grid-cols-1 gap-3 pl-2 border-l border-white/10">
                      {servicios.items.slice(0, 4).map((service, i) => {
                        const Icon = iconMap[service.icon] || Star;
                        return (
                          <Link
                            key={i}
                            href={`/servicios/${service.slug}`}
                            className="flex items-center gap-3 py-2 text-muted-foreground hover:text-white transition-colors"
                          >
                            <Icon size={16} className="text-primary" />
                            <span className="font-bold text-foreground text-sm">{service.title}</span>
                          </Link>
                        )
                      })}
                      <Link
                        href="/servicios"
                        className="text-xs font-bold text-primary mt-2 flex items-center gap-1"
                      >
                        Ver todo <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )
              }

              return (
                <div key={index} className="border-b border-white/5 pb-2">
                  <Link 
                    href={item.href}
                    className="block text-4xl font-black text-foreground hover:text-primary transition-colors tracking-tight uppercase"
                  >
                    {item.text}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="mt-auto pt-6">
            <Link
              href={navBar.cta.href}
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-primary text-white py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-primary/20 active:scale-95 transition-transform uppercase"
            >
              <CalendarDays className="w-6 h-6" />
              {navBar.cta.text}
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}