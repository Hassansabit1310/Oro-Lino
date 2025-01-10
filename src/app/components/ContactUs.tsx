'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/button'
import { useToast } from '../../../hooks/use-toast'


export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <motion.section
      id="contact-us"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-red-600 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</p>
        
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full min-h-[150px]"
              placeholder="Your message here..."
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}

