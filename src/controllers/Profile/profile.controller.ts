import { Response } from "express"
import { AuthRequest } from "../../middlewares/auth.middleware"
import { getProfileDataService } from "../../services/user/get-profile-data-service"

export const ProfileController = {

  async getProfileData(req: AuthRequest, res: Response) {

    console.log(req.user)

    let httpResponse = await getProfileDataService({
      email: req.user?.email,
      uid: req.user?.uid,
      name: req.user?.name
    })

    return res.status(httpResponse?.statusCode).json(httpResponse.body)
  },

}