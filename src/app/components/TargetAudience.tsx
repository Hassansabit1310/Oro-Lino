'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const audienceProfiles = [
  {
    name: 'The Conscious Professional',
    description: 'Career-driven individuals who value both success and sustainability.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'The Eco-Luxe Enthusiast',
    description: 'Fashion-forward consumers who prioritize environmental responsibility.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'The Global Citizen',
    description: 'Well-traveled individuals who appreciate diverse cultures and global trends.',
    image: '/placeholder.svg?height=300&width=300',
  },
]

export default function TargetAudience() {
  return (
    <motion.section
      id="target-audience"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-red-600 text-center">Our Target Audience</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Oro Lino caters to discerning individuals who appreciate the finer things in life while being conscious of their environmental impact.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceProfiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={profile.image}
                alt={profile.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">{profile.name}</h3>
              <p className="text-center">{profile.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

