import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vicenross-88035.firebaseapp.com",
  projectId: "vicenross-88035",
  storageBucket: "vicenross-88035.firebasestorage.app",
  messagingSenderId: "585836658753",
  appId: "1:585836658753:web:d057271470c60e777bc6c0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
