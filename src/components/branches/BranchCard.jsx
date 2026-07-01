import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, MapPin } from 'lucide-react'

import { isBranchOpen } from '../../lib/hours'

// Fallback restaurant photo per branch
const BRANCH_PHOTOS = {
  kovur: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
  gingee: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
  tiruvannamalai: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80',
}

const SERVICE_COLORS = {
  'Dine-in':  'bg-saffron-500/10 text-saffron-400 border-saffron-500/25',
  'Takeaway': 'bg-turmeric-500/10 text-turmeric-400 border-turmeric-500/25',
  'Delivery': 'bg-green-500/10 text-green-400 border-green-500/25',
}

export function BranchCard({ branch }) {
  const photo = BRANCH_PHOTOS[branch.slug] || BRANCH_PHOTOS.kovur
  const fullStars = Math.floor(branch.rating)
  const hasHalf = branch.rating - fullStars >= 0.5
  const isOpen = isBranchOpen(branch.openTime, branch.closeTime)

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-charcoal-900 text-cream-100 rounded-xl overflow-hidden flex flex-col h-full border border-charcoal-700/40 shadow-lg hover:shadow-saffron-500/10 hover:shadow-xl hover:border-saffron-500/40 transition-all duration-300"
    >
      {/* Photo header */}
      <div className="relative h-[160px] overflow-hidden bg-charcoal-900">
        <img
          src={branch.photo || photo}
          alt={branch.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={(e) => { e.target.src = photo }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />

        {/* Dynamic status badge */}
        {isOpen ? (
          <div className="absolute top-12 left-12 flex items-center gap-6 bg-green-500/90 backdrop-blur-sm text-white text-[11px] font-sans font-bold px-10 py-4 rounded-full">
            <span className="w-[6px] h-[6px] bg-white rounded-full animate-pulse" />
            Open now
          </div>
        ) : (
          <div className="absolute top-12 left-12 flex items-center gap-6 bg-red-600/90 backdrop-blur-sm text-white text-[11px] font-sans font-bold px-10 py-4 rounded-full">
            <span className="w-[6px] h-[6px] bg-white/60 rounded-full" />
            Closed
          </div>
        )}

        {/* City tag */}
        <div className="absolute bottom-12 left-12 text-white">
          <div className="flex items-center gap-4 text-[11px] font-sans text-cream-200">
            <MapPin size={11} className="text-saffron-400" />
            {branch.city}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-20">
        {/* Branch name */}
        <h3 className="font-serif text-[18px] font-bold text-white leading-snug mb-4">
          {branch.name}
        </h3>

        {/* Short address */}
        <p className="text-cream-400 text-[12px] font-sans leading-relaxed mb-12 line-clamp-2">
          {branch.address}
        </p>

        {/* Star rating row */}
        <div className="flex items-center gap-8 mb-14">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={
                  i < fullStars
                    ? 'fill-turmeric-500 text-turmeric-500'
                    : i === fullStars && hasHalf
                    ? 'fill-turmeric-500/50 text-turmeric-500/50'
                    : 'fill-charcoal-600 text-charcoal-600'
                }
              />
            ))}
          </div>
          <span className="text-[13px] font-sans font-semibold text-cream-100">
            {branch.rating.toFixed(1)}
          </span>
          <span className="text-[11px] text-cream-500 font-sans">
            · {branch.reviewCount} reviews
          </span>
        </div>

        {/* Service tags */}
        <div className="flex flex-wrap gap-6 mb-20">
          {branch.services.map((service) => (
            <span
              key={service}
              className={`text-[11px] font-sans font-semibold px-10 py-4 rounded-full border ${SERVICE_COLORS[service] || 'bg-charcoal-700 text-cream-300 border-charcoal-600'}`}
            >
              {service}
            </span>
          ))}
        </div>

        {/* View Details CTA — pushed to bottom */}
        <div className="mt-auto">
          <Link
            to={`/branches/${branch.slug}`}
            className="w-full py-[11px] rounded-lg bg-saffron-500 hover:bg-saffron-400 text-white font-sans font-bold flex items-center justify-center gap-8 transition-colors duration-200 group text-[13px] tracking-[0.04em] shadow-md shadow-saffron-500/20"
          >
            View Details
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
