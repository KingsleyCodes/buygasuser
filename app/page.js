import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Slideshow */}
      <HeroSection />
      
      {/* 2. How It Works - Explains the process */}
      <FeaturesSection />
      
      {/* 3. Services Offered - What customers can buy */}
      <ServicesSection />
      
      {/* 4. Why Choose Us - Differentiation & benefits */}
      <WhyChooseUsSection />
      
      {/* Add more sections as needed */}
    </div>
  )
}