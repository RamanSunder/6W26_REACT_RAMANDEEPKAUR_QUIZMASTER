// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4KHN6LOpz0jeZcBagM93v9wjGcf4tbQI",
  authDomain: "quiz-4c838.firebaseapp.com",
  projectId: "quiz-4c838",
  storageBucket: "quiz-4c838.firebasestorage.app",
  messagingSenderId: "575630981925",
  appId: "1:575630981925:web:2de74406e50fe7ec9538cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);