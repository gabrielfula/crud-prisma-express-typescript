import { CreateUserController } from "../controllers/CreateUser/CreateUserController";
import { GetAllUsersController } from "../controllers/GetAllUsers/GetAllUsersController";
import { GetUserByIdController } from "../controllers/GetUserById/GetUserByIdController";
import { UpdateUserController } from "../controllers/UpdateUser/UpdateUserController";
import { DeleteUserController } from "../controllers/DeleteUser/DeleteUserController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

export {
  getAllUsersController,
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
