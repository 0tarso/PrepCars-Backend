import { firestore } from "firebase-admin"
import { firebaseFirestore } from "../../infra/firebase/firebase"
import { HttpResponseNoContent, HttpResponseOK } from "../../utils/http-helper"
import { CarsProps } from "../../types"

export const getAllCarsService = async () => {

  const docsRef = firebaseFirestore
    .collection("cars")
    .where("isDeleted", "==", false)

  let snapshot = await docsRef.get()

  if (snapshot.docs.length) {

    const cars = snapshot.docs.map((doc) => {

      const data = doc.data()

      return {
        id: doc.id,
        ...data as Omit<CarsProps, "id">,
        created: data.created?.toDate
          ? data.created.toDate().toISOString()
          : new Date(data.created).toISOString(),

      }
    }
    )

    return await HttpResponseOK(cars)
  }

  return await HttpResponseNoContent("Sem conteúdo")
}