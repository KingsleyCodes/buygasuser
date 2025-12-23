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
  FiCalendar
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState('safety')

  const teamMembers = [
    {
      name: 'Chinedu Okoro',
      role: 'CEO & Founder',
      bio: 'Former energy sector executive with 15+ years experience. Passionate about solving Nigeria\'s energy challenges.',
      image: '/team/chinedu.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Amina Suleiman',
      role: 'Head of Operations',
      bio: 'Logistics expert with experience across West Africa. Ensures seamless delivery operations.',
      image: '/team/amina.jpg',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Emeka Nwosu',
      role: 'Technology Director',
      bio: 'IoT specialist who developed our smart sensor technology. MIT graduate with AI background.',
      image: '/team/emeka.jpg',
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: 'Funmi Adebayo',
      role: 'Customer Experience',
      bio: 'Dedicated to ensuring every Nigerian household gets exceptional service. 10+ years in customer service.',
      image: '/team/funmi.jpg',
      color: 'from-blue-800 to-blue-900'
    }
  ]

  const companyValues = [
    {
      id: 'safety',
      title: 'Safety First',
      icon: <FiShield />,
      description: 'Every cylinder undergoes 15-point safety checks. All handlers are certified professionals.',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: <FiCheckCircle />,
      description: '99.8% on-time delivery rate. We keep our promises to Nigerian families and businesses.',
      color: 'bg-green-50 text-green-700'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      icon: <FiZap />,
      description: 'Using IoT and AI to solve Nigeria\'s gas delivery challenges. Constantly improving our technology.',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'community',
      title: 'Community',
      icon: <FiUsers />,
      description: 'Supporting Nigerian communities through job creation and local partnerships.',
      color: 'bg-orange-50 text-orange-700'
    }
  ]

  const milestones = [
    { year: '2021', title: 'Founded in Lagos', description: 'Started with 5 employees serving 50 households' },
    { year: '2022', title: 'Expanded to Abuja', description: 'Launched services in the Federal Capital Territory' },
    { year: '2023', title: 'Smart Sensor Launch', description: 'Introduced IoT-based automatic delivery system' },
    { year: '2024', title: '10,000+ Homes', description: 'Reached milestone of serving 10,000 Nigerian households' },
    { year: '2025', title: 'National Expansion', description: 'Plans to expand to 5 more Nigerian states' }
  ]

  const impactStats = [
    { value: '50,000+', label: 'Deliveries Completed', icon: <FiTruck />, color: 'text-blue-600' },
    { value: '10,000+', label: 'Homes Served', icon: <FiUsers />, color: 'text-green-600' },
    { value: '200+', label: 'Jobs Created', icon: <FiHeart />, color: 'text-red-600' },
    { value: '99.8%', label: 'Customer Satisfaction', icon: <FiStar />, color: 'text-yellow-600' },
    { value: '24/7', label: 'Support Available', icon: <FiClock />, color: 'text-purple-600' },
    { value: '3', label: 'Cities Served', icon: <FiMapPin />, color: 'text-orange-600' }
  ]

  const testimonials = [
    {
      name: 'Mrs. Adebayo',
      location: 'Lekki, Lagos',
      text: 'As a working mother, BuyGas has been a lifesaver. No more worrying about running out of gas during cooking.',
      rating: 5
    },
    {
      name: 'Mr. Ibrahim',
      location: 'Maitama, Abuja',
      text: 'The emergency service saved our restaurant during a busy weekend. Professional and reliable.',
      rating: 5
    },
    {
      name: 'Chioma',
      location: 'Port Harcourt',
      text: 'Love the smart sensor feature! It automatically orders before we run out. Perfect for busy families.',
      rating: 5
    }
  ]

  const certifications = [
    { name: 'SON Certified', description: 'Standards Organization of Nigeria' },
    { name: 'Safety Certified', description: 'LPG Safety Certification' },
    { name: 'ISO 9001', description: 'Quality Management System' },
    { name: 'Best Startup 2023', description: 'Nigerian Energy Awards' }
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
              Our Story
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Revolutionizing Gas Delivery
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">in Nigeria</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Founded in 2021, BuyGas is on a mission to make reliable gas delivery accessible to every Nigerian household. 
              Through innovation and dedication, we're solving a critical challenge for millions of families.
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
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Making Reliable Energy Accessible to Every Nigerian
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  In 2021, our founder Chinedu Okoro experienced firsthand the frustration of running out of gas during an important family gathering. 
                  This common Nigerian problem sparked an idea: what if gas delivery could be as reliable as electricity or water?
                </p>
                <p>
                  Starting with just 5 employees and serving 50 households in Lagos, we've grown to become Nigeria's most trusted gas delivery service. 
                  Our journey has been powered by innovation, particularly our IoT smart sensor technology that predicts when you'll run out.
                </p>
                <p>
                  Today, we serve thousands of Nigerian families and businesses across three major cities, with plans to expand nationwide. 
                  Our commitment remains the same: safe, reliable, and convenient gas delivery for all.
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
                Our Values
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Drives Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide every decision we make and every service we provide
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
                      <h4 className="font-bold text-gray-900 mb-4">How We Live This Value:</h4>
                      <ul className="space-y-3">
                        {value.id === 'safety' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>15-point cylinder safety checks</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Certified delivery personnel</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Regular safety training</span>
                            </li>
                          </>
                        )}
                        {value.id === 'reliability' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>99.8% on-time delivery rate</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>24/7 customer support</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Real-time delivery tracking</span>
                            </li>
                          </>
                        )}
                        {value.id === 'innovation' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>IoT smart sensor technology</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>AI-powered delivery optimization</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Mobile app with real-time updates</span>
                            </li>
                          </>
                        )}
                        {value.id === 'community' && (
                          <>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Creating local employment opportunities</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Partnerships with Nigerian SMEs</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <FiCheckCircle className="text-green-500" />
                              <span>Community safety awareness programs</span>
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
                Meet Our Team
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The People Behind BuyGas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A dedicated team of Nigerians passionate about solving energy challenges
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
                Our Journey
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Milestones & Growth</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From a small startup to Nigeria's leading gas delivery service
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
                Customer Stories
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from Nigerian families and businesses who trust us
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
                Certifications & Awards
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognized for Excellence</h2>
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

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Be part of the revolution in Nigeria's energy sector. Together, we can make reliable gas delivery accessible to all.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all"
                >
                  View Careers
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}