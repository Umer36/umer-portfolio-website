import React from 'react'
import { motion } from 'framer-motion'
import "./header.css"
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'
import TypeWriter from './TypeWriter'

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello I am
        </motion.h5>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Umer Momin
        </motion.h1>
        
        <motion.h5
          className="text-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <TypeWriter 
            texts={[
              'Full Stack Developer',
              'React Specialist',
              'UI/UX Enthusiast',
              'Problem Solver'
            ]}
            speed={150}
            delay={2000}
          />
        </motion.h5>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <CTA />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <HeaderSocials />
        </motion.div>
        
        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={ME} alt="Me" />
        </motion.div>

        <motion.a
          href="#contact"
          className='scroll__down'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          whileHover={{ scale: 1.1 }}
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  )
}

export default Header
