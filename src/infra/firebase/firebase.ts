import admin from "firebase-admin"
import serviceAccount from "../../../serviceAccount.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

export const firebaseFirestore = admin.firestore()
export const firebaseAuth = admin.auth()