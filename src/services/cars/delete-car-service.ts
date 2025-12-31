import { firebaseFirestore } from "../../infra/firebase/firebase"
import { HttpResponseBadRequest, HttpResponseInternalError, HttpResponseOK, HttpResponseUpdated } from "../../utils/http-helper"

export const deleteCarService = async (carId?: string) => {
  if (!carId) {
    return await HttpResponseBadRequest("Send a carId")
  }

  const docRef = firebaseFirestore.collection("cars").doc(carId)

  let response

  try {
    await docRef.update({
      isDeleted: true,
      updated: new Date
    })

    const snapshotUpdated = await docRef.get()

    if (snapshotUpdated.exists) {
      return response = await HttpResponseOK(snapshotUpdated.data())
    }

    response = await HttpResponseInternalError("Doc to delete don't exists", {})

  } catch (error) {

    response = await HttpResponseInternalError("Error on update", {})

    console.log(error)
  }


  return response
}


// Montar a rota de delete car

//adicionar campo deleted nos documentos para fazer o softdelete

//alterar rotas de get para buscar somente os que n forem deleted