import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const RegularBackground = ({ children }: Props) => {
    return (
        <div className="min-h-screen w-full bg-background relative">
            {/* Lime Radial Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(253, 224, 71,0.6), transparent)`,
                }}
            />
            {children}
        </div>
    )
}

export default RegularBackground

