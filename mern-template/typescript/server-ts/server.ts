import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";

mongoose.connect(MONGO_URL);

mongoose.connection.once("open", () => {
  console.log("Mongoose connection is established");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App is listening on http://localhost:${PORT}");
});
