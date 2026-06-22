import React from 'react'
import { Star } from 'lucide-react'

export function StarRating({ rating, size = 16, className = '' }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.25
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} size={size} className="fill-turmeric-500 text-turmeric-500" />
        }
        if (i === fullStars && hasHalf) {
          return (
            <div key={i} className="relative inline-block">
              <Star size={size} className="text-turmeric-200 fill-turmeric-200" />
              <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                <Star size={size} className="text-turmeric-500 fill-turmeric-500" />
              </div>
            </div>
          )
        }
        return <Star key={i} size={size} className="text-turmeric-200 fill-none" />
      })}
      <span className="text-[14px] font-sans font-medium text-charcoal-400 ml-2">{rating.toFixed(1)}</span>
    </div>
  )
}
