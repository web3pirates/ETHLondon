import { storageRegistryAbi } from "../../../../abi/StorageRegistry";
import { ApeTokenABI } from "@/abi/ApeToken";
import connectDB from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

// Adjust the import path as necessary
// import Quest from '../../../models/quest'; // Uncomment and adjust the path as necessary

export default async function handleExecuteQuest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hi there");
  if (req.method === "POST") {
    //await connectDB();
    try {
      const { id } = req.query; // In Next.js API routes, path parameters are accessed via req.query

      // const quest = await Quest.findById(id);

      // if (!quest) {
      //   return res.status(400).json({ error: "Quest does not exist" });
      // }

      /*Apecoin staking*/
      const transactionData = {
        chainId: "eip155:84532",
        method: "eth_sendTransaction",
        params: {
          abi: ApeTokenABI,
          to: "0x01e61008f78a83e0dabd2fbd7ef81b64cdd2e1f4",
          data: "",
          value: "1000000000000000000",
        },
      };

      /*
      const transactionData = {
        chainId: "eip155:10",
        method: "eth_sendTransaction",
        params: {
          abi: storageRegistryAbi,
          to: "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D",
          data: "0x783a112b0000000000000000000000000000000000000000000000000000000000000e250000000000000000000000000000000000000000000000000000000000000001",
          value: "984316556204476",
        },
      };*/

      res.status(200).json(transactionData);
    } catch (error: any) {
      res.status(400).json({
        error:
          error.message ||
          "An error occurred while executing the quest, please try again",
      });
    }
  } else {
    // If the request is not a POST request, return an error
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
