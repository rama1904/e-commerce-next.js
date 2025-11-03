// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6LlWyopO-fIli8ao5B6ikrzdqMibNgjo",
  authDomain: "e-commerce-next-js-7cb69.firebaseapp.com",
  projectId: "e-commerce-next-js-7cb69",
  storageBucket: "e-commerce-next-js-7cb69.firebasestorage.app",
  messagingSenderId: "748367703307",
  appId: "1:748367703307:web:a83e980c3f2c4ee762860e",
  measurementId: "G-NYJ8EL2CNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
