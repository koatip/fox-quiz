import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import fs from 'fs';

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


const fileName = './quiz_app.hu.json';
let content = [];

fs.readFile(fileName, function read(err, data) {
  if (err) {
    throw err;
  }

  content = JSON.parse(data);

  const addNewQuestion = async (question) => {
    const docRef = await addDoc(collection(db, 'questions'), question);
    console.log("Document written with ID: ", docRef.id);
  }

  for (let question of content.questions) {
    addNewQuestion(question);
  }
});

// -----------------------
// A Fenti kódhoz ne nyúlj!
// -----------------------