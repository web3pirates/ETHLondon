import { ApeTokenABI } from "@/abi/ApeToken";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handleExecuteQuest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const transactionData = {
        chainId: "eip155:84532",
        method: "eth_sendTransaction",
        params: {
          abi: ApeTokenABI,
          to: "0x01e61008f78a83e0dabd2fbd7ef81b64cdd2e1f4",
          data: "0xa9059cbb000000000000000000000000bcb4bb184fca9d053b7ad5411a322235bad9596d000000000000000000000000000000000000000000000004826398b9c7e03f91",
          value: "",
        },
      };

      res.status(200).json(transactionData);
    } catch (error: any) {
      res.status(400).json({
        error:
          error.message ||
          "An error occurred while executing the quest, please try again",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
