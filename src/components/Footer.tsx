import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Likhith Sai. All rights reserved.</p>
            <p className="mt-2">Built with React and ❤️</p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/Likhithsai2580" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/seemalalikithsai" },
              { icon: Twitter, href: "https://twitter.com/LuckyMod25" },
              { icon: Youtube, href: "https://www.youtube.com/@hackersareherewhereareyou" }
            ].map(({ icon: Icon, href }, index) => (
              <a 
                key={index}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer