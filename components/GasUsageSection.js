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
  FiTarget
} from 'react-icons/fi'

export default function GasUsageSection() {
  const [activeChart, setActiveChart] = useState('monthly')
  const [animatedValue, setAnimatedValue] = useState(0)

  // Nigerian Market Data
  const nigerianData = {
    monthly: {
      title: "Monthly Gas Usage",
      data: [
        { month: 'Jan', usage: 65, cost: 15000 },
        { month: 'Feb', usage: 58, cost: 13500 },
        { month: 'Mar', usage: 72, cost: 16500 },
        { month: 'Apr', usage: 68, cost: 15500 },
        { month: 'May', usage: 75, cost: 17000 },
        { month: 'Jun', usage: 80, cost: 18000 },
        { month: 'Jul', usage: 85, cost: 19500 },
        { month: 'Aug', usage: 82, cost: 19000 },
        { month: 'Sep', usage: 78, cost: 18000 },
        { month: 'Oct', usage: 85, cost: 19500 },
        { month: 'Nov', usage: 90, cost: 20500 },
        { month: 'Dec', usage: 95, cost: 22000 },
      ],
      average: 78,
      peak: 95,
      totalAnnual: 234000
    },
    household: {
      title: "Usage by Household Size",
      data: [
        { size: '1-2 People', usage: 45, percentage: 22 },
        { size: '3-4 People', usage: 78, percentage: 38 },
        { size: '5-6 People', usage: 95, percentage: 46 },
        { size: '7+ People', usage: 120, percentage: 58 },
      ]
    },
    city: {
      title: "Top Cities Gas Consumption",
      data: [
        { city: 'Lagos', usage: 85, population: '15M', color: 'from-blue-500 to-cyan-500' },
        { city: 'Abuja', usage: 72, population: '3M', color: 'from-purple-500 to-pink-500' },
        { city: 'Port Harcourt', usage: 78, population: '3.5M', color: 'from-green-500 to-emerald-500' },
        { city: 'Kano', usage: 68, population: '4M', color: 'from-orange-500 to-red-500' },
        { city: 'Ibadan', usage: 65, population: '3.8M', color: 'from-indigo-500 to-blue-500' },
      ]
    }
  }

  // Safe data access function
  const getChartData = () => {
    return nigerianData[activeChart] || nigerianData.monthly
  }

  const keyInsights = [
    {
      icon: <FiTrendingUp />,
      title: "30% Increase",
      description: "Gas consumption in Nigerian households has increased by 30% in the last 3 years",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiDroplet />,
      title: "12.5kg Avg Monthly",
      description: "Average Nigerian household uses 12.5kg of gas per month",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiDollarSign />,
      title: "₦234K Annual Cost",
      description: "Average annual gas expenditure per household in urban areas",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiCalendar />,
      title: "18 Days Supply",
      description: "Typical 12.5kg cylinder lasts an average Nigerian family 18 days",
      color: "from-orange-500 to-yellow-500"
    }
  ]

  const consumptionFactors = [
    { factor: 'Cooking Frequency', impact: 'High', icon: <FiCoffee /> },
    { factor: 'Household Size', impact: 'Very High', icon: <FiUsers /> },
    { factor: 'Meal Preparation Time', impact: 'Medium', icon: <FiClock /> },
    { factor: 'Alternative Energy Use', impact: 'Medium', icon: <FiZap /> },
    { factor: 'Season (Rainy/Dry)', impact: 'Low', icon: <FiThermometer /> },
    { factor: 'Social Events', impact: 'High', icon: <FiHome /> }
  ]

  const usageTips = [
    { tip: 'Use pressure cookers to reduce cooking time by 70%', icon: <FiClock /> },
    { tip: 'Keep burner flames blue for optimal efficiency', icon: <FiThermometer /> },
    { tip: 'Plan meals to minimize multiple cooking sessions', icon: <FiCalendar /> },
    { tip: 'Regularly check for leaks with soap solution', icon: <FiSearch /> },
    { tip: 'Use lids while cooking to retain heat', icon: <FiShield /> },
  ]

  // Animated counter effect
  useEffect(() => {
    let start = 0
    const end = 78 // Average monthly usage
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
            Nigerian Market Insights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Understanding <span className="text-gradient">Household Gas Usage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Data-driven insights into how Nigerian households consume cooking gas and optimize their usage patterns.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Charts & Graphs */}
          <div className="space-y-8">
            {/* Chart Toggle */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Gas Consumption Analytics</h3>
              <div className="flex gap-2">
                {['monthly', 'household', 'city'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveChart(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeChart === type
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'monthly' ? 'Monthly' : type === 'household' ? 'Household' : 'Cities'}
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
                  <p className="text-sm text-gray-500">Nigerian Household Data 2024</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{animatedValue}kg</div>
                  <div className="text-sm text-gray-500">Average Monthly Usage</div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="space-y-4">
                {activeChart === 'monthly' && (
                  <div className="space-y-6">
                    {/* Bar Chart */}
                    <div className="flex items-end justify-between h-48">
                      {currentChart.data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group">
                          <div className="relative">
                            <div 
                              className="w-8 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-lg transition-all duration-500 hover:scale-105"
                              style={{ height: `${item.usage * 1.5}px` }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {item.usage}kg (₦{item.cost.toLocaleString()})
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">{item.month}</div>
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
                        <div className="text-2xl font-bold text-gray-900">{currentChart.peak || '95'}kg</div>
                        <div className="text-sm text-gray-500">Peak Month (Dec)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{currentChart.average || '78'}kg</div>
                        <div className="text-sm text-gray-500">Monthly Average</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeChart === 'household' && (
                  <div className="space-y-6">
                    {/* Donut Chart Visualization */}
                    <div className="relative h-48 flex items-center justify-center">
                      {currentChart.data?.map((item, index) => (
                        <div
                          key={index}
                          className="absolute w-32 h-32 rounded-full border-8 transition-all duration-500 hover:scale-110"
                          style={{
                            borderColor: index === 0 ? '#3b82f6' : 
                                        index === 1 ? '#06b6d4' : 
                                        index === 2 ? '#10b981' : '#f59e0b',
                            width: `${100 + index * 40}px`,
                            height: `${100 + index * 40}px`,
                            opacity: 0.7 - (index * 0.15)
                          }}
                        ></div>
                      ))}
                      <div className="relative z-10 text-center">
                        <div className="text-3xl font-bold text-gray-900">4.2</div>
                        <div className="text-sm text-gray-500">Avg Household Size</div>
                      </div>
                    </div>
                    
                    {/* Household Data */}
                    <div className="space-y-3">
                      {currentChart.data?.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{
                              backgroundColor: index === 0 ? '#3b82f6' : 
                                              index === 1 ? '#06b6d4' : 
                                              index === 2 ? '#10b981' : '#f59e0b'
                            }}></div>
                            <div>
                              <div className="font-medium text-gray-900">{item.size}</div>
                              <div className="text-sm text-gray-500">{item.percentage}% of households</div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">{item.usage}kg/month</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeChart === 'city' && (
                  <div className="space-y-6">
                    {/* City Comparison Bars */}
                    <div className="space-y-4">
                      {currentChart.data?.map((city, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${city.color} flex items-center justify-center`}>
                                <FiMapPin className="text-white text-sm" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{city.city}</div>
                                <div className="text-xs text-gray-500">{city.population} population</div>
                              </div>
                            </div>
                            <div className="text-lg font-bold text-gray-900">{city.usage}kg</div>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full bg-gradient-to-r ${city.color} transition-all duration-1000`}
                              style={{ width: `${city.usage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Consumption Factors */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <FiActivity className="text-cyan-400" />
                <h3 className="text-xl font-bold">Key Consumption Factors</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {consumptionFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-cyan-300 group-hover:scale-110 transition-transform">
                        {factor.icon}
                      </div>
                      <span className="text-sm font-medium">{factor.factor}</span>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                      factor.impact === 'Very High' ? 'bg-red-500/20 text-red-300' :
                      factor.impact === 'High' ? 'bg-orange-500/20 text-orange-300' :
                      factor.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      Impact: {factor.impact}
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
                <h3 className="text-xl font-bold text-gray-900">Key Insights</h3>
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

            {/* Savings Calculator */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <FiTarget className="text-white" />
                <h3 className="text-xl font-bold">Potential Savings Calculator</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm opacity-90">Current Monthly Usage</div>
                  <div className="text-lg font-bold">12.5kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm opacity-90">With Smart Monitoring</div>
                  <div className="text-lg font-bold">9.5kg</div>
                </div>
                <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-3/4"></div>
                </div>
                <div className="text-center pt-4">
                  <div className="text-3xl font-bold">₦3,500</div>
                  <div className="text-sm opacity-90">Monthly Savings Potential</div>
                </div>
              </div>
            </div>

            {/* Usage Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">Smart Usage Tips</h3>
              </div>
              <div className="space-y-4">
                {usageTips.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="text-blue-600 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-sm text-gray-700">{item.tip}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Growth */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold">+25% YoY</div>
                  <div className="text-sm opacity-90">Nigerian LPG Market Growth</div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Nigeria's LPG consumption is growing rapidly, with government initiatives pushing for 5 million metric tons by 2025.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '12.5M', label: 'Nigerian Households Using LPG', icon: <FiHome /> },
              { value: '1.2M', label: 'MT Annual Consumption', icon: <FiActivity /> },
              { value: '₦500B', label: 'Annual Market Value', icon: <FiDollarSign /> },
              { value: '35%', label: 'Urban Penetration Rate', icon: <FiTrendingUp /> },
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