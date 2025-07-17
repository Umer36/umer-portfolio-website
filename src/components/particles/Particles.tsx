import React from 'react'
import { motion } from 'framer-motion'
import './particles.css'

const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default Particles