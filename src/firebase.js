// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvECNmfpqHj0hHT3CxWheKPabfg3HzgBo",
  authDomain: "react-reactor-clo.firebaseapp.com",
  projectId: "react-reactor-clo",
  storageBucket: "react-reactor-clo.appspot.com",
  messagingSenderId: "907384157616",
  appId: "1:907384157616:web:e68742859a8cdd250a9275"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
