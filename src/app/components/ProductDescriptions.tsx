import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductDescriptions() {
  const products = [
    {
      name: "Eco-Luxe Handbag",
      description: "Crafted from sustainable materials, our Eco-Luxe Handbag combines timeless elegance with environmental responsibility.",
      image: "/placeholder.svg"
    },
    {
      name: "Sustainable Silk Scarf",
      description: "Our Sustainable Silk Scarf is made from ethically sourced, organic silk, featuring intricate designs inspired by nature.",
      image: "/placeholder.svg"
    },
    {
      name: "Recycled Gold Jewelry",
      description: "Our Recycled Gold Jewelry collection transforms reclaimed precious metals into stunning, one-of-a-kind pieces.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-playfair font-bold mb-8 text-red-600">Product Descriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={product.image} alt={product.name} width={300} height={200} className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

