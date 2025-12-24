'use client'

import { FiAward, FiUsers, FiMapPin, FiHeadphones, FiPercent, FiShield, FiZap, FiTrendingUp, FiPieChart, FiTarget, FiDollarSign, FiSmartphone } from 'react-icons/fi'

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: <FiZap />,
      title: "IoT Technology",
      description: "Smart meters with QR tagging for real-time consumption tracking and automated supply",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiDollarSign />,
      title: "Dual Revenue Model",
      description: "Prepaid PAYG for households and Postpaid Smart-as-a-Service for businesses",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FiTrendingUp />,
      title: "Market Leadership",
      description: "Pioneering IoT metering in Nigeria's LPG market with 744.5% projected ROI",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: <FiPieChart />,
      title: "Cost Control",
      description: "Businesses track consumption per shift/batch for operational efficiency",
      color: "from-blue-800 to-blue-900"
    },
    {
      icon: <FiSmartphone />,
      title: "Digital Platform",
      description: "IoT Digital Platform with cloud analytics and route optimization",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FiTarget />,
      title: "Government Alignment",
      description: "Supports Nigeria's National LPG Expansion Plan targeting 5M MT by 2030",
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
              Why Choose BIIL GAS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IoT-Powered LPG
              <span className="text-gradient block">Metering Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine cutting-edge IoT technology with Nigeria's LPG expansion goals to deliver 
              efficient, affordable, and reliable gas metering solutions for households and businesses.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FiZap className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Smart IoT Technology</h4>
                  <p className="text-gray-600">Deploying 75 IoT smart meters in pilot phase with QR tagging and real-time tracking capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <FiDollarSign className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Affordable PAYG Model</h4>
                  <p className="text-gray-600">Overcoming the N10,000-25,000 lump-sum refill barrier with micro-payments per kg used.</p>
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