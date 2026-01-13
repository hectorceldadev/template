import { Scissors } from "lucide-react"

const ElementImage = () => {
    return (
        <div className="absolute z-50 bottom-4 right-4 sm:bottom-4 sm:right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-3 animate-hero-image">
            <div className="bg-violet-600 p-1.5 sm:p-2 rounded-lg text-white">
                <Scissors size={16} className="sm:w-5 sm:h-5" />
            </div>
            <div className="pr-2">
                <p className="text-[9px] sm:text-[10px] text-zinc-300 uppercase tracking-wider">Urban Style</p>
                <p className="text-xs sm:text-sm font-bold text-white leading-none">Cuts & Fades</p>
            </div>
        </div>
    )
}

export default ElementImage
