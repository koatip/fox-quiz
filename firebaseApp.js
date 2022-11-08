import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//CSERÉLD LE A SAJÁT APPOD CONFIG OBJECTJÉRE!
const firebaseConfig = {
  apiKey: "####################",
  authDomain: "###############",
  projectId: "####################",
  storageBucket: "##################",
  messagingSenderId: "###############",
  appId: "############################"
};


initializeApp(firebaseConfig);

const db = getFirestore();

export default db;