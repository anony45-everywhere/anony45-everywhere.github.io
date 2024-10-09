import express from 'express';
import { body, validationResult } from 'express-validator';
import BlogPost from '../models/BlogPost.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.post('/', [
  authenticateToken,
  body('title').trim().isLength({ min: 1 }).escape(),
  body('content').trim().isLength({ min: 1 }),
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const post = new BlogPost({ title, content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', [
  authenticateToken,
  body('title').trim().isLength({ min: 1 }).escape(),
  body('content').trim().isLength({ min: 1 }),
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', authenticateToken, async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;