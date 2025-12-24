'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FiCheckCircle, 
  FiXCircle, 
  FiHelpCircle, 
  FiTrendingUp, 
  FiUsers, 
  FiBriefcase,
  FiHome,
  FiShield,
  FiClock,
  FiPhone,
  FiMessageSquare,
  FiStar,
  FiZap,
  FiCalendar,
  FiAlertTriangle,
  FiPieChart,
  FiSmartphone,
  FiDollarSign,
  FiActivity
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('payg')
  const [activePlan, setActivePlan] = useState('prepaid')
  const [activeFaq, setActiveFaq] = useState(null)

  const subscriptionModels = [
    {
      id: 'prepaid',
      name: 'Prepaid PAYG',
      description: 'For Households - Pay per kg used',
      pricePerKg: '₦1,800',
      color: 'from-blue-500 to-blue-600',
      popular: true,
      features: [
        { included: true, text: 'Micro-payments per kg (not per cylinder)' },
        { included: true, text: 'Overcomes N10,000-25,000 lump-sum barrier' },
        { included: true, text: 'Customer-owned or franchise cylinders' },
        { included: true, text: 'Mobile app for credit loading' },
        { included: true, text: 'Remote valve shut-off at zero balance' },
        { included: true, text: 'Low credit notifications' },
        { included: true, text: 'Basic usage tracking' },
        { included: false, text: 'Automated delivery scheduling' }
      ],
      bestFor: 'Low-to-middle income households'
    },
    {
      id: 'postpaid',
      name: 'Postpaid Business',
      description: 'For SMEs - Subscription + Usage',
      baseFee: '₦15,000',
      color: 'from-blue-600 to-blue-700',
      popular: false,
      features: [
        { included: true, text: 'Monthly service fee + per kg usage' },
        { included: true, text: 'Bill Gas provides & maintains cylinders' },
        { included: true, text: 'Eliminates need for spare cylinders' },
        { included: true, text: 'Per-shift/batch consumption tracking' },
        { included: true, text: 'Automated supply notifications' },
        { included: true, text: 'Guaranteed logistics & delivery' },
        { included: true, text: 'Dedicated business support' },
        { included: true, text: 'Cost control analytics' }
      ],
      bestFor: 'Restaurants, bakeries, hotels, SMEs'
    }
  ]

  const iotDeployment = [
    {
      name: 'Pilot Package',
      icon: <FiZap />,
      price: '₦185,000',
      period: 'per IoT meter',
      description: 'Individual smart meter deployment',
      features: ['Smart IoT meter', 'QR tagging', 'Basic monitoring', 'Mobile app access'],
      color: 'from-blue-500 to-blue-600',
      target: 'Early adopters, testing'
    },
    {
      name: 'Business Package',
      icon: <FiBriefcase />,
      price: '₦500,000',
      period: 'for 3 meters',
      description: 'Small business IoT deployment',
      features: ['3 IoT meters', 'Advanced analytics', 'Cost tracking', 'Priority support'],
      color: 'from-blue-600 to-blue-700',
      target: 'Small restaurants, bakeries'
    },
    {
      name: 'Enterprise Package',
      icon: <FiTrendingUp />,
      price: 'Custom Quote',
      period: 'volume pricing',
      description: 'Large scale IoT deployment',
      features: ['10+ IoT meters', 'Custom reporting', 'API integration', 'Dedicated manager'],
      color: 'from-blue-700 to-blue-800',
      target: 'Hotels, chains, large facilities'
    }
  ]

  const valueFeatures = [
    {
      icon: <FiShield />,
      title: 'IoT Technology',
      description: 'Smart meters with real-time tracking and automated notifications',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: <FiClock />,
      title: 'Automated Supply',
      description: 'Proactive dispatch before you run out - zero logistics concern',
      color: 'bg-green-50 text-green-700'
    },
    {
      icon: <FiPieChart />,
      title: 'Cost Control',
      description: 'Track consumption per shift/batch for operational efficiency',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      icon: <FiHelpCircle />,
      title: '24/7 Support',
      description: 'Technical support for IoT meters and platform issues',
      color: 'bg-red-50 text-red-700'
    }
  ]

  const faqs = [
    {
      question: 'How does the Prepaid PAYG model work?',
      answer: 'Users load credit via mobile app. The IoT meter deducts credit based on quantity of gas used (kg), not cylinder value. When credit is low, you get notified. At zero balance, remote valve shuts off.'
    },
    {
      question: 'What is included in the Postpaid Business subscription?',
      answer: 'Monthly service fee plus weekly/monthly invoice for precise usage (kg) tracked by IoT meter. Includes cylinder provision, maintenance, automated delivery, and failure-to-pay triggers cut-off.'
    },
    {
      question: 'How much can businesses save with IoT tracking?',
      answer: 'Businesses can save 20-30% on logistics costs, eliminate spare cylinders, and reduce operational expenses through precise consumption tracking per shift or product batch.'
    },
    {
      question: 'What is the cost of IoT meter deployment?',
      answer: 'Each IoT smart meter costs ₦185,000. We deploy 75 units in pilot phase with N18.87M technology investment from our N30M pre-seed funding.'
    },
    {
      question: 'Do you offer volume discounts for multiple meters?',
      answer: 'Yes, we offer volume pricing for businesses deploying 3+ IoT meters. Contact us for custom quotes for enterprise deployments.'
    }
  ]

  const costComparison = [
    {
      type: 'traditional',
      name: 'Traditional Refill',
      cost: '₦25,000',
      frequency: 'Lump-sum payment',
      features: ['High upfront cost', 'Risk of running out', 'Manual tracking', 'No consumption data'],
      color: 'from-red-500 to-red-600'
    },
    {
      type: 'prepaid',
      name: 'IoT Prepaid PAYG',
      cost: '₦1,800/kg',
      frequency: 'Pay per kg used',
      features: ['Micro-payments', 'No lump-sum burden', 'Real-time tracking', 'Usage insights'],
      color: 'from-green-500 to-green-600'
    },
    {
      type: 'business',
      name: 'IoT Business Postpaid',
      cost: 'From ₦15,000/mo',
      frequency: 'Subscription + usage',
      features: ['Cost control', 'Automated supply', 'No spare cylinders', 'Operational efficiency'],
      color: 'from-blue-500 to-blue-600'
    }
  ]

  const roiExamples = [
    {
      metric: 'Pilot Phase ROI',
      value: 'N42.6M',
      period: '5 years cumulative',
      description: 'Cash returns from N30M pre-seed investment',
      icon: <FiTrendingUp />
    },
    {
      metric: 'Projected Exit Value',
      value: 'N180.7M',
      period: 'Year 5 (30% equity)',
      description: 'Estimated exit value for investors',
      icon: <FiDollarSign />
    },
    {
      metric: 'Total Investor Return',
      value: 'N223.4M',
      period: '5 year projection',
      description: 'Implied 744.5% ROI over five years',
      icon: <FiActivity />
    },
    {
      metric: 'Seed Round Target',
      value: 'N300M+',
      period: 'Year 2 target',
      description: 'Next funding round for hyper-scale',
      icon: <FiZap />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
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
              Dual-Subscription Pricing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              IoT Smart Metering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Pricing Models</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Choose between Prepaid PAYG for households or Postpaid Smart-as-a-Service for businesses. 
              Both powered by IoT technology for efficient LPG consumption.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center bg-white rounded-xl p-1 shadow-lg mb-12"
            >
              <button
                onClick={() => setBillingCycle('payg')}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  billingCycle === 'payg'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Prepaid PAYG
              </button>
              <button
                onClick={() => setBillingCycle('postpaid')}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  billingCycle === 'postpaid'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Postpaid Business
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subscription Models */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {subscriptionModels.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl transform scale-105 md:scale-105 z-10' 
                    : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 text-center font-bold text-sm">
                    RECOMMENDED FOR HOUSEHOLDS
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${plan.color} p-8 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-6">{plan.description}</p>
                  
                  <div className="flex items-end gap-1">
                    {plan.id === 'prepaid' ? (
                      <>
                        <span className="text-4xl md:text-5xl font-bold text-white">{plan.pricePerKg}</span>
                        <span className="text-white/80 mb-1">/kg used</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl md:text-5xl font-bold text-white">{plan.baseFee}</span>
                        <span className="text-white/80 mb-1">/month + usage</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Core Value Proposition:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <FiCheckCircle className="text-green-500 flex-shrink-0" />
                          ) : (
                            <FiXCircle className="text-gray-300 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Target Segment:</h4>
                    <div className="text-gray-600">{plan.bestFor}</div>
                  </div>

                  <Link
                    href={plan.id === 'prepaid' ? "/prepaid-signup" : "/business-signup"}
                    className={`block w-full py-4 text-center font-bold rounded-xl transition-all hover:scale-105 active:scale-95 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/30'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-gray-500/30'
                    } hover:shadow-xl`}
                  >
                    {plan.id === 'prepaid' ? 'Start PAYG' : 'Contact Business Sales'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* IoT Deployment Packages */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold mb-4">
                IoT Technology Deployment
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Meter Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Deploy IoT smart meters with QR tagging for real-time LPG consumption tracking
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {iotDeployment.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <div className="text-white text-2xl">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 mb-1">{plan.period}</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Target Market:</div>
                    <div className="text-gray-900 font-medium">{plan.target}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-500 text-sm" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/iot-deployment"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    Deploy IoT Meters
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Comparison: Traditional vs IoT</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how IoT metering transforms LPG costs and efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {costComparison.map((model, index) => (
                <div key={index} className={`bg-gradient-to-br ${model.color} rounded-xl p-6 text-white`}>
                  <h4 className="text-xl font-bold mb-4">{model.name}</h4>
                  <div className="text-3xl font-bold mb-2">{model.cost}</div>
                  <div className="text-white/80 mb-6">{model.frequency}</div>
                  
                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        {model.type === 'traditional' ? (
                          <FiXCircle className="text-red-300" />
                        ) : (
                          <FiCheckCircle className="text-green-300" />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Projections */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold mb-4">
                Investor Returns
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Projections</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                5-year ROI projections from N30M pre-seed investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roiExamples.map((roi, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center mb-4">
                    {roi.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{roi.value}</div>
                  <div className="text-sm text-gray-500 mb-2">{roi.metric}</div>
                  <div className="text-gray-600 text-sm">{roi.description}</div>
                  <div className="text-xs text-blue-600 font-medium mt-2">{roi.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {valueFeatures.map((feature, index) => (
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
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Everything about IoT metering pricing and deployment</p>
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

          {/* Revenue Streams */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Revenue Streams</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Diversified income sources from IoT-enabled LPG platform
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {[
                { name: 'Platform Licensing', short: 'Licensing' },
                { name: 'LPG Sales (per kg)', short: 'LPG Sales' },
                { name: 'Data Analytics', short: 'Analytics' },
                { name: 'Delivery Commissions', short: 'Delivery' },
                { name: 'Cylinder Lease', short: 'Lease' },
                { name: 'Prepaid Charges', short: 'Prepaid' },
                { name: 'Transaction Fees', short: 'Fees' },
              ].map((stream, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-gray-900">{stream.short}</div>
                  <div className="text-xs text-gray-600 mt-1">{stream.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Deploy IoT Metering?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Transform your LPG consumption with smart IoT technology. Start with our pilot deployment or scale with enterprise solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+2349023505265"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3"
                >
                  <FiPhone className="text-xl" />
                  Call: +234 902 350 5265
                </a>
                <Link
                  href="/investor-deck"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                >
                  Investor Information
                </Link>
              </div>
              
              <div className="mt-8 text-blue-200 text-sm">
                N30M pre-seed deployed • 75 IoT pilot units • N300M+ seed target • 744.5% projected ROI
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}