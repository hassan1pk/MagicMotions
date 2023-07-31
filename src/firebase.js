// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
//import {storage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1CtOllRADayvMUYLE41Kx-xzcidQ5DAY",
  authDomain: "magic-motions.firebaseapp.com",
  projectId: "magic-motions",
  storageBucket: "magic-motions.appspot.com",
  messagingSenderId: "935563158988",
  appId: "1:935563158988:web:bf29e88546364d99eba969",
  measurementId: "G-RVHK1NE4W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);
export { auth, signInWithPopup, provider /*, storage*/, analytics };
export default db;
