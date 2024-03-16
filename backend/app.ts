import express, { Request, Response } from "express";
import { handleFarcasterLogin } from "./controller";
import { farcasterLoginSchema } from "./schemas";
import { validate } from "./middleware";
import connectDB from "./db";

const app = express();
const PORT = 8000;

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.post(
  "farcaster-login",
  validate(farcasterLoginSchema),
  handleFarcasterLogin
);

// app.post("/quest", validate(createQuestSchema), handleCreateQuest);
