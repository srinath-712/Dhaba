import React from 'react'
import { motion } from 'framer-motion'
import branchesData from '../../data/branches.json'
import { BranchCard } from '../branches/BranchCard'

export function BranchesPreview() {
  return (
    <section className="relative py-56 px-page bg-charcoal-950 overflow-hidden">
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

        {/* Branch Cards: Auto-Scroll Marquee on Mobile, Grid on Desktop */}
        <div className="overflow-hidden md:overflow-visible -mx-page md:mx-0">
          <div className="flex md:grid md:grid-cols-3 w-max md:w-auto animate-marquee md:animate-none pl-16 md:pl-0 hover:animate-play-paused focus:animate-play-paused">
            {/* Original Set */}
            <div className="flex gap-16 md:contents">
              {branchesData.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="shrink-0 w-[85vw] sm:w-[320px] md:w-auto h-full"
                >
                  <BranchCard branch={branch} />
                </motion.div>
              ))}
            </div>
            {/* Duplicate Set (Mobile Only) */}
            <div className="flex gap-16 md:hidden ml-16" aria-hidden="true">
              {branchesData.map((branch, index) => (
                <div key={`${branch.id}-dup`} className="shrink-0 w-[85vw] sm:w-[320px] h-full">
                  <BranchCard branch={branch} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
