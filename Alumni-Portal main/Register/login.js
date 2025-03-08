// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5sHgZnoEFzaMDWqY6zpIyDPbn1cVbA4",
  authDomain: "login-d0b54.firebaseapp.com",
  projectId: "login-d0b54",
  storageBucket: "login-d0b54.appspot.com",
  messagingSenderId: "624255597751",
  appId: "1:624255597751:web:92d6a3ce9745d8b9a7e132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("submit");

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // ✅ Get input values inside the event listener
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // ✅ Check if fields are empty
    if (email === "" || password === "") {
      alert("Please enter both email and password!");
      return;
    }

    // ✅ Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account Created Successfully!");
        console.log("User:", userCredential.user);
        window.location.href = "loginpage.html";
      })
      .catch((error) => {
        alert(error.message);
        console.error("Error:", error.code, error.message);
      });
  });
});