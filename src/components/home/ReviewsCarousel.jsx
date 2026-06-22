import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import reviewsData from '../../data/reviews.json'

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0)

  // Filter reviews with rating 4 or 5 for home testimonials
  const testimonials = reviewsData.filter(r => r.rating >= 4)

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const current = testimonials[index]

  if (testimonials.length === 0) return null

  return (
    <section className="py-80 px-page bg-charcoal-950 text-white overflow-hidden relative">
      {/* Visual background ember glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-saffron-700/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-12 block">
          Testimonials
        </span>
        <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-white mb-40">
          What Our Foodies Say
        </h2>

        {/* Carousel slide container */}
        <div className="min-h-[220px] flex items-center justify-center mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="px-24 md:px-48"
            >
              {/* Star rating */}
              <div className="flex justify-center gap-4 mb-20">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-turmeric-500 text-turmeric-500" />
                ))}
              </div>

              {/* Quote Comment */}
              <blockquote className="text-[20px] md:text-[24px] font-serif italic text-cream-100 leading-relaxed mb-24 max-w-3xl mx-auto">
                "{current.comment}"
              </blockquote>

              {/* Author info */}
              <cite className="not-italic block">
                <span className="font-sans font-semibold text-white text-[16px] block">{current.author}</span>
                <span className="text-[12px] text-cream-400 font-sans capitalize mt-4 block">
                  {current.branchSlug} Branch Customer
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center items-center gap-24">
          <button
            onClick={handlePrev}
            className="w-40 h-40 rounded-full border border-cream-200/20 flex items-center justify-center hover:bg-white hover:text-charcoal-900 transition-all text-cream-200"
            aria-label="Previous Review"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Progress dots */}
          <div className="flex gap-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-8 h-8 rounded-full transition-all duration-300 ${idx === index ? 'bg-saffron-500 w-24' : 'bg-cream-200/30'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-40 h-40 rounded-full border border-cream-200/20 flex items-center justify-center hover:bg-white hover:text-charcoal-900 transition-all text-cream-200"
            aria-label="Next Review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
