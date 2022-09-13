import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC5P2hwtQck5rBlDpAh14JndFnHaKY34Y",
  authDomain: "chat-72113.firebaseapp.com",
  projectId: "chat-72113",
  storageBucket: "chat-72113.appspot.com",
  messagingSenderId: "227012118136",
  appId: "1:227012118136:web:88d7b2739256b2a6da4f8d",
  measurementId: "G-SZNBMTRJDW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore();
