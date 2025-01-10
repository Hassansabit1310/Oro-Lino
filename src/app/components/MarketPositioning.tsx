'use client'

import { motion } from 'framer-motion'
import { Diamond, Leaf, Clock, Award } from 'lucide-react'

const positioningPoints = [
  { icon: Diamond, title: 'Premium Quality', description: 'Uncompromising craftsmanship in every product' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'Sustainable materials and production processes' },
  { icon: Clock, title: 'Timeless Design', description: 'Classic aesthetics with a modern twist' },
  { icon: Award, title: 'Ethical Practices', description: 'Commitment to fair trade and responsible sourcing' },
]

export default function MarketPositioning() {
  return (
    <motion.section
      id="market-positioning"
      className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-red-600 text-center">Market Positioning</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Oro Lino stands at the intersection of luxury and sustainability, offering discerning customers a unique blend of opulence and environmental responsibility.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {positioningPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-gray-100 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <point.icon size={48} className="mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p>{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

