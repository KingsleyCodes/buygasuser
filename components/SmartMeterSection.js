'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiZap, FiDollarSign } from 'react-icons/fi'
import Image from 'next/image'

export default function SmartMeterSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                <FiZap className="text-blue-500" />
                IoT Technology
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Smart Dual-Subscription Metering
              </h2>
              <p className="text-gray-600 mb-6">
                Deploying Smart IoT meters with dual-subscription model (Prepaid for households, 
                Postpaid for businesses) for efficient LPG consumption tracking.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Prepaid PAYG</h4>
                  <p className="text-sm text-gray-600">Micro-payments per kg used, overcoming N10,000-25,000 lump-sum barrier</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Postpaid Business</h4>
                  <p className="text-sm text-gray-600">Smart-as-a-Service with automated supply and cost control</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://buygas-neon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
              >
                <FiDollarSign />
                Invest in IoT Technology
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image 
                    src="/odara.jpg" 
                    alt="IoT Smart Meter" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Stats badge */}
                <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-lg p-3 z-10">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">75</div>
                    <div className="text-xs text-gray-600">IoT Units</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>N18.87M investment in IoT hardware and software</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}