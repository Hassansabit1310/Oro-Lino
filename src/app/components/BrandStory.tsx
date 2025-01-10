import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandStory() {
  return (
    <motion.section
      id="brand-story"
      className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-red-600 text-center">Brand Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Oro Lino was born from a passion for luxury and a commitment to sustainability. Founded in 2010, our journey began with a simple idea: to create exquisite products that not only elevate personal style but also respect our planet.
            </p>
            <p className="text-lg mb-4">
              Over the years, we&apos;ve grown from a small boutique to a globally recognized brand, always staying true to our core values of quality, innovation, and environmental responsibility.
            </p>
            <p className="text-lg">
              Looking to the future, Oro Lino aims to set new standards in sustainable luxury, continuing to inspire and delight our customers while making a positive impact on the world.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Oro Lino Brand Story"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

