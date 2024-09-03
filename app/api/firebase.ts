import { initializeApp, } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
const firebaseKey = process.env.NEXT_PUBLIC_FIREBASE_KEY
const firebaseProjectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
const firebaseAppId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "club-site-85614.firebaseapp.com",
  projectId: firebaseProjectId,
  storageBucket: "club-site-85614.appspot.com",
  messagingSenderId: "512964811678",
  appId: firebaseAppId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}