import { initializeApp, cert, getApps } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
// TODO: need to import serviceAccount from secret file

export default function dbConnect() {
  // check if NOT connected
  if(!getApps().length) {
    // connect
    initializeApp({
      credential: cert(serviceAccount)
    })
  }
  // return db-connection
  return getFirestore()
}