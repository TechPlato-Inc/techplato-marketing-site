'use client'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/Home/HeroSection'

import Navbar from '@/components/Shared/Navbar'
import CursorGlow from '@/components/Shared/CursorGlow'

// Lazy-load below-the-fold sections
const AboutSection = dynamic(() => import('@/components/Home/AboutSection'))
const OurProducts = dynamic(() => import('@/components/Home/OurProducts'))
const ContactUs = dynamic(() => import('@/components/Home/ContactUs'))
const Contact = dynamic(() => import('@/components/Home/Contact'))
const Footer = dynamic(() => import('@/components/Shared/Footer'))

function Page() {
  return (
    <div id='main-container' className="bg-[#050A1A] overflow-hidden relative">
      {/* Global grain texture overlay */}
      <div className="global-grain" aria-hidden="true" />
      {/* Cinematic lighting layer */}
      <div className="cinematic-lighting" aria-hidden="true">
        <div className="cinematic-glow-1" />
        <div className="cinematic-glow-2" />
      </div>
      {/* Vignette edge darkening */}
      <div className="cinematic-vignette" aria-hidden="true" />

      <CursorGlow />
      <Navbar />
      <HeroSection />
      <div className="section-bridge" aria-hidden="true" />
      <AboutSection />
      <div className="section-bridge" aria-hidden="true" />
      <OurProducts />
      <ContactUs />
      <div className="section-bridge" aria-hidden="true" />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page
