import { pool } from "../../database/config.js";

// GET
export const getPostModel = async () => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (error) {
    throw new Error(`Error al obtener un post: ${error.message}`);
  }
};

// POST
export const createPostModel = async ({ titulo, url, descripcion, likes }) => {
  const id = Math.floor(Math.random() * 9999);
  try {
    const result = await pool.query(
      "INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id, titulo, url, descripcion, likes]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error al crear un post: ${error.message}`);
  }
};

// PUT LIKE
export const putLikeModel = async ({ id }) => {
  try {
    const result = await pool.query(
      "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`No se guardó el like: ${error.message}`);
  }
};

// DELETE
export const deletePostModel = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error al eliminar el post: ${error.message}`);
  }
};
