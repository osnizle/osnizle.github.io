/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();
var voice;
var buttonVisible = false;
var milis;

function setup() {
  voice = new p5.Speech(); // speech synthesis object
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  background(53);
  textSize(100);
  text("Say something!", width/2, height/2);
}

recognition.onsoundstart = function() {
  background(53);
  text("...", width/2, height/2);
}

recognition.onresult = function(event) {
  var output = event.results[0][0].transcript;
  background(53);
  if (output.length > 20) {
    textSize(map(output.length, 21, 80, 80, 20));
  }

  if (event.results[0][0].confidence < 0.65) {
    fill(230, 10, 10);
    // console.log(event.results[0][0].confidence);
  } else if (event.results[0][0].confidence < 0.80) {
    fill(230, 210, 10);
    // console.log(event.results[0][0].confidence);
  } else {
    fill(20, 230, 10);
    // console.log(event.results[0][0].confidence);
  }
  text(output, width/2, height/2);
  voice.speak(output);
  button();
  recognition.stop();
}

recognition.onnomatch = function() {
  background(53);
  text("Couldn't recognize speech...", width/2, height/2);
  voice.speak('Couldn\'t recognize speech...');
}

recognition.onerror = function(event) {
  background(53);
  textSize(50);
  text("Speech recognition error detected: " + event.error, width/2, height/2);
  voice.speak('Speech recognition error detected: ' + event.error);
  button();
  recognition.stop();
}

recognition.onspeechend = function(event) {
  background(53);
  textSize(100);
  text("Processing...", width/2, height/2);
  milis = millis();
}

function button() {
  buttonVisible = true;
  fill(70);
  noStroke(0);
  rect(width/8*6.6, height/8*6.6, 150, 150);
  textSize(50);
  fill(0);
  text("Retry", width/8*6.6, height/8*6.6);
}

function mouseClicked() {
  if (buttonVisible) {
    if (dist(mouseX, mouseY, width/8*6.6, height/8*6.6) < 151) {
      background(53);
      textSize(100);
      text("Say something!", width/2, height/2);
      recognition.start();
    }
  }
}
