// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded.");

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please enter both email and password!");
            return;
        }

        console.log("Logging in:", email);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Login Successful!");
                console.log("User Logged In:", userCredential.user);
              
                // ✅ Redirect to the hosted Home Page
                window.location.href = "home.html";
               
            })
            .catch((error) => {
                console.error("Error:", error.code, error.message);
                alert("Login failed: " + error.message);
            });
    });
});
