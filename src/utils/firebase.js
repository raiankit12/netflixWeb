// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIRyLo766ppWyVgXEeHEfP-RkgSugiexo",
  authDomain: "mynetflix-a7f7f.firebaseapp.com",
  projectId: "mynetflix-a7f7f",
  storageBucket: "mynetflix-a7f7f.appspot.com",
  messagingSenderId: "840001102457",
  appId: "1:840001102457:web:59a19a19477bfdf5ba6aa8",
  measurementId: "G-CVKGW6G3VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();