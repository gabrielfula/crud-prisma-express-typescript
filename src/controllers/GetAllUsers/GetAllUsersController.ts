import { Response, Request } from "express";
import { prisma } from "../../database/client";

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.json(users);
  }
}
