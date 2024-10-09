import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  fork: boolean;
  topics: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/Likhithsai2580/repos')
      .then(response => response.json())
      .then(data => {
        const filteredProjects = data.filter((project: Project) => !project.fork)
        setProjects(filteredProjects)
        setVisibleProjects(filteredProjects.slice(0, 6))
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching projects:', error)
        setLoading(false)
      })
  }, [])

  const showMoreProjects = () => {
    setVisibleProjects(projects.slice(0, visibleProjects.length + 3))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description || 'No description available'}</p>
              <div className="mb-4 flex flex-wrap">
                {project.topics.map((topic, index) => (
                  <span key={index} className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                >
                  <Github className="w-5 h-5 mr-1" />
                  View Source
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 flex items-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {visibleProjects.length < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreProjects}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects