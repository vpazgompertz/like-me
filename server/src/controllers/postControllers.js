import {
  getPostModel,
  createPostModel,
  putLikeModel,
  deletePostModel,
} from "../models/postModel.js";

//GET
export const getPosts = async (req, res) => {
  try {
    const posts = await getPostModel();
    console.log("Posts:", posts);
    res.status(200).json({ posts: posts || [] });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

//POST
export const createPost = async (req, res) => {
  try {
    let { titulo, url, descripcion, likes } = req.body;
    likes = Number.isInteger(likes) && likes >= 0 ? likes : 0;
    const newPost = await createPostModel({ titulo, url, descripcion, likes });
    res.status(201).json({ post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
};

//PUT
export const putLike = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await putLikeModel({ id });
    res.status(200).json({ message: "Likes actualizados con exito", post: updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
};

// DELETE
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePostModel(id);
    res.status(200).json({ message: "Post eliminado con exito ", post: deletedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
};
