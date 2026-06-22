import React from 'react'

export function ReviewCard({ review, showBranch = false }) {
  return (
    <div className="bg-charcoal-800 p-20 rounded-lg border border-charcoal-800/30 border-l-[3px] border-l-turmeric-500 shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
      <div>
        {/* Large Quote Mark */}
        <p className="font-serif text-[36px] text-turmeric-500 leading-[0.8] mb-4">
          "
        </p>

        {/* Testimonial Text */}
        <p className="text-cream-300 text-[12px] font-sans italic leading-[1.6] mb-12">
          {review.comment}
        </p>
      </div>

      <div className="pt-8 border-t border-charcoal-900/60">
        {/* Author */}
        <h4 className="font-sans font-semibold text-white text-[11px] tracking-[0.06em] uppercase">
          {review.author}
        </h4>

        {/* Outlet Branch Tag */}
        <span className="text-[10px] text-saffron-500 font-sans capitalize mt-2 block">
          {review.branchSlug} Branch · Dine-in Guest
        </span>
      </div>
    </div>
  )
}
