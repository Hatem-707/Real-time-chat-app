// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-24f93.firebaseapp.com",
  projectId: "chatapp-24f93",
  storageBucket: "chatapp-24f93.firebasestorage.app",
  messagingSenderId: "784944434165",
  appId: "1:784944434165:web:2445a3c5c08336bc01eebc",
  measurementId: "G-NBG1V9EVHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();

