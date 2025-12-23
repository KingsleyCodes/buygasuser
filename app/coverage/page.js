'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FiMapPin, 
  FiCheckCircle, 
  FiClock, 
  FiPhone, 
  FiAlertCircle,
  FiChevronRight,
  FiNavigation,
  FiTruck,
  FiCalendar,
  FiMessageSquare,
  FiStar
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function CoveragePage() {
  const [selectedCity, setSelectedCity] = useState('Lagos')
  const [showAllCities, setShowAllCities] = useState(false)

  const coverageData = {
    Lagos: {
      status: 'FULL COVERAGE',
      color: 'bg-green-100 text-green-800',
      areas: ['Lekki', 'Victoria Island', 'Ikeja', 'Surulere', 'Ajah', 'Yaba', 'Gbagada', 'Magodo', 'Ikoyi', 'Maryland'],
      deliveryTime: '60 minutes (emergency)',
      serviceHours: '24/7',
      points: 15,
      nextDelivery: 'Within 24 hours',
      note: 'Most extensive coverage in Lagos',
      popular: true
    },
    Abuja: {
      status: 'FULL COVERAGE',
      color: 'bg-green-100 text-green-800',
      areas: ['Maitama', 'Wuse', 'Garki', 'Asokoro', 'Gwarinpa', 'Kubwa', 'Jabi', 'Utako', 'Central Area'],
      deliveryTime: '90 minutes (emergency)',
      serviceHours: '24/7',
      points: 8,
      nextDelivery: 'Within 24 hours',
      note: 'Covering all major districts'
    },
    'Port Harcourt': {
      status: 'FULL COVERAGE',
      color: 'bg-green-100 text-green-800',
      areas: ['GRA Phase 1-5', 'Rumuola', 'Rumuokoro', 'Trans-Amadi', 'Mile 1-4', 'D-line', 'Old GRA'],
      deliveryTime: '120 minutes (emergency)',
      serviceHours: '6AM - 10PM',
      points: 6,
      nextDelivery: 'Within 48 hours',
      note: 'Expanding to more areas soon'
    },
    Ibadan: {
      status: 'EXPANDING',
      color: 'bg-blue-100 text-blue-800',
      areas: ['Bodija', 'UI/Agbowo', 'Mokola', 'Ring Road', 'Challenge', 'Oke-Ado'],
      deliveryTime: '24 hours',
      serviceHours: '8AM - 8PM',
      points: 4,
      nextDelivery: 'Within 72 hours',
      note: 'Limited coverage areas'
    },
    Kano: {
      status: 'COMING SOON',
      color: 'bg-yellow-100 text-yellow-800',
      areas: ['Nasarawa', 'Fagge', 'Sabon Gari', 'Bompai', 'Gyadi-Gyadi'],
      deliveryTime: 'Not available yet',
      serviceHours: 'Coming Q2 2024',
      points: 0,
      nextDelivery: 'TBA',
      note: 'Launching soon - register interest'
    },
    Benin: {
      status: 'COMING SOON',
      color: 'bg-yellow-100 text-yellow-800',
      areas: ['GRA', 'Ugbowo', 'Ikpoba Hill', 'New Benin', 'Ring Road'],
      deliveryTime: 'Not available yet',
      serviceHours: 'Coming Q3 2024',
      points: 0,
      nextDelivery: 'TBA',
      note: 'Launching soon - register interest'
    }
  }

  const coverageStats = [
    { value: '10,000+', label: 'Homes Served', icon: <FiCheckCircle />, color: 'text-blue-600' },
    { value: '99.8%', label: 'On-time Delivery', icon: <FiClock />, color: 'text-green-600' },
    { value: '60min', label: 'Avg Emergency Response', icon: <FiAlertCircle />, color: 'text-red-600' },
    { value: '24/7', label: 'Support Available', icon: <FiPhone />, color: 'text-purple-600' }
  ]

  const expansionCities = [
    { name: 'Enugu', timeline: 'Q3 2024', status: 'In Planning', color: 'bg-yellow-50' },
    { name: 'Kaduna', timeline: 'Q3 2024', status: 'In Planning', color: 'bg-yellow-50' },
    { name: 'Abeokuta', timeline: 'Q4 2024', status: 'Survey Phase', color: 'bg-blue-50' },
    { name: 'Warri', timeline: 'Q4 2024', status: 'Survey Phase', color: 'bg-blue-50' },
    { name: 'Uyo', timeline: 'Q1 2025', status: 'Future', color: 'bg-gray-50' },
    { name: 'Calabar', timeline: 'Q1 2025', status: 'Future', color: 'bg-gray-50' }
  ]

  const serviceTypes = [
    {
      type: 'Emergency',
      icon: <FiAlertCircle />,
      description: 'Guaranteed delivery within promised timeframe',
      available: 'Lagos, Abuja, Port Harcourt',
      timeframe: '60-120 minutes',
      color: 'from-red-500 to-red-600'
    },
    {
      type: 'Scheduled',
      icon: <FiCalendar />,
      description: 'Plan your delivery for specific time slots',
      available: 'All covered cities',
      timeframe: '24-48 hours',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Automatic',
      icon: <FiTruck />,
      description: 'Smart sensor-based automatic deliveries',
      available: 'Lagos, Abuja',
      timeframe: 'Before you run out',
      color: 'from-green-500 to-green-600'
    }
  ]

  const checkCoverageSteps = [
    { step: 1, title: 'Enter Your Address', description: 'Type your full address or area name' },
    { step: 2, title: 'Check Availability', description: 'See if we deliver to your location' },
    { step: 3, title: 'Choose Service', description: 'Select emergency, scheduled, or automatic' },
    { step: 4, title: 'Get Started', description: 'Sign up and schedule your first delivery' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-6"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Service Coverage
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Serving Nigeria's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Major Cities</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              We're expanding rapidly across Nigeria. Check if we deliver to your area and explore our service options.
            </motion.p>
            
            {/* Coverage Checker */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Check Your Coverage</h3>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter your address, area, or city"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Check Now
                </button>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <FiAlertCircle className="text-blue-500" />
                Enter your full address for accurate coverage information
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Coverage Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {coverageStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`${stat.color} text-2xl mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* City Selector */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your City</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click on any city to see detailed coverage information and service availability
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {Object.keys(coverageData).slice(0, showAllCities ? undefined : 4).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedCity === city
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {city}
                </button>
              ))}
              
              {!showAllCities && Object.keys(coverageData).length > 4 && (
                <button
                  onClick={() => setShowAllCities(true)}
                  className="px-6 py-3 rounded-lg font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  More Cities <FiChevronRight />
                </button>
              )}
            </div>

            {/* City Details */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedCity}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${coverageData[selectedCity].color}`}>
                      {coverageData[selectedCity].status}
                    </span>
                    {coverageData[selectedCity].popular && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{coverageData[selectedCity].note}</p>
                </div>
                
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <FiMapPin className="text-xl" />
                  <span>{coverageData[selectedCity].points} Service Points</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="text-sm text-gray-500 mb-1">Emergency Delivery</div>
                  <div className="text-xl font-bold text-gray-900">{coverageData[selectedCity].deliveryTime}</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-sm text-gray-500 mb-1">Service Hours</div>
                  <div className="text-xl font-bold text-gray-900">{coverageData[selectedCity].serviceHours}</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-sm text-gray-500 mb-1">Next Available Delivery</div>
                  <div className="text-xl font-bold text-gray-900">{coverageData[selectedCity].nextDelivery}</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className="text-xl font-bold text-green-600">Active</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">Covered Areas in {selectedCity}:</h4>
                <div className="flex flex-wrap gap-2">
                  {coverageData[selectedCity].areas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Available Services
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Types by City</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Different services available depending on your location
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {serviceTypes.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <div className="text-white text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.type}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Available In</div>
                      <div className="font-medium text-gray-900">{service.available}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Timeframe</div>
                      <div className="font-medium text-gray-900">{service.timeframe}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expansion Plans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expansion Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're working hard to bring our services to more Nigerian cities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expansionCities.map((city, index) => (
                <div key={index} className={`${city.color} rounded-xl p-6`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{city.name}</h4>
                    <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">
                      {city.timeline}
                    </span>
                  </div>
                  <div className="text-gray-600 mb-4">{city.status}</div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
                    Notify Me <FiChevronRight />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* How to Check Coverage */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Check Coverage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple steps to see if we deliver to your location
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {checkCoverageSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < checkCoverageSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <FiChevronRight className="text-gray-300 text-2xl" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Not in a Covered Area Yet?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Register your interest and be the first to know when we launch in your city. We're expanding rapidly!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-blue-500/30 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all">
                  Notify Me
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-300" />
                  <span>10,000+ people on waiting list</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  <span>We'll notify you before launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}