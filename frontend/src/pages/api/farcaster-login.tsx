import User from "../../models/user";
import { validate } from "@/middleware";
import { farcasterLoginSchema } from "@/schemas";
import type { NextApiRequest, NextApiResponse } from "next";

// Adjust the import path as necessary

export default async function handleFarcasterLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { farcasterId } = req.body;

    validate(farcasterLoginSchema, req.body);

    const alreadyExisting = await User.findOne({ farcasterId });

    if (alreadyExisting) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
