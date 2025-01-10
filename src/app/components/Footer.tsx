import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-4">Oro Lino</h3>
          <p className="mb-4">Evergreen Fashion with a Touch of Trend</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#brand-story" className="hover:text-red-500 transition-colors">Brand Story</a></li>
            <li><a href="#target-audience" className="hover:text-red-500 transition-colors">Target Audience</a></li>
            <li><a href="#market-positioning" className="hover:text-red-500 transition-colors">Market Positioning</a></li>
            <li><a href="#visual-identity" className="hover:text-red-500 transition-colors">Visual Identity</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="mb-2">Email: info@oro-lino.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
        <p>&copy; 2023 Oro Lino. All rights reserved.</p>
      </div>
    </footer>
  )
}

