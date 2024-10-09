import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Pencil, Trash2, Eye, Lock } from 'lucide-react'
import axios from 'axios'

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
      fetchPosts()
    }
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/blog`)
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setError('Failed to fetch posts. Please try again.')
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { username, password })
      const { token } = response.data
      localStorage.setItem('token', token)
      setToken(token)
      setIsAuthenticated(true)
      fetchPosts()
    } catch (error) {
      console.error('Login error:', error)
      setError('Invalid credentials. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingPost) {
        await axios.put(`${API_URL}/blog/${editingPost._id}`, { title, content }, {
          headers: { Authorization: `Bearer ${token}` }
        })
      } else {
        await axios.post(`${API_URL}/blog`, { title, content }, {
          headers: { Authorization: `Bearer ${token}` }
        })
      }
      setEditingPost(null)
      setTitle('')
      setContent('')
      fetchPosts()
    } catch (error) {
      console.error('Error submitting post:', error)
      setError('Failed to submit post. Please try again.')
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setTitle(post.title)
    setContent(post.content)
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/blog/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchPosts()
    } catch (error) {
      console.error('Error deleting post:', error)
      setError('Failed to delete post. Please try again.')
    }
  }

  // ... rest of the component remains the same
}

export default Admin