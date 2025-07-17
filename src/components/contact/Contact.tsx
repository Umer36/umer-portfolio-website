import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import "./Contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      // Temporary form handler - replace with actual EmailJS credentials
      const formData = new FormData(form.current)
      const name = formData.get('name')
      const email = formData.get('email')
      const message = formData.get('message')
      
      console.log('Form submitted:', { name, email, message })
      alert('Message received! (Demo mode - replace with EmailJS credentials)')
      
      form.current.reset()
      
      // Uncomment and configure when you have EmailJS credentials:
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      //   .then((result) => {
      //     console.log(result.text)
      //     alert('Message sent successfully!')
      //     form.current?.reset()
      //   }, (error) => {
      //     console.log(error.text)
      //     alert('Failed to send message. Please try again.')
      //   })
    }
  }

  return (
    <section id='contact'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h5>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.article
            className='contact__option'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>umerymomin@gmail.com</h5>
            <a href="mailto:umer.momin@example.com" target="_blank" rel="noreferrer">Send a message</a>
          </motion.article>

          <motion.article
            className='contact__option'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Umer Momin</h5>
            <a href="https://m.me/username" target="_blank" rel="noreferrer">Send a message</a>
          </motion.article>

          <motion.article
            className='contact__option'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7020084368</h5>
            <a href="https://api.whatsapp.com/send?phone=+91XXXXXXXXXX" target="_blank" rel="noreferrer">Send a message</a>
          </motion.article>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact__form"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            name='name'
            placeholder='Your Full Name'
            required
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.input
            type="email"
            name='email'
            placeholder='Your Email'
            required
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.textarea
            name="message"
            rows={7}
            placeholder='Your Message'
            required
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          
          <motion.button
            type='submit'
            className='btn btn-primary'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact;
