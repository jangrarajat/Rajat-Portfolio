// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiO7hhazYHtrDdmPbHN2UQA29_D12NoG8",
  authDomain: "portfolio-b3c9b.firebaseapp.com",
  projectId: "portfolio-b3c9b",
  storageBucket: "portfolio-b3c9b.firebasestorage.app",
  messagingSenderId: "368757383009",
  appId: "1:368757383009:web:5d7b1f921a1c440e17ef20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Exporting all providers
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export {
  auth,
  provider,          // ✅ Now available for Login.jsx
  githubProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
};
