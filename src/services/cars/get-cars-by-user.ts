import { firebaseFirestore } from "../../infra/firebase/firebase"
import { HttpResponseBadRequest, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, HttpResponseUnauthorized } from "../../utils/http-helper"

export const getCarsByUserService = async (userUid?: string) => {
  if (!userUid) {
    return await HttpResponseUnauthorized("Don't have authorization")
  }

  const docsRef = firebaseFirestore
    .collection("cars")
    .where("uid", "==", userUid)
    .where("isDeleted", "==", false)

  const docsSnap = await docsRef.get()

  if (docsSnap.empty) {
    return await HttpResponseNoContent("No cars found for this user")
  }



  let response = docsSnap.docs.map((doc) => {
    const data = doc.data()

    return {
      id: doc.id,
      ...data,
      created: data.created?.toDate
        ? data.created.toDate().toISOString()
        : new Date(data.created).toISOString(),
      updated: data.updated?.toDate
        ? data.created.toDate().toISOString()
        : new Date(data.created).toISOString()
    }
  })

  return HttpResponseOK(response)

}

