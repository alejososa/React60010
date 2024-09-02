import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCoK8xWE9emPiuK3bfzQnAe7bZ_Shs3FSI",
  authDomain: "react-60010.firebaseapp.com",
  projectId: "react-60010",
  storageBucket: "react-60010.appspot.com",
  messagingSenderId: "981543526351",
  appId: "1:981543526351:web:a8b89399f63dc553b73cba"
};

//Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
