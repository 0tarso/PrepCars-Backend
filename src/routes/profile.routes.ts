import { Router } from "express";
import { ProfileController } from "../controllers/Profile/profile.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const ProfileRoutes = Router()


ProfileRoutes.get("/user", authMiddleware, ProfileController.getProfileData)


export default ProfileRoutes

