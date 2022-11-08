// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQxd6GYbfYYrGcMzT7UcUnaQEDgRIkN_E",
  authDomain: "picture-poetry.firebaseapp.com",
  projectId: "picture-poetry",
  storageBucket: "picture-poetry.appspot.com",
  messagingSenderId: "87105145685",
  appId: "1:87105145685:web:0a157e1b047b4a2c99fddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;