// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa0NyDNfJUg6zzYiBxYsbls-y-WomR42Q",
  authDomain: "dragon-news-breaking-c8dc0.firebaseapp.com",
  projectId: "dragon-news-breaking-c8dc0",
  storageBucket: "dragon-news-breaking-c8dc0.firebasestorage.app",
  messagingSenderId: "633981636705",
  appId: "1:633981636705:web:f39852a78c5ad83bf05a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app