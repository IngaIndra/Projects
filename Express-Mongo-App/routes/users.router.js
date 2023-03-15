import { Router } from "express";
import { getUsers, createUser } from "../services/users-service.js";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await getUsers());
});

router.post("/", async (req, res) => {
  const user = req.body;
  res.json(await createUser(user));
});

export default router;
