import { pool } from '../../database/config.js'; 

// GET
export const getPostModel = async () => {
  const SQLquery = { text: 'SELECT * FROM posts' };
  try {
      const result = await pool.query(SQLquery);
      return result.rows;
  } catch (error) {
      console.log(error);
  }
};

// POST
export const createPostModel = async ({ titulo, url, descripcion, likes }) => {
  const id = Math.floor(Math.random() * 9999);
  const SQLquery = {
      text: 'INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      values: [id, titulo, url, descripcion, likes],
  };
  try {
      const result = await pool.query(SQLquery);
      return result.rows[0];
  } catch (error) {
      console.log(error);
  }
};







