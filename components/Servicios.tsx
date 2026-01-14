'use client'
import Link from 'next/link'
import { Scissors, ArrowUpRight, type LucideIcon } from 'lucide-react' // Importa iconos necesarios
import { SITE_CONFIG } from '@/config'

// Mapeo simple de iconos
const iconMap: Record<string, LucideIcon> = {
  Scissors: Scissors,
  ArrowUpRight: ArrowUpRight
  // Añade más aquí si necesitas
}

const Servicios = () => {
  const { servicios } = SITE_CONFIG

  return (
    <section className="py-24 relative">
      
      {/* MARQUEE */}
      {servicios.showMarquee && (
        <div className="overflow-hidden whitespace-nowrap opacity-10 md:opacity-5 absolute top-0 w-full pointer-events-none select-none">
          <div className="animate-marquee inline-block">
             {servicios.textMarquee?.map((text, i) => (
                <span key={i} className={`text-[120px] md:text-[200px] font-black mx-8 text-foreground uppercase`}>
                    {text}
                </span>
             ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <h2 className={`text-4xl md:text-5xl font-black uppercase text-foreground mb-4`}>
               {servicios.title}
             </h2>
             <p className="text-muted text-lg">
               {servicios.desc}
             </p>
          </div>
          <Link 
            href={servicios.ctaPrimary.href}
            className="flex items-center gap-2 text-primary font-bold hover:text-foreground transition-colors"
          >
            {servicios.ctaPrimary.text} <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.items.map((item, i) => {
             const Icon = iconMap[item.icon] || Scissors
             return (
               <Link 
                 key={i} 
                 href={`/servicios/${item.slug}`}
                 className="group relative p-6 bg-secondary/40 border border-white/5 rounded-2xl hover:bg-secondary hover:border-primary/20 transition-all duration-300"
               >
                 {/* Icon Header */}
                 <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <Icon size={24} />
                   </div>
                   <span className="text-lg font-bold text-foreground">{item.price}</span>
                 </div>
                 
                 {/* Content */}
                 <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                   {item.title}
                 </h3>
                 <p className="text-sm text-muted line-clamp-2">
                   {item.desc}
                 </p>
               </Link>
             )
          })}
        </div>

      </div>
    </section>
  )
}

export default Servicios