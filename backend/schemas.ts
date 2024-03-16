import { z } from "zod";
import Quest, { QuestTemplate } from "./models/quest";

export const farcasterLoginSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export const createQuestSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid URL"),
  chainId: z.string().min(1, "Chain id is required"),
  link: z.string().url("Invalid URL"),
  contractAddress: z.string().min(1, "Contract address is required"),
  event: z.string().optional(),
  template: z.enum(
    Object.values(QuestTemplate).filter(
      (value) => typeof value === "string"
    ) as [string, ...string[]]
  ),
  owner: z.string().min(1, "Owner is required"),
});
