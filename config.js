// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuRs5usVD5j9IaU0VdAtd3kFE-DQmoYVI",
  authDomain: "my-app-9fcf8.firebaseapp.com",
  projectId: "my-app-9fcf8",
  storageBucket: "my-app-9fcf8.appspot.com",
  messagingSenderId: "919651053581",
  appId: "1:919651053581:web:95aa3085138bc09936a544",
  measurementId: "G-LLQMFR451S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
