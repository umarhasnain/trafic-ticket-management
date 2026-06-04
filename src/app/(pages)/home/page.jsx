import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import CTABanner from '@/components/sections/CTABanner'
import FAQ from '@/components/sections/FAQ'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Statistics from '@/components/sections/Statistics'
import Testimonials from '@/components/sections/Testimonials'
import TrustBadges from '@/components/sections/TrustBadges'
import ViolationCategories from '@/components/sections/ViolationCategories'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FloatingCTA from '@/components/shared/FloatingCTA'
import MobileBottomBar from '@/components/shared/MobileBottomBar'
// import StickyRibbon from '@/components/shared/StickyRibbon'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />

{/* <StickyRibbon /> */}
      <TrustBadges />

      <HowItWorks />

      <ViolationCategories />
      <WhyChooseUs />

      <Statistics />

      <Testimonials />
      <FAQ />

      <CTABanner />
<FloatingCTA />
      {/* <Footer /> */}

<MobileBottomBar />
    </div>
  )
}

export default Home
