/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var b = [];
var osc = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < 15; i++) {
    b[i] = new Bubble();
    osc[i] = new p5.Oscillator();
    osc[i].setType('sine');
    osc[i].amp(0.5);
    osc[i].freq(240);
    osc[i].start();
  }
}

function draw() {
  background(53);
  for (var i = 0; i < b.length; i++) {
    b[i].show();
    b[i].update();
    osc[i].freq(map(b[i].y + b[i].x, 0, width+height, 240, 500));
    fill(0);
    text("Rate of change: %" + round(b[i].diff / 15 * 100), width/2, height/2);
  }

}

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function Bubble() {
  this.x = random(width);
  this.y = random(height);
  this.w = random(15, 50);
  this.h = random(15, 50);
  this.diff = map(mouseX, 0, width, 1, 15);

  this.show = function() {
    noStroke();
    fill(map(this.x, 0, width, 0, 255), map(this.y, 0, height, 0, 255), 75);
    ellipse(this.x, this.y, this.w, this.h);
  }

  this.update = function() {
    if (random(1) > 0.5) {
      this.x += random(this.diff);
    } else {
      this.x -= random(this.diff);
    }

    if (random(1) > 0.5) {
      this.y += random(this.diff);
    } else {
      this.y -= random(this.diff);
    }

    if (this.x >= width) {
      this.x = width-5;
    }

    if (this.x <= 0) {
      this.x = 5;
    }

    if (this.y >= height) {
      this.y = height-5;
    }

    if (this.y <= 0) {
      this.y = 5;
    }

    this.diff = map(mouseX, 0, width, 1, 15);
  }
}
