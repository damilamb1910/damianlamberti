import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  


  apiKey: "AIzaSyCTwLVTFWYnwJmClSGiQu7BZ4VmwU0NGBw",
  authDomain: "damianlambert.firebaseapp.com",
  projectId: "damianlambert",
  storageBucket: "damianlambert.appspot.com",
  messagingSenderId: "35430626327",
  appId: "1:35430626327:web:5e447ac2399b6f888a9852"
};


const app = initializeApp(firebaseConfig);
 

export const db =getFirestore(app)