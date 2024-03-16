import { Request, Response } from "express";
import User from "./models/user";
import Quest from "./models/quest";

export async function handleFarcasterLogin(req: Request, res: Response) {
  try {
    const { farcasterId, farcasterHandle } = req.body;

    const alreadyExisting = await User.findOne({ farcasterId });

    if (alreadyExisting) {
      console.log("user already exist");
      //return res.status(400).send("User already exists");
    }

    const user = await User.create(req.body);
    console.log("user created");
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

export async function handleExecuteQuest(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const quest = await Quest.findById(id);

    if (!quest) {
      return res.status(400).send("Quest does not exist");
    }

    const transactionData = {};

    // Execute the quest
    res.json(transactionData);
  } catch (error: any) {
    res
      .status(400)
      .send(
        error.message ||
          "An error occurred while executing the quest, please try again"
      );
  }
}
