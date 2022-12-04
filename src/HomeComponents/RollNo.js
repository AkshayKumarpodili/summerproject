// import { db } from "../firebase";

// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,  
//   doc,
// } from "firebase/firestore";

// const UserCollectionRef = collection(db, "rollno");
// class RollNoService {

//   addUser = (newUser) => {
//     return addDoc(UserCollectionRef, newUser);
//   };

//   getAllUsers = () => {
//     return getDocs(UserCollectionRef);
//   };

//   getUser = (id) => {
//     const userDoc = doc(db, "rollno", id);
//     return getDoc(userDoc);
//   };
// }

// export default new RollNoService();