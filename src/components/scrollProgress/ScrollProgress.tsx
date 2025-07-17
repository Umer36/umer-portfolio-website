import React, { useEffect, useRef } from 'react'
import './scrollProgress.css'

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentProgress = window.scrollY
          const scrollHeight = document.body.scrollHeight - window.innerHeight
          
          if (scrollHeight && progressRef.current) {
            const progress = (currentProgress / scrollHeight) * 100
            progressRef.current.style.transform = `scaleX(${progress / 100})`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      ref={progressRef}
      className="scroll-progress"
    />
  )
}

export default ScrollProgress