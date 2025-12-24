'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause, FiCheck, FiClock, FiShield, FiMapPin, FiPhone, FiDollarSign, FiPieChart, FiTrendingUp, FiSmartphone } from 'react-icons/fi'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loadedImages, setLoadedImages] = useState({})
  const [hasMounted, setHasMounted] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Never Run Out of Cooking Gas",
      subtitle: "Pay For What You Use Only",
      description: "Deploying Smart IoT meters with dual-subscription model (Prepaid and Postpaid) for B2B/B2C consumption.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-blue-900/70 via-blue-800/50 to-transparent",
      overlay: "from-blue-600/20 via-blue-500/10 to-transparent",
      features: ["IoT Smart Meters", "Dual-Subscription", "Real-time Tracking"],
      cta: "Get Started",
      ctaLink: "/services"
    },
    {
      id: 2,
      title: "Prepaid PAYG",
      subtitle: "Overcome Lump-Sum Costs",
      description: "Micro-payments model enabling affordable gas usage at N10,000 – N25,000 (12.5kg) refill cost barrier.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      gradient: "from-purple-900/70 via-purple-800/50 to-transparent",
      overlay: "from-purple-600/20 via-purple-500/10 to-transparent",
      features: ["Micro-Payments", "Affordable Usage", "Flexible Payment"],
      cta: "Prepaid Plans",
      ctaLink: "/prepaid"
    },
    {
      id: 3,
      title: "Business Solutions",
      subtitle: "Cost Control & Automated Supply",
      description: "Postpaid Smart-as-a-Service for SMEs with precise consumption tracking and automated delivery.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      gradient: "from-teal-900/70 via-teal-800/50 to-transparent",
      overlay: "from-teal-600/20 via-teal-500/10 to-transparent",
      features: ["Cost Control", "Automated Supply", "B2B Tracking"],
      cta: "Business Plans",
      ctaLink: "/business"
    },
    {
      id: 4,
      title: "Technology Platform",
      subtitle: "Digital LPG Distribution",
      description: "IoT Digital Platform with Smart Meters, QR tagging, cloud analytics, and route optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-indigo-900/70 via-indigo-800/50 to-transparent",
      overlay: "from-indigo-600/20 via-indigo-500/10 to-transparent",
      features: ["IoT Platform", "Cloud Analytics", "Digital Tracking"],
      cta: "Technology",
      ctaLink: "/technology"
    }
  ]

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning, slides.length])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning, slides.length])

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [currentSlide, isTransitioning])

  // Fix hydration by ensuring random particles only render on client
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [slide.id]: true }))
      }
    })
  }, [slides])

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = document.querySelector('.parallax-bg')
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main Slideshow Container */}
      <div className="absolute inset-0">
        {/* Animated Background Particles - Hydration Fix Applied Here */}
        <div className="absolute inset-0 z-0">
          {hasMounted && [...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Loading State */}
            <div className="absolute inset-0 parallax-bg">
              {!loadedImages[slide.id] && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 animate-pulse" />
              )}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  opacity: loadedImages[slide.id] ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out'
                }}
              />
            </div>

            {/* Multi-layer Gradient Overlays */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay} animate-pulse-slow`} />
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '60px 60px'
                }}
              />
            </div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.3) 100%),
                    linear-gradient(180deg, transparent 95%, rgba(255,255,255,0.3) 100%)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium text-sm sm:text-base">Disrupting Nigerian LPG Market</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
                  {slides[currentSlide].title}
                </span>
                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed animate-slide-in">
                {slides[currentSlide].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {slides[currentSlide].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={slides[currentSlide].ctaLink}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {slides[currentSlide].cta}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-center group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FiPhone className="group-hover:scale-110 transition-transform" />
                    Support: +234 902 350 5265
                  </span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { value: '75+', label: 'IoT Units Deployed' },
                  { value: 'Prepaid', label: 'Household Model' },
                  { value: 'Postpaid', label: 'Business Model' },
                  { value: 'IoT', label: 'Technology' }
                ].map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100 + 400}ms` }}>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="relative mx-auto w-64 h-96">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                    <div className="relative mx-auto w-40 h-64">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 rounded-t-2xl rounded-b-3xl shadow-2xl">
                        {/* IoT Meter Display */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-cyan-400 font-mono">IoT METER</span>
                        </div>
                        {/* Consumption Level */}
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="relative h-48">
                            <div 
                              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 bg-gradient-to-t from-blue-500/80 via-cyan-500/60 to-transparent rounded-b-3xl transition-all duration-1000"
                              style={{ height: `${(currentSlide + 1) * 25}%` }}
                            >
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse" />
                            </div>
                            {/* Data Points */}
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-3 h-3 bg-cyan-400/50 rounded-full animate-bounce"
                                style={{
                                  bottom: `${20 + i * 30}%`,
                                  left: `${30 + i * 20}%`,
                                  animationDelay: `${i * 0.2}s`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        {/* Meter Center */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-full flex items-center justify-center">
                          <FiSmartphone className="text-white text-xs" />
                        </div>
                      </div>
                      {/* IoT Badge */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse flex items-center justify-center">
                        <span className="text-white text-xs font-bold">IoT</span>
                      </div>
                      {/* PAYG Badge */}
                      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                        <FiDollarSign className="text-white text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Savings Badge */}
                  <div className="absolute -top-6 -left-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-slide-in">
                    <div className="text-2xl font-bold text-white">
                      <FiTrendingUp className="inline mr-2" />
                      PAYG
                    </div>
                    <div className="text-white/70 text-sm">Micro-Payments</div>
                  </div>
                  
                  {/* Cost Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                    <div className="text-2xl font-bold text-white">
                      <FiPieChart className="inline mr-2" />
                      Cost
                    </div>
                    <div className="text-white/70 text-sm">Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <FiPause className="text-white text-xl" /> : <FiPlay className="text-white text-xl" />}
          </button>

          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 disabled:opacity-50 border border-white/20"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-white text-2xl" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 disabled:opacity-50 border border-white/20"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </section>
  )
}