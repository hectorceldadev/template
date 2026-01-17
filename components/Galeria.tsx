'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SITE_CONFIG } from "@/config"

const Galeria = () => {
    const { galeria, design } = SITE_CONFIG;
    
    // Duplicamos imágenes para el efecto infinito si es marquee
    const displayImages = galeria.layout === 'marquee' 
        ? [...galeria.images, ...galeria.images] 
        : galeria.images;

    return (
        <section className="w-full py-10 overflow-hidden relative font-regular animate-autoshow">

            {/* --- CABECERA --- */}
            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 mb-12">
                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">
                    {galeria.badge}
                </span>
                <h2 className={`text-[42px] md:text-5xl text-foreground uppercase leading-none font-title font-semibold`}>
                    {galeria.title}
                </h2>
                <p className="text-muted mt-4 max-w-md">
                    {galeria.desc}
                </p>
            </div>

            {/* --- CONTENIDO --- */}
            {galeria.layout === 'marquee' ? (
                // MODO MARQUEE
                <div className="relative w-full z-20 mb-12">
                    {/* Gradient Masks */}
                    {
                        design.background === 'salon-de-belleza' 
                        ?
                        ''
                        : 
                        <>
                            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-linear-to-r from-background to-transparent z-30 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-linear-to-l from-background to-transparent z-30 pointer-events-none" />
                        </>
                    }

                    <div className={`transform ${design.background === 'salon-de-belleza' ? '' : '-skew-y-2'} py-4`}>
                        <div className={`${design.background === 'salon-de-belleza' ? '' : 'bg-primary/5 border-y border-white/10 py-8 backdrop-blur-sm'} `}>
                            <div className="flex gap-6 items-center w-max px-4 animate-marquee-right hover:[animation-play-state:paused]">
                                {displayImages.map((imagen, index) => (
                                    <div
                                        key={`marquee-${index}`}
                                        className="group relative w-72 h-96 shrink-0 rounded-2xl overflow-hidden border border-foreground/10 bg-background-secondary transition-all duration-500 hover:scale-105 hover:border-primary/50 cursor-pointer"
                                    >
                                        <Image
                                            src={imagen.src}
                                            alt={imagen.alt}
                                            fill
                                            className={`object-cover transition-transform duration-700 ${design.background === 'salon-de-belleza' ? '' : 'grayscale group-hover:grayscale-0'} group-hover:scale-110`}
                                            sizes="(max-width: 768px) 100vw, 300px"
                                        />
                                        <div className={`absolute inset-0 bg-linear-to-t ${design.background === 'salon-de-belleza' ? 'from-foreground/30 via-foreground/10' : 'from-black/90 via-black/20'}  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                                            <div className="flex justify-between items-center">
                                                <p className="text-foreground text-sm font-bold leading-tight line-clamp-2 pr-4">
                                                    {imagen.alt}
                                                </p>
                                                <ArrowUpRight className="text-primary w-5 h-5 shrink-0" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // MODO GRID
                <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {galeria.images.slice(0, 3).map((imagen, index) => (
                            <div
                                key={`grid-${index}`}
                                className="group relative aspect-square rounded-2xl overflow-hidden border border-foreground/10 bg-background-secondary transition-all duration-300 hover:border-primary/50"
                            >
                                <Image
                                    src={imagen.src}
                                    alt={imagen.alt}
                                    fill
                                    className={`object-cover transition-transform duration-700 ${design.background === 'salon-de-belleza' ? '' : ' grayscale group-hover:grayscale-0'} group-hover:scale-110`}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className={`absolute inset-0 bg-linear-to-t ${design.background === 'salon-de-belleza' ? 'from-foreground/30 via-foreground/10' : 'from-black/90 via-black/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                                    <div className="flex justify-between items-center">
                                        <p className="text-foreground text-sm font-bold leading-tight line-clamp-2 pr-4">
                                            {imagen.alt}
                                        </p>
                                        <ArrowUpRight className="text-primary w-5 h-5 shrink-0" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- CTA BUTTON --- */}
            <div className="flex justify-center relative z-20">
                <Link
                    href={galeria.cta.href}
                    className="group w-full sm:w-auto mx-5 rounded-xl ring-1 ring-foreground/10 bg-primary px-8 py-4 text-foreground transition-all hover:bg-primary/90 hover:ring-primary/50 active:scale-95"
                >
                    <div className="flex items-center justify-center gap-1 font-bold uppercase tracking-wide text-sm sm:text-base">
                        {galeria.cta.text}
                        <ArrowUpRight className="w-5 h-5 relative transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-foreground" />
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default Galeria