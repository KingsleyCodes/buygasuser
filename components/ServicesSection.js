'use client'

import { useState } from 'react'
import { FiZap, FiClock, FiCalendar, FiShield, FiTruck, FiBarChart } from 'react-icons/fi'
import Link from 'next/link'

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      icon: <FiZap />,
      title: "Smart Automatic Delivery",
      description: "Our IoT sensors monitor your gas levels and automatically schedule deliveries before you run out.",
      features: ["24/7 Monitoring", "Auto Scheduling", "Usage Analytics"],
      color: "from-blue-500 to-blue-600",
      cta: "Learn More",
      link: "/services/automatic"
    },
    {
      id: 2,
      icon: <FiClock />,
      title: "Emergency Delivery",
      description: "Ran out of gas? Get emergency delivery within 60 minutes in covered areas. 24/7 availability.",
      features: ["60-Minute Guarantee", "24/7 Service", "Priority Support"],
      color: "from-blue-600 to-blue-700",
      cta: "Emergency Order",
      link: "/services/emergency"
    },
    {
      id: 3,
      icon: <FiCalendar />,
      title: "Scheduled Delivery",
      description: "Plan your deliveries in advance. Choose your preferred time slots and delivery frequency.",
      features: ["Flexible Scheduling", "Recurring Orders", "Time Slot Selection"],
      color: "from-blue-700 to-blue-800",
      cta: "Schedule Now",
      link: "/services/scheduled"
    },
    {
      id: 4,
      icon: <FiShield />,
      title: "Business Solutions",
      description: "Tailored gas delivery solutions for restaurants, hotels, and commercial establishments.",
      features: ["Bulk Delivery", "Custom Schedules", "Dedicated Support"],
      color: "from-blue-800 to-blue-900",
      cta: "Business Plans",
      link: "/services/business"
    }
  ]

  const stats = [
    { value: "50,000+", label: "Deliveries Made" },
    { value: "60min", label: "Emergency Response" },
    { value: "99.8%", label: "On-time Delivery" },
    { value: "24/7", label: "Customer Support" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Smart Gas Delivery
            <span className="text-gradient block">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From automatic delivery to emergency service, we have the right solution for your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl`}>
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <div className="text-white text-2xl">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:shadow-lg hover:bg-blue-50 transition-all"
                >
                  {service.cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}