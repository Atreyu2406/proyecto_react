import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEONPAbqFC22bzgZXJRgVhsFPEAH5EeZ4",
  authDomain: "atreyu-merchandising.firebaseapp.com",
  projectId: "atreyu-merchandising",
  storageBucket: "atreyu-merchandising.appspot.com",
  messagingSenderId: "809038526362",
  appId: "1:809038526362:web:29e99081f8da565982ac23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestone
export const firestoreDb = getFirestore(app)