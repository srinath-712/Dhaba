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
        {/* Menu Header (No Banner) */}
        <div className="text-center mb-40 md:mb-48 pt-16">
          <span className="text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-saffron-400 mb-6 block">
            Traditional Menu
          </span>
          <h2 className="text-[28px] md:text-[44px] font-serif font-bold text-white leading-tight">
            Explore Our Delicacies
          </h2>
          <p className="text-[13px] md:text-[16px] text-cream-400 font-sans mt-12 max-w-xl mx-auto leading-relaxed">
            Slow-cooked tandoori naans, rich creamy butter chicken, spicy black pepper country recipes.
          </p>
        </div>

        {/* Order Online Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-40 p-20 rounded-xl bg-charcoal-800/60 border border-charcoal-700/40">
          <span className="text-[12px] font-sans font-semibold text-cream-400 uppercase tracking-widest">Order online via</span>
          <div className="flex gap-10">
            <a
              href="https://www.swiggy.com/search?query=sri+punjabis+dhaba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-6 bg-[#FC8019]/10 hover:bg-[#FC8019]/20 border border-[#FC8019]/30 hover:border-[#FC8019]/60 px-24 py-12 rounded-xl transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FC8019]"><path d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z"/></svg>
              <span className="font-sans font-black tracking-[-0.05em] text-[15px] leading-none text-[#FC8019]">Swiggy</span>
            </a>
            <a
              href="https://www.zomato.com/search?q=sri+punjabis+dhaba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#E23744]/10 hover:bg-[#E23744]/20 border border-[#E23744]/30 hover:border-[#E23744]/60 px-24 py-12 rounded-xl transition-all duration-200"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="Zomato" className="h-[16px] -translate-y-[0.5px]" />
            </a>
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
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-8 border-t border-charcoal-900/60 pt-20 pb-8 -mx-16 px-16 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`shrink-0 px-16 py-8 rounded-md font-sans text-[14px] font-medium transition-all duration-200 ${category === cat.id
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
                        <MenuItemCard item={item} showImage={true} />
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
