// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore} from "firebase/firestore";

import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyD2GgERCd92-Cr3DHzgIJvOybms534s-C8",
  authDomain: "picture-gallery-32d0c.firebaseapp.com",
  projectId: "picture-gallery-32d0c",
  storageBucket: "picture-gallery-32d0c.appspot.com",
  messagingSenderId: "462391732296",
  appId: "1:462391732296:web:43cb6caba922d8ad4dd07d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

 firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectStorage, projectFirestore, timestamp };