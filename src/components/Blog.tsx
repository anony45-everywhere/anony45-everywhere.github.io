import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([])
  const [error, setError] = useState('')
  const postsPerPage = 6

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/blog`)
      const fetchedPosts = response.data.map((post: any) => ({
        _id: post._id,
        title: post.title,
        content: post.content,
        date: post.date
      }))
      setPosts(fetchedPosts)
      setVisiblePosts(fetchedPosts.slice(0, postsPerPage))
    } catch (error) {
      // Use a custom error object that can be safely cloned
      const errorMessage = error instanceof Error ? error.message : String(error)
      setError(`Failed to fetch blog posts: ${errorMessage}`)
    }
  }

  const loadMorePosts = () => {
    const currentLength = visiblePosts.length
    const nextPosts = posts.slice(currentLength, currentLength + postsPerPage)
    setVisiblePosts(prevPosts => [...prevPosts, ...nextPosts])
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>
  }

  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={post._id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content.substring(0, 150)}...</p>
              <Link
                to={`/blog/${post._id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
        {visiblePosts.length < posts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMorePosts}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog