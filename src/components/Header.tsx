import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter, Youtube, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

interface HeaderProps {
  isDarkMode: boolean
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = ['about', 'projects', 'skills', 'contact']

  return (
    <motion.header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-800 shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${
          isScrolled 
            ? 'text-gray-800 dark:text-white' 
            : 'text-white'
        }`}>
          LS
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-800 dark:text-white' 
                      : 'text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
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
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
        >
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-4 py-2">
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
                className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header