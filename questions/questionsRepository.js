import db from '../firebaseApp.js';
import { doc, getDocs, collection, addDoc, deleteDoc } from 'firebase/firestore';

export default class QuestionsRepository {
  static colRef = collection(db, 'questions');

  static async getAll() {
    const queryRef = await getDocs(QuestionsRepository.colRef);
  
    const questions = [];
    
    queryRef.forEach(doc => questions.push({ id: doc.id, ...doc.data() }));
  
    return questions;
  }

  static async add(doc) {
    const result = await addDoc(collection(db, 'questions'), doc);
  
    return result;
  }

  static async remove(id) {
    await deleteDoc(doc(db, 'questions', id));
  }
}
