'use client'

import { motion } from 'framer-motion'
import { Star, Target, Recycle, Users, Zap } from 'lucide-react'
import { useState } from 'react'

const values = [
  { icon: Star, title: "Uncompromising Quality", description: "We strive for excellence in every product we create." },
  { icon: Recycle, title: "Environmental Stewardship", description: "We are committed to sustainable practices and materials." },
  { icon: Zap, title: "Innovative Design", description: "We push boundaries to create unique and forward-thinking products." },
  { icon: Users, title: "Ethical Business", description: "We maintain the highest standards of integrity in all our operations." },
  { icon: Target, title: "Customer-Centric", description: "We prioritize our customers' needs and satisfaction above all." },
]

const goals = [
  'Lead the industry in sustainable luxury',
  'Expand our global presence responsibly',
  'Continuously innovate in materials and design',
  'Inspire positive change in consumer behavior',
  'Achieve carbon neutrality by 2030',
]

export default function BrandValues() {
  const [activeValue, setActiveValue] = useState(0)

  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-red-600 text-center">Brand Values and Goals</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    index === activeValue ? 'bg-red-600 text-white' : 'bg-gray-100 hover:bg-red-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveValue(index)}
                >
                  <div className="flex items-center space-x-4">
                    <value.icon size={24} />
                    <h4 className="text-xl font-bold">{value.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Goals</h3>
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span>{goal}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div
          className="mt-12 p-6 bg-gray-100 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-4">{values[activeValue].title}</h4>
          <p className="text-lg">{values[activeValue].description}</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

