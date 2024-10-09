import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className="fixed right-4 top-20 z-20 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.95 }}
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </motion.button>
  )
}

export default ThemeToggle