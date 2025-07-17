import React from 'react'
import './particles.css'

const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 15}s`
          }}
        />
      ))}
    </div>
  )
}

export default Particles