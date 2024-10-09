import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from './components/Admin'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header isDarkMode={isDarkMode} />
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={
              <main className="container mx-auto px-4 py-8">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Blog />
                <Contact />
              </main>
            } />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App