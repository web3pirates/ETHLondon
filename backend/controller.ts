import { Request, Response } from "express";

export const handleFarcasterLogin = (req: Request, res: Response): void => {
  const { name, email } = req.body;

  console.log({ name, email });

  res.status(200).send({ message: "Login ricevuto con successo" });
};
