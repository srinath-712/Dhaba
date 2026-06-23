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
          <p className="text-[13px] text-cream-400 leading-relaxed mb-20">
            Bringing the authentic charcoal-smoked, rich tandoori culinary flavors of Punjab directly to Tamil Nadu. Pure ingredients, traditional recipes, unmatched hospitality.
          </p>
          {/* Social links */}
          <div className="flex gap-12">
            <a
              href="https://www.instagram.com/sripunjabisdhaba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[36px] h-[36px] rounded-lg bg-charcoal-700 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 flex items-center justify-center text-cream-400 hover:text-white transition-all duration-200"
            >
              {/* Instagram icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/sripunjabisdhaba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-[36px] h-[36px] rounded-lg bg-charcoal-700 hover:bg-blue-600 flex items-center justify-center text-cream-400 hover:text-white transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.zomato.com/search?q=sri+punjabis+dhaba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zomato"
              className="w-[36px] h-[36px] rounded-lg bg-charcoal-700 hover:bg-[#E23744] flex items-center justify-center text-cream-400 hover:text-white transition-all duration-200 text-[13px] font-bold font-sans"
            >
              Z
            </a>
          </div>
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
