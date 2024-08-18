let BUTTON1 = document.getElementById("header-sign-In");
BUTTON1.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix2.html";
});

let BUTTON2 = document.getElementById("netflix-button");
BUTTON2.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix.html";
});

//  (30 seconds = 30000 milliseconds)
const delay = 30000;

const redirectUrl = "http://127.0.0.1:5500/netflix%20clone/netflix.html";

setTimeout(function () {
  window.location.href = redirectUrl;
}, delay);
