'use client'

import { useState, useEffect } from 'react'
import { 
  FiTrendingUp, 
  FiDroplet, 
  FiCalendar, 
  FiUsers, 
  FiDollarSign, 
  FiMapPin, 
  FiPieChart,
  FiHome,
  FiActivity,
  FiSun,
  FiCoffee,
  FiClock,
  FiSearch,
  FiShield,
  FiThermometer,
  FiWind,
  FiZap,
  FiChevronRight,
  FiCheck,
  FiAlertCircle,
  FiBarChart2,
  FiTarget,
  FiSmartphone
} from 'react-icons/fi'

export default function GasUsageSection() {
  const [activeChart, setActiveChart] = useState('prepaid')
  const [animatedValue, setAnimatedValue] = useState(0)

  // Nigerian LPG Market Data from analysis
  const marketData = {
    prepaid: {
      title: "Prepaid PAYG Savings",
      data: [
        { segment: 'Low Income', traditional: 25000, payg: 10000, savings: 15000 },
        { segment: 'Middle Income', traditional: 25000, payg: 12500, savings: 12500 },
        { segment: 'Urban Households', traditional: 25000, payg: 15000, savings: 10000 },
        { segment: 'Rural Households', traditional: 25000, payg: 12000, savings: 13000 },
      ],
      averageSavings: 12625,
      totalAnnual: 234000
    },
    market: {
      title: "Nigerian LPG Market",
      data: [
        { metric: 'Current Consumption', value: 1.2, unit: 'M MT', color: 'from-blue-500 to-cyan-500' },
        { metric: '2030 Target', value: 5, unit: 'M MT', color: 'from-green-500 to-emerald-500' },
        { metric: 'Households Target', value: 30, unit: 'M', color: 'from-purple-500 to-pink-500' },
        { metric: 'Market Value', value: 500, unit: 'B Naira', color: 'from-orange-500 to-yellow-500' },
      ]
    },
    iot: {
      title: "IoT Deployment Impact",
      data: [
        { aspect: 'Logistics Savings', impact: 25, unit: '%', icon: <FiTruck /> },
        { aspect: 'Cost Control', impact: 30, unit: '%', icon: <FiDollarSign /> },
        { aspect: 'Supply Efficiency', impact: 40, unit: '%', icon: <FiActivity /> },
        { aspect: 'Customer Retention', impact: 35, unit: '%', icon: <FiUsers /> },
      ]
    }
  }

  // Safe data access function
  const getChartData = () => {
    return marketData[activeChart] || marketData.prepaid
  }

  const keyInsights = [
    {
      icon: <FiTrendingUp />,
      title: "5M MT by 2030",
      description: "Government target for domestic LPG consumption under National LPG Expansion Plan",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiDroplet />,
      title: "30M Households",
      description: "Target conversion to LPG under Nigeria's National Clean Cooking policy (NCCP 2023)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiDollarSign />,
      title: "N10K-25K Barrier",
      description: "Lump-sum refill cost barrier that Prepaid PAYG model addresses",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiCalendar />,
      title: "744.5% ROI",
      description: "Projected investor returns over five years with IoT metering model",
      color: "from-orange-500 to-yellow-500"
    }
  ]

  const businessBenefits = [
    { benefit: 'Eliminate Spare Cylinders', impact: 'High', icon: <FiHome /> },
    { benefit: 'Per-Batch Cost Tracking', impact: 'Very High', icon: <FiBarChart2 /> },
    { benefit: 'Automated Dispatch', impact: 'High', icon: <FiTruck /> },
    { benefit: 'Operational Efficiency', impact: 'Medium', icon: <FiActivity /> },
    { benefit: 'Logistics Savings', impact: 'High', icon: <FiDollarSign /> },
    { benefit: 'Customer Retention', impact: 'Medium', icon: <FiUsers /> }
  ]

  const technologyFeatures = [
    { feature: 'IoT Digital Platform', icon: <FiSmartphone /> },
    { feature: 'Smart Meters with QR Tagging', icon: <FiZap /> },
    { feature: 'Digital Distribution System', icon: <FiTruck /> },
    { feature: 'Cloud Analytics', icon: <FiPieChart /> },
    { feature: 'Dual-Billing Platform', icon: <FiDollarSign /> },
  ]

  // Animated counter effect
  useEffect(() => {
    let start = 0
    const end = 75 // IoT units deployed
    const duration = 2000
    const increment = end / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setAnimatedValue(Math.floor(start))
    }, 16)
    
    return () => clearInterval(timer)
  }, [])

  const currentChart = getChartData()

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, #3b82f6 100%),
                             linear-gradient(180deg, transparent 95%, #3b82f6 100%)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold mb-4">
            <FiPieChart className="text-white" />
            Market Analysis & Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nigerian LPG Market
            <span className="text-gradient">Opportunity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Data-driven insights into Nigeria's LPG expansion and IoT metering impact
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Charts & Graphs */}
          <div className="space-y-8">
            {/* Chart Toggle */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Business Analytics</h3>
              <div className="flex gap-2">
                {['prepaid', 'market', 'iot'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveChart(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeChart === type
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'prepaid' ? 'PAYG Savings' : type === 'market' ? 'Market' : 'IoT Impact'}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Chart */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              {/* Chart Title */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{currentChart.title}</h4>
                  <p className="text-sm text-gray-500">Based on Business Analysis Data</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{animatedValue}</div>
                  <div className="text-sm text-gray-500">IoT Units Deployed</div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="space-y-4">
                {activeChart === 'prepaid' && (
                  <div className="space-y-6">
                    {/* Savings Comparison Bars */}
                    <div className="space-y-4">
                      {currentChart.data.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-gray-900">{item.segment}</div>
                            <div className="text-lg font-bold text-green-600">Save ₦{item.savings.toLocaleString()}</div>
                          </div>
                          <div className="h-4 bg-gray-200 rounded-full overflow-hidden flex">
                            <div 
                              className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                              style={{ width: `${(item.traditional / 30000) * 100}%` }}
                              title={`Traditional: ₦${item.traditional.toLocaleString()}`}
                            ></div>
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                              style={{ width: `${(item.payg / 30000) * 100}%` }}
                              title={`PAYG: ₦${item.payg.toLocaleString()}`}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Traditional: ₦{item.traditional.toLocaleString()}</span>
                            <span>PAYG: ₦{item.payg.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">₦{currentChart.totalAnnual?.toLocaleString() || '234,000'}</div>
                        <div className="text-sm text-gray-500">Annual Cost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">₦{currentChart.averageSavings?.toLocaleString() || '12,625'}</div>
                        <div className="text-sm text-gray-500">Avg. Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">50%</div>
                        <div className="text-sm text-gray-500">Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeChart === 'market' && (
                  <div className="space-y-6">
                    {/* Market Metrics */}
                    <div className="space-y-4">
                      {currentChart.data.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                <FiTrendingUp className="text-white text-sm" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{item.metric}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">{item.value}{item.unit.charAt(0)}</div>
                              <div className="text-xs text-gray-500">{item.unit.substring(1)}</div>
                            </div>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                              style={{ width: `${(item.value / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeChart === 'iot' && (
                  <div className="space-y-6">
                    {/* IoT Impact Bars */}
                    <div className="space-y-4">
                      {currentChart.data.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <div className="text-blue-600">
                                  {item.icon}
                                </div>
                              </div>
                              <div className="font-medium text-gray-900">{item.aspect}</div>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">+{item.impact}{item.unit}</div>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
                              style={{ width: `${item.impact}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technology Features */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <FiZap className="text-cyan-400" />
                <h3 className="text-xl font-bold">Technology Ecosystem</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {technologyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-cyan-300 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium">{feature.feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Insights & Analysis */}
          <div className="space-y-8">
            {/* Key Insights */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiBarChart2 className="text-blue-600 text-xl" />
                <h3 className="text-xl font-bold text-gray-900">Market Insights</h3>
              </div>
              <div className="grid gap-4">
                {keyInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                        <div className="text-white text-xl">
                          {insight.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{insight.title}</div>
                        <p className="text-gray-600">{insight.description}</p>
                      </div>
                      <FiChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <FiTarget className="text-white" />
                <h3 className="text-xl font-bold">B2B Benefits</h3>
              </div>
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="text-white/80 group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <div className="text-sm">{benefit.benefit}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      benefit.impact === 'Very High' ? 'bg-red-400/30 text-white' :
                      benefit.impact === 'High' ? 'bg-orange-400/30 text-white' :
                      'bg-green-400/30 text-white'
                    }`}>
                      {benefit.impact}
                    </div>
                  </div>
                ))}
                <div className="h-1 bg-white/30 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-4/5"></div>
                </div>
                <div className="text-center pt-2">
                  <div className="text-sm opacity-90">20-30% Logistics Savings</div>
                </div>
              </div>
            </div>

            {/* Revenue Streams */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FiDollarSign className="text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">Revenue Streams</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Platform licensing fees',
                  'Cylinder and LPG sales (per kg)',
                  'Data analytics subscriptions',
                  'Delivery commissions',
                  'Cylinder lease to businesses',
                  'Prepaid subscription charges',
                  'Digital transaction charges'
                ].map((stream, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 bg-blue-50/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="text-sm text-gray-700">{stream}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Projection */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold">N30M</div>
                  <div className="text-sm opacity-90">Pre-Seed Investment</div>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Deploying 75 IoT meters with N18.87M technology investment for pilot phase.
              </p>
              <div className="text-xs opacity-80">
                Target: N300M+ Seed Round in Year 2
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '30M', label: 'Household Conversion Target', icon: <FiHome /> },
              { value: '5M MT', label: '2030 LPG Consumption Target', icon: <FiActivity /> },
              { value: 'N500B', label: 'Annual Market Value', icon: <FiDollarSign /> },
              { value: '75 Units', label: 'Pilot IoT Deployment', icon: <FiZap /> },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm mb-3">{stat.label}</div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}