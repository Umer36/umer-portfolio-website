import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './Portfolio.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const TiltCard = ({ children, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])
  const springX = useSpring(rotateX)
  const springY = useSpring(rotateY)

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const Portfolio = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Umer36',
      demo: 'https://demo-link.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      technologies: ['Vue.js', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/Umer36',
      demo: 'https://demo-link.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      description: 'Medical data visualization and patient management system',
      technologies: ['React', '.NET', 'SQL Server'],
      github: 'https://github.com/Umer36',
      demo: 'https://demo-link.com',
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <section id='portfolio'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Recent Work
      </motion.h5>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <TiltCard
            key={project.id}
            className='portfolio__item'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="portfolio__item-image">
              <div className="placeholder-image">
                <span>Project Screenshot</span>
              </div>
            </div>
            <div className="portfolio__item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio__item-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="portfolio__item-cta">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

export default Portfolio