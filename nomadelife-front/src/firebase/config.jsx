import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAFbAfKmXG7zaG2MJbgHh7LHhy7YpljZdk",
  authDomain: "nomadelife-luisfelipe.firebaseapp.com",
  projectId: "nomadelife-luisfelipe",
  storageBucket: "nomadelife-luisfelipe.appspot.com",
  messagingSenderId: "787648513094",
  appId: "1:787648513094:web:6aa43aba3c8d751f58f647",
  measurementId: "G-7QSS89G6L8"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}