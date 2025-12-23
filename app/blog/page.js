'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FiCalendar, 
  FiUser, 
  FiTag, 
  FiArrowRight,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiHome
} from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const blogCategories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'safety', name: 'Safety Tips', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'lifestyle', name: 'Nigerian Lifestyle', count: 5 },
    { id: 'business', name: 'Business Tips', count: 5 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'How to Safely Handle Gas Cylinders in Nigerian Homes',
      excerpt: 'Essential safety tips every Nigerian household should know when using cooking gas. Learn proper handling, storage, and emergency procedures.',
      category: 'safety',
      readTime: '5 min read',
      date: 'Mar 15, 2024',
      author: 'Safety Team',
      image: '/blog/safety-tips.jpg',
      featured: true,
      tags: ['Safety', 'Home Tips', 'Nigeria']
    },
    {
      id: 2,
      title: 'Smart Sensors: The Future of Gas Delivery in Nigeria',
      excerpt: 'How IoT technology is revolutionizing gas delivery across Nigerian cities. Real-time monitoring and automatic ordering explained.',
      category: 'technology',
      readTime: '7 min read',
      date: 'Mar 10, 2024',
      author: 'Tech Team',
      image: '/blog/smart-sensors.jpg',
      featured: true,
      tags: ['Technology', 'IoT', 'Innovation']
    },
    {
      id: 3,
      title: 'Saving Money on Cooking Gas: Tips for Nigerian Families',
      excerpt: 'Practical advice to help Nigerian households reduce their gas consumption and save money monthly.',
      category: 'lifestyle',
      readTime: '4 min read',
      date: 'Mar 5, 2024',
      author: 'Finance Team',
      image: '/blog/saving-tips.jpg',
      featured: false,
      tags: ['Savings', 'Family', 'Tips']
    },
    {
      id: 4,
      title: 'Emergency Gas Delivery: When and How to Use It',
      excerpt: 'Everything you need to know about our emergency service in Lagos, Abuja, and Port Harcourt.',
      category: 'safety',
      readTime: '6 min read',
      date: 'Feb 28, 2024',
      author: 'Operations Team',
      image: '/blog/emergency.jpg',
      featured: false,
      tags: ['Emergency', 'Service', 'Delivery']
    },
    {
      id: 5,
      title: 'The Benefits of Automatic Gas Delivery for Busy Nigerians',
      excerpt: 'How automatic delivery saves time and ensures you never run out of gas during important moments.',
      category: 'lifestyle',
      readTime: '5 min read',
      date: 'Feb 20, 2024',
      author: 'Customer Success',
      image: '/blog/automatic.jpg',
      featured: false,
      tags: ['Convenience', 'Time-saving', 'Smart Living']
    },
    {
      id: 6,
      title: 'Gas Solutions for Nigerian Restaurants & Businesses',
      excerpt: 'Tailored gas delivery solutions for Nigerian businesses that rely on continuous supply.',
      category: 'business',
      readTime: '8 min read',
      date: 'Feb 15, 2024',
      author: 'Business Team',
      image: '/blog/business.jpg',
      featured: true,
      tags: ['Business', 'Restaurants', 'Commercial']
    }
  ]

  const popularPosts = [
    {
      id: 7,
      title: 'Understanding Gas Prices in Nigeria',
      excerpt: 'A guide to current gas prices and factors affecting them in the Nigerian market.',
      category: 'lifestyle',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Winter Gas Usage Tips for Northern Nigeria',
      excerpt: 'Special considerations for gas usage during harmattan and cooler months.',
      category: 'safety',
      readTime: '4 min read'
    },
    {
      id: 9,
      title: 'Converting from Kerosene to Gas: A Complete Guide',
      excerpt: 'Step-by-step guide for Nigerian households making the switch.',
      category: 'safety',
      readTime: '7 min read'
    }
  ]

  const featuredTopics = [
    {
      icon: <FiShield />,
      title: 'Safety Guides',
      description: 'Essential safety information for Nigerian homes',
      count: '8 Articles',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FiZap />,
      title: 'Smart Technology',
      description: 'Latest innovations in gas delivery',
      count: '6 Articles',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FiHome />,
      title: 'Home Tips',
      description: 'Practical advice for Nigerian households',
      count: '5 Articles',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Savings & Efficiency',
      description: 'Ways to save money on gas usage',
      count: '5 Articles',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory !== 'all' && post.category !== activeCategory) return false
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

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
              Insights & Tips
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              BuyGas Blog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Tips for Nigerian Homes</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Expert advice, safety tips, and insights on gas usage for Nigerian households and businesses.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for safety tips, guides, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 2/3 width */}
            <div className="lg:w-2/3">
              {/* Category Filters */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2 mb-8">
                  {blogCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-80">({category.count})</span>
                    </button>
                  ))}
                </div>

                {/* Featured Posts */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {blogPosts
                      .filter(post => post.featured)
                      .map((post, index) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100"
                        >
                          <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                            <div className="text-white text-4xl">
                              {post.category === 'safety' && <FiShield />}
                              {post.category === 'technology' && <FiZap />}
                              {post.category === 'lifestyle' && <FiHome />}
                              {post.category === 'business' && <FiTrendingUp />}
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                post.category === 'safety' ? 'bg-red-100 text-red-700' :
                                post.category === 'technology' ? 'bg-blue-100 text-blue-700' :
                                post.category === 'lifestyle' ? 'bg-green-100 text-green-700' :
                                'bg-purple-100 text-purple-700'
                              }`}>
                                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                              </span>
                              <span className="text-gray-500 text-sm flex items-center gap-1">
                                <FiClock className="text-sm" /> {post.readTime}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                            <p className="text-gray-600 mb-6">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <FiCalendar /> {post.date}
                                <span className="mx-1">•</span>
                                <FiUser /> {post.author}
                              </div>
                              <Link
                                href={`/blog/${post.id}`}
                                className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
                              >
                                Read More <FiArrowRight />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* All Posts */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                  
                  {currentPosts.length > 0 ? (
                    <div className="space-y-6">
                      {currentPosts.map((post, index) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
                        >
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4">
                              <div className="h-40 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                <div className="text-white text-3xl">
                                  {post.category === 'safety' && <FiShield />}
                                  {post.category === 'technology' && <FiZap />}
                                  {post.category === 'lifestyle' && <FiHome />}
                                  {post.category === 'business' && <FiTrendingUp />}
                                </div>
                              </div>
                            </div>
                            
                            <div className="md:w-3/4">
                              <div className="flex items-center gap-2 mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  post.category === 'safety' ? 'bg-red-100 text-red-700' :
                                  post.category === 'technology' ? 'bg-blue-100 text-blue-700' :
                                  post.category === 'lifestyle' ? 'bg-green-100 text-green-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                                </span>
                                <span className="text-gray-500 text-sm flex items-center gap-1">
                                  <FiClock className="text-sm" /> {post.readTime}
                                </span>
                              </div>
                              
                              <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                              <p className="text-gray-600 mb-4">{post.excerpt}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                  <FiCalendar /> {post.date}
                                  <span className="mx-1">•</span>
                                  <FiUser /> {post.author}
                                </div>
                                <Link
                                  href={`/blog/${post.id}`}
                                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
                                >
                                  Read Article <FiArrowRight />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-gray-400 text-4xl mb-4">📝</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                      <p className="text-gray-600">Try a different search term or category</p>
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-100"
                      >
                        <FiChevronLeft />
                      </button>
                      
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`w-10 h-10 rounded-lg font-medium ${
                            currentPage === index + 1
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-100"
                      >
                        <FiChevronRight />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="lg:w-1/3">
              {/* Featured Topics */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Topics</h3>
                <div className="space-y-4">
                  {featuredTopics.map((topic, index) => (
                    <div key={index} className="bg-white rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center`}>
                          <div className="text-white text-xl">
                            {topic.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{topic.title}</div>
                          <div className="text-blue-600 text-sm">{topic.count}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">{post.title}</h4>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              post.category === 'safety' ? 'bg-red-100 text-red-700' :
                              post.category === 'technology' ? 'bg-blue-100 text-blue-700' :
                              post.category === 'lifestyle' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiClock className="text-xs" /> {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-6">
                  Get the latest safety tips and articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-blue-200 text-xs mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Have a Topic in Mind?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                We're always looking for new topics to cover. What would you like us to write about?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Suggest a blog topic..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all">
                  Submit Idea
                </button>
              </div>
              
              <div className="mt-8 text-blue-200 text-sm">
                We read every suggestion and feature the most requested topics
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}