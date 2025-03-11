// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
<<<<<<< HEAD
import { getAuth} from "firebase/auth";
import { getFirestore,doc,setDoc,getDoc } from "firebase/firestore";
=======
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
>>>>>>> 7a3e7c4 (third commit)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};  

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

<<<<<<< HEAD
export { auth, db, doc, setDoc, getDoc };
=======
export { auth, db };
>>>>>>> 7a3e7c4 (third commit)
