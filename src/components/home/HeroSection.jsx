import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-charcoal-900 text-white overflow-hidden py-80 px-page">
      {/* Background glow effects simulating charcoal fire embers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Design System Bottom-Centered Saffron Glow */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[radial-gradient(ellipse,rgba(232,98,26,0.35)_0%,transparent_70%)] rounded-full blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(240,235,227,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>
      
      {/* Gradient mask at the bottom to blend smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-charcoal-900 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Design System Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] md:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-turmeric-500 mb-20"
        >
          Authentic North Indian Cuisine · 3 Outlets
        </motion.p>

        {/* Landing Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[44px] md:text-[72px] font-medium text-white tracking-tight leading-[1.1]"
        >
          Hotel Sri <span className="text-turmeric-500 italic font-serif">Punjabi's</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans font-bold text-[36px] md:text-[60px] text-saffron-500 uppercase tracking-[0.15em] mt-8 mb-20"
        >
          Dhaba
        </motion.h2>

        {/* Design System Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[12px] md:text-[13px] text-white/50 tracking-[0.06em] max-w-lg mb-32"
        >
          Tamil Nadu · Dine-in, Takeaway & Delivery
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-12 w-full sm:w-auto"
        >
          <Link to="/branches" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto text-[13px] tracking-[0.06em]">
              Find a Branch
            </Button>
          </Link>
          <Link to="/menu" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white/80 hover:bg-white hover:text-charcoal-900 text-[13px] tracking-[0.06em]">
              View Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
