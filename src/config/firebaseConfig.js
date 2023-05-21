import firebase from "firebase/app";
// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2gqZjXOBv0mGw3zUNRvJTDvBf1CjZZo",
  authDomain: "jenosize-1ec32.firebaseapp.com",
  projectId: "jenosize-1ec32",
  storageBucket: "jenosize-1ec32.appspot.com",
  messagingSenderId: "1028907605102",
  appId: "1:1028907605102:web:937261eb4e7954c95e1a7f",
  measurementId: "G-YLLS6BW851",
};

// const app = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();
