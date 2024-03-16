import { Request, Response } from "express";
import User from "./models/user";
import Quest from "./models/quest";
import { storageRegistryAbi } from "./abi/StorageRegistry";

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

export async function handleExecuteQuest(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // const quest = await Quest.findById(id);

    // if (!quest) {
    //   return res.status(400).send("Quest does not exist");
    // }

    const transactionData = {
      chainId: "eip155:10",
      method: "eth_sendTransaction",
      params: {
        abi: storageRegistryAbi, // JSON ABI of the function selector and any errors
        to: "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D",
        data: "0x783a112b0000000000000000000000000000000000000000000000000000000000000e250000000000000000000000000000000000000000000000000000000000000001",
        value: "984316556204476",
      },
    };

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
