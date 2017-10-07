/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var input = document.getElementsByClassName('input');
var button = document.getElementsByClassName('button');

function setup() {
  noCanvas();
}

function ReDir() {
  window.location.href = "http://osnizle.github.io/ReDir/" + input[0].value;
}

function draw() {
  if (input[0].value == "GreenCam" || input[0].value == "DiffAlg" || input[0].value == "DPage" || input[0].value == "Clock") {
    input[0].style = 'border-color: #56f747'
    button[0].style = 'color: rgb(0)'
  } else {
    input[0].style = 'border-color: #ff3d3d'
    button[0].style = 'color: #565656'
  }
}
