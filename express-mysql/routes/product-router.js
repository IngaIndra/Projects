import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../services/product-services.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getProducts());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getProduct(id));
});

router.post("/", async (req, res) => {
  const { name, slug, image, id } = req.body;
  try {
    res.json(await createProduct(name, slug, image, id));
  } catch (err) {
    res.status(400).json("Cannot be inserted");
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    res.json(await deleteProduct(id));
  } catch (err) {
    res.status(400).json("Cannot be deleted");
  }
});

router.put("/", async (req, res) => {
  const { name, slug, image, productCount, id } = req.body;
  try {
    res.json(await updateProduct(name, slug, image, productCount, id));
  } catch (err) {
    console.log(err);
    res.status(400).json("Cannot be updated");
  }
});

export default router;
