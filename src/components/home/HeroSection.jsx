import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const SWIGGY_URL = 'https://www.swiggy.com/search?query=sri+punjabis+dhaba'
const ZOMATO_URL = 'https://www.zomato.com/search?q=sri+punjabis+dhaba'

export function HeroSection() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-charcoal-950 text-white overflow-hidden py-64 px-page">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img 
          src="/images/hero-bg-web.png" 
          alt="Tandoor Fire Desktop" 
          className="hidden md:block w-full h-full object-cover opacity-60"
        />
        {/* Mobile Image */}
        <img 
          src="/images/hero-bg-mob.png" 
          alt="Tandoor Fire Mobile" 
          className="block md:hidden w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
      </div>

      {/* Subtle ambient glow over image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[radial-gradient(ellipse,rgba(201,146,42,0.20)_0%,transparent_70%)] rounded-full blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(240,235,227,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-charcoal-900 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] md:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-turmeric-500 mb-16"
        >
          Authentic North Indian Cuisine · 3 Outlets
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[44px] md:text-[72px] font-medium text-white tracking-tight leading-[1.1] flex flex-col items-center"
        >
          <span>Hotel Sri <span className="text-turmeric-500 italic font-serif">Punjabi's</span></span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-bold text-[36px] md:text-[60px] text-saffron-500 uppercase tracking-[0.15em] mt-8 mb-16 block"
          >
            Dhaba
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[12px] md:text-[14px] text-white/70 tracking-[0.06em] max-w-lg mb-40"
        >
          Tamil Nadu · Dine-in, Takeaway &amp; Delivery
        </motion.p>

        {/* Primary CTAs - Option 1 Style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-16 w-full sm:w-auto justify-center mb-40"
        >
          {/* Primary CTA: Explore Menu */}
          <Link to="/menu" className="w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-32 py-16 flex items-center justify-center gap-8 rounded text-[13px] font-sans font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                boxShadow: '0 0 30px rgba(249,115,22,0.25)',
              }}
            >
              Explore Menu
            </button>
          </Link>

          {/* Secondary CTA: Book a Table */}
          <Link to="/book" className="w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-32 py-16 flex items-center justify-center gap-8 rounded text-[13px] font-sans font-bold uppercase tracking-[0.1em] text-white/90 border border-saffron-500/60 hover:bg-saffron-500 hover:text-white transition-all duration-300 hover:-translate-y-2"
            >
              Book a Table
            </button>
          </Link>

          {/* Tertiary CTA: Find a Branch */}
          <Link to="/branches" className="w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-32 py-16 flex items-center justify-center gap-8 rounded text-[13px] font-sans font-bold uppercase tracking-[0.1em] text-white/75 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-2"
            >
              Find a Branch
            </button>
          </Link>
        </motion.div>

        {/* Order Online strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-lg border-t border-white/10 pt-32 flex flex-col items-center gap-20"
        >
          <span className="text-[12px] font-sans font-medium text-white/40 uppercase tracking-[0.2em]">Order Online</span>
          <div className="flex gap-16">
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-6 bg-[#FC8019]/10 hover:bg-[#FC8019]/20 border border-[#FC8019]/30 hover:border-[#FC8019]/60 px-24 py-12 rounded-xl transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FC8019]"><path d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z"/></svg>
              <span className="font-sans font-black tracking-[-0.05em] text-[15px] leading-none text-[#FC8019]">Swiggy</span>
            </a>
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#E23744]/10 hover:bg-[#E23744]/20 border border-[#E23744]/30 hover:border-[#E23744]/60 px-24 py-12 rounded-xl transition-all duration-200"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="Zomato" className="h-[16px] -translate-y-[0.5px]" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
