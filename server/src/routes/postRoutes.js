import { Router } from 'express';
import { getPosts, createPost, putLike, deletePost } from '../controllers/postControllers.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.put('/posts/like/:id', putLike);
router.delete('/posts/:id', deletePost)

export default router;

