import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id === 'header') {
              setActiveNav('#')
            } else {
              setActiveNav(`#${id}`)
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    // Add header section observer
    const header = document.querySelector('header')
    if (header) {
      header.setAttribute('id', 'header')
      observer.observe(header)
    }

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
  
  const navItems = [
    { href: '#', icon: AiOutlineHome, label: 'Home' },
    { href: '#about', icon: AiOutlineUser, label: 'About' },
    { href: '#experience', icon: BiBook, label: 'Experience' },
    { href: '#portfolio', icon: VscFolderLibrary, label: 'Portfolio' },
    { href: '#contact', icon: BiMessageSquareDetail, label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              setActiveNav(item.href)
              e.preventDefault()
              const targetId = item.href === '#' ? 'header' : item.href.substring(1)
              const targetElement = document.getElementById(targetId)
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className={activeNav === item.href ? 'active' : ''}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
            title={item.label}
          >
            <IconComponent />
          </motion.a>
        );
      })}
    </motion.nav>
  )
}

export default Nav
