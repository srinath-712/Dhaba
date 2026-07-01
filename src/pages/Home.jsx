import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '../components/home/HeroSection'
import { AboutSection } from '../components/home/AboutSection'
import { BranchesPreview } from '../components/home/BranchesPreview'
import { MenuHighlights } from '../components/home/MenuHighlights'
import { ReviewsCarousel } from '../components/home/ReviewsCarousel'
import SEO from '../components/layout/SEO'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO 
        title="Hotel Sri Punjabi's Dhaba | Best Punjabi & North Indian Restaurant in Tamil Nadu"
        description="Savour authentic Punjabi food at Hotel Sri Punjabi's Dhaba. The best North Indian family restaurant in Tamil Nadu, located on the Chennai Highway (Kovur, Gingee, and Tiruvannamalai)."
        keywords="Hotel Sri Punjabi's Dhaba, Sri Punjabi's Dhaba, Punjabi Dhaba Tamil Nadu, Best Punjabi Restaurant, Authentic Punjabi Food, North Indian Restaurant, Family Restaurant, Highway Restaurant, Veg & Non-Veg Restaurant, Punjabi Restaurant Near Me, Best Dhaba Near Me, Best Family Restaurant between Chennai and Tiruvannamalai"
      />
      <HeroSection />
      <AboutSection />
      <BranchesPreview />
      <MenuHighlights />
      <ReviewsCarousel />
    </motion.div>
  )
}
