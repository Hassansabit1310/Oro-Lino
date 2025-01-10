import { motion } from 'framer-motion'
import Image from 'next/image'
import brandLogo from '@/assets/images/orolini-logo (1).png'
import brandStory from '@/assets/images/428610304_312387875149319_4323247035863100202_n.jpg'
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
              Oro Lino was born from a passion for luxury and a commitment to sustainability. Founded in 2021, our journey began with a simple idea: to create exquisite products that not only elevate personal style but also respect our planet.
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
              src={brandStory}
              alt="Oro Lino Brand Story"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

