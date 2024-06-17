import { Router } from 'express';
import { getPosts, createPost } from '../controllers/postControllers.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

router.get('/posts', getPosts);
router.post('/posts', createPost);

export default router;
