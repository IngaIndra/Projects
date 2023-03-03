import pool from "../config/mysql-config.js";

export const getProducts = async () => {
  const [result] = await pool.query("SELECT * FROM products");
  return result;
};

export const getProduct = async (id) => {
  const [result] = await pool.query("SELECT * FROM products where id=?", [id]);
  return result.length ? result[0] : null;
};

export const createProduct = async (name, slug, image, id) => {
  const [result] = await pool.query(
    `INSERT INTO products (name, slug, image, id) VALUES (?,?,?,?)`,
    [name, slug, image, id]
  );
  return result;
};

export const deleteProduct = async (id) => {
  const [result] = await pool.query(`delete from products where id=${id}`);
  return result;
};

export const updateProduct = async (name, slug, image, productCount, id) => {
  const [result] = await pool.query(
    `update products set name=?, slug=?, image=?, productCount=? where id=?`,
    [name, slug, image, productCount, id]
  );
  return result;
};
