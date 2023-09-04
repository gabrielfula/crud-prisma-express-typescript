import { Router } from "express";
import { createUserController, getAllUsersController } from "./index";

const router = Router();

router.post("/user", createUserController.handle);
router.get("/users", getAllUsersController.handle);

export { router };
