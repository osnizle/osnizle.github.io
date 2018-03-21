/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var dot = [];
function setup() {
  frameRate(300);
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(100);

  for (var i = 0; i < 10; i++) {
    dot[i] = new Dot();
  }
}

function draw() {
  background(53);
  for (var i = 0; i < dot.length; i++) {
    stroke(0);
    fill(0);
    dot[i].show();
    dot[i].update();
  }
}
