import { motion } from 'framer-motion'

import brandLogo from '@/assets/images/orolini-logo (1).png'
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.section
      className="relative h-screen flex items-center justify-center bg-white text-white overflow-hidden"
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
      <div className="flex flex-col items-center relative z-10 text-center px-4">
    
        <motion.div
       
      transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
      }}
        
        >
          <Image src={brandLogo} alt="Brand Logo" width={200} height={200}/>
        </motion.div>
        <motion.p
          className="font-bold text-black  mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Evergreen Fashion with a Touch of Trend
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


