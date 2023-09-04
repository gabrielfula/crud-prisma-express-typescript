import { Request, Response } from "express";
import { prisma } from "../../database/client";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, username } = request.body;

    const emailValidation = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (emailValidation) {
      return response.json({ error: "This email is already used" });
    }

    const users = await prisma.user.create({
      data: {
        email,
        username,
      },
    });

    return response.json(users);
  }
}
