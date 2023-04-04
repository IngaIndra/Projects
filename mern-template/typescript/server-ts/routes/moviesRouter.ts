import { Router } from "express";
import {
  countAllMovies,
  findAllMovies,
  findMovieById,
} from "../controllers/moviesController";

const moviesRouter = Router();

moviesRouter.get("/", findAllMovies);
moviesRouter.get("/count", countAllMovies);
moviesRouter.get("/:_id", findMovieById);


export default moviesRouter;
