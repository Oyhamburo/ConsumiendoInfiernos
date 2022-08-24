// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbTPIDUrC8bMEB7ab_VmoQn-XYWbYHlNs",
  authDomain: "consumiendoinfiernos-e7dbe.firebaseapp.com",
  projectId: "consumiendoinfiernos-e7dbe",
  storageBucket: "consumiendoinfiernos-e7dbe.appspot.com",
  messagingSenderId: "426889946308",
  appId: "1:426889946308:web:406408e05547f973e59591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db