// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQlaPnvSIeZ7rx49Qca3b18OKPt5qM8hE",
  authDomain: "netflix-gpt-d067c.firebaseapp.com",
  projectId: "netflix-gpt-d067c",
  storageBucket: "netflix-gpt-d067c.appspot.com",
  messagingSenderId: "792336848952",
  appId: "1:792336848952:web:5d12e2f5ceeb44f122aecd",
  measurementId: "G-BZCZVEZ0FN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
