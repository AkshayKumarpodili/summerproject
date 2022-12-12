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

const NewsFeedRef = collection(db, "newsfeed");
class NewsFeedService {

  addUser = (newUser) => {
    return addDoc(NewsFeedRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "newsfeed", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "newsfeed", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(NewsFeedRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "newsfeed", id);
    return getDoc(userDoc);
  };
}

export default new NewsFeedService();