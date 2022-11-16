import { collection } from "firebase/firestore";
import { db } from "../firebase";


export const movieCollectionRef = collection(db,'users');