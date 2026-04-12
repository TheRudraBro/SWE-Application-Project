import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCriaPq2KbtuPZtMtuHQhLH7zWUTjwMOfQ",
  authDomain: "tourism-bangladesh-official.firebaseapp.com",
  projectId: "tourism-bangladesh-official",
  appId: "1:900176892229:web:dbf383a38895f9337eee2c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Global logout
window.logout = function () {
  signOut(auth).then(() => {
    alert("✅ Logged out!");
    window.location.href = "index.html";
  }).catch((error) => {
    alert("❌ " + error.message);
  });
};