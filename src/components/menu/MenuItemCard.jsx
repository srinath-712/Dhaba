import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import { Flame } from 'lucide-react'

export function MenuItemCard({ item, showImage = true, showPrice = true }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-charcoal-800 text-cream-100 rounded-lg overflow-hidden border border-charcoal-800/30 shadow-lg hover:shadow-[0_4px_20px_rgba(232,98,26,0.15)] hover:border-saffron-500 transition-all duration-300 flex flex-col h-full min-h-[140px]"
    >
      {showImage && item.image && (
        <div className="relative h-44 w-full overflow-hidden bg-charcoal-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {!item.available && (
            <div className="absolute inset-0 bg-charcoal-900/70 backdrop-blur-xs flex items-center justify-center">
              <span className="bg-charcoal-800 text-cream-100 px-12 py-[4px] rounded-[2px] font-medium tracking-[0.06em] text-[10px] uppercase">
                Sold Out
              </span>
            </div>
          )}
        </div>
      )}

      <div className={`flex flex-col justify-between flex-grow ${showImage ? 'p-16' : 'p-[24px] py-[32px]'}`}>
        <div>
          {/* Category Eyebrow & Type */}
          <div className="flex justify-between items-start mb-8 gap-8">
            <p className="text-[11px] tracking-[0.15em] uppercase text-cream-400 font-semibold mt-4">
              {item.category.replace('_', ' ')}
            </p>
            <Badge variant={item.category === 'egg' ? 'turmeric' : item.isVeg ? 'veg' : 'nonveg'} className="shadow-sm">
              <span className={`w-[8px] h-[8px] rounded-full ${item.category === 'egg' ? 'bg-[#F5A623]' : item.isVeg ? 'bg-[#2E6C31]' : 'bg-[#B91C1C]'}`}></span>
              {item.category === 'egg' ? 'Egg' : item.isVeg ? 'Veg' : 'Non-Veg'}
            </Badge>
          </div>
          
          <h3 className={`font-serif font-medium text-white leading-tight ${showImage ? 'text-[15px] mb-4' : 'text-[20px] mb-4'}`}>
            {item.name}
          </h3>
          
          {item.description && (
            <p className="text-cream-300 text-[12px] font-sans leading-relaxed line-clamp-3 mb-12">
              {item.description}
            </p>
          )}
        </div>

        {showPrice && (
          <div className="flex items-center justify-between mt-auto pt-12 border-t border-charcoal-900/60">
            <span className="text-[14px] font-sans font-medium text-saffron-500">
              ₹{item.price}
            </span>
            {item.isSpicy > 0 && (
              <span className="text-[10px] text-red-500 font-medium flex gap-2">
                {Array.from({ length: item.isSpicy }).map((_, i) => (
                  <Flame key={i} size={14} className="fill-current text-saffron-500" />
                ))}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
