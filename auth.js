import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCriaPq2KbtuPZtMtuHQhLH7zWUTjwMOfQ",
  authDomain: "tourism-bangladesh-official.firebaseapp.com",
  projectId: "tourism-bangladesh-official",
  appId: "1:900176892229:web:dbf383a38895f9337eee2c"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Protect all pages
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html"; // redirect to login
  }
});

// 🔓 Logout function (global)
window.logoutUser = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};