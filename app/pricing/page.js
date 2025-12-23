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
  FiAlertTriangle
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [activePlan, setActivePlan] = useState('premium')
  const [activeFaq, setActiveFaq] = useState(null)

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'For occasional gas users',
      monthlyPrice: '₦4,500',
      yearlyPrice: '₦48,000',
      savings: 'Save ₦6,000',
      color: 'from-blue-500 to-blue-600',
      popular: false,
      features: [
        { included: true, text: 'Standard delivery (48-72 hours)' },
        { included: true, text: 'Basic mobile app access' },
        { included: true, text: 'Email support' },
        { included: true, text: 'Manual order placement' },
        { included: false, text: 'Smart sensor included' },
        { included: false, text: 'Emergency delivery' },
        { included: false, text: 'Usage analytics' },
        { included: false, text: 'Priority support' }
      ],
      bestFor: 'Students, single occupants'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'For families & regular users',
      monthlyPrice: '₦8,500',
      yearlyPrice: '₦90,000',
      savings: 'Save ₦12,000',
      color: 'from-blue-600 to-blue-700',
      popular: true,
      features: [
        { included: true, text: 'Priority delivery (24-48 hours)' },
        { included: true, text: 'Advanced mobile app' },
        { included: true, text: '24/7 phone support' },
        { included: true, text: 'Smart sensor included' },
        { included: true, text: 'Basic usage analytics' },
        { included: true, text: 'Emergency delivery*' },
        { included: false, text: 'Dedicated account manager' },
        { included: false, text: 'Business analytics' }
      ],
      bestFor: 'Families (4-6 people), professionals'
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For restaurants & commercial use',
      monthlyPrice: '₦25,000',
      yearlyPrice: '₦264,000',
      savings: 'Save ₦36,000',
      color: 'from-purple-600 to-purple-700',
      popular: false,
      features: [
        { included: true, text: 'Express delivery (12-24 hours)' },
        { included: true, text: 'Enterprise dashboard' },
        { included: true, text: 'Dedicated account manager' },
        { included: true, text: 'Multiple smart sensors' },
        { included: true, text: 'Advanced analytics & reporting' },
        { included: true, text: 'Emergency delivery (60 min)' },
        { included: true, text: 'Bulk pricing discounts' },
        { included: true, text: 'API integration available' }
      ],
      bestFor: 'Restaurants, hotels, businesses'
    }
  ]

  const businessPlans = [
    {
      name: 'Restaurant Plan',
      icon: <FiBriefcase />,
      price: '₦30,000',
      period: '/month',
      cylinders: '3-5 cylinders',
      description: 'For small to medium restaurants',
      features: ['Daily delivery available', 'Bulk discounts', 'Dedicated support'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Hotel Plan',
      icon: <FiHome />,
      price: '₦45,000',
      period: '/month',
      cylinders: '5-10 cylinders',
      description: 'For hotels and hospitality businesses',
      features: ['24/7 emergency service', 'Monthly consumption reports', 'Priority scheduling'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Industrial Plan',
      icon: <FiTrendingUp />,
      price: 'Custom',
      period: 'Quote',
      cylinders: '10+ cylinders',
      description: 'For factories and large facilities',
      features: ['Custom delivery schedules', 'On-site technical support', 'Volume pricing'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const valueFeatures = [
    {
      icon: <FiShield />,
      title: 'Safety First',
      description: 'All cylinders undergo 15-point safety checks. Certified handlers only.',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: <FiClock />,
      title: 'On-Time Guarantee',
      description: '99.8% on-time delivery rate with real-time tracking.',
      color: 'bg-green-50 text-green-700'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Price includes delivery, cylinder, and safety checks.',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      icon: <FiHelpCircle />,
      title: '24/7 Support',
      description: 'Always available to help with emergencies or questions.',
      color: 'bg-red-50 text-red-700'
    }
  ]

  const faqs = [
    {
      question: 'What is included in the monthly price?',
      answer: 'The monthly price includes the gas, delivery, cylinder rental (if using ours), safety checks, and all support services. No hidden fees.'
    },
    {
      question: 'Can I use my existing gas cylinder?',
      answer: 'Yes! We can service your existing cylinder if it passes our safety inspection. Otherwise, we provide certified cylinders at no extra cost.'
    },
    {
      question: 'Is there a contract or minimum commitment?',
      answer: 'No long-term contracts required. All plans are month-to-month. You can cancel anytime with no penalties.'
    },
    {
      question: 'How do I change or cancel my plan?',
      answer: 'You can upgrade, downgrade, or cancel anytime through your account dashboard or by contacting our support team.'
    },
    {
      question: 'Do you offer discounts for yearly payments?',
      answer: 'Yes! Paying yearly saves you 10-15% compared to monthly payments. You can switch to yearly billing anytime.'
    }
  ]

  const usageExamples = [
    {
      type: 'small-family',
      name: 'Small Family (2-3 people)',
      monthlyUsage: '1 cylinder',
      estimatedCost: '₦4,500 - ₦6,000',
      recommended: 'Basic Plan'
    },
    {
      type: 'medium-family',
      name: 'Medium Family (4-6 people)',
      monthlyUsage: '1-2 cylinders',
      estimatedCost: '₦8,500 - ₦12,000',
      recommended: 'Premium Plan'
    },
    {
      type: 'large-family',
      name: 'Large Family (7+ people)',
      monthlyUsage: '2-3 cylinders',
      estimatedCost: '₦12,000 - ₦18,000',
      recommended: 'Premium Plan'
    },
    {
      type: 'small-business',
      name: 'Small Restaurant',
      monthlyUsage: '3-5 cylinders',
      estimatedCost: '₦25,000 - ₦40,000',
      recommended: 'Business Plan'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-6"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Simple, Transparent Pricing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Plans for Every
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Nigerian Household</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              No hidden fees, no surprises. Everything you need for reliable gas delivery at prices that make sense for Nigeria.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center bg-white rounded-xl p-1 shadow-lg mb-12"
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly Billing
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Save 15%
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl transform scale-105 md:scale-110 z-10' 
                    : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 text-center font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${plan.color} p-8 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-6">{plan.description}</p>
                  
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-white/80 mb-1">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <div className="mt-2 text-white/80 text-sm">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
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
                    <h4 className="font-bold text-gray-900 mb-2">Best For:</h4>
                    <div className="text-gray-600">{plan.bestFor}</div>
                  </div>

                  <Link
                    href="/signup"
                    className={`block w-full py-4 text-center font-bold rounded-xl transition-all hover:scale-105 active:scale-95 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/30'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-gray-500/30'
                    } hover:shadow-xl`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Business Plans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full font-semibold mb-4">
                Business Solutions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Plans for Nigerian Businesses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tailored solutions for restaurants, hotels, and commercial establishments across Nigeria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {businessPlans.map((plan, index) => (
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
                    <div className="text-sm text-gray-500 mb-2">Typical usage:</div>
                    <div className="text-gray-900 font-medium">{plan.cylinders}</div>
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
                    href="/contact"
                    className="block w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    Contact Sales
                  </Link>
                </motion.div>
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

          {/* Usage Examples */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Estimate Your Monthly Cost</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Based on typical usage patterns of Nigerian households and businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usageExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">{example.name}</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Monthly Usage</div>
                      <div className="text-lg font-bold text-gray-900">{example.monthlyUsage}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Estimated Cost</div>
                      <div className="text-lg font-bold text-blue-600">{example.estimatedCost}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Recommended Plan</div>
                      <div className="font-bold text-green-600">{example.recommended}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know about our pricing</p>
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
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Join thousands of Nigerian households and businesses enjoying reliable, worry-free gas delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+234800289427"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3"
                >
                  <FiPhone className="text-xl" />
                  Call for Custom Quote
                </a>
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                >
                  Start Free Trial
                </Link>
              </div>
              
              <div className="mt-8 text-blue-200 text-sm">
                No credit card required • 30-day money-back guarantee • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}