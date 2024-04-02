// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV05au6y4TYuAsIDJb4B9vBWVSMTDvH-g",
  authDomain: "netflixgpt-7d9af.firebaseapp.com",
  projectId: "netflixgpt-7d9af",
  storageBucket: "netflixgpt-7d9af.appspot.com",
  messagingSenderId: "677067775472",
  appId: "1:677067775472:web:e41338aad9abeb9f8ad135",
  measurementId: "G-B93ZQWD3W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();