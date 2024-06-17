import { getPostModel, createPostModel } from '../models/postModel.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostModel();
    console.log('Posts:', posts);
    res.status(200).json({ posts: posts || [] }); 
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { titulo, url, descripcion, likes } = req.body;
    const newPost = await createPostModel({ titulo, url, descripcion, likes });
    res.status(201).json({ post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};



