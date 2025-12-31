import { Router } from "express";
import { AuthController } from "../controllers/Auth/auth.controller";
import { firebaseAuth } from "../infra/firebase/firebase";
import { authMiddleware } from "../middlewares/auth.middleware";

const AuthRoutes = Router()

AuthRoutes.get("/", authMiddleware, (req, res) => res.json({ message: "Auth Routes" }))
AuthRoutes.post("/login", AuthController.login)


export default AuthRoutes