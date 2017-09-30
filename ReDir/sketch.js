/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var input;
var button;

function setup() {
  noCanvas();
  input = createInput('', 'text');
  button = createButton("Go");
  button.mousePressed(ReDir);
}

function ReDir() {
  window.location.href = "http://osnizle.github.io/" + input.value();
}
