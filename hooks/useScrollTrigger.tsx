import { useEffect, useRef, useState } from "react"

export const useScrollTrigger = ( offset = 20 ) => {

    const [ isVisible, setIsVisible ] = useState<boolean>(false)
    const ref = useRef(null)

    useEffect(() => {

        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                rootMargin: `0px 0px -${offset}% 0px`,
                threshold: 0
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [offset])

    return { ref, isVisible }
}