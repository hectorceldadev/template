'use client'

import Link from 'next/link'
import { ArrowRight, Scissors, User, Zap, Star, ArrowUpRight, LucideIcon } from 'lucide-react'
import { SITE_CONFIG } from '@/config'
// Si no tienes las fuentes, borra esta línea

// 1. Diccionario de Iconos
const iconMap: Record<string, LucideIcon> = {
    Scissors: Scissors,
    User: User,
    Zap: Zap,
    Star: Star,
    ArrowUpRight: ArrowUpRight
};

const Servicios = () => {
    // 2. Extraemos la config
    const { servicios } = SITE_CONFIG;

    // Resolvemos el icono del botón principal
    const CtaIcon = iconMap[servicios.ctaPrimary.icon] || ArrowUpRight;

    return (
        <section className="bg-background relative pt-26 pb-10 overflow-hidden">

            {/* --- MARQUEE (Cinta decorativa) --- */}
            {servicios.showMarquee && (
                <div className="absolute top-10 left-0 w-full bg-primary/10 border-y border-primary/20 py-3 overflow-hidden rotate-1 sm:-rotate-1 z-0 backdrop-blur-sm">
                    {/* Contenedor ancho para la animación infinita */}
                    <div className="flex w-max animate-marquee">
                        {/* Repetimos el contenido 2 veces para el efecto loop infinito */}
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex whitespace-nowrap">
                                {(servicios.textMarquee || ['BARBER', 'STYLE']).map((word, idx) => (
                                    <span key={idx} className={`mx-4 text-sm font-bold tracking-[0.3em] text-primary/50 uppercase`}>
                                        • {word} 
                                    </span>
                                ))}
                                {/* Relleno extra si el array es corto */}
                                <span className={`mx-4 text-sm font-bold tracking-[0.3em] text-primary/50 uppercase`}>
                                     • FADES • STYLE • CUTS • BEARD •
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 pt-10">

                {/* --- HEADER SECCIÓN --- */}
                <div className="mb-16">
                    <h2 className={`text-[42px] md:text-5xl text-foreground uppercase mb-4`}>
                        {servicios.title.split(' ')[0]} <br />
                        <span className="text-primary">{servicios.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-md text-sm sm:text-base font-medium">
                        {servicios.desc}
                    </p>
                </div>

                {/* --- GRID DE SERVICIOS (Máximo 4 en Home) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicios.items.slice(0, 4).map((service, i) => {
                        const Icon = iconMap[service.icon] || Scissors;

                        return (
                            <Link
                                key={'Servicio' + i}
                                href={`/servicios/${service.slug}`}
                                className="group relative p-6 rounded-2xl bg-secondary ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-300 hover:bg-secondary/80 active:scale-[0.98]"
                            >
                                {/* Efecto Glow en Hover */}
                                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    
                                    {/* Header Card */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-background rounded-xl text-muted-foreground group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                                            <Icon size={24} />
                                        </div>
                                        {/* ID decorativo o numero */}
                                        <span className={`text-4xl text-background/10 group-hover:text-primary/10 transition-colors font-black`}>
                                            0{servicios.items.indexOf(service) + 1}
                                        </span>
                                    </div>

                                    {/* Título y Precio */}
                                    <div className="flex justify-between items-baseline mb-3">
                                        <h3 className={`text-2xl text-foreground uppercase tracking-wide`}>
                                            {service.title}
                                        </h3>
                                        {service.price && (
                                            <span className="text-xl font-bold text-primary">
                                                {service.price}
                                            </span>
                                        )}
                                    </div>

                                    {/* Descripción */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                                        {service.desc}
                                    </p>

                                    {/* Footer Card (Flecha) */}
                                    <div className='mt-auto flex justify-end items-center border-t border-white/5 pt-4'>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors mr-2">
                                            Reservar
                                        </span>
                                        <ArrowRight className='w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300' />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* --- BOTÓN VER TODOS --- */}
                <div className='flex justify-center items-center pt-12'>
                    <Link
                        href={servicios.ctaPrimary.href}
                        className="group w-full sm:w-auto rounded-xl ring-1 ring-white/10 bg-primary px-8 py-4 text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                    >
                        <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                            {servicios.ctaPrimary.text}
                            <CtaIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Servicios