import { Router } from "express";
import {
  getAllUsersController,
  getUserByIdController,
  deleteUserController,
  updateUserController,
  createUserController,
} from "./users.controller.js";

const router = Router();

router.post("/", createUserController);
router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
