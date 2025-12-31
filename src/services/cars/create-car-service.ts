import { firebaseFirestore } from "../../infra/firebase/firebase";
import { createCarDTO } from "../../schemas/Car/create-car-schema";
import { HttpResponseCreated, HttpResponseInternalError, HttpResponseUnauthorized } from "../../utils/http-helper";

export const createCarService = async (data: createCarDTO, userUid?: string) => {
  if (!userUid) {
    return await HttpResponseUnauthorized("Invalid Token")
  }

  const newDoc = {
    uid: userUid,
    created: new Date,
    isDeleted: false,
    updated: new Date,
    ...data
  }

  let response
  try {
    const result = await firebaseFirestore.collection("cars").add(newDoc)

    response = await HttpResponseCreated(result.get())

  } catch (error) {
    console.log(error)
    response = await HttpResponseInternalError("Erro ao salvar carro", [])
  }

  return response
}