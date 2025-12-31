import { firebaseAuth } from "../../infra/firebase/firebase"
import { loginUserSchema } from "../../schemas/User/login-user-schema"
import { HttpResponseBadRequest, HttpResponseOK } from "../../utils/http-helper"
import { formatZodErrors } from "../../utils/zod-helper"

interface IloginService {
  email: string
  password: string
}

export const loginService = async (loginDTO: IloginService) => {
  console.log(loginDTO)

  const parsed = loginUserSchema.safeParse(loginDTO)

  if (!parsed.success) {
    const errors = formatZodErrors(parsed.error.issues)
    return HttpResponseBadRequest('Dados inválidos', errors)
  }




  return HttpResponseOK({ parsed })
}