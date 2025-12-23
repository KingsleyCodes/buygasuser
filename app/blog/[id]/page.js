'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  FiCalendar, 
  FiUser, 
  FiClock, 
  FiArrowLeft,
  FiShare2,
  FiTag,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiMessageSquare
} from 'react-icons/fi'

export default function BlogPostPage() {
  const { id } = useParams()

  // This would come from your CMS/database
  const post = {
    id: id,
    title: 'How to Safely Handle Gas Cylinders in Nigerian Homes',
    content: `
      <h2>Introduction</h2>
      <p>Gas cylinders are essential in most Nigerian households, but improper handling can lead to dangerous situations. This guide covers everything you need to know about safe gas cylinder usage in Nigeria.</p>
      
      <h2>Proper Storage Tips</h2>
      <p>Always store your gas cylinder in a well-ventilated area, away from direct sunlight and heat sources. Never store it indoors or in enclosed spaces.</p>
      
      <h2>Safety Checks</h2>
      <p>Regularly check for leaks using soapy water. Look for bubbles forming around connections. If you detect a leak, turn off the cylinder immediately and ventilate the area.</p>
      
      <h2>Emergency Procedures</h2>
      <p>In case of a gas leak: 1. Don't switch electrical appliances on/off 2. Open windows for ventilation 3. Call emergency services immediately 4. Evacuate the area if smell is strong</p>
    `,
    author: 'Safety Team',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    category: 'Safety Tips',
    tags: ['Safety', 'Home Tips', 'Nigeria', 'Gas Cylinders'],
    relatedPosts: [
      { id: 2, title: 'Smart Sensors: The Future of Gas Delivery' },
      { id: 4, title: 'Emergency Gas Delivery: When and How to Use It' },
      { id: 9, title: 'Converting from Kerosene to Gas: A Complete Guide' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <FiArrowLeft /> Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <FiUser className="text-blue-500" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-blue-500" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-blue-500" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="h-64 md:h-96 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 mb-8 flex items-center justify-center">
            <div className="text-white text-5xl">
              📝
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <FiTag className="text-blue-500" />
            <span className="font-medium">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mb-12 p-6 bg-blue-50 rounded-2xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Share this article</h3>
              <p className="text-gray-600 text-sm">Help others learn about gas safety</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                <FiFacebook />
              </button>
              <button className="w-10 h-10 rounded-lg bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                <FiTwitter />
              </button>
              <button className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800">
                <FiLinkedin />
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-3 hover:text-blue-600">
                  {relatedPost.title}
                </h3>
                <div className="text-blue-600 font-medium flex items-center gap-2">
                  Read Article <FiArrowLeft className="rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <div className="text-3xl mb-4">📧</div>
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Get more safety tips and articles delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}