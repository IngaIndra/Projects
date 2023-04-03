import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
  res.json("Hello world");
});

app.get("/hello world again");

app.listen(PORT, () => {
  console.log("App is listening on http://localhost:${PORT}");
});
