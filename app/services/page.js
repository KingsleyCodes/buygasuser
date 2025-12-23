'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FiZap, 
  FiClock, 
  FiCalendar, 
  FiShield, 
  FiTruck, 
  FiSmartphone, 
  FiBarChart,
  FiCheckCircle,
  FiUsers,
  FiHome,
  FiBriefcase,
  FiMapPin,
  FiPhone,
  FiMessageSquare,
  FiStar,
  FiBattery,
  FiShield as FiSafety,
  FiAlertTriangle
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('residential')
  const [activeFaq, setActiveFaq] = useState(null)

  const mainServices = [
    {
      id: 1,
      icon: <FiZap />,
      title: "Smart Automatic Delivery",
      description: "Our IoT sensors monitor your gas levels 24/7 and automatically schedule deliveries before you run out. Perfect for busy Nigerian homes and businesses.",
      features: [
        "Free smart sensor installation",
        "24/7 real-time monitoring",
        "Automatic delivery scheduling",
        "Usage analytics dashboard",
        "Mobile app notifications"
      ],
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      cta: "Get Smart Sensor",
      price: "₦5,000/month",
      deliveryTime: "24-48 hours",
      bestFor: ["Families", "Busy Professionals", "Businesses"],
      popular: true
    },
    {
      id: 2,
      icon: <FiClock />,
      title: "Emergency Delivery",
      description: "Ran out of gas unexpectedly? Get emergency delivery within 60 minutes in Lagos, Abuja, and Port Harcourt. Available 24/7 including weekends.",
      features: [
        "60-minute guaranteed delivery*",
        "24/7 emergency service",
        "Priority customer support",
        "Live driver tracking",
        "SMS notifications"
      ],
      color: "from-red-500 to-red-600",
      gradient: "bg-gradient-to-br from-red-500 to-red-600",
      cta: "Emergency Order",
      price: "₦1,500 delivery fee",
      deliveryTime: "60 minutes",
      bestFor: ["Emergencies", "Last-minute needs", "Unexpected situations"],
      highlight: "Most Popular"
    },
    {
      id: 3,
      icon: <FiCalendar />,
      title: "Scheduled Delivery",
      description: "Plan your gas deliveries according to your schedule. Choose weekly, bi-weekly, or monthly deliveries with your preferred time slots.",
      features: [
        "Flexible scheduling options",
        "Choose delivery time slots",
        "Recurring order setup",
        "Schedule modifications",
        "Delivery reminders"
      ],
      color: "from-green-500 to-green-600",
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
      cta: "Schedule Delivery",
      price: "Standard delivery rates",
      deliveryTime: "As scheduled",
      bestFor: ["Planners", "Large families", "Regular users"]
    },
    {
      id: 4,
      icon: <FiShield />,
      title: "Business Solutions",
      description: "Tailored gas delivery solutions for Nigerian restaurants, hotels, bakeries, and industrial users with bulk pricing and dedicated support.",
      features: [
        "Bulk delivery discounts",
        "Custom delivery schedules",
        "Dedicated account manager",
        "Monthly consumption reports",
        "Priority emergency service"
      ],
      color: "from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      cta: "Business Inquiry",
      price: "Custom pricing",
      deliveryTime: "Custom schedule",
      bestFor: ["Restaurants", "Hotels", "Industries", "Bakeries"],
      business: true
    }
  ]

  const serviceStats = [
    { value: "50,000+", label: "Deliveries in Nigeria", icon: <FiTruck />, color: "text-blue-600" },
    { value: "60min", label: "Emergency Response Time", icon: <FiClock />, color: "text-red-600" },
    { value: "99.8%", label: "On-time Delivery Rate", icon: <FiCheckCircle />, color: "text-green-600" },
    { value: "24/7", label: "Customer Support", icon: <FiPhone />, color: "text-purple-600" },
    { value: "10+", label: "Nigerian Cities", icon: <FiMapPin />, color: "text-orange-600" },
    { value: "4.9★", label: "Customer Rating", icon: <FiStar />, color: "text-yellow-600" }
  ]

  const useCases = [
    {
      type: "residential",
      title: "For Homes & Families",
      icon: <FiHome />,
      description: "Perfect for Nigerian families who want reliable, safe gas delivery without the hassle of refilling.",
      benefits: [
        "Never run out during cooking",
        "Safe cylinder handling",
        "Budget-friendly plans",
        "Family-sized cylinders available"
      ],
      image: "/images/family-gas.jpg",
      cta: "View Family Plans"
    },
    {
      type: "commercial",
      title: "For Businesses",
      icon: <FiBriefcase />,
      description: "Tailored solutions for restaurants, hotels, and businesses that depend on continuous gas supply.",
      benefits: [
        "Bulk pricing discounts",
        "Priority emergency service",
        "Consumption analytics",
        "Multiple cylinder management"
      ],
      image: "/images/business-gas.jpg",
      cta: "View Business Plans"
    },
    {
      type: "institutional",
      title: "For Schools & Hospitals",
      icon: <FiUsers />,
      description: "Reliable gas supply for institutions that cannot afford interruptions in service.",
      benefits: [
        "Guaranteed supply continuity",
        "Safety compliance",
        "Scheduled maintenance",
        "24/7 technical support"
      ],
      image: "/images/institution-gas.jpg",
      cta: "Institutional Plans"
    }
  ]

  const safetyFeatures = [
    {
      icon: <FiShield />,
      title: "Safety First",
      description: "All our cylinders undergo 15-point safety checks before delivery.",
      color: "bg-blue-50 text-blue-700"
    },
    {
      icon: <FiBattery />,
      title: "Quality Gas",
      description: "We source only from certified Nigerian gas distributors with purity certificates.",
      color: "bg-green-50 text-green-700"
    },
    {
      icon: <FiSafety />,
      title: "Trained Professionals",
      description: "All delivery personnel are certified in safe gas handling and installation.",
      color: "bg-purple-50 text-purple-700"
    },
    {
      icon: <FiAlertTriangle />,
      title: "Emergency Protocol",
      description: "24/7 emergency response team for any safety concerns or leaks.",
      color: "bg-red-50 text-red-700"
    }
  ]

  const faqs = [
    {
      question: "How does the smart sensor work?",
      answer: "Our IoT sensor attaches to your gas cylinder and monitors usage 24/7. It sends real-time data to our system, predicting when you'll run out and automatically schedules a delivery 2-3 days before."
    },
    {
      question: "What areas do you cover in Nigeria?",
      answer: "We currently cover Lagos, Abuja, and Port Harcourt fully. We're expanding to Ibadan, Kano, and Benin City in Q2 2024. Check our coverage page for exact areas."
    },
    {
      question: "Is there a contract or minimum commitment?",
      answer: "No long-term contracts! You can cancel anytime. We offer month-to-month service with no cancellation fees."
    },
    {
      question: "How quickly can I get emergency delivery?",
      answer: "In covered areas of Lagos, Abuja, and Port Harcourt, we guarantee delivery within 60 minutes for emergency orders placed through our app or hotline."
    },
    {
      question: "Do you provide the gas cylinders?",
      answer: "Yes! We provide certified, safety-checked cylinders. You can also use your existing cylinder if it meets our safety standards."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Nigerian context */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-6"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Smart Gas Solutions for Nigeria
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Reliable Gas Delivery
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Across Nigeria</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              From automatic delivery to emergency service, we provide smart gas solutions tailored for Nigerian homes and businesses. Serving major cities with 99.8% reliability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
              >
                Start Free Trial
              </Link>
              <Link
                href="/coverage"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                Check Coverage
              </Link>
            </motion.div>
            
            {/* Emergency Contact Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-red-100 px-6 py-3 rounded-xl border border-red-200"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-gray-700">Emergency?</span>
              <a href="tel:+234800289427" className="font-bold text-red-600 hover:text-red-700">
                Call 0800-BUY-GAS (0800-289-427)
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
              Our Service Plans
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All plans include safe delivery, quality LPG gas, and our satisfaction guarantee.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 ${
                  service.highlight ? 'ring-2 ring-red-500/20' : ''
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold z-10">
                    {service.highlight}
                  </div>
                )}
                
                {/* Service Header */}
                <div className={`${service.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-white text-3xl">
                          {service.icon}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                        <div className="text-white/80 text-sm">{service.deliveryTime} delivery</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FiCheckCircle className="text-green-500" />
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.id === 2 ? "tel:+234800289427" : `/services/${service.id}`}
                    className={`block w-full py-4 text-center font-bold rounded-xl transition-all hover:scale-105 active:scale-95 ${
                      service.id === 2
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-red-500/30'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-500/30'
                    } hover:shadow-xl`}
                  >
                    {service.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
            {serviceStats.map((stat, index) => (
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

          {/* Use Cases Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Perfect For Every Need
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tailored for Nigerian Users</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you're a family home, a busy restaurant, or a large institution, we have the right solution.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 p-1 rounded-xl">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.type}
                    onClick={() => setActiveTab(useCase.type)}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      activeTab === useCase.type
                        ? 'bg-white shadow-lg text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {useCase.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              {useCases
                .filter(useCase => useCase.type === activeTab)
                .map((useCase) => (
                  <div key={useCase.type} className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                          <div className="text-blue-600 text-2xl">
                            {useCase.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{useCase.description}</p>
                      <ul className="space-y-4 mb-8">
                        {useCase.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <FiCheckCircle className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={useCase.type === 'commercial' ? '/pricing/business' : '/pricing'}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {useCase.cta}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 md:p-8">
                      <div className="bg-white rounded-lg p-6 shadow">
                        <div className="text-sm text-blue-600 font-semibold mb-2">RECOMMENDED PLAN</div>
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {useCase.type === 'residential' ? 'Smart Family Plan' : 
                           useCase.type === 'commercial' ? 'Business Pro Plan' : 'Institutional Plan'}
                        </div>
                        <div className="text-gray-600 mb-4">
                          {useCase.type === 'residential' ? 'Perfect for 4-6 person households' :
                           useCase.type === 'commercial' ? 'For restaurants & medium businesses' : 
                           'For schools, hospitals & institutions'}
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-6">
                          {useCase.type === 'residential' ? '₦8,500' :
                           useCase.type === 'commercial' ? '₦25,000' : 'Custom Quote'}
                          {useCase.type !== 'institutional' && <span className="text-lg text-gray-500">/month</span>}
                        </div>
                        <Link
                          href="/signup"
                          className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-bold rounded-lg hover:shadow-lg transition-all"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Safety Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.color} rounded-xl p-6`}
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Common questions about our services in Nigeria</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                        activeFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 animate-slide-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Ready to Get Started?
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Thousands of Satisfied Nigerian Customers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Experience worry-free gas delivery with Nigeria's most reliable service. No more trips to the gas station, no more running out during cooking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+234800289427"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3"
              >
                <FiPhone className="text-xl" />
                Call Now: 0800-BUY-GAS
              </a>
              <Link
                href="/signup"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                Sign Up Free
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>First month free for new customers</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}