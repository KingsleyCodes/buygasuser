'use client'

import { useState } from 'react'
import { FiZap, FiClock, FiCalendar, FiShield, FiTruck, FiBarChart, FiDollarSign, FiPieChart, FiTrendingUp, FiUsers } from 'react-icons/fi'
import Link from 'next/link'

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      icon: <FiDollarSign />,
      title: "Prepaid PAYG for Households",
      description: "Micro-payments model overcoming N10,000–N25,000 lump-sum refill costs. Pay per kg used.",
      features: ["Micro-Payments", "Affordable Usage", "Customer-Owned Cylinders"],
      color: "from-blue-500 to-blue-600",
      cta: "Prepaid Plans",
      link: "/prepaid"
    },
    {
      id: 2,
      icon: <FiPieChart />,
      title: "Postpaid for Businesses",
      description: "Smart-as-a-Service for SMEs with consumption tracking and automated supply.",
      features: ["Cost Control", "Automated Supply", "B2B Asset Provision"],
      color: "from-blue-600 to-blue-700",
      cta: "Business Solutions",
      link: "/business"
    },
    {
      id: 3,
      icon: <FiZap />,
      title: "IoT Meter Technology",
      description: "Smart IoT meters with QR tagging for real-time tracking and consumption monitoring.",
      features: ["IoT Smart Meters", "Real-time Tracking", "QR Tagging"],
      color: "from-blue-700 to-blue-800",
      cta: "Technology",
      link: "/technology"
    },
    {
      id: 4,
      icon: <FiTrendingUp />,
      title: "Enterprise Solutions",
      description: "B2B contracts with asset provision, maintenance, and guaranteed logistics.",
      features: ["Asset Provision", "Guaranteed Logistics", "B2B Contracts"],
      color: "from-blue-800 to-blue-900",
      cta: "Enterprise Plans",
      link: "/enterprise"
    }
  ]

  const stats = [
    { value: "75+", label: "IoT Units Deployed" },
    { value: "N300M", label: "Seed Round Target" },
    { value: "744.5%", label: "Projected ROI" },
    { value: "5 Years", label: "Growth Plan" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            Revenue Streams
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dual-Subscription Model
            <span className="text-gradient block">B2B & B2C Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            IoT-enabled LPG distribution with specialized solutions for households and businesses
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