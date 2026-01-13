import { Star, User } from "lucide-react"

const SocialProof = () => {
    return (
        <div className="mt-10 sm:mt-12 flex items-center justify-start gap-4 animate-hero">
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
    )
}

export default SocialProof
