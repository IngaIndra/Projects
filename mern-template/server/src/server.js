import app from "./app";
import { env } from "./configs/env";
import mongoose from "mongoose";

const PORT = env.PORT || 8080;
const uri = env.MONGODB_URL || "mongodb://localhost:27017/";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongoose;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
