import { Router } from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "./index";

const router = Router();

router.post("/user", createUserController.handle);
router.get("/users", getAllUsersController.handle);
router.get("/user/:id", getUserByIdController.handle);
router.put("/user/:id", updateUserController.handle);
router.delete("/user/:id", deleteUserController.handle);

export { router };
