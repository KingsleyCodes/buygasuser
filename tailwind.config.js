/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        'primary-dark': '#E55A2B',
        secondary: '#00A8E8',
        // Change 'gray' to 'brandGray' so you don't break Tailwind's defaults
        brandGray: '#6C757D', 
        dark: '#1A1A2E',
        light: '#F8F9FA',
      },
    },
  },
  plugins: [],
}