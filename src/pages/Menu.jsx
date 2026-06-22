import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Info } from 'lucide-react'
import { useMenu } from '../hooks/useMenu'
import { MenuItemCard } from '../components/menu/MenuItemCard'

function MenuSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-charcoal-800 rounded-lg border border-charcoal-800/30 p-20 animate-pulse"
        >
          <div className="flex items-start justify-between mb-12">
            <div className="flex-1">
              <div className="h-[18px] bg-charcoal-700 rounded w-3/4 mb-10" />
              <div className="h-[13px] bg-charcoal-700 rounded w-1/2" />
            </div>
            <div className="w-[40px] h-[20px] bg-charcoal-700 rounded ml-12" />
          </div>
          <div className="h-[13px] bg-charcoal-700 rounded w-full mb-6" />
          <div className="h-[13px] bg-charcoal-700 rounded w-5/6 mb-16" />
          <div className="flex gap-8 mt-8">
            <div className="h-[24px] w-[56px] bg-charcoal-700 rounded-full" />
            <div className="h-[24px] w-[40px] bg-charcoal-700 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Menu() {
  const {
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    vegOnly,
    setVegOnly,
    filteredMenu,
  } = useMenu()

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Starters & Soups' },
    { id: 'tandoori', label: 'Tandoori' },
    { id: 'chicken', label: 'Chicken' },
    { id: 'mutton', label: 'Mutton' },
    { id: 'veg', label: 'Vegetarian' },
    { id: 'egg', label: 'Egg' },
    { id: 'biriyani', label: 'Biriyani' },
    { id: 'rice', label: 'Rice & Noodles' },
    { id: 'breads', label: 'Breads' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 px-page bg-charcoal-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Banner Hero Header */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-48 md:mb-64 shadow-2xl">
          <img
            src="/images/banner.jpg"
            alt="Hotel Sri Punjab's Dhaba"
            className="w-full h-[260px] md:h-[320px] object-cover object-center"
            loading="lazy"
            onError={(e) => { e.target.src = '/images/banner.png' }}
          />
          <div className="absolute inset-0 bg-charcoal-950/50" />
          <div className="absolute inset-0 flex items-center justify-center px-16">
            <div
              className="text-center px-32 py-24 rounded-2xl border border-white/20 shadow-2xl"
              style={{
                background: 'rgba(20, 16, 12, 0.45)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-saffron-400 mb-8 block">
                Traditional Menu
              </span>
              <h2 className="text-[32px] md:text-[44px] font-serif font-bold text-white leading-tight">
                Explore Our Delicacies
              </h2>
              <p className="text-[14px] md:text-[16px] text-cream-300 font-sans mt-8 max-w-xl">
                Slow-cooked tandoori naans, rich creamy butter chicken, spicy black pepper country recipes.
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-charcoal-800 p-16 md:p-24 rounded-lg border border-charcoal-800/40 shadow-lg mb-40 flex flex-col gap-16 md:gap-24">
          <div className="flex flex-col md:flex-row gap-16 justify-between items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 text-cream-400" size={18} />
              <input
                type="text"
                placeholder="Try: Butter chicken, Garlic naan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-[44px] pr-[16px] py-[12px] rounded-xl bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all font-sans text-[15px] text-white"
              />
            </div>

            {/* Veg toggle */}
            <div className="flex items-center justify-between md:justify-end gap-12 shrink-0">
              <span className="text-[14px] font-sans font-medium text-cream-200">Veg Only</span>
              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-200 focus:outline-none cursor-pointer border border-charcoal-800/40 ${vegOnly ? 'bg-green-500' : 'bg-charcoal-900'}`}
                role="switch"
                aria-checked={vegOnly}
              >
                <motion.div
                  layout
                  className="w-[14px] h-[14px] bg-white rounded-full absolute top-[4px] left-[4px] shadow-sm cursor-pointer"
                  animate={{ x: vegOnly ? 20 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-8 border-t border-charcoal-900/60 pt-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-16 py-8 rounded-md font-sans text-[14px] font-medium transition-all duration-200 ${category === cat.id
                  ? 'bg-saffron-500 text-white shadow-md shadow-saffron-900/10'
                  : 'bg-charcoal-900 text-cream-200 hover:bg-charcoal-700'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid with Skeleton */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MenuSkeleton />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
                <AnimatePresence mode="popLayout">
                  {filteredMenu.length > 0 ? (
                    filteredMenu.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                      >
                        <MenuItemCard item={item} showImage={false} />
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full py-64 flex flex-col items-center justify-center text-center bg-charcoal-800 border-none rounded-lg p-32"
                    >
                      <Info size={40} className="text-cream-400 mb-16" />
                      <h3 className="text-[20px] font-serif font-semibold text-white">No dishes match your query</h3>
                      <p className="text-[14px] text-cream-300 mt-4 max-w-sm font-sans">
                        Try typing something else or check your vegetarian filter settings.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
