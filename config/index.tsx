export interface SiteConfig {
    navBar: {
        logo: {
            textOrImage: string
            href: string
        }
        navegacion: Array<{
            href: string
            text: string
        }>
        cta: {
            text: string
            href: string
        }
    }
    hero: {
        badge: string
        title: string
        desc: string
        ctaPrimary: {
            href: string
            icon: string
            text: string
        }
        ctaSecondary: {
            href: string
            icon: string
            text: string
        }
        showSocialProof: boolean
        image: string
    }
    servicios: {
        title: string
        desc: string
        ctaPrimary: {
            text: string
            icon: string
            href: string
        }
        items: Array<{
            id: string
            title: string
            desc: string
            fullDesc: string
            icon: string
            price: string
            slug: string
            features: string[]
        }>
    }
    galeria: {
        badge: string
        title: string
        desc: string
        layout: 'marquee' | 'grid',
        cta: {
            text: string
            href: string
        }
        images: Array<{
            src: string
            alt: string
        }>;
    };
    reviews: {
        badge: string
        title: string
        desc: string
        items: Array<{
            user: string
            servicio: string
            content: string
            rating: number
            icon: string
        }>
    }
    contacto: {
        badge: string
        title: string
        desc: string
        formAction: string
        mapEmbedUrl: string
        direccion: {
            calle: string
            cp: number
            municipyCity: string
        }
        info: {
            horario: {
                entresemana: string
                sabado: string
                domingo: string
                sabadoYDomingo: string
            },
            contacto: {
                telefono: string
                links: {
                    instagram: {
                        icon: string
                        href: string
                    },
                    phone: {
                        icon: string
                        href: string
                    }
                }
            }
        }
        iframe: string
    },
    footer: {
        logo: string
        desc: string
        socialLinks: Array<{
            icon: string
            href: string
        }>
        navSections: Array<{
            title: string
            items: Array<{
                text: string
                href: string
            }>
        }>
        copyright: string
    }
    design: {
        background: 'barberia-urbana' | 'salon-de-belleza' | 'peluqueria-regular'
        paleta: 'slate' | 'yellow'
        typography: 'barberiaUrbana' | 'salonBelleza' | 'peluqueriaRegular' 
    }
}

