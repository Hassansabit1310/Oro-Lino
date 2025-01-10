'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Volume2, Feather, Zap } from 'lucide-react'
import { useState } from 'react'

const voiceTraits = [
  { icon: MessageCircle, title: "Confident", description: "We speak with authority and expertise in our field." },
  { icon: Volume2, title: "Passionate", description: "Our enthusiasm for luxury and sustainability shines through." },
  { icon: Feather, title: "Sophisticated", description: "We maintain an elegant and refined communication style." },
  { icon: Zap, title: "Inspiring", description: "We motivate our audience to embrace sustainable luxury." }
]

const toneExamples = [
  {
    context: 'Product Description',
    example: 'Discover our exquisite Eco-Luxe Handbag, where timeless elegance meets environmental responsibility. Crafted from innovative, sustainable materials, this piece embodies our commitment to both luxury and our planet.',
  },
  {
    context: 'Customer Service',
    example: 'We understand your concern and are committed to ensuring your complete satisfaction. Let\'s work together to find a solution that not only meets but exceeds your expectations.',
  },
  {
    context: 'Social Media',
    example: 'Elevate your style while lowering your carbon footprint. Our latest collection proves that luxury and sustainability can coexist beautifully. #SustainableLuxury #OroLino',
  },
]

export default function VoiceAndTone() {
  const [activeTrait, setActiveTrait] = useState(0)
  const [activeExample, setActiveExample] = useState(0)

  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-red-600 text-center">Voice and Tone</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Voice</h3>
            <div className="grid grid-cols-2 gap-4">
              {voiceTraits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    index === activeTrait ? 'bg-red-600 text-white' : 'bg-white hover:bg-red-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveTrait(index)}
                >
                  <div className="flex flex-col items-center text-center">
                    <trait.icon size={32} className="mb-2" />
                    <h4 className="text-xl font-bold">{trait.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-6 p-4 bg-white rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg">{voiceTraits[activeTrait].description}</p>
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Tone</h3>
            <div className="space-y-4">
              {toneExamples.map((example, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    index === activeExample ? 'bg-red-600 text-white' : 'bg-white hover:bg-red-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveExample(index)}
                >
                  <h4 className="text-xl font-bold mb-2">{example.context}</h4>
                  <p className="text-sm">{index === activeExample ? example.example : 'Click to view example'}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

