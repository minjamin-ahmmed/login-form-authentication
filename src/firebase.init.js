// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2MwTtsMCfx4F4jG_RTYddx5dMq9kypOA",
  authDomain: "auth-context-api-firebase.firebaseapp.com",
  projectId: "auth-context-api-firebase",
  storageBucket: "auth-context-api-firebase.firebasestorage.app",
  messagingSenderId: "701218700497",
  appId: "1:701218700497:web:457859b86fa63f1ffe19f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;