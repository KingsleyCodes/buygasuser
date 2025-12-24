'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiSearch } from 'react-icons/fi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Framer Motion Scroll Logic
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      {/* Top Announcement Bar - Hidden on mobile */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">IoT-powered LPG metering solutions</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>24/7 Support</span>
              <a href="tel:+2349023505265" className="font-bold hover:text-blue-100 transition-colors">+234 902 350 5265</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row - All Screen Sizes */}
          <div className="flex items-center justify-between py-4">
            
            {/* Logo - Responsive with larger size */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              {/* Logo Container with larger sizes */}
              <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-18 md:h-18 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden bg-white">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14">
                  <Image
                    src="/logo.png"
                    alt="BIIL GAS Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 56px"
                    priority
                  />
                </div>
              </div>

              {/* Logo Text - Hidden on mobile, shown on larger screens */}
              <div className="flex flex-col">
                {/* Optional: Uncomment if you want text on larger screens */}
                {/* 
                <span className="hidden sm:block text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent tracking-tight">
                  BIIL GAS
                </span>
                */}
                <span className="hidden sm:block text-[10px] xs:text-xs text-gray-500 -mt-0.5 sm:-mt-1">
                  Smart Gas Metering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-5 py-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 group/link"
                  >
                    <span>{link.name}</span>
                    <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Right Side - Search & Invest Button */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 w-40 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href="https://buygas-neon.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 min-w-[140px] text-center"
                >
                  Invest Now
                </a>
              </div>
            </div>

            {/* Tablet & Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <a 
                href="https://buygas-neon.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm min-w-[100px] text-center"
              >
                Invest Now
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <FiX className="text-2xl text-blue-700" />
                ) : (
                  <FiMenu className="text-2xl text-blue-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 animate-slide-in bg-white">
              <div className="p-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {navLinks.map((link) => (
                  <div key={link.name} className="px-4">
                    <Link
                      href={link.href}
                      className="block py-4 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                
                {/* Mobile Menu Invest Now Button */}
                <div className="px-4 py-6">
                  <a 
                    href="https://buygas-neon.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Invest Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Improved Scroll Progress Bar using Framer Motion */}
        <motion.div
          className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 fixed top-0 left-0 right-0 z-[100] origin-left"
          style={{ scaleX }}
        />
      </nav>
    </>
  )
}