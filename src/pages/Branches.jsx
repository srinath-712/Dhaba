import React from 'react'
import { motion } from 'framer-motion'
import branchesData from '../data/branches.json'
import { BranchCard } from '../components/branches/BranchCard'
import SEO from '../components/layout/SEO'

export default function Branches() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 px-page bg-charcoal-900 min-h-screen"
    >
      <SEO 
        title="Outlets in Kovur, Gingee & Tiruvannamalai | Highway Dhaba"
        description="Visit our branches in Kovur (Chennai), Gingee (near Gingee Fort), and Tiruvannamalai (near Arunachaleswarar Temple) on the Chennai Highway."
        keywords="Dhaba in Kovur, Gingee, Tiruvannamalai, Highway Restaurant Chennai to Tiruvannamalai, Highway Dhaba NH32, Family Restaurant on Chennai Highway, Best Punjabi Restaurant near Gingee, Best Punjabi Restaurant near Tiruvannamalai"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-32 md:mb-48">
          <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
            Our Network
          </span>
          <h1 className="text-[36px] md:text-[44px] font-serif font-bold text-white">
            Our Restaurant Branches
          </h1>
          <p className="text-[16px] text-cream-300 font-sans mt-8">
            Select a branch to view detailed address location, services, opening hours, local phone numbers, and location map embeds.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          {branchesData.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <BranchCard branch={branch} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
