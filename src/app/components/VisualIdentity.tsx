import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VisualIdentity() {
  return (
    <motion.section
      id="visual-identity"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-playfair font-bold mb-8 text-red-600">Visual Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Logo</h3>
            <Image src="/placeholder.svg" alt="Oro Lino Logo" width={300} height={100} className="mb-4" />
            <p className="text-lg mb-4">
              Our logo embodies the essence of Oro Lino: elegant, refined, and timeless. The intertwined &apos;O&apos; and &apos;L&apos; symbolize the harmony between luxury and sustainability.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Color Palette</h3>
            <div className="flex space-x-4 mb-4">
              <div className="w-20 h-20 bg-red-600"></div>
              <div className="w-20 h-20 bg-gray-800"></div>
              <div className="w-20 h-20 bg-black"></div>
            </div>
            <p className="text-lg mb-4">
              Our color palette reflects our brand&apos;s personality: bold red for passion and luxury, sophisticated gray for balance, and timeless black for elegance.
            </p>
          </div>
        </div>
        <p className="text-lg mt-8">
          Oro Lino&apos;s visual identity guidelines ensure consistency across all brand touchpoints, from product packaging to digital presence, reinforcing our unique position in the luxury market.
        </p>
      </div>
    </motion.section>
  )
}

