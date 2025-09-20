import express from 'express';
import { getPosts, getSinglePost, updatePost, deletePost, createPost } from '../controllers/postController.js';
const router = express.Router();

// GET all posts
router.get('/', getPosts);

// GET post by id
router.get('/:id', getSinglePost);

// POST new post
router.post('/', createPost);

// UPDATE post
router.put('/:id', updatePost);

// DELETE post
router.delete('/:id', deletePost);


export default router;

