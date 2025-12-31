import { Router } from "express";
import { CarsController } from "../controllers/Cars/cars.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import multer from "multer";


const CarsRoutes = Router()

const upload = multer({
  storage: multer.memoryStorage()
})

CarsRoutes.get("/dashboard", authMiddleware, CarsController.getCarsByUser)

CarsRoutes.post("/upload-image", authMiddleware, upload.single("image"), CarsController.saveImage)
CarsRoutes.delete("/delete-image", authMiddleware, CarsController.deleteImage)

CarsRoutes.post("/create", authMiddleware, CarsController.createCar)
CarsRoutes.delete("/:carId", authMiddleware, CarsController.deleteCar)

CarsRoutes.get("/all", CarsController.getAllCars)
CarsRoutes.get("/:carId", CarsController.getCarById)


export default CarsRoutes