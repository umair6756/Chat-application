// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClaVEmWZwbSAmhJe-xivDUFDLhfrKR9Rg",
  authDomain: "chat-app-c2463.firebaseapp.com",
  projectId: "chat-app-c2463",
  storageBucket: "chat-app-c2463.firebasestorage.app",
  messagingSenderId: "671961839774",
  appId: "1:671961839774:web:471cb52a6401f8e0dda38f",
  measurementId: "G-QZ4DVC72VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);