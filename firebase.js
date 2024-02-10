// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
