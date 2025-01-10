'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.header
      className="fixed w-full bg-black bg-opacity-80 text-white py-4 px-4 md:px-8 lg:px-16 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-playfair font-bold">Oro Lino</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#brand-story" className="hover:text-red-500 transition-colors">Brand Story</a></li>
            <li><a href="#target-audience" className="hover:text-red-500 transition-colors">Target Audience</a></li>
            <li><a href="#market-positioning" className="hover:text-red-500 transition-colors">Market Positioning</a></li>
            <li><a href="#visual-identity" className="hover:text-red-500 transition-colors">Visual Identity</a></li>
            <li><a href="#contact-us" className="hover:text-red-500 transition-colors">Contact Us</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav
          className="md:hidden mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-2">
            <li><a href="#brand-story" className="block py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Brand Story</a></li>
            <li><a href="#target-audience" className="block py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Target Audience</a></li>
            <li><a href="#market-positioning" className="block py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Market Positioning</a></li>
            <li><a href="#visual-identity" className="block py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Visual Identity</a></li>
            <li><a href="#contact-us" className="block py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

