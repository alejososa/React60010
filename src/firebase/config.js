// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoK8xWE9emPiuK3bfzQnAe7bZ_Shs3FSI",
  authDomain: "react-60010.firebaseapp.com",
  projectId: "react-60010",
  storageBucket: "react-60010.appspot.com",
  messagingSenderId: "981543526351",
  appId: "1:981543526351:web:a8b89399f63dc553b73cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);