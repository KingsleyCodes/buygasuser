'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  FiTruck, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin, 
  FiChevronRight,
  FiClock,
  FiShield,
  FiAward,
  FiCheckCircle,
  FiSend
} from 'react-icons/fi'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration mismatch for the year
  useEffect(() => {
    setMounted(true)
  }, [])

  const footerLinks = {
    Services: [
      { name: 'Automatic Delivery', href: '/services/automatic', description: 'Smart sensor-based delivery' },
      { name: 'Emergency Service', href: '/services/emergency', description: '60-minute guaranteed delivery' },
      { name: 'Scheduled Delivery', href: '/services/scheduled', description: 'Plan your deliveries' },
      { name: 'Business Solutions', href: '/services/business', description: 'For restaurants & businesses' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Coverage Area', href: '/coverage' },
      { name: 'Safety Tips', href: '/safety' },
      { name: 'Contact Us', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Safety Standards', href: '/safety-standards' },
    ]
  }

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ]

  const trustBadges = [
    { icon: <FiShield />, text: 'Safety Certified', description: 'ISO Certified' },
    { icon: <FiAward />, text: 'Best in Service', description: '2024 Award' },
    { icon: <FiClock />, text: '24/7 Support', description: 'Always Available' },
    { icon: <FiCheckCircle />, text: '10,000+ Homes', description: 'Trusted Nationwide' },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Primary Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, #3b82f6 100%),
                             linear-gradient(180deg, transparent 95%, #3b82f6 100%)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Floating Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-blue-600/5 backdrop-blur-md border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <FiSend className="text-white text-sm sm:text-base" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Stay Updated</h3>
                </div>
                <p className="text-blue-100/80 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                  Subscribe to get exclusive offers, safety tips, and smart gas management insights delivered to your inbox.
                </p>
              </div>
              
              <div className="w-full">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                    {!isSubscribed && <FiChevronRight />}
                  </button>
                </form>
                <p className="text-blue-300/50 text-xs mt-3 text-center sm:text-left">
                  By subscribing, you agree to our Privacy Policy. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Column - Brand & Contact */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <FiTruck className="text-white text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight">BuyGas</span>
                  <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold">Smart Delivery</span>
                </div>
              </div>
              
              <p className="text-blue-100/70 mb-8 max-w-sm leading-relaxed">
                Never run out of gas again. Our smart monitoring and automatic delivery 
                system ensures you always have gas when you need it, delivered safely.
              </p>

              <div className="space-y-4 mb-8">
                <a href="tel:1800289427" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FiPhone className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-400 font-bold uppercase">Emergency 24/7</div>
                    <div className="text-white font-medium">1-800-BUY-GAS</div>
                  </div>
                </a>
                
                <a href="mailto:support@buygas.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FiMail className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-400 font-bold uppercase">Support Email</div>
                    <div className="text-white font-medium">support@buygas.com</div>
                  </div>
                </a>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Footer Links */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{category}</h4>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-blue-100/60 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                          <FiChevronRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/5 pt-12 mb-12">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl text-blue-500">{badge.icon}</div>
                <div>
                  <div className="text-white font-bold text-sm">{badge.text}</div>
                  <div className="text-blue-300/50 text-xs">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
            <div className="text-center md:text-left">
              <p className="text-blue-100/40 text-sm">
                © {mounted ? new Date().getFullYear() : '2025'} BuyGas. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 text-xs font-bold uppercase">System Online</span>
              </div>
              <span className="text-blue-100/40 text-sm">🇳🇬 Serving Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-500 transition-all hover:-translate-y-1"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}