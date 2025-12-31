import admin from "firebase-admin"

//@ts-expect-error
const firebaseAccount = JSON.parse(process.env.FIREBASE_ACCOUNT)

admin.initializeApp({
  credential: admin.credential.cert(firebaseAccount)
})

export const firebaseFirestore = admin.firestore()
export const firebaseAuth = admin.auth()