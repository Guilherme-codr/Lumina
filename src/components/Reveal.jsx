import { useEffect, useRef, useState } from 'react'

// Fade-in de baixo para cima quando o elemento entra na tela (uma vez só).
// Quem pede "reduzir movimento" no sistema vê o conteúdo direto, sem animação.
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        visible ? '' : 'motion-safe:translate-y-10 motion-safe:opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
