import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState('#');
  
  const navItems = [
    { href: '#', icon: AiOutlineHome, label: 'Home' },
    { href: '#about', icon: AiOutlineUser, label: 'About' },
    { href: '#experience', icon: BiBook, label: 'Experience' },
    { href: '#services', icon: RiServiceLine, label: 'Services' },
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
            onClick={() => setActiveNav(item.href)}
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
