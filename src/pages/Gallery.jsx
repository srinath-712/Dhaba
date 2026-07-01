import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Folder, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/layout/SEO'

export default function Gallery() {
  const [selectedAlbumId, setSelectedAlbumId] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const albums = [
    {
      id: 'dishes',
      title: 'Signature Dishes',
      thumbnail: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80',
      description: 'A visual taste of our finest North Indian delicacies.',
      images: [
        { id: 'd1', title: 'Rich Butter Chicken', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80', description: 'Rich tomato, cream, and butter slow-cooked curry.' },
        { id: 'd2', title: 'Paneer Butter Masala', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80', description: 'Cubes of fresh cottage cheese simmered in buttery cashew paste gravy.' },
        { id: 'd6', title: 'Special Leaf Meals', image: '/images/gallery/dish-banana-leaf.png', description: 'Traditional meals served on a fresh banana leaf.' }
      ]
    },
    {
      id: 'classic-dishes',
      title: 'Classic Dishes',
      thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
      description: 'Everyday favorites prepared with authentic spices.',
      images: [
        { id: 'd3', title: 'Tandoori Platters', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=80', description: 'Smokey chicken starters served fresh with mint chutney.' },
        { id: 'd4', title: 'Hot Garlic Roti', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&auto=format&fit=crop&q=80', description: 'Wheat flatbread topped with toasted garlic and fresh ghee.' },
        { id: 'd5', title: 'Spicy Masala Gravies', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', description: 'Slow-simmered regional mutton masala dry.' }
      ]
    },
    {
      id: 'cooking',
      title: 'Tandoor Cooking',
      thumbnail: '/images/tandoor 2.jpg',
      description: 'Witness the heat and smoke of our traditional clay ovens.',
      images: [
        { id: 'c1', title: 'Traditional Charcoal Flame', image: '/images/tandoor.png', description: 'Genuine charcoal fires providing our signature smoky flavors.' },
        { id: 'c2', title: 'Tandoori Skewers', image: '/images/tandoor 2.jpg', description: 'Delicious chicken and vegetable skewers roasted in the tandoor.' }
      ]
    },
    {
      id: 'ambiance',
      title: 'Restaurant Ambiance',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      description: 'Experience the warm, rustic dining spaces we offer.',
      images: [
        { id: 'a1', title: 'Dhaba Outdoor Seating', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80', description: 'Authentic rustic spaces built for families to dine comfortably.' },
        { id: 'a2', title: 'Rustic Kitchen Prep', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80', description: 'Authentic clay pots and traditional kitchenware setup.' }
      ]
    },
    {
      id: 'customers',
      title: 'Happy Customers',
      thumbnail: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80',
      description: 'Memories created with our wonderful guests.',
      images: [
        { id: 'cust1', title: 'Family Dinner', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80', description: 'A beautiful evening filled with joy and great food.' },
        { id: 'cust2', title: 'Gatherings', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80', description: 'Celebrating special moments at our dhaba.' }
      ]
    }
  ]

  const selectedAlbum = albums.find(a => a.id === selectedAlbumId)
  const lightboxImages = selectedAlbum?.images ?? []

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex(i => (i - 1 + lightboxImages.length) % lightboxImages.length)
  const nextImage = () => setLightboxIndex(i => (i + 1) % lightboxImages.length)

  // Keyboard nav
  React.useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, lightboxImages.length])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 px-page bg-charcoal-900 min-h-screen"
    >
      <SEO 
        title="Photo Gallery | Authentic Punjabi Food & Ambiance"
        description="A visual tour of our smoky clay oven tandoor cooking, signature butter chicken, and warm family dining spaces in Kovur, Gingee, and Tiruvannamalai."
        keywords="Punjabi Dhaba Photos, Tandoori Chicken Gallery, Restaurant Ambiance, Food Photos"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-32 md:mb-48">
          <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
            Visual Experience
          </span>
          <h1 className="text-[36px] md:text-[44px] font-serif font-bold text-white mb-16">
            Dhaba Food Gallery
          </h1>
          <p className="text-[16px] text-cream-300 font-sans">
            Explore our curated collections of smoking clay ovens, authentic dish presentations, and friendly local dining spaces.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedAlbumId ? (
            /* Albums Grid */
            <motion.div
              key="albums-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-32"
            >
              {albums.map((album) => (
                <motion.div
                  key={album.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedAlbumId(album.id)}
                  className="bg-charcoal-800 rounded-xl overflow-hidden shadow-lg border border-charcoal-800/40 cursor-pointer group hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-900">
                    <img
                      src={album.thumbnail}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/30 to-transparent" />
                    <div className="absolute top-16 right-16 bg-charcoal-950/80 backdrop-blur-md px-12 py-6 rounded-full border border-white/10 flex items-center gap-6 text-cream-200">
                      <ImageIcon size={14} className="text-saffron-500" />
                      <span className="text-[12px] font-medium font-sans">{album.images.length} Photos</span>
                    </div>
                    <div className="absolute bottom-20 left-20 right-20">
                      <div className="flex items-center gap-12 mb-8">
                        <Folder size={20} className="text-turmeric-400" />
                        <h3 className="text-[22px] font-serif font-bold text-white">{album.title}</h3>
                      </div>
                      <p className="text-[13px] text-cream-300 font-sans leading-relaxed line-clamp-2">
                        {album.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Inside Album View */
            <motion.div
              key="album-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-16 border-b border-charcoal-800/60 pb-20">
                <div>
                  <button
                    onClick={() => setSelectedAlbumId(null)}
                    className="flex items-center gap-8 text-[14px] font-medium text-cream-400 hover:text-saffron-500 transition-colors mb-12"
                  >
                    <ArrowLeft size={16} /> Back to Albums
                  </button>
                  <h3 className="text-[28px] font-serif font-bold text-white flex items-center gap-12">
                    <Folder size={24} className="text-turmeric-500" />
                    {selectedAlbum.title}
                  </h3>
                </div>
                <div className="text-[13px] text-cream-300 bg-charcoal-800 px-16 py-8 rounded-full border border-charcoal-700">
                  {selectedAlbum.images.length} Photos
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
                {selectedAlbum.images.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => openLightbox(idx)}
                    className="bg-charcoal-800 rounded-lg overflow-hidden shadow-lg border border-charcoal-800/30 group cursor-pointer hover:border-saffron-500/50 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80' }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-charcoal-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-20 text-white">
                        <h4 className="text-[18px] font-serif font-bold text-white mb-4">{item.title}</h4>
                        <p className="text-[13px] text-cream-200 font-sans leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm px-16"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-20 right-20 bg-charcoal-800/80 hover:bg-saffron-500 text-white rounded-full p-10 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-16 md:left-32 bg-charcoal-800/80 hover:bg-saffron-500 text-white rounded-full p-12 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={lightboxImages[lightboxIndex]?.image}
                alt={lightboxImages[lightboxIndex]?.title}
                className="w-full max-h-[80vh] object-contain bg-charcoal-950"
              />
              <div className="bg-charcoal-900/95 px-24 py-16 flex items-center justify-between">
                <div>
                  <h4 className="text-[18px] font-serif font-bold text-white">{lightboxImages[lightboxIndex]?.title}</h4>
                  <p className="text-[13px] text-cream-300 font-sans mt-4">{lightboxImages[lightboxIndex]?.description}</p>
                </div>
                <span className="text-[13px] text-cream-400 shrink-0 ml-16">{lightboxIndex + 1} / {lightboxImages.length}</span>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-16 md:right-32 bg-charcoal-800/80 hover:bg-saffron-500 text-white rounded-full p-12 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
