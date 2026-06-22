import React from 'react'
import { Link } from 'react-router-dom'
import { Flame, Clock, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-200 px-page py-40 md:py-64 border-t border-charcoal-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-40">

        {/* Brand details */}
        <div>
          <Link to="/" className="flex items-center gap-8 mb-16">

            <div>
              <h2 className="font-serif font-bold text-[20px] leading-none text-white">
                Sri Punjabi's
              </h2>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-saffron-500">
                Dhaba
              </span>
            </div>
          </Link>
          <p className="text-[14px] text-cream-400 leading-relaxed">
            Bringing the authentic charcoal-smoked, rich tandoori culinary flavors of Punjab directly to Tamil Nadu. Pure ingredients, traditional recipes, unmatched hospitality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[18px] font-serif font-semibold text-white mb-20">Navigation</h3>
          <ul className="space-y-12 text-[14px] font-sans font-medium text-cream-300">
            <li><Link to="/menu" className="hover:text-saffron-500 transition-colors">Explore Menu</Link></li>
            <li><Link to="/branches" className="hover:text-saffron-500 transition-colors">Our Branches</Link></li>
            <li><Link to="/reviews" className="hover:text-saffron-500 transition-colors">Customer Reviews</Link></li>
            <li><Link to="/gallery" className="hover:text-saffron-500 transition-colors">Food Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-saffron-500 transition-colors">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="text-[18px] font-serif font-semibold text-white mb-20">Opening Hours</h3>
          <ul className="space-y-12 text-[14px] text-cream-300">
            <li className="flex items-start gap-12">
              <Clock size={16} className="text-turmeric-500 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">All Branches</p>
                <p className="text-[13px] text-cream-400">Monday - Sunday: 11:00 AM - 11:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-12">
              <Clock size={16} className="text-turmeric-500 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Festivals & Holidays</p>
                <p className="text-[13px] text-cream-400">Open early (Tiruvannamalai Special)</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="text-[18px] font-serif font-semibold text-white mb-20">Contact Info</h3>
          <ul className="space-y-16 text-[14px] text-cream-300">
            <li className="flex items-start gap-12">
              <MapPin size={16} className="text-saffron-500 shrink-0 mt-1" />
              <span>Gingee-Tindivanam Rd, Gingee, Tamil Nadu, 604202</span>
            </li>
            <li className="flex items-start gap-12">
              <Phone size={16} className="text-saffron-500 shrink-0 mt-1" />
              <span>+91 99941 21133</span>
            </li>
            <li className="flex items-start gap-12">
              <Mail size={16} className="text-saffron-500 shrink-0 mt-1" />
              <span>info@sripunjabisdhaba.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-charcoal-700/60 mt-48 pt-24 flex flex-col md:flex-row justify-between items-center text-[12px] text-cream-500 gap-16 font-sans">
        <p>© {new Date().getFullYear()} Hotel Sri Punjabi's Dhaba. All rights reserved.</p>
        <p className="flex gap-16">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
        </p>
      </div>
    </footer>
  )
}
