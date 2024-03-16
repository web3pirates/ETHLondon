import { z } from "zod";

export const farcasterLoginSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
  }),
});

export const createQuestSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    image: z.string().url("Invalid URL"),
    chainId: z.string().min(1, "Chain ID is required"),
  }),
});
