'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import TargetAudience from './components/TargetAudience'
import MarketPositioning from './components/MarketPositioning'
import VisualIdentity from './components/VisualIdentity'
import BrandVoice from './components/BrandVoice'
import BrandValues from './components/BrandValues'
import ProductDescriptions from './components/ProductDescriptions'
import VoiceAndTone from './components/VoiceAndTone'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BrandStory />
        <TargetAudience />
        <MarketPositioning />
        <VisualIdentity />
        <BrandVoice />
        <BrandValues />
        <ProductDescriptions />
        <VoiceAndTone />
        <ContactUs />
      </motion.div>
      <Footer />
    </main>
  )
}

