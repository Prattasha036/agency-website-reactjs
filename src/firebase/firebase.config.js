// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFdlQNhkzQqS33Ret0aST9-LHFcvsg-w",
  authDomain: "webagency-project-reactjs.firebaseapp.com",
  projectId: "webagency-project-reactjs",
  storageBucket: "webagency-project-reactjs.firebasestorage.app",
  messagingSenderId: "688373000250",
  appId: "1:688373000250:web:7486696dcd65e08aa22d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;