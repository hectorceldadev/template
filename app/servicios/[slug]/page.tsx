import { Servicio } from "@/components/pages/Servicio"
import { SITE_CONFIG } from "@/config"
import { notFound } from "next/navigation"

interface ServicioProps {
    params: Promise<{ slug: string }>
}

const { servicios } = SITE_CONFIG

export const generateStaticParams = async () => {
    return servicios.items.map(service => ({
        slug: service.slug
    }))
}

const page = async ({ params }: ServicioProps) => {
  
    const { slug } = await params
    
    const servicio = servicios.items.find(servicio => servicio.slug === slug)

    if (!servicio) notFound()

    return (
    <div>
      <Servicio servicio={servicio} />
    </div>
  )
}

export default page
