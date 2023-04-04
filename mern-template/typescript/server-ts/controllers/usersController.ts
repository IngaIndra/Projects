import { Request, Response } from "express";
import UserModel, { IUser } from "../models/userModel";

export const countAllUsers = async (req: Request, res: Response) => {
  res.json(await UserModel.count({}));
};

export const findAllUsers = async (req: Request, res: Response) => {
  const { limit = "10", skip = "0" } = req.query;
  const result: IUser[] = await UserModel.find({})
    .limit(Number(limit))
    .skip(Number(skip));
  res.json(result);
};

export const findUserById = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const result: IUser | null = await UserModel.findById(_id);
  res.json(result);
};

export const createUser = async (req: Request, res: Response) => {
  const result = await UserModel.create(req.body);
  res.json(result);
};
