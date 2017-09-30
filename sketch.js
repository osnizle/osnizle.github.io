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
    window.location.href = "http://localhost:3000/ReDir";
  } else {
    window.location.href = "http://stackoverflow.com";
  }
}
