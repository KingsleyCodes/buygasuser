import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
// import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuyGas - Never Run Out of Gas Again',
  description: 'Smart gas delivery service for households. We deliver before you run out!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        {/* <HeroSection/> */}
<main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}