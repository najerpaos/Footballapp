// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import{getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtlJZZzHuYB3UF7sAOKV5N5fU8veKiQeI",
  authDomain: "footballapp-eb489.firebaseapp.com",
  projectId: "footballapp-eb489",
  storageBucket: "footballapp-eb489.appspot.com",
  messagingSenderId: "511041483295",
  appId: "1:511041483295:web:89d2cbd4d6432c9384db2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
export const auth=getAuth(app);
export const db = getFirestore(app);