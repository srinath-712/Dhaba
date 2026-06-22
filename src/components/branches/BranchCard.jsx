import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Badge } from '../ui/Badge'

export function BranchCard({ branch }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-charcoal-800 text-cream-100 rounded-lg overflow-hidden p-20 flex flex-col justify-between h-full border border-charcoal-800/30 border-t-[3px] border-t-saffron-500 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div>
        {/* Category Eyebrow Badge */}
        <div className="mb-12 flex flex-wrap gap-8 items-center">
          <Badge variant="veg">
            Open now
          </Badge>
        </div>

        {/* Branch Name */}
        <h3 className="font-serif text-[18px] font-medium text-white leading-snug mb-4">
          {branch.name}
        </h3>

        {/* Location Address */}
        <p className="text-cream-300 text-[12px] font-sans leading-relaxed mb-8">
          {branch.address}
        </p>

        {/* Rating Row */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex text-turmeric-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(branch.rating) ? 'fill-current' : 'opacity-20'}
              />
            ))}
          </div>
          <span className="text-[13px] font-sans font-medium text-cream-100">{branch.rating.toFixed(1)}</span>
          <Badge variant="charcoal" className="px-6 py-[2px] text-[10px]">
            {branch.reviewCount} reviews
          </Badge>
        </div>


      </div>

      <div>
        {/* Price scale */}
        <p className="font-serif italic text-[13px] text-saffron-500 mb-16">
          ₹{branch.priceMin} – ₹{branch.priceMax} per person
        </p>

        <Link
          to={`/branches/${branch.slug}`}
          className="w-full py-[10px] rounded-[2px] bg-saffron-500 hover:bg-saffron-600 text-white font-medium flex items-center justify-center gap-8 transition-colors duration-200 group text-[13px] tracking-[0.06em]"
        >
          Find a Branch
          <ArrowRight size={14} className="group-hover:translate-x-4 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
