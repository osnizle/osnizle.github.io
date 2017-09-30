/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var button;

function setup() {
  noCanvas();
  button = createButton("Retry");
  button.mousePressed(GoBack);
}

function GoBack() {
  window.location.href = "http://osnizle.github.io";
}
