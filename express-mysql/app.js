const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const pool = mysql //end mysql tei yaj holbogdoh-g ni bichne
  .createPool({
    host: "localhost",
    user: "root",
    port: 3307,
    password: "",
    database: "green",
  })
  .promise();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const [result, columns] = await pool.query("SELECT * FROM category");
  console.log(result);
  res.json(result);
});

app.post("/", async (req, res) => {
  const { name, slug, image } = req.body;
  try {
    const [result] = await pool.query(
      `insert into category(name, slug, image) values(?,?,?)`,
      [name, slug, image]
    );
    res.json(result);
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

app.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    const [result] = await pool.query(`delete from category where id=?`, [id]);
    res.json(result);
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

app.put("/", async (req, res) => {
  const { name, slug, image, id } = req.body;
  try {
    const [result] = await pool.query(
      `update category set name=?, slug=?, image=? where id=?`,
      [name, slug, image, id]
    );
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json("Something went wrong");
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
