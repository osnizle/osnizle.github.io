/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var input;
var button;
var password = "OsnottIsCool!";

function setup() {
  noCanvas();
  input = createInput('', 'password');
  button = createButton("Go");
  button.mousePressed(checkPassword);
}

function checkPassword() {
  if (input.value() == password) {
    window.location.href = "http://osnizle.github.io/ReDir";
  } else {
    window.location.href = "http://osnizle.github.io/WPass";
  }
}
