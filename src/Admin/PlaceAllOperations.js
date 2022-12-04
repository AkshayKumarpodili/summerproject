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



const PlaceCollectionRef = collection(db, "companies");
class PlaceDataService {

  addUser = (newUser) => {
    return addDoc(PlaceCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "companies", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "companies", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(PlaceCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "companies", id);
    return getDoc(userDoc);
  };
}

export default new PlaceDataService();