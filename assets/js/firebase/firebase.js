// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {
   getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJGOSLgZw6zILtP1Zl_KwSulI496dbqm4",
  authDomain: "firee-basse.firebaseapp.com",
  projectId: "firee-basse",
  storageBucket: "firee-basse.appspot.com",
  messagingSenderId: "982481184013",
  appId: "1:982481184013:web:c7b6ff83095a2bd969bc44",
  measurementId: "G-8YNLB3GVZK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth  = getAuth(app);
 export const db = getFirestore();

//  Funciones del CRUD
export const createTask = (title, description) => addDoc(collection(db, "tasks"),{ title, description}); 

export const getTask = id => getDoc(doc(db, "tasks", id));

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"),callback);

export const updateTask = (id, newFields) => updateDoc (doc(db, "tasks", id), newFields);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));


