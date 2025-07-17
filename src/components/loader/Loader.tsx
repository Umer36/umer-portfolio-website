import React from 'react'
import { motion } from 'framer-motion'
import './loader.css'

const Loader = () => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader">
        <motion.div
          className="loader-circle"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Umer Momin
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader