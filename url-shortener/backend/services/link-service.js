import pool from "../configs/mysql-config.js";
import shortid from "shortid";

export const isValidUrl = (url) => {};

export const shorten = async (url) => {
  const id = shortid.generate();
  await pool.query(`insert into links values (?, ?)`, [id, url]);
  return id;
};

export const findOneById = async (id) => {
  const [result] = await pool.query(`select * from links where id=?`, [id]);
  return result.length ? result[0] : null;
};
