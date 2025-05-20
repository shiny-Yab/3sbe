import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} 


function showVideo() {
  const video = document.getElementById("backgroundVideo");
  video.classList.add("loaded");
}



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const msgBox = document.getElementById("messageBox");

function showMessage(text, type = "info") {
  msgBox.innerText = text;
  msgBox.className = `msg-box ${type}`;
  msgBox.style.display = "block";
}

window.loginWithEmail = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMessage("تم تسجيل الدخول بنجاح", "success");
      setTimeout(() => {
        window.location.href = "Dashboard.html";
      }, 2000);
    })
    .catch((error) => {
      showMessage("البريد غير موجود، سيتم تحويلك لإنشاء حساب...", "error");
      setTimeout(() => {
        window.location.href = "create-account.html";
      }, 3000);
    });
};

window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then(() => {
      showMessage("تم تسجيل الدخول عبر Google", "success");
      setTimeout(() => {
        window.location.href = "Dashboard.html";
      }, 2000);
    })
    .catch(() => {
      showMessage("فشل تسجيل الدخول بـ Google", "error");
    });
};
