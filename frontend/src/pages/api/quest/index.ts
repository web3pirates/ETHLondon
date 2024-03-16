// Adjust the import path as necessary
import Quest from "../../../models/quest";
import User from "../../../models/user";
import type { NextApiRequest, NextApiResponse } from "next";

// Adjust the import path as necessary

export default async function handleCreateQuest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { owner } = req.body;

    const user = await User.findOne({ farcasterId: owner });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const quest = await Quest.create(req.body);
    res.status(200).json(quest);
  } catch (error: any) {
    res
      .status(400)
      .json({
        error:
          error.message ||
          "An error occurred while creating the quest, please try again",
      });
  }
}
