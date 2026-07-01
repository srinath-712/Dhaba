import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { Calendar, Clock, Users, MessageSquare, Utensils, Send, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import branchesData from '../data/branches.json'
import { Button } from '../components/ui/Button'

export default function BookTable() {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  const minDate = `${yyyy}-${mm}-${dd}`

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branchSlug: branchesData[0]?.slug || 'kovur',
    date: minDate,
    timeSlot: '7:30 PM',
    guests: 2,
    notes: '',
  })

  const timeSlots = [
    // Lunch
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    // Dinner
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleGuestsChange = (val) => {
    const updated = Math.max(1, Math.min(20, formData.guests + val))
    setFormData({ ...formData, guests: updated })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      toast.error('Please enter your name.')
      return
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast.error('Please enter a valid 10-digit phone number.')
      return
    }
    if (!formData.date) {
      toast.error('Please select a booking date.')
      return
    }

    const selectedBranch = branchesData.find(b => b.slug === formData.branchSlug)
    if (!selectedBranch) {
      toast.error('Selected branch is invalid.')
      return
    }

    // Clean phone number for WhatsApp
    // Format required: digits only, prepend country code 91 if it's a standard Indian number
    let managerPhone = selectedBranch.phone || '+91 99941 21133'
    let digits = managerPhone.replace(/\D/g, '')
    if (digits.startsWith('0') && digits.length === 11) {
      digits = '91' + digits.substring(1)
    } else if (digits.length === 10) {
      digits = '91' + digits
    }

    // Build the message
    const whatsappMessage = `Hello Sri Punjabi's Dhaba (${selectedBranch.name})! I would like to book a table:

👤 Name: ${formData.name.trim()}
📞 Phone: ${formData.phone.trim()}
📅 Date: ${formData.date}
🕒 Time: ${formData.timeSlot}
👥 Guests: ${formData.guests} ${formData.guests === 1 ? 'person' : 'people'}
📝 Special Notes: ${formData.notes.trim() || 'None'}

Please confirm if a table is available. Thank you!`

    const whatsappUrl = `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage)}`
    
    toast.loading('Redirecting to WhatsApp to complete booking...', { duration: 2500 })
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-40 md:py-64 bg-charcoal-900 min-h-screen font-sans"
    >
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-page">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-8 text-saffron-500 hover:text-saffron-700 transition-colors font-medium mb-24">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-40">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-500 mb-8 block">
            Instant Reservation
          </span>
          <h2 className="text-[32px] md:text-[44px] font-serif font-bold text-white">
            Book a Table
          </h2>
          <p className="text-[14px] md:text-[16px] text-cream-300 mt-8 max-w-lg mx-auto leading-relaxed">
            Reserve your table in seconds. Choose your outlet, details, and finalize your booking instantly via WhatsApp with the branch manager.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-charcoal-800 rounded-xl border border-charcoal-800/40 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left panel: Info */}
          <div className="md:col-span-4 bg-charcoal-950/40 p-24 md:p-32 border-b md:border-b-0 md:border-r border-charcoal-900/60 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] font-serif font-semibold text-white mb-16 flex items-center gap-8">
                <Utensils size={18} className="text-saffron-500" />
                Why Book?
              </h3>
              <ul className="space-y-16 text-[13px] text-cream-300">
                <li className="flex gap-8">
                  <span className="text-saffron-500">✔</span>
                  <span><strong>Zero Booking Fees:</strong> 100% free reservations.</span>
                </li>
                <li className="flex gap-8">
                  <span className="text-saffron-500">✔</span>
                  <span><strong>Instant Confirmation:</strong> Chat directly with the branch on WhatsApp.</span>
                </li>
                <li className="flex gap-8">
                  <span className="text-saffron-500">✔</span>
                  <span><strong>Highway Stop Ready:</strong> Let us know when you're arriving so your table is waiting.</span>
                </li>
              </ul>
            </div>

            <div className="mt-32 pt-20 border-t border-charcoal-900/40">
              <p className="text-[11px] text-cream-400 leading-relaxed italic">
                * Note: Your booking request is compiled into a WhatsApp chat. The manager will reply to confirm your reservation.
              </p>
            </div>
          </div>

          {/* Right panel: Form */}
          <form onSubmit={handleSubmit} className="md:col-span-8 p-24 md:p-32 space-y-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {/* Full Name */}
              <div className="flex flex-col gap-6">
                <label htmlFor="name" className="text-[13px] font-semibold text-cream-200">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] text-white"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-6">
                <label htmlFor="phone" className="text-[13px] font-semibold text-cream-200">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  required
                  className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {/* Outlet Selection */}
              <div className="flex flex-col gap-6">
                <label htmlFor="branchSlug" className="text-[13px] font-semibold text-cream-200">Select Outlet *</label>
                <select
                  id="branchSlug"
                  name="branchSlug"
                  value={formData.branchSlug}
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

              {/* Date */}
              <div className="flex flex-col gap-6">
                <label htmlFor="date" className="text-[13px] font-semibold text-cream-200">Booking Date *</label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] text-white [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {/* Time Slot */}
              <div className="flex flex-col gap-6">
                <label htmlFor="timeSlot" className="text-[13px] font-semibold text-cream-200">Preferred Time Slot *</label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 text-[15px] cursor-pointer text-white"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests Selector */}
              <div className="flex flex-col gap-6">
                <label className="text-[13px] font-semibold text-cream-200">Number of Guests *</label>
                <div className="flex items-center bg-charcoal-900 border border-charcoal-900/40 rounded-md p-4">
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(-1)}
                    className="w-36 h-36 flex items-center justify-center text-white bg-charcoal-800 hover:bg-charcoal-700 active:scale-95 rounded text-[18px] font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-white text-[16px]">
                    {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(1)}
                    className="w-36 h-36 flex items-center justify-center text-white bg-charcoal-800 hover:bg-charcoal-700 active:scale-95 rounded text-[18px] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="flex flex-col gap-6">
              <label htmlFor="notes" className="text-[13px] font-semibold text-cream-200">Special Notes (Optional)</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                placeholder="e.g. Baby chair, vegetarian preparation, spice level preference..."
                className="px-16 py-12 rounded-md bg-charcoal-900 border border-charcoal-900/40 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all text-[15px] resize-none text-white"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              className="w-full flex items-center justify-center gap-8 py-14 text-[15px]"
            >
              <span>Book Table via WhatsApp</span>
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
