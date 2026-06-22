import React from 'react'

export function Badge({ children, variant = 'saffron', isTag = false, className = '' }) {
  const baseStyle = `${
    isTag ? 'rounded-[2px] px-10 py-[3px] text-[11px] uppercase tracking-[0.08em]' : 'rounded-full px-8 py-[3px] text-[11px]'
  } font-sans font-medium inline-flex items-center gap-4`

  const variants = {
    saffron: 'bg-[#FFF3EB] text-[#B33D00] border-none',
    turmeric: 'bg-[#FEF9E7] text-[#875A0E] border-none',
    charcoal: 'bg-[#262626] text-[#D4D4D4] border-none',
    veg: 'bg-[#EAF5E9] text-[#2E6C31] border-none',
    nonveg: 'bg-[#FFF2F2] text-[#B91C1C] border-none',
  }

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.saffron} ${className}`}>
      {children}
    </span>
  )
}
