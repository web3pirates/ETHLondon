import express, { Request, Response } from "express";
import { handleCreateQuest, handleExecuteQuest, handleFarcasterLogin } from "./controller";
import { createQuestSchema, farcasterLoginSchema } from "./schemas";
import { validate } from "./middleware";
import connectDB from "./db";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Frame&Chips Backend is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.post(
  "farcaster-login",
  validate(farcasterLoginSchema),
  handleFarcasterLogin
);

app.post("/quest", validate(createQuestSchema), handleCreateQuest);

app.post("/quest/:id/execute", handleExecuteQuest);
