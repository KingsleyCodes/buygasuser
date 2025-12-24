'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FiUsers, 
  FiTarget, 
  FiShield, 
  FiAward, 
  FiTrendingUp, 
  FiHeart,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiMessageSquare,
  FiStar,
  FiTruck,
  FiZap,
  FiCalendar,
  FiPieChart,
  FiDollarSign,
  FiSmartphone,
  FiActivity
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState('technology')

  const teamMembers = [
    {
      name: 'Executive Team',
      role: 'Leadership',
      bio: 'Experienced energy and technology professionals driving Nigeria\'s LPG digital transformation',
      image: '/team/executive.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Technology Team',
      role: 'IoT & Software',
      bio: 'Specialists in IoT hardware, software development, and cloud analytics for smart metering',
      image: '/team/tech.jpg',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Operations Team',
      role: 'LPG Distribution',
      bio: 'Experts in LPG logistics, cylinder management, and partner filling plant coordination',
      image: '/team/operations.jpg',
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: 'Business Development',
      role: 'B2B Partnerships',
      bio: 'Focus on securing high-value B2B contracts and enterprise solutions for SMEs',
      image: '/team/business.jpg',
      color: 'from-blue-800 to-blue-900'
    }
  ]

  const companyValues = [
    {
      id: 'technology',
      title: 'IoT Innovation',
      icon: <FiZap />,
      description: 'Deploying Smart IoT meters and digital platforms for efficient LPG distribution',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      id: 'affordability',
      title: 'Affordable Access',
      icon: <FiDollarSign />,
      description: 'Overcoming N10,000-25,000 lump-sum cost barriers with PAYG micro-payments',
      color: 'bg-green-50 text-green-700'
    },
    {
      id: 'efficiency',
      title: 'Operational Efficiency',
      icon: <FiPieChart />,
      description: 'Achieving 20-30% logistics savings through digital distribution systems',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'growth',
      title: 'Market Growth',
      icon: <FiTrendingUp />,
      description: 'Aligning with Nigeria\'s 5M MT LPG expansion target by 2030',
      color: 'bg-orange-50 text-orange-700'
    }
  ]

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Buy Gas Integrated Industries Limited (BIIL GAS) established' },
    { year: '2021', title: 'IoT Technology Development', description: 'Started development of Smart IoT metering platform' },
    { year: '2023', title: 'Business Model Validation', description: 'Validated dual-subscription model for Nigerian market' },
    { year: '2024', title: 'Pre-Seed Funding', description: 'Secured N30M investment for pilot deployment' },
    { year: '2025', title: 'Pilot Launch', description: 'Deploying 75 IoT meters in initial pilot phase' }
  ]

  const impactStats = [
    { value: '75+', label: 'IoT Units Deploying', icon: <FiZap />, color: 'text-blue-600' },
    { value: 'N30M', label: 'Pre-Seed Investment', icon: <FiDollarSign />, color: 'text-green-600' },
    { value: '744.5%', label: 'Projected ROI', icon: <FiTrendingUp />, color: 'text-red-600' },
    { value: '5 Years', label: 'Growth Horizon', icon: <FiCalendar />, color: 'text-yellow-600' },
    { value: 'N300M+', label: 'Seed Round Target', icon: <FiTarget />, color: 'text-purple-600' },
    { value: '2 Models', label: 'Dual-Subscription', icon: <FiUsers />, color: 'text-orange-600' }
  ]

  const testimonials = [
    {
      name: 'SME Restaurant Owner',
      location: 'Abuja',
      text: 'The cost control features have transformed how we manage our kitchen expenses. Tracking consumption per shift is invaluable.',
      rating: 5
    },
    {
      name: 'Household User',
      location: 'Lagos',
      text: 'PAYG model saved us from the N25,000 lump-sum burden. Now we pay only for what we use, per cooking session.',
      rating: 5
    },
    {
      name: 'Business Analyst',
      location: 'Port Harcourt',
      text: 'The IoT data analytics help us optimize our LPG consumption. Automated supply ensures we never run out during operations.',
      rating: 5
    }
  ]

  const certifications = [
    { name: 'LPG Compliance', description: 'National LPG Expansion Plan' },
    { name: 'Technology Innovation', description: 'IoT Smart Metering' },
    { name: 'Clean Energy', description: 'National Clean Cooking Policy' },
    { name: 'Business Model', description: 'Dual-Subscription Pioneer' }
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
              Company Profile
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Bayview Integrated Industries
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Buy GAS IoT Metering</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              An energy technology startup disrupting Nigeria's LPG market through IoT Smart Meters 
              and dual-subscription models for B2B/B2C consumption.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-6">
                Business Overview
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IoT-Powered LPG Metering Platform
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Buy Gas</strong> is an energy technology startup deploying Smart IoT meters with 
                  a dual-subscription model (Prepaid and Postpaid) for B2B/B2C LPG consumption in Nigeria.
                </p>
                <p>
                  Our <strong>N30 million pre-seed investment</strong> is de-risking the technology and 
                  operational model through a pilot fleet of 75 IoT meters and securing high-value B2B contracts.
                </p>
                <p>
                  We offer <strong>traceability, transparency, and efficiency</strong> across the LPG value chain - 
                  from cylinder filling plants to last-mile customers - achieving superior unit economics.
                </p>
                <p>
                  Our strategy targets a <strong>N300M+ Seed Round in Year 2</strong> and projects 
                  <strong> 744.5% ROI over five years</strong> through IoT-enabled LPG distribution.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {impactStats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center">
                    <div className={`${stat.color} text-2xl mb-3 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Strategic Focus
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Business Elements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key components driving our IoT metering business model
              </p>
            </div>

            {/* Value Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {companyValues.map((value) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValue(value.id)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    activeValue === value.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {value.title}
                </button>
              ))}
            </div>

            {/* Value Content */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
              {companyValues
                .filter(value => value.id === activeValue)
                .map((value) => (
                  <div key={value.id} className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-4xl mb-6">{value.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 text-lg">{value.description}</p>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-4">Business Impact:</h4>
                      <ul className="space-y-3">
                        {value.id === 'technology' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Smart IoT meters with QR tagging</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Dual-billing platform for prepaid/postpaid</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Cloud analytics for predictive insights</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Mobile app for real-time consumption tracking</span>
                            </li>
                          </>
                        )}
                        {value.id === 'affordability' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Micro-payments per kg used (not per cylinder)</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Overcomes N10,000-25,000 lump-sum barrier</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Remote valve shut-off upon zero balance</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Low credit notifications for timely top-up</span>
                            </li>
                          </>
                        )}
                        {value.id === 'efficiency' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>20-30% logistics cost savings</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Route optimization through digital platform</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Reduced cylinder losses through tracking</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Automated dispatch notifications</span>
                            </li>
                          </>
                        )}
                        {value.id === 'growth' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Targeting 5 million metric tonnes by 2030</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Converting 30 million households to LPG</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>National Clean Cooking Policy alignment</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Hyper-scale expansion Years 2-3</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Organizational Structure
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Teams Driving Innovation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized teams focused on technology, operations, and market expansion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
                >
                  <div className={`h-40 bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-white text-3xl">
                        <FiUsers />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Milestones Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Business Timeline
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Development Phases</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From establishment to IoT metering market leadership
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    {/* Year Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center text-xl font-bold">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} bg-white p-6 rounded-xl shadow-lg`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Market Feedback
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Target Segment Validation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights from our primary customer segments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Market Positioning
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Advantages</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center mx-auto mb-4">
                    <FiAward className="text-xl" />
                  </div>
                  <div className="font-bold text-gray-900">{cert.name}</div>
                  <div className="text-gray-600 text-sm mt-1">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                Business Model
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Revenue Streams</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Diversified income sources from IoT-enabled LPG distribution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Platform Licensing', desc: 'Fees for B2B operations', icon: <FiSmartphone /> },
                { title: 'LPG Sales', desc: 'Per kg cylinder sales', icon: <FiActivity /> },
                { title: 'Data Analytics', desc: 'Subscription insights', icon: <FiPieChart /> },
                { title: 'Delivery Commissions', desc: 'Logistics revenue share', icon: <FiTruck /> },
                { title: 'Equipment Lease', desc: 'Cylinder lease to businesses', icon: <FiDollarSign /> },
                { title: 'Transaction Charges', desc: 'Digital payment fees', icon: <FiTrendingUp /> },
              ].map((stream, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center mb-4">
                    {stream.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{stream.title}</h3>
                  <p className="text-gray-600 text-sm">{stream.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Join the LPG Digital Revolution</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Partner with us to transform Nigeria's LPG market through IoT technology and smart metering solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/investors"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Investor Information
                </Link>
                <Link
                  href="/partnerships"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                >
                  B2B Partnerships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}