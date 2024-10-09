import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import axios from 'axios'

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/blog/${id}`)
        setPost(response.data)
      } catch (error) {
        console.error('Error fetching post:', error)
        setError('Failed to fetch the blog post. Please try again later.')
      }
    }
    fetchPost()
  }, [id])

  if (error) {
    return <div className="text-center text-red-600">{error}</div>
  }

  if (!post) {
    return <div className="text-center">Loading...</div>
  }

  // ... rest of the component remains the same
}

export default BlogPost