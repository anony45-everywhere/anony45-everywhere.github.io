import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.img
            src="https://avatars.githubusercontent.com/u/62712260?v=4"
            alt="Likhith Sai"
            className="rounded-full w-40 h-40 md:w-48 md:h-48 mb-8 md:mb-0 md:mr-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3"
          >
            <p className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300">
              Hello! I'm Likhith Sai, a passionate software developer with a keen interest in web technologies and machine learning. I love creating innovative solutions and contributing to open-source projects.
            </p>
            <p className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300">
              With a strong foundation in JavaScript, Python, and various web frameworks, I strive to build efficient and user-friendly applications that solve real-world problems.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About