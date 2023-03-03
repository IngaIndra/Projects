import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const getCategory = async (id) => {
  const [result] = await pool.query("SELECT * FROM category where id=?", [id]);
  return result.length ? result[0] : null;
};

export const createCategory = async (name, slug, image) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, image) VALUES (?,?,?)`,
    [name, slug, image]
  );
  return result;
};

export const deleteCategory = async (id) => {
  const [result] = await pool.query(`delete from category where id=?`, [id]);
  return result;
};

export const updateCategory = async (name, slug, image, id) => {
  const [result] = await pool.query(
    `update category set name=?, slug=?, image=? where id=?`,
    [name, slug, image, id]
  );
  return result;
};
