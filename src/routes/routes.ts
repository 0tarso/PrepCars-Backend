import { Router } from "express";
import AuthRoutes from "./auth.routes";
import ProfileRoutes from "./profile.routes";
import CarsRoutes from "./cars.routes";

const Routes = Router()


Routes.use("/auth", AuthRoutes)
Routes.use("/profile", ProfileRoutes)
Routes.use("/cars", CarsRoutes)



export default Routes