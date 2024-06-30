// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD_3fvpQDU_MpdmOU-4pZQfwkHlqt13PQQ",
  authDomain: "interviewxp-bdda8.firebaseapp.com",
  projectId: "interviewxp-bdda8",
  storageBucket: "interviewxp-bdda8.appspot.com",
  messagingSenderId: "399666702090",
  appId: "1:399666702090:web:1e9a6488cc2091db3a3cf3",
  measurementId: "G-Y69HLXXZNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const db=getFirestore();
export const auth=getAuth();
export const storage=getStorage();
