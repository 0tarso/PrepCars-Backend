import { Request, Response } from "express";
import { getAllCarsService } from "../../services/cars/get-all-cars-service";
import { getCarByIdService } from "../../services/cars/get-car-by-id-service";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { getCarsByUserService } from "../../services/cars/get-cars-by-user";
import { saveImageService } from "../../services/cars/save-image-service";
import { deleteImageService } from "../../services/cars/delete-image-service";
import { createCarSchema } from "../../schemas/Car/create-car-schema";
import { createCarService } from "../../services/cars/create-car-service";
import { deleteCarService } from "../../services/cars/delete-car-service";

export const CarsController = {

  async getAllCars(req: Request, res: Response) {
    const httpResponse = await getAllCarsService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
  },

  async getCarById(req: Request, res: Response) {
    const { carId: carId } = req.params

    const httpResponse = await getCarByIdService(carId)

    res.status(httpResponse.statusCode).json(httpResponse.body)

  },

  async getCarsByUser(req: AuthRequest, res: Response) {
    console.log("Userrrr")
    const user = req.user

    const httpResponse = await getCarsByUserService(user?.uid)

    res.status(httpResponse.statusCode).json(httpResponse.body)
  },

  async createCar(req: AuthRequest, res: Response) {
    const data = createCarSchema.parse(req.body)
    const user = req.user

    const httpResponse = await createCarService(data, user?.uid)

    res.status(httpResponse.statusCode).json(httpResponse.body)
  },

  async deleteCar(req: AuthRequest, res: Response) {
    const { carId } = req.params

    const httpResponse = await deleteCarService(carId)

    res.status(httpResponse.statusCode).json(httpResponse.body)
  },

  async saveImage(req: AuthRequest, res: Response) {

    const user = req.user
    const file = req.file

    const httpResponse = await saveImageService(file, user?.uid)

    res.status(httpResponse.statusCode).json(httpResponse.body)
  },

  async deleteImage(req: AuthRequest, res: Response) {
    const user = req.user

    const { imagePublicId } = req.body

    const httpResponse = await deleteImageService(imagePublicId)

    res.status(httpResponse.statusCode).json(httpResponse.body)

  }

}