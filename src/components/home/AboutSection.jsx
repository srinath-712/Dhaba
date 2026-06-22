import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Utensils, Award, Users } from 'lucide-react'

export function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backImgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const frontImgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const stats = [
    { icon: <Award className="text-saffron-500" size={28} />, value: '3+', label: 'Branches' },
    { icon: <Utensils className="text-saffron-500" size={28} />, value: '10+', label: 'Signature Dishes' },
    { icon: <Users className="text-saffron-500" size={28} />, value: '4.0★', label: 'Average Customer Rating' },
  ]

  return (
    <section ref={sectionRef} className="bg-charcoal-900 py-80 px-page">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-64 items-center">

        {/* Story details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
            Our Heritage
          </span>
          <h2 className="text-[36px] md:text-[48px] font-serif font-bold text-white leading-tight mb-24">
            Flavors Born From Flame & Charcoal
          </h2>
          <p className="font-sans text-[16px] text-cream-300 leading-relaxed mb-16">
            At Hotel Sri Punjabi's Dhaba, we preserve the age-old cooking techniques of rural Punjab. Our clay tandoors are fueled exclusively by charcoal, infusing every butter naan and roasted dish with a deep, smoky aroma that gas ovens simply cannot replicate.
          </p>
          <p className="font-sans text-[16px] text-cream-300 leading-relaxed mb-32">
            Every gravy is slowly simmered with fresh ground spices, real butter, and pure cream. From our highway dhaba roots in Gingee to our expanded dining experiences in Kovur and Tiruvannamalai, we bring the soul of the North to the hearts of the South.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-charcoal-800 p-16 rounded-xl border border-charcoal-800/40 shadow-lg text-center">
                <div className="flex justify-center mb-8">{stat.icon}</div>
                <h4 className="text-[24px] font-bold text-white font-serif leading-none mb-4">{stat.value}</h4>
                <p className="text-[12px] text-cream-400 font-sans font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual element with Parallax */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-full min-h-[450px] w-full mt-32 lg:mt-0"
        >
          {/* Main Back Image — parallax upward */}
          <div className="absolute top-0 right-0 w-[75%] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-charcoal-900 aspect-[4/3] bg-charcoal-800 z-10">
            <motion.img
              src="/images/tandoor.png"
              alt="Naan in Tandoor"
              className="w-full h-[115%] object-cover"
              style={{ y: backImgY }}
              loading="lazy"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1585938338392-50a592202c72?w=800&auto=format&fit=crop&q=80' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-16 right-24 text-right text-white">
              <p className="text-[12px] uppercase font-semibold text-turmeric-400 tracking-wider drop-shadow-md">Traditional Clay Oven</p>
            </div>
          </div>

          {/* Secondary Front Image — parallax downward */}
          <div className="absolute bottom-0 left-0 w-[60%] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-charcoal-900 aspect-square bg-charcoal-800 z-20">
            <motion.img
              src="/images/tandoor 2.jpg"
              alt="Tandoori Skewers"
              className="w-full h-[115%] object-cover"
              style={{ y: frontImgY }}
              loading="lazy"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544025162-81134a6212e5?w=800&auto=format&fit=crop&q=80' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-16 left-16 text-white">
              <h3 className="text-[18px] font-serif font-bold drop-shadow-md">Smokey Specialties</h3>
            </div>
          </div>

          {/* Accent decoration */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-saffron-500 rounded-2xl -z-10 opacity-20" />
          <div className="absolute top-[20%] -left-12 w-48 h-48 bg-turmeric-500 rounded-full -z-10 opacity-20 blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}
