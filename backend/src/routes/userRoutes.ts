import { Router } from "express";
import {
  getAllUsers,
  createUser,
  deleteAllUsers,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/", deleteAllUsers);

export default router;
