/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var input = document.getElementsByClassName('input');

function setup() {
  noCanvas();
}

function ReDir() {
  window.location.href = "http://osnizle.github.io/" + input[0].value;
}

function draw() {
  if (input[0].value == "GreenCam" || input[0].value == "DiffAlg") {
    input[0].style = 'border-color: #56f747'
  } else {
    input[0].style = 'border-color: #ff3d3d'
  }
}
