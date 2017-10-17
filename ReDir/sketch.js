/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var input = document.getElementsByClassName('input');
var button = document.getElementsByClassName('button');
var availible;
var website;

function setup() {
  noCanvas();
}

function ReDir() {
  if (checkAvailible()) {
    window.location.href = website;
  }
}

function draw() {
  website = "http://osnizle.github.io/ReDir/" + input[0].value;
  if (checkAvailible()) {
    input[0].style = 'border-color: #56f747'
    button[0].style = 'color: rgb(0)'
  } else {
    input[0].style = 'border-color: #ff3d3d'
    button[0].style = 'color: #565656'
  }

  $.ajax({
      type: 'HEAD',
      url: website,
  success: function() {
          availible = true;
  },
  error: function() {
          availible = false;
  }
  });
}

function checkAvailible() {
  if (website != "http://osnizle.github.io/ReDir/" && website != "http://osnizle.github.io/ReDir/ " && website != "http://osnizle.github.io/ReDir/  " && website != "http://osnizle.github.io/ReDir/   " && website != "http://osnizle.github.io/ReDir/    " && website != "http://osnizle.github.io/ReDir/     " && availible) {
    return true;
  } else {
    return false;
  }
}
