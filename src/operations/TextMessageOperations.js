import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const TextFeedRef = collection(db, "textfeed");
class TextFeedService {

  addUser = (newUser) => {
    return addDoc(TextFeedRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "textfeed", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "textfeed", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(TextFeedRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "textfeed", id);
    return getDoc(userDoc);
  };
}

export default new TextFeedService();