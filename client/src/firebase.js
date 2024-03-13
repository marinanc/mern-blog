// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-77083.firebaseapp.com",
  projectId: "mern-blog-77083",
  storageBucket: "mern-blog-77083.appspot.com",
  messagingSenderId: "674975843365",
  appId: "1:674975843365:web:de01f66ed1c613dce9ebcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);