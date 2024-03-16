import { Request, Response } from "express";
import User from "./models/user";
import Quest from "./models/quest";

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

export async function handleCreateQuest(req: Request, res: Response) {
  try {
    const { owner } = req.body;

    const user = await User.findOne({ farcasterId: owner });

    if (!user) {
      return res.status(400).send("User does not exist");
    }

    const quest = await Quest.create(req.body);
    res.json(quest);
  } catch (error: any) {
    res
      .status(400)
      .send(
        error.message ||
          "An error occurred while creating the quest, please try again"
      );
  }
}
