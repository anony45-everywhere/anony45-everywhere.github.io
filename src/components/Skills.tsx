import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'React', level: 88, color: '#61DAFB' },
  { name: 'Node.js', level: 82, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'Machine Learning', level: 75, color: '#FF6F00' },
  { name: 'SQL', level: 78, color: '#4479A1' },
  { name: 'Git', level: 85, color: '#F05032' },
  { name: 'AWS', level: 70, color: '#232F3E' },
  { name: 'Docker', level: 72, color: '#2496ED' }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                <motion.div 
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills