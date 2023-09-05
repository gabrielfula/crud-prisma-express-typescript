import { Response, Request } from "express";
import { prisma } from "../../database/client";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const user = await prisma.user.delete({ where: { id: Number(id) } });

      return response.json(user);
    } catch (error) {
      return response.json({ error });
    }
  }
}
