import { db } from "./firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const UserCollectionRef = collection(db, "T&P");
class UserDataService {

  addUser = (newUser) => {
    return addDoc(UserCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "T&P", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "T&P", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(UserCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "T&P", id);
    return getDoc(userDoc);
  };
}

export default new UserDataService();