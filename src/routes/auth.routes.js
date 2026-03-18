import express from "express";
import { login, register, showRegister } from "../controllers/auth.controller.js";


const router = express.Router();

// POST auth/register
router.post("/register", register);

// POST auth/login
router.post("/login", login);

// GET auth/showRegister
router.get("/show-register", showRegister)

export default router;