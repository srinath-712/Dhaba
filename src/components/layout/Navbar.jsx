import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Branches', path: '/branches' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-charcoal-800/50 px-page py-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="font-serif font-medium text-[16px] leading-none tracking-wide"
          style={{ color: '#F5A623' }}
        >
          Sri Punjabi's Dhaba
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-24">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-sans text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 py-8 ${isActive(link.path) ? 'text-turmeric-500' : 'text-white/60 hover:text-turmeric-500'
                }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-turmeric-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-8 text-white/80 hover:text-turmeric-500 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A] border-t border-charcoal-800/80 mt-16 overflow-hidden"
          >
            <div className="flex flex-col py-16 gap-8 px-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-[12px] uppercase tracking-[0.08em] font-semibold py-8 px-16 rounded-md transition-colors ${isActive(link.path)
                      ? 'bg-charcoal-800 text-turmeric-500'
                      : 'text-white/60 hover:bg-charcoal-800/40 hover:text-turmeric-500'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
