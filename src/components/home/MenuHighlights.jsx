import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import menuData from '../../data/menu.json'
import { MenuItemCard } from '../menu/MenuItemCard'
import { Button } from '../ui/Button'

export function MenuHighlights() {
  // Highlight select items: Butter Naan (id 1), Butter Chicken (id 3), Pepper Chicken (id 4), Paneer Butter Masala (id 6)
  const highlightIds = [1, 3, 4, 6]
  const highlights = menuData.filter((item) => highlightIds.includes(item.id))

  return (
    <section className="py-80 px-page bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 gap-16">
          <div>
            <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
              Dhaba Classics
            </span>
            <h2 className="text-[36px] md:text-[44px] font-serif font-bold text-white leading-tight">
              Our Signature Highlights
            </h2>
            <p className="text-[16px] text-cream-300 font-sans mt-8">
              Hand-picked recipes that capture the essence of traditional smoke-infused cooking.
            </p>
          </div>
          <Link to="/menu" className="shrink-0">
            <Button variant="outline" className="group">
              View Full Menu
              <ArrowRight size={16} className="group-hover:translate-x-4 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MenuItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
