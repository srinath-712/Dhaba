import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageSquare, Plus } from 'lucide-react'
import reviewsData from '../data/reviews.json'
import branchesData from '../data/branches.json'
import { ReviewCard } from '../components/reviews/ReviewCard'
import { Button } from '../components/ui/Button'

export default function Reviews() {
  const [selectedBranch, setSelectedBranch] = useState('all')

  const filteredReviews = useMemo(() => {
    if (selectedBranch === 'all') return reviewsData
    return reviewsData.filter((r) => r.branchSlug === selectedBranch)
  }, [selectedBranch])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 px-page bg-charcoal-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 md:mb-48 gap-24">
          <div>
            <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
              Guest Testimonials
            </span>
            <h2 className="text-[36px] md:text-[44px] font-serif font-bold text-white">
              Customer Reviews
            </h2>
            <p className="text-[16px] text-cream-300 font-sans mt-8">
              Read real dining reviews from customers across all our outlets in Chennai and Tamil Nadu.
            </p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button variant="primary" className="group text-[15px]">
              <Plus size={16} /> Share Your Experience
            </Button>
          </Link>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-charcoal-800 p-16 rounded-lg border border-charcoal-800/40 shadow-lg mb-40 flex flex-col sm:flex-row sm:items-center justify-between gap-16 font-sans">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 w-full sm:w-auto">
            <span className="text-[14px] text-cream-200 font-medium whitespace-nowrap">Filter by Outlet:</span>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full sm:w-auto px-12 md:px-16 py-8 rounded-md bg-charcoal-900 border border-charcoal-900/60 focus:outline-none focus:border-saffron-500 text-[14px] font-medium text-white cursor-pointer"
            >
              <option value="all">All Outlets</option>
              {branchesData.map((branch) => (
                <option key={branch.id} value={branch.slug}>
                  {branch.name} ({branch.city})
                </option>
              ))}
            </select>
          </div>

          <div className="text-[14px] text-cream-300">
            Showing <strong className="text-white">{filteredReviews.length}</strong> reviews
          </div>
        </div>

        {/* Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          <AnimatePresence mode="popLayout">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ReviewCard review={review} showBranch={selectedBranch === 'all'} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-64 flex flex-col items-center justify-center text-center bg-charcoal-800 border-none rounded-lg p-24">
                <MessageSquare size={40} className="text-cream-400 mb-16" />
                <h3 className="text-[20px] font-serif font-semibold text-white">No Reviews Written Yet</h3>
                <p className="text-[14px] text-cream-300 mt-4 max-w-sm">
                  Be the first one to share a review for this outlet! Go to our contact page and submit your form feedback.
                </p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
