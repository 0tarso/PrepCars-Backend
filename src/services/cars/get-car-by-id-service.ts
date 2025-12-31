import { firebaseFirestore } from "../../infra/firebase/firebase"
import { HttpResponseBadRequest, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK } from "../../utils/http-helper"

export const getCarByIdService = async (carId: string) => {
  if (!carId) {
    return await HttpResponseBadRequest("Send a correct Car ID")
  }

  const docRef = firebaseFirestore
    .collection("cars")
    .doc(carId)

  const docSnap = await docRef.get()

  if (!docSnap.exists) {
    return await HttpResponseNotFound("Car not foundd")
  }

  const carData = docSnap.data()


  return HttpResponseOK(carData)
}