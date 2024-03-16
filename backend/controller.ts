import { Request, Response } from "express";
import User from "./models/user";

export async function handleFarcasterLogin(req: Request, res: Response) {
  try {
    const { farcasterId } = req.body;

    const alreadyExisting = await User.findOne({ farcasterId });

    if (alreadyExisting) {
      return res.status(400).send("User already exists");
    }

    const user = await User.create(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
