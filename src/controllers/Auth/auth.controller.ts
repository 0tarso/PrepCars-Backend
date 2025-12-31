import { Request, Response } from "express";
import { loginService } from "../../services/user/login-service";

export const AuthController = {

  async login(req: Request, res: Response) {

    const { email, password } = req.body

    console.log(email, password)

    const httpResponse = await loginService({ email, password })

    return res.status(httpResponse?.statusCode).json(httpResponse.body)
  },

}