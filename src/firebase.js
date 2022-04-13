import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGK9pMb5PujBynhmPzX1O_4d2WVxMuEkU",
  authDomain: "react-blog-8d176.firebaseapp.com",
  projectId: "react-blog-8d176",
  storageBucket: "react-blog-8d176.appspot.com",
  messagingSenderId: "127606790040",
  appId: "1:127606790040:web:59d495b40c17eb2d00fded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);