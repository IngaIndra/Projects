import express from "express";
import linkRouter from "./routes/link-router.js";
import { findOneById } from "./services/link-service.js";

const app = express();

app.use(express.json()); //gadnaas object bolgoj huvirgaj avna

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await findOneById(id);
  if (result === null) res.status(404).json("url not found");
  else res.json(result);
});

app.use("/links", linkRouter);

app.listen(8001, () => {
  console.log("http://localhost:8001");
});
