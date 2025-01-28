import { Router } from "express";
import { registeruser } from "../controllers/user.controller.js";

const router = Router();

// POST /api/v1/users/register
router.route("/register").post(registeruser);

export default router;
