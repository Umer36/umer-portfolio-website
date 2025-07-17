import React from 'react'
import { motion } from 'framer-motion'
import "./Experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = (): JSX.Element => {
  return (
    <section id='experience'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Skills I Have
      </motion.h5>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>

      {/* Work Experience Section */}
      <div className="container work__experience">
        <motion.div
          className="work__card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="work__header">
            <h3>Availity India</h3>
            <span className="work__duration">Jan 2023 - Present</span>
          </div>
          
          <div className="work__positions">
            <motion.div
              className="position"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>Associate Software Engineer</h4>
              <span className="position__duration">Mar 2024 - Present</span>
              <ul>
                <li>Full-stack development for Payer side applications</li>
                <li>Developing new features and handling customer requests</li>
                <li>Handling microservices architecture for backend systems</li>
                <li>Resolving Veracode security issues and 508 compliance</li>
                <li>Working on both frontend and backend technologies</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="position"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4>Software Engineer Trainee</h4>
              <span className="position__duration">Jan 2023 - Mar 2024</span>
              <ul>
                <li>Frontend development focused on React projects</li>
                <li>Angular to React migration for RCM Clinical app</li>
                <li>Developing monorepo libraries for company-wide projects</li>
                <li>Developed 508 compliance components</li>
                <li>Specialized in modern frontend technologies</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container experience__container">
        <motion.div
          className="experience__frontend"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Vue.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>
          </div>
        </motion.div>

        <motion.div
          className="experience__backend"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>.NET</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className='experience__details'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
