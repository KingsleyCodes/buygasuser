'use client'

import { FiAward, FiUsers, FiMapPin, FiHeadphones, FiPercent, FiShield } from 'react-icons/fi'

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: <FiAward />,
      title: "Industry Leader",
      description: "Pioneers in smart gas delivery technology with 5+ years of experience",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiUsers />,
      title: "10,000+ Happy Homes",
      description: "Trusted by thousands of households across Nigeria",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FiMapPin />,
      title: "Wide Coverage",
      description: "Serving 50+ cities with plans to expand nationwide",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency support",
      color: "from-blue-800 to-blue-900"
    },
    {
      icon: <FiPercent />,
      title: "Cost Savings",
      description: "Save up to 30% compared to traditional gas vendors",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FiShield />,
      title: "Safety First",
      description: "All technicians are safety-certified and trained professionals",
      color: "from-blue-600 to-blue-800"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
              Why Choose BuyGas
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Smart Choice for
              <span className="text-gradient block">Modern Homes</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine cutting-edge technology with reliable service to deliver an unmatched gas delivery experience. 
              No more worrying about running out of gas or dealing with unreliable vendors.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FiShield className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">100% Safe & Certified</h4>
                  <p className="text-gray-600">All our equipment meets the highest safety standards, and our technicians are fully certified.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <FiPercent className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Savings</h4>
                  <p className="text-gray-600">Our smart monitoring helps optimize consumption, saving you up to 30% on gas costs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white text-xl">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}