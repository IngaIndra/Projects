import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../services/category-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getCategory(id));
});

router.post("/", async (req, res) => {
  const { name, slug, image } = req.body;
  try {
    res.json(await createCategory(name, slug, image));
  } catch (err) {
    res.status(400).json("Cannot be inserted");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteCategory(id));
  } catch (err) {
    res.status(400).json("Cannot be deleted");
  }
});

router.put("/", async (req, res) => {
  const { name, slug, image, id } = req.body;
  try {
    res.json(await updateCategory(name, slug, image, id));
  } catch (err) {
    console.log(err);
    res.status(400).json("Cannot be updated");
  }
});

export default router;
