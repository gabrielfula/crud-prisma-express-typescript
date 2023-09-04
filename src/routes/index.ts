import { CreateUserController } from "../controllers/CreateUser/CreateUserController";
import { GetAllUsersController } from "../controllers/GetAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

export { getAllUsersController, createUserController };
