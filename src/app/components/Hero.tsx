import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Oro Lino
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Sustainable Luxury for the Modern World
        </motion.p>
        <motion.a
          href="#brand-story"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Discover Our Story
        </motion.a>
      </div>
    </motion.section>
  )
}

