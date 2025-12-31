import { userSchema } from "../../schemas/User/user";
import { HttpResponseBadRequest, HttpResponseOK } from "../../utils/http-helper";
import { formatZodErrors } from "../../utils/zod-helper";

interface UserProfileDTO {

  uid?: string | undefined,
  email?: string | undefined,
  name?: string | undefined

}

export const getProfileDataService = async (userProfileDTO: UserProfileDTO) => {
  console.log(userProfileDTO)

  const parsed = userSchema.safeParse(userProfileDTO)

  console.log("PASED \n ", parsed)

  if (!parsed.success) {
    const errors = formatZodErrors(parsed.error.issues)
    return HttpResponseBadRequest('Dados inválidos', errors)
  }

  return HttpResponseOK(parsed)
}