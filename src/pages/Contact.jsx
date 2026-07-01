import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { Send, MapPin, Phone, Clock } from 'lucide-react'
import branchesData from '../data/branches.json'
import { sendContactForm } from '../lib/emailjs'
import { Button } from '../components/ui/Button'
import SEO from '../components/layout/SEO'

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    selected_branch: 'kovur',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    try {
      // Send message via EmailJS helper
      await sendContactForm({
        from_name: formData.user_name,
        reply_to: formData.user_email,
        phone: formData.user_phone,
        branch: formData.selected_branch,
        message: formData.message,
      })
      toast.success('Your message has been sent successfully!')
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        selected_branch: 'kovur',
        message: '',
      })
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please configure your environment variables.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 bg-charcoal-900 min-h-screen"
    >
      <SEO 
        title="Contact & Catering | Villupuram, Tindivanam & Chennai Highway"
        description="Get in touch with Hotel Sri Punjabi's Dhaba. Inquire about bulk outdoor catering or party bookings in Villupuram, Tindivanam, Gingee, and Tiruvannamalai."
        keywords="Best Punjabi Restaurant Villupuram, North Indian Restaurant Villupuram, Family Restaurant Villupuram, Best Restaurant Villupuram, Best Punjabi Restaurant Tindivanam, North Indian Restaurant Tindivanam, Family Restaurant Tindivanam, Authentic Punjabi Food in Villupuram, Best Restaurant for Families in Villupuram"
      />
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-page">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-32 md:mb-48">
          <span className="text-[12px] font-sans font-bold uppercase tracking-wider text-saffron-500 mb-8 block">
            Get in Touch
          </span>
          <h1 className="text-[36px] md:text-[44px] font-serif font-bold text-white">
            Contact & Feedback
          </h1>
          <p className="text-[16px] text-cream-300 font-sans mt-8">
            Have a question, feedback, or catering query? Select your preferred outlet and reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-40 items-start">
          {/* Outlets detail list */}
          <div className="lg:col-span-5">
            <h3 className="text-[24px] font-serif font-semibold text-white mb-16">Our Outlets</h3>
            <div className="flex overflow-x-auto lg:flex-col snap-x snap-mandatory gap-16 lg:gap-24 pb-24 lg:pb-0 -mx-page px-page lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {branchesData.map((branch) => (
                <div key={branch.id} className="shrink-0 w-[85vw] sm:w-[320px] lg:w-auto snap-center bg-charcoal-800 p-24 rounded-lg border border-charcoal-800/40 shadow-lg font-sans">
                  <h4 className="text-[18px] font-serif font-bold text-white mb-12">{branch.name}</h4>
                <div className="space-y-12 text-[14px] text-cream-300">
                  <p className="flex items-start gap-12">
                    <MapPin size={16} className="text-saffron-500 shrink-0 mt-1" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="flex items-center gap-12">
                    <Phone size={16} className="text-saffron-500 shrink-0" />
                    <span>{branch.phone || 'No direct phone listing'}</span>
                  </p>
                  <p className="flex items-center gap-12">
                    <Clock size={16} className="text-saffron-500 shrink-0" />
                    <span>{branch.hours}</span>
                  </p>
                </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form card */}
          <div className="lg:col-span-7 bg-charcoal-800 p-24 md:p-32 rounded-lg border border-charcoal-800/40 shadow-lg">
            <h3 className="text-[24px] font-serif font-semibold text-white mb-8">Send Us a Message</h3>
            <p className="text-[14px] font-sans text-cream-300 mb-24">
              Your inquiries are directly sent to the owner's mailbox. We usually reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-20 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Name */}
                <div className="flex flex-col gap-6">
                  <label htmlFor="user_name" className="text-[13px] font-semibold text-cream-200">Full Name *</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] text-white"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-6">
                  <label htmlFor="user_email" className="text-[13px] font-semibold text-cream-200">Email Address *</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Phone */}
                <div className="flex flex-col gap-6">
                  <label htmlFor="user_phone" className="text-[13px] font-semibold text-cream-200">Phone Number</label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] text-white"
                  />
                </div>
                {/* Branch Selection */}
                <div className="flex flex-col gap-6">
                  <label htmlFor="selected_branch" className="text-[13px] font-semibold text-cream-200">Related Outlet</label>
                  <select
                    id="selected_branch"
                    name="selected_branch"
                    value={formData.selected_branch}
                    onChange={handleChange}
                    className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 text-[15px] cursor-pointer text-white"
                  >
                    {branchesData.map((branch) => (
                      <option key={branch.id} value={branch.slug}>
                        {branch.name} ({branch.city})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-6">
                <label htmlFor="message" className="text-[13px] font-semibold text-cream-200">Message / Inquiry *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us what you would like to ask or share..."
                  className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] resize-none text-white"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-8 text-[15px]"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Send size={16} className={isSubmitting ? 'animate-bounce' : ''} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
