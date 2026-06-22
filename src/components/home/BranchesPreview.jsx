import React from 'react'
import { motion } from 'framer-motion'
import branchesData from '../../data/branches.json'
import { BranchCard } from '../branches/BranchCard'

export function BranchesPreview() {
  return (
    <section className="py-80 px-page bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-48">
          <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
            Our Locations
          </span>
          <h2 className="text-[36px] md:text-[44px] font-serif font-bold text-white leading-tight">
            Visit Our Branches
          </h2>
          <p className="text-[16px] text-cream-300 font-sans mt-8">
            Experience consistent, mouthwatering tandoori and rich Punjabi taste at any of our outlets.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          {branchesData.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <BranchCard branch={branch} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
