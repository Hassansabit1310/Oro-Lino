'use client'

import { motion } from 'framer-motion'
import { Mic, Heart, Book, Zap } from 'lucide-react'
import { useState } from 'react'

const voiceTraits = [
  { icon: Mic, title: 'Confident', description: 'We speak with authority and expertise' },
  { icon: Heart, title: 'Passionate', description: 'Our love for luxury and sustainability shines through' },
  { icon: Book, title: 'Knowledgeable', description: 'We educate and inform our audience' },
  { icon: Zap, title: 'Inspiring', description: 'We motivate our customers to make conscious choices' },
]

export default function BrandVoice() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-red-600 text-center">Our Brand Voice</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {voiceTraits.map((trait, index) => (
              <motion.div
                key={trait.title}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  index === activeIndex ? 'bg-red-600 text-white' : 'bg-white hover:bg-red-100'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center space-x-4">
                  <trait.icon size={24} />
                  <h3 className="text-xl font-bold">{trait.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">{voiceTraits[activeIndex].title}</h3>
            <p className="text-lg">{voiceTraits[activeIndex].description}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

