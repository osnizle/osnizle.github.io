/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var input = document.getElementsByClassName('input');

function setup() {
  noCanvas();
}

function checkPassword() {
  if (input[0].value == password) {
    window.location.href = "http://osnizle.github.io/ReDir";
  } else {
    window.location.href = "http://osnizle.github.io/WPass";
  }
}
