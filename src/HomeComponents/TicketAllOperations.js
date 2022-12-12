import { db } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const TicketCollectionRef = collection(db, "tickets");
class TicketDataService {

  addUser = (newUser) => {
    return addDoc(TicketCollectionRef, newUser);
  };

  getAllUsers = () => {
    return getDocs(TicketCollectionRef);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "tickets", id);
    return deleteDoc(userDoc);
  };
  
}

export default new TicketDataService();