'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/config"

const Galeria = () => {
    const { galeria } = SITE_CONFIG;
    
    // Duplicamos imágenes para el efecto infinito si es marquee
    const displayImages = galeria.layout === 'marquee' 
        ? [...galeria.images, ...galeria.images] 
        : galeria.images;

    return (
        <section className="w-full py-10 bg-background overflow-hidden relative">

            {/* --- CABECERA --- */}
            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
                    {galeria.badge}
                </span>
                <h2 className={`text-[42px] md:text-5xl text-foreground uppercase leading-none`}>
                    {galeria.title}
                </h2>
                <p className="text-muted-foreground mt-4 max-w-md">
                    {galeria.desc}
                </p>
            </div>

            {/* --- CONTENIDO --- */}
            {galeria.layout === 'marquee' ? (
                // MODO MARQUEE
                <div className="relative w-full z-20 mb-12">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-linear-to-r from-background to-transparent z-30 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-linear-to-l from-background to-transparent z-30 pointer-events-none" />

                    <div className="transform -rotate-1 py-4">
                        <div className="bg-primary/5 border-y border-white/10 py-8 backdrop-blur-sm">
                            <div className="flex gap-6 items-center w-max px-4 animate-marquee hover:[animation-play-state:paused]">
                                {displayImages.slice(0, 4).map((imagen, index) => (
                                    <div
                                        key={`marquee-${index}`}
                                        className="group relative w-72 h-96 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-secondary transition-all duration-500 hover:scale-105 hover:border-primary/50 cursor-pointer"
                                    >
                                        <Image
                                            src={imagen.src}
                                            alt={imagen.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 300px"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <div className="flex justify-between items-center">
                                                <p className="text-white text-sm font-bold leading-tight line-clamp-2 pr-4">
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
                                className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-secondary transition-all duration-300 hover:border-primary/50"
                            >
                                <Image
                                    src={imagen.src}
                                    alt={imagen.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ArrowUpRight className="text-primary w-8 h-8" />
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
                    className="group w-full sm:w-auto mx-5 rounded-xl ring-1 ring-white/10 bg-secondary px-8 py-4 text-foreground transition-all hover:bg-secondary/80 hover:ring-primary/50 active:scale-95"
                >
                    <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                        {galeria.cta.text}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-primary" />
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default Galeria