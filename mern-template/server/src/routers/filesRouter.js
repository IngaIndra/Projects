import { Router } from "express";
import multer from "multer";
import { v4 as uuid } from "uuid";
import cloudinary from "cloudinary";
import { env } from "../configs/env";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const fileName = uuid();
    const splittedPath = file.originalname.split(".");
    const fileExtention = splittedPath[splittedPath.length - 1];
    cb(null, `${fileName}.${fileExtention}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const filesRouter = Router();

filesRouter.use(upload.single("file"));

filesRouter.post("/", async (req, res) => {
  const uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
  res.json(uploadedFile);
});

export default filesRouter;
