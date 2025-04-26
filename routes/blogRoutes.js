import express from 'express';
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from '../controllers/blogController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', authMiddleware, roleMiddleware(['admin']), createBlog);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateBlog);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteBlog);

export default router;
