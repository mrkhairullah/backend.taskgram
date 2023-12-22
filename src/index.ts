import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: String | Number = process.env.APP_PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Taskgram");
});

app.listen(port, () => {
  console.log(`[SERVER] Running on http://${process.env.APP_BASE_URL}:${port}`);
});
