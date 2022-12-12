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



const OnCampusCollectionRef = collection(db, "oncampus");
class OnCampusDataService {

  addUser = (newUser) => {
    return addDoc(OnCampusCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "oncampus", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "oncampus", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(OnCampusCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "oncampus", id);
    return getDoc(userDoc);
  };
}

export default new OnCampusDataService();