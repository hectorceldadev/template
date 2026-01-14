'use client'

import { SITE_CONFIG } from "@/config"
import { ReactNode } from "react"
import GridBackground from "./GridBackground"
import SoftBackground from "./SoftBackground"
import RegularBackground from './RegularBackground';

interface Props {
    children: ReactNode
}

const BackgroundSelector = ({ children }: Props) => {

    const { design } = SITE_CONFIG

    const background = design.background

    if (background === 'barberia-urbana') {
        return <GridBackground>{children}</GridBackground>
    }
    if (background === 'salon-de-belleza') {
        return <SoftBackground>{children}</SoftBackground>
    }
    
    return <RegularBackground>{children}</RegularBackground>
  
}

export default BackgroundSelector
