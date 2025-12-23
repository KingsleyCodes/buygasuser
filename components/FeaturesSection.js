'use client'

import { useState } from 'react'
import { FiCheckCircle, FiClock, FiSmartphone, FiTruck, FiShield, FiBarChart2 } from 'react-icons/fi'

export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      icon: <FiSmartphone />,
      title: "Sign Up & Order",
      description: "Download our app or visit our website to place your first order in under 2 minutes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      icon: <FiCheckCircle />,
      title: "Get Smart Sensor",
      description: "We install a free smart sensor on your gas cylinder to monitor levels 24/7.",
      color: "from-blue-600 to-blue-700"
    },
    {
      number: "03",
      icon: <FiBarChart2 />,
      title: "Monitor Usage",
      description: "Track your gas consumption in real-time through our mobile app.",
      color: "from-blue-700 to-blue-800"
    },
    {
      number: "04",
      icon: <FiTruck />,
      title: "Automatic Delivery",
      description: "We automatically schedule deliveries before you run out. No more guesswork!",
      color: "from-blue-800 to-blue-900"
    }
  ]

  const features = [
    {
      icon: <FiClock />,
      title: "60-Minute Emergency",
      description: "Emergency delivery within 60 minutes in covered areas",
      stat: "24/7 Service"
    },
    {
      icon: <FiShield />,
      title: "Safety Certified",
      description: "All our technicians are trained and certified for safe handling",
      stat: "100% Safe"
    },
    {
      icon: <FiSmartphone />,
      title: "Live Tracking",
      description: "Track your delivery in real-time from our mobile app",
      stat: "Real-time Updates"
    },
    {
      icon: <FiCheckCircle />,
      title: "Smart Monitoring",
      description: "IoT sensors predict when you'll need a refill",
      stat: "99% Accuracy"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Never Run Out of Gas
            <span className="text-gradient block">The Smart Way</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four simple steps to reliable, worry-free gas delivery for your home
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeStep === index
                  ? 'bg-white shadow-2xl border-2 border-blue-100'
                  : 'bg-gray-50 hover:bg-white shadow-lg'
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Number */}
              <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-lg flex items-center justify-center shadow-lg`}>
                {step.number}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                <div className="text-white text-2xl">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>

              {/* Active Indicator */}
              {activeStep === index && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-blue-600 text-xl">
                    {feature.icon}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{feature.stat}</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}