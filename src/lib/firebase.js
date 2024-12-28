import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-24f93.firebaseapp.com",
  projectId: "chatapp-24f93",
  storageBucket: "chatapp-24f93.firebasestorage.app",
  messagingSenderId: "784944434165",
  appId: "1:784944434165:web:ed5da9aa77bf0dfe01eebc",
  measurementId: "G-3N6493YEZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);