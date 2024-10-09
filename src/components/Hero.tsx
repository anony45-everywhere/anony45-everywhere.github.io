import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, FileText } from 'lucide-react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img
          src="https://avatars.githubusercontent.com/u/62712260?v=4"
          alt="Likhith Sai"
          className="rounded-full w-32 h-32 border-4 border-white shadow-lg"
        />
      </motion.div>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Likhith Sai
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Software Developer | Machine Learning Enthusiast
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Learn More
        </Link>
        <a
          href="https://github.com/Likhithsai2580/Likhithsai2580/blob/main/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          <FileText className="w-5 h-5 mr-2" />
          Resume
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-2"
        >
          <ChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero