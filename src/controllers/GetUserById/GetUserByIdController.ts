import { Request, Response } from "express";
import { prisma } from "../../database/client";

export class GetUserByIdController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user) {
        return response.json({ error: "Usuário não encontrado" });
      }

      return response.json(user);
    } catch (error) {
      return response.json({ error });
    }
  }
}
