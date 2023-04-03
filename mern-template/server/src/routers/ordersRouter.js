import { Router } from "express";
import {
  createOrder,
  findAllOrders,
  findNearestOrder,
} from "../services/ordersService";

const ordersRouter = Router();

ordersRouter.get("/", async (req, res) => {
  try {
    const response = await findAllOrders();
    res.json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

ordersRouter.post("/", async (req, res) => {
  try {
    const response = await createOrder(req.body);
    res.json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

ordersRouter.get("/nearest", async (req, res) => {
  try {
    const { longitude, latitude } = req.body;
    const response = await findNearestOrder([longitude, latitude]);
    res.json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default ordersRouter;
