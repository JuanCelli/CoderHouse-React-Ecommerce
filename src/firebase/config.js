// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWR5Qhs9POXrubN3R7NfPduzFUx-Pwi10",
  authDomain: "e-commerce-9b59c.firebaseapp.com",
  projectId: "e-commerce-9b59c",
  storageBucket: "e-commerce-9b59c.appspot.com",
  messagingSenderId: "303582481865",
  appId: "1:303582481865:web:d38760c6fd91818b5dec18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = ()=> app