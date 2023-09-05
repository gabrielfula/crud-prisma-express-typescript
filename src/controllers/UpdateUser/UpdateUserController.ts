import { Request, Response } from "express";
import { prisma } from "../../database/client";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { email, username } = request.body;

      let user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user) return response.json({ error: "Usuário não encontrado" });

      user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          email,
          username,
        },
      });

      return response.json(user);
    } catch (error) {
      return response.json({ error });
    }
  }
}
