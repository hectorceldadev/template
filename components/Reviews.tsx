'use client'

import { Star, Quote, User } from "lucide-react"
import { SITE_CONFIG } from "@/config"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export const Reviews = () => {

    const { reviews, design } = SITE_CONFIG;

    const containerRef = useRef<HTMLElement | null>(null)

    const marqueeReviews = [...reviews.items, ...reviews.items, ...reviews.items].slice(0, 12); 

    useGSAP(() => {

        gsap.from('.animate-header', {
            y: 40,
            opacity: 0,
            duration: 0.6, 
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    return (
        <section
            ref={containerRef} 
            className="w-full z-10 py-10 overflow-hidden relative font-regular">
            
            {/* --- CABECERA --- */}
            <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-16">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-header">
                    {reviews.badge}
                </span>
                <h2 className={`text-[42px] md:text-5xl text-foreground uppercase font-title leading-[0.95] font-semibold animate-header`}>
                    {reviews.title.split(' ').slice(0, -2).join(' ')} <br />
                    <span className="text-primary">
                        {reviews.title.split(' ').slice(-2).join(' ')}
                    </span>
                </h2>
                <p className="text-muted mt-4 max-w-md animate-header">
                    {reviews.desc}
                </p>
            </div>

            {/* --- SLIDER INFINITO (CSS ONLY) --- */}
            <div className={`${design.background === 'salon-de-belleza' ? 'relative w-full' : 'relative w-full bg-primary/5 border-y border-foreground/10 py-10 backdrop-blur-sm transform'}`}>
                
                {/* Sombras laterales (Fade effect) */}
                {
                    design.background === 'salon-de-belleza' 
                    ?
                    ''
                    :
                    <>
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />
                    </>
                }

                {/* Contenedor Animado */}
                <div className="flex gap-6 w-max px-4">
                    {marqueeReviews.map((review, i) => (
                        <div
                            key={`${i}-${review.user}`}
                            className="flex flex-col relative w-80 md:w-96 shrink-0 p-8 rounded-3xl bg-background-secondary border border-foreground/10 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02]"
                        >
                            {/* Icono decorativo */}
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 rotate-180" />

                            {/* ESTRELLAS */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        fill={starIndex < review.rating ? "currentColor" : "transparent"}
                                        className={`w-4 h-4 ${starIndex < review.rating ? "text-primary" : "text-muted"}`}
                                    />
                                ))}
                            </div>

                            {/* CONTENIDO */}
                            <p className="text-muted text-sm md:text-base font-medium leading-relaxed mb-6 grow relative z-10 italic">
                                {`"${review.content}"`}
                            </p>

                            {/* USUARIO */}
                            <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                                <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-foreground/10 border border-foreground/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-muted"/>
                                </div>
                                <div>
                                    <h4 className={`text-foreground text-base font-bold leading-none mb-1 uppercase`}>
                                        {review.user}
                                    </h4>
                                    <p className="text-primary text-xs font-bold tracking-wider uppercase">
                                        {review.servicio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}