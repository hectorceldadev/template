'use client'

import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ArrowRight, Star, Scissors, User, MapPin, ArrowUpRight, LucideIcon } from "lucide-react"
import { SITE_CONFIG } from "@/config"

// 1. Diccionario de Iconos para los botones
const iconMap: Record<string, LucideIcon> = {
    CalendarDays: CalendarDays,
    ArrowRight: ArrowRight,
    ArrowUpRight: ArrowUpRight,
    // Añade aquí más si los usas en el config
};

const Hero = () => {
    // 2. Extraemos la data del Config
    const { hero } = SITE_CONFIG;

    // 3. Preparamos los datos
    // Separamos el título por el salto de línea '\n' definido en el config
    const titleParts = hero.title.split('\n');
    
    // Resolvemos los iconos de los botones
    const IconPrimary = iconMap[hero.ctaPrimary.icon] || CalendarDays;
    const IconSecondary = iconMap[hero.ctaSecondary.icon] || ArrowUpRight;

    return (
        <section
            className={`pt-28 pb-16 px-5 lg:px-10 overflow-hidden`}
        >
            {/* Background Accent */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-violet-600/15 rounded-full blur-2xl pointer-events-none" /> */}

            <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* --- COLUMNA TEXTO --- */}
                    <div className="flex flex-col">

                        {/* Badge / Ubicación */}
                        <div className="flex justify-start">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                <MapPin size={12} className="text-violet-500" />
                                {hero.badge}
                            </div>
                        </div>

                        {/* Título Dinámico */}
                        <h1 className={`text-[56px] sm:text-6xl font-black text-white leading-[0.95] mb-6 uppercase tracking-tight`}>
                            {titleParts[0]} <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-violet-300">
                                {titleParts[1] || ""}
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                            {hero.desc}
                        </p>

                        {/* Botones Dinámicos */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            
                            {/* Botón Primario */}
                            <Link
                                href={hero.ctaPrimary.href}
                                target={hero.ctaPrimary.href.startsWith('http') ? "_blank" : "_self"}
                                className="group w-full sm:w-auto relative overflow-hidden rounded-xl bg-violet-600 px-8 py-4 text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                                    <IconPrimary className="w-5 h-5" />
                                    {hero.ctaPrimary.text}
                                </div>
                            </Link>

                            {/* Botón Secundario */}
                            <Link
                                href={hero.ctaSecondary.href}
                                className="group w-full sm:w-auto rounded-xl border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-white transition-all hover:border-violet-500 hover:bg-zinc-800 active:scale-95"
                            >
                                <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                                    {hero.ctaSecondary.text}
                                    <IconSecondary className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </div>

                        {/* SOCIAL PROOF (Condicional) */}
                        {hero.showSocialProof && (
                            <div className="mt-10 sm:mt-12 flex items-center justify-start gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] bg-violet-900/50 flex items-center justify-center overflow-hidden relative transition-all z-0 hover:z-10 hover:scale-110">
                                            <User className="text-violet-300 w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col text-left">
                                    <div className="flex text-violet-400 mb-1">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />)}
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold text-zinc-300">
                                        <span className="font-bold text-white">+100</span> Clientes satisfechos
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* --- COLUMNA IMAGEN --- */}
                    <div className="relative mx-auto w-[90%] lg:w-[70%] mt-4 lg:pt-2">
                        {/* Decoración */}
                        {/* <div className="absolute -inset-4 bg-violet-600/20 rounded-3xl rotate-6 blur-md hidden sm:block"></div> */}

                        <div className="relative aspect-3/4 rounded-2xl overflow-hidden grayscale border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50">
                            {/* IMAGEN DEL CONFIG */}
                            <Image
                                src={hero.image}
                                alt="Imagen principal barbería"
                                fill
                                priority
                                className="object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                            {/* Badge Flotante Estático (Decorativo) */}
                            <div className="absolute z-50 bottom-4 right-4 sm:bottom-4 sm:right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-3">
                                <div className="bg-violet-600 p-1.5 sm:p-2 rounded-lg text-white">
                                    <Scissors size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[9px] sm:text-[10px] text-zinc-300 uppercase tracking-wider">Premium</p>
                                    <p className="text-xs sm:text-sm font-bold text-white leading-none">Quality Cuts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero