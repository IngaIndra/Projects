import { Router } from "express";
import {
  countAllUsers,
  createUser,
  findAllUsers,
  findUserById,
} from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", findAllUsers);
usersRouter.get("/count", countAllUsers);
usersRouter.get("/:_id", findUserById);
usersRouter.post("/", createUser);

export default usersRouter;
