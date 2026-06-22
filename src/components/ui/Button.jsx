import React from 'react'
import { motion } from 'framer-motion'

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = 'px-20 py-[9px] rounded-[2px] font-sans font-medium text-[13px] tracking-[0.06em] transition-all duration-200 inline-flex items-center justify-center gap-8 focus:outline-none focus:ring-1 focus:ring-offset-1'
  
  const variants = {
    primary: 'bg-saffron-500 text-white hover:bg-saffron-700 hover:shadow-md focus:ring-saffron-500 border border-transparent',
    outline: 'border border-charcoal-800 text-charcoal-900 bg-transparent hover:bg-charcoal-900 hover:text-cream-50 focus:ring-charcoal-800',
    ghost: 'border border-saffron-500 text-saffron-500 bg-transparent hover:bg-saffron-50 focus:ring-saffron-500',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
