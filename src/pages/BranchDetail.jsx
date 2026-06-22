import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowLeft, CheckCircle } from 'lucide-react'
import branchesData from '../data/branches.json'
import reviewsData from '../data/reviews.json'
import { ReviewCard } from '../components/reviews/ReviewCard'
import { StarRating } from '../components/ui/StarRating'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function BranchDetail() {
  const { slug } = useParams()
  const branch = branchesData.find((b) => b.slug === slug)
  
  if (!branch) {
    return (
      <div className="py-80 px-page bg-cream-50 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h3 className="text-[28px] font-serif font-semibold text-charcoal-800">Branch Not Found</h3>
        <p className="text-charcoal-500 font-sans mt-8 mb-24 max-w-sm">
          The branch you are looking for doesn't seem to exist or has moved.
        </p>
        <Link to="/branches">
          <Button variant="primary">
            <ArrowLeft size={16} /> Back to Branches
          </Button>
        </Link>
      </div>
    )
  }

  // Filter reviews matching this specific branch slug
  const branchReviews = reviewsData.filter((r) => r.branchSlug === slug)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 bg-charcoal-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-page">
        {/* Back Link */}
        <Link to="/branches" className="inline-flex items-center gap-8 text-saffron-500 hover:text-saffron-700 transition-colors font-medium mb-32">
          <ArrowLeft size={16} /> Back to Outlets
        </Link>

        {/* Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-40 items-start mb-64">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-charcoal-800 p-24 md:p-32 rounded-lg border border-charcoal-800/40 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="mb-16 flex flex-wrap gap-8">
                <Badge variant={branch.type.toLowerCase().includes('dhaba') ? 'turmeric' : 'saffron'}>
                  {branch.type}
                </Badge>
                <Badge variant="veg">
                  Open now
                </Badge>
              </div>
              <h2 className="text-[32px] md:text-[36px] font-serif font-semibold text-white leading-tight mb-8">
                {branch.name}
              </h2>
              <div className="flex items-center gap-12 mb-24">
                <StarRating rating={branch.rating} size={16} />
                <span className="text-[13px] text-cream-400">({branch.reviewCount} total ratings)</span>
              </div>

              {/* Specific detail list */}
              <div className="space-y-20 border-t border-b border-charcoal-900/60 py-24 my-24 font-sans text-[15px] text-cream-200">
                <div className="flex items-start gap-16">
                  <MapPin size={20} className="text-saffron-500 shrink-0 mt-[2px]" />
                  <div>
                    <h4 className="font-semibold text-white text-[16px]">Address</h4>
                    <p className="mt-4 leading-relaxed text-cream-300">{branch.address}</p>
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-saffron-500 hover:underline inline-block mt-4 text-[13px] font-medium"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-16">
                  <Clock size={20} className="text-saffron-500 shrink-0 mt-[2px]" />
                  <div>
                    <h4 className="font-semibold text-white text-[16px]">Opening Hours</h4>
                    <p className="mt-4 text-cream-300">{branch.hours}</p>
                    <p className="text-[12px] text-cream-400 mt-2">Monday - Sunday</p>
                  </div>
                </div>

                <div className="flex items-start gap-16">
                  <Phone size={20} className="text-saffron-500 shrink-0 mt-[2px]" />
                  <div>
                    <h4 className="font-semibold text-white text-[16px]">Phone Details</h4>
                    <p className="mt-4 text-cream-300">{branch.phone || 'No direct phone number listed'}</p>
                  </div>
                </div>
              </div>

              {/* Service flags */}
              <div className="mb-24">
                <h4 className="font-sans font-semibold text-white text-[15px] mb-12">Services Available</h4>
                <div className="flex flex-wrap gap-8">
                  {branch.services.map((service, index) => {
                    let variant = 'charcoal';
                    if (service.toLowerCase() === 'dine-in') variant = 'saffron';
                    if (service.toLowerCase() === 'delivery') variant = 'veg';
                    return (
                      <Badge key={index} variant={variant} isTag={true}>
                        {service}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>

            <Link to="/menu" className="w-full">
              <Button variant="primary" className="w-full">Explore Menu for this Branch</Button>
            </Link>
          </div>

          {/* Maps Iframe */}
          <div className="lg:col-span-7 bg-charcoal-800 p-12 rounded-lg border border-charcoal-800/40 shadow-lg overflow-hidden h-[350px] md:h-[450px] lg:h-[520px]">
            <iframe
              title={`${branch.name} Location Map`}
              src={branch.mapsEmbedUrl}
              className="w-full h-full rounded-md border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Filtered Testimonials */}
        <div>
          <h3 className="text-[28px] font-serif font-semibold text-white mb-32">
            Reviews for this Outlet
          </h3>
          {branchReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {branchReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="bg-charcoal-800 p-32 rounded-lg border border-charcoal-800/30 shadow-lg text-center py-48">
              <p className="text-cream-300 font-sans italic">
                No local reviews written yet for this branch. Feel free to leave yours through the contact form!
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
