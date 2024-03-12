import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDzHPCIocIN4KIuDyl973OSNr3tQBTkdI",

  authDomain: "todos-f7d55.firebaseapp.com",

  projectId: "todos-f7d55",

  storageBucket: "todos-f7d55.appspot.com",

  messagingSenderId: "393590807548",

  appId: "1:393590807548:web:64a304179e2c8497a4b079"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;