import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '../components/home/HeroSection'
import { AboutSection } from '../components/home/AboutSection'
import { BranchesPreview } from '../components/home/BranchesPreview'
import { MenuHighlights } from '../components/home/MenuHighlights'
import { ReviewsCarousel } from '../components/home/ReviewsCarousel'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <AboutSection />
      <BranchesPreview />
      <MenuHighlights />
      <ReviewsCarousel />
    </motion.div>
  )
}
