import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "",
  database: "green",
}).promise();

export default pool;