export const SITE_CONFIG: SiteConfig = {
    navBar: {
        logo: {
            textOrImage: '[LOGO]',
            href: '/'
        },
        navegacion: [
            {
                href: '/',
                text: 'Inicio'
            },
            {
                href: '/sobre-nosotros',
                text: 'Sobre Nosotros'
            },
            {
                href: '/',
                text: 'Servicios',
            },
            {
                href: '/galeria',
                text: 'Galería'
            },
            {
                href: '/contacto',
                text: 'Contacto'
            },
        ],
        cta: {
            text: '[RESERVAR CITA]',
            href: 'https://wa.me/[34Número de teléfono]?text=Hola%20[Nombre del negocio]%quería%20reservar%cita'
        }
    },
    hero: {
        badge: '[Nombre del negocio] · EST[AÑO]',
        title: '[TÍTULO \nPRINCIPAL]',
        desc: '[Descripción principal] ej:La nueva referencia de peluquería masculina en Silla. Especialistas en fades, diseños y arreglo de barba. Tu sitio de confianza a solo 5 minutos de Picassent, Albal y Catarroja.',
        ctaPrimary: {
            href: 'https://wa.me/[34Número de teléfono]?text=Hola%20[Nombre del negocio]%quería%20reservar%cita',
            icon: 'CalendarDays',
            text: 'RESERVAR CITA'
        },
        ctaSecondary: {
            href: '/servicios',
            text: 'Ver Servicios',
            icon: 'ArrowUpRight'
        },
        showSocialProof: true,
        image: '/',
    },
    servicios: {
        title: 'NUESTROS SERVICIOS',
        desc: '[DESCRIPCIÓN] ej: No hacemos cortes estándar. Analizamos tu cráneo y facciones para darte el estilo que mejor te sienta. Precisión milimétrica.',
        ctaPrimary: {
            text: 'VER SERVICIOS',
            icon: 'ArrowUpRight',
            href: '/servicios'
        },
        items: [
            {
                id: '[slug-servicio]',
                title: '[Servicio 1]',
                desc: '[Servicio 1 Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                fullDesc: '[Servicio 1 Full Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                icon: 'Scissors',
                price: '15€',
                slug: 'slug-servicio', //** Colocar slug */
                features: ['Asesoramiento de imagen', 'Peinado con cera/polvo']
            },
            {
                id: '[slug-servicio]',
                title: '[Servicio 1]',
                desc: '[Servicio 1 Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                fullDesc: '[Servicio 1 Full Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                icon: 'Scissors',
                price: '15€',
                slug: 'slug-servicio', //** Colocar slug */
                features: ['Asesoramiento de imagen', 'Peinado con cera/polvo']
            },
            {
                id: '[slug-servicio]',
                title: '[Servicio 1]',
                desc: '[Servicio 1 Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                fullDesc: '[Servicio 1 Full Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                icon: 'Scissors',
                price: '15€',
                slug: 'slug-servicio', //** Colocar slug */
                features: ['Asesoramiento de imagen', 'Peinado con cera/polvo']
            },
            {
                id: '[slug-servicio]',
                title: '[Servicio 1]',
                desc: '[Servicio 1 Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                fullDesc: '[Servicio 1 Full Descripción] ej:Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes',
                icon: 'Scissors',
                price: '15€',
                slug: 'slug-servicio', //** Colocar slug */
                features: ['Asesoramiento de imagen', 'Peinado con cera/polvo']
            },
        ]
    },
    galeria: {
        badge: 'PORTFOLIO',
        title: 'GALERIA',
        desc: '[DESCRIPCIÓN DE LA GALERIA]',
        layout: 'marquee',
        cta: {
            text: "VER TODA LA GALERÍA",
            href: "/galeria"
        },
        images: [
            {
                src: "/images/gallery/[imagen].webp",
                alt: "[Descripción Imagen]"
            },
            {
                src: "/images/gallery/[imagen].webp",
                alt: "[Descripción Imagen]"
            },
            {
                src: "/images/gallery/[imagen].webp",
                alt: "[Descripción Imagen]"
            },
            {
                src: "/images/gallery/[imagen].webp",
                alt: "[Descripción Imagen]"
            },
        ]
    },
    reviews: {
        badge: '[COMMUNITY]',
        title: '[LO QUE DICEN DE NOSOTROS]',
        desc: '[DESCRIPCIÓN REVIEWS]',
        items: [
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 5,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 4,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 5,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 4,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 5,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 5,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 4,
                icon: 'User'
            },
            {
                content: '[CONTENIDO REVIEW] ej: Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.',
                servicio: '[SERVICIO REVIEW]',
                user: '[Andres Iniesta]',
                rating: 5,
                icon: 'User'
            },
        ]
    },
    contacto: {
        badge: "[GET IN TOUCH]",
        title: "[Reserva & \nContacto]", // Usamos \n para el salto de línea
        desc: "[DESCRIPCIÓN CONTACTO] ej: Estamos en el corazón de la ciudad listos para cambiar tu imagen. Reserva tu cita o escríbenos.",
        formAction: "https://formspree.io/f/[tu-codigo-aqui]",
        mapEmbedUrl: "[https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083...]",
        direccion: {
            calle: 'C/Local Numero Local 23',
            cp: 46600,
            municipyCity: 'Alzira, Valencia'
        },
        info: {
            horario: {
                entresemana: '[Lun - Vie: 10:00 - 20:00]',
                sabado: '[Sabado: 10:00 - 20:00]',
                domingo: '[Domingo: 10:00 - 20:00]',
                sabadoYDomingo: '[Sab y Dom: 10:00 - 20:00]',
            },
            contacto: {
                telefono: '[+34 600 60 60 60]',
                links: {
                    instagram: {
                        icon: 'Instagram',
                        href: 'https://instagram.com/INSTAGRAM NEGOCIO'
                    },
                    phone: {
                        icon: 'Phone',
                        href: 'https://wa.me/34Número de teléfono?text=Hola%20[Nombre del negocio]%quería%20reservar%cita'
                    }
                }
            }
        },
        iframe: 'ej: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8055.387038917681!2d-0.4179848061566288!3d39.356681653906115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604d00336c8bb5%3A0x265a3a0c7ddaaf23!2sAvinguda%20de%20Llu%C3%ADs%20Vives%2C%2014%2C%2046460%20Silla%2C%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1767958245944!5m2!1ses!2ses'
    },
    footer: {
        logo: '[LOGO]',
        desc: '[DESCRIPCIÓN FOOTER] ej: Tu peluquería de confianza en Silla (Valencia). Fusionamos la barbería clásica con el estilo más actual. Cuidamos tu imagen y definimos tu estilo.',
        socialLinks: [
            { icon: "Instagram", href: "https://instagram.com/celdabarber" },
            { icon: "Phone", href: "https://wa.me/[34Número de teléfono]?text=Hola%20[Nombre del negocio]%quería%20reservar%cita" }
        ],

        // Secciones Manuales (Explora)
        navSections: [
            {
                title: "Explora",
                items: [
                    { text: "Inicio", href: "/" },
                    { text: "Servicios", href: "/servicios" },
                    { text: "Galería", href: "/galeria" },
                    { text: "Sobre Nosotros", href: "/sobre-nosotros" },
                    { text: "Cita Previa", href: "https://wa.me/[34Número de teléfono]?text=Hola%20[Nombre del negocio]%quería%20reservar%cita" }
                ]
            }
        ],
        copyright: '[AÑO - NOMBRE]'
    },
    design: {
        background: 'barberia-urbana',
        paleta: 'yellow',
        typography: 'barberiaUrbana'
    }
}