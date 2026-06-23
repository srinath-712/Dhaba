import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Flame } from 'lucide-react'
import menuData from '../../data/menu.json'
import { Button } from '../ui/Button'

// Richer descriptions for showcase dishes
const DISH_DETAILS = {
  1: {
    tagline: 'Baked in a Clay Tandoor',
    desc: 'Hand-stretched wheat dough cooked against searing charcoal walls. Brushed with pure desi ghee and served piping hot — the bread that started it all.',
    highlight: 'Chef\'s Favourite',
  },
  3: {
    tagline: 'The North Indian Classic',
    desc: 'Slow-cooked chicken thighs in a rich tomato-cream sauce, tempered with kasuri methi and finished with fresh butter. Our most-loved dish across all 3 branches.',
    highlight: 'Best Seller',
  },
  4: {
    tagline: 'Bold & Fiery',
    desc: 'Farm-fresh chicken dry-roasted with whole peppercorns, curry leaves and fresh ginger. Deep smoky heat, zero compromise on flavour.',
    highlight: 'Customer Favourite',
  },
  6: {
    tagline: 'Vegetarian Royalty',
    desc: 'Thick cubes of cottage cheese simmered in a silky cashew-tomato gravy, fragrant with cardamom. Pairs perfectly with our garlic naan.',
    highlight: 'Top-Rated',
  },
}

export function MenuHighlights() {
  const highlightIds = [1, 3, 4, 6]
  const highlights = menuData.filter((item) => highlightIds.includes(item.id))

  return (
    <section className="relative py-56 px-page bg-charcoal-900 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-[-60px] right-[-60px] w-[400px] h-[400px] bg-saffron-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-56 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-saffron-500 mb-12 block">
              Dhaba Classics
            </span>
            <h2 className="text-[36px] md:text-[44px] font-serif font-bold text-white leading-tight">
              Our Signature Highlights
            </h2>
            <p className="text-[15px] text-cream-400 font-sans mt-10 max-w-lg">
              Hand-picked recipes that capture the essence of traditional smoke-infused cooking.
            </p>
          </motion.div>
          <Link to="/menu" className="shrink-0">
            <Button variant="outline" className="group">
              View Full Menu
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Alternating Z-layout (Desktop) / Auto-Scroll Marquee (Mobile) */}
        <div className="overflow-hidden md:overflow-visible -mx-page md:mx-0">
          <div className="flex md:flex-col w-max md:w-auto animate-marquee md:animate-none pl-16 md:pl-0 hover:animate-play-paused focus:animate-play-paused">
            {/* Original Set */}
            <div className="flex gap-16 md:gap-0 md:contents">
              {highlights.map((item, index) => {
                const isEven = index % 2 === 0
                const details = DISH_DETAILS[item.id] || {}

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-0 border border-charcoal-700/50 md:border-0 md:border-b md:border-charcoal-800/40 md:last:border-b-0 shrink-0 w-[85vw] sm:w-[320px] md:w-auto rounded-2xl md:rounded-none overflow-hidden md:overflow-visible shadow-xl shadow-black/20 md:shadow-none`}
              >
                {/* Image side */}
                <div className="relative w-full md:w-[40%] min-h-[200px] md:min-h-[220px] overflow-hidden bg-charcoal-950 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-8"
                    loading="lazy"
                  />
                  {/* Edge gradient blending into text side (Desktop only) */}
                  <div className={`hidden md:block absolute inset-y-0 ${isEven ? 'right-0' : 'left-0'} w-24 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-charcoal-900`} />
                  {/* Top/bottom darken for mobile text blend */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-transparent md:hidden" />

                  {/* Index number watermark */}
                  <div className="absolute top-16 left-16 w-[40px] h-[40px] rounded-full bg-charcoal-950/70 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-saffron-500 text-[14px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Text side */}
                <div className={`flex flex-col justify-center flex-1 px-20 md:px-28 py-24 md:py-20 bg-charcoal-900`}>
                  {/* Highlight badge */}
                  {details.highlight && (
                    <span className="inline-flex items-center gap-6 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-saffron-400 bg-saffron-500/10 border border-saffron-500/25 px-10 py-4 rounded-full mb-10 w-fit">
                      <Flame size={10} className="fill-saffron-500 text-saffron-500" />
                      {details.highlight}
                    </span>
                  )}

                  {/* Dish name */}
                  <h3 className="font-serif text-[20px] md:text-[24px] font-bold text-white leading-tight mb-4">
                    {item.name}
                  </h3>

                  {/* Tagline */}
                  {details.tagline && (
                    <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-turmeric-400 mb-10">
                      {details.tagline}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-[13px] text-cream-400 font-sans leading-relaxed mb-16 max-w-sm line-clamp-2">
                    {details.desc || item.description}
                  </p>

                  {/* Price + spice row */}
                  <div className="flex items-center gap-16">
                    <span className="text-[18px] font-serif font-bold text-saffron-500">
                      ₹{item.price}
                    </span>
                    {item.isSpicy > 0 && (
                      <div className="flex items-center gap-4">
                        {Array.from({ length: item.isSpicy }).map((_, i) => (
                          <Flame key={i} size={14} className="fill-red-500 text-red-500" />
                        ))}
                        <span className="text-[11px] text-cream-500 font-sans ml-4">
                          {item.isSpicy === 1 ? 'Mild' : item.isSpicy === 2 ? 'Medium' : 'Spicy'}
                        </span>
                      </div>
                    )}
                    <span className={`text-[11px] font-bold font-sans px-8 py-3 rounded-full border ${item.isVeg ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-red-400 border-red-500/30 bg-red-500/10'}`}>
                      {item.isVeg ? '● Veg' : '● Non-Veg'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
            </div>
            
            {/* Duplicate Set (Mobile Only) */}
            <div className="flex gap-16 md:hidden ml-16" aria-hidden="true">
              {highlights.map((item, index) => {
                const isEven = index % 2 === 0
                const details = DISH_DETAILS[item.id] || {}

                return (
                  <div
                    key={`${item.id}-dup`}
                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-0 border border-charcoal-700/50 md:border-0 md:border-b md:border-charcoal-800/40 md:last:border-b-0 shrink-0 w-[85vw] sm:w-[320px] md:w-auto rounded-2xl md:rounded-none overflow-hidden md:overflow-visible shadow-xl shadow-black/20 md:shadow-none`}
                  >
                    {/* Image side */}
                    <div className="relative w-full md:w-[40%] min-h-[200px] md:min-h-[220px] overflow-hidden bg-charcoal-950 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-8"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-transparent md:hidden" />

                      {/* Index number watermark */}
                      <div className="absolute top-16 left-16 w-[40px] h-[40px] rounded-full bg-charcoal-950/70 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <span className="font-serif font-bold text-saffron-500 text-[14px]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Text side */}
                    <div className={`flex flex-col justify-center flex-1 px-20 py-24 bg-charcoal-900`}>
                      {details.highlight && (
                        <span className="inline-flex items-center gap-6 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-saffron-400 bg-saffron-500/10 border border-saffron-500/25 px-10 py-4 rounded-full mb-10 w-fit">
                          <Flame size={10} className="fill-saffron-500 text-saffron-500" />
                          {details.highlight}
                        </span>
                      )}
                      <h3 className="font-serif text-[20px] font-bold text-white leading-tight mb-4">
                        {item.name}
                      </h3>
                      {details.tagline && (
                        <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-turmeric-400 mb-10">
                          {details.tagline}
                        </p>
                      )}
                      <p className="text-[13px] text-cream-400 font-sans leading-relaxed mb-16 max-w-sm line-clamp-2">
                        {details.desc || item.description}
                      </p>
                      <div className="flex items-center gap-16">
                        <span className="text-[18px] font-serif font-bold text-saffron-500">
                          ₹{item.price}
                        </span>
                        {item.isSpicy > 0 && (
                          <div className="flex items-center gap-4">
                            {Array.from({ length: item.isSpicy }).map((_, i) => (
                              <Flame key={i} size={14} className="fill-red-500 text-red-500" />
                            ))}
                          </div>
                        )}
                        <span className={`text-[11px] font-bold font-sans px-8 py-3 rounded-full border ${item.isVeg ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-red-400 border-red-500/30 bg-red-500/10'}`}>
                          {item.isVeg ? '● Veg' : '● Non-Veg'}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
