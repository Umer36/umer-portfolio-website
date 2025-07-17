import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'
import { BiCheck } from 'react-icons/bi'
import { FaCode, FaServer, FaMobile, FaCloud } from 'react-icons/fa'

const Services = (): JSX.Element => {
  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      features: [
        'Responsive Web Design',
        'React & Vue.js Applications',
        'Modern UI/UX Implementation',
        'Cross-browser Compatibility',
        'Performance Optimization'
      ]
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      features: [
        'RESTful API Development',
        'Database Design & Management',
        'Microservices Architecture',
        'Server-side Logic',
        'Security Implementation'
      ]
    },
    {
      icon: FaCloud,
      title: 'Full-Stack Solutions',
      features: [
        'End-to-end Development',
        'System Architecture',
        'Cloud Integration',
        'DevOps & Deployment',
        'Maintenance & Support'
      ]
    }
  ]

  return (
    <section id='services'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What I Offer
      </motion.h5>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      <div className="container services__container">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <motion.article
              key={index}
              className='service'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="service__head">
                <IconComponent className='service__icon' />
                <h3>{service.title}</h3>
              </div>
              
              <ul className='service__list'>
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <BiCheck className='service__list-icon' />
                    <p>{feature}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
