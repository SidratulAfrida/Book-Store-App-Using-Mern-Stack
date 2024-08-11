// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmLtUkP3dgFBvBUnCeGKQR7GWZ0UgvE9M",
  authDomain: "mern-book-inventory-8e6c7.firebaseapp.com",
  projectId: "mern-book-inventory-8e6c7",
  storageBucket: "mern-book-inventory-8e6c7.appspot.com",
  messagingSenderId: "188770987857",
  appId: "1:188770987857:web:94b6c8e3d333fe4d8fad70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;