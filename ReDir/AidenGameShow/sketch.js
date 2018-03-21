/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */

var titleScreen = true;
var confet = [];
var gamePlaying = false;
var countDowning = false;
var increase = 250;
var increment = 3;
var rotation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  for (var i = 0; i < 500; i++) {
    confet[i] = new Confetti();
  }
}

function draw() {
  if (titleScreen) {
    game();
  } else if (gamePlaying) {
    title();
  } else if (countDowning) {
    countDown();
  }
}

function game() {
  background(255);
  textSize(150);
  fill(0);
  text("Aiden's Birthday!", width/2, height/2);
}

function title() {
  background(255);
  for (var i = 0; i < confet.length; i++) {
    confet[i].update();
    confet[i].show();
  }

  if (increase > 100) {
    textSize(increase);
    fill(0);
    text("Birthday Games!", width/2, height/2);
    increase--;
  } else {
    textSize(125);
    fill(0);
    text("Birthday Games!", width/2, height/2);
    increase = 150;
  }
}

function countDown() {
  background(255);
  if (increase > 0) {
    textSize(increase);
    fill(0);
    text(increment + "!", width/2, height/2);
    increase--;
  } else if (increment !== 1) {
    increase = 250;
    increment--;
  } else {
    gamePlaying = true;
    titleScreen = false;
    countDowning = false;
  }
}
function keyPressed() {
  if (titleScreen) {
    gamePlaying = false;
    titleScreen = false;
    countDowning = true;
  }
}

function Confetti() {
  this.x = width/2;
  this.y = -10;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.xdir = random(-10, 10);
  this.yrate = random(4, 5);
  this.wait = random(500);
  this.waited = 0;
  this.noiseOffset = 0.0;
  this.noiseScale = random(0.02);


  this.show = function() {
    if (this.waited > this.wait) {
      push();
      translate(this.x, this.y);
      rotate(radians(this.noiseVal * 360));
      fill(this.r, this.g, this.b);
      noStroke();
      rect(0, 0, 15, 5);
      pop();
    }
  }

  this.update = function() {
    if (this.waited > this.wait) {
      this.y += this.yrate;
      this.x += this.xdir
      this.noiseOffset += this.noiseScale;
      this.noiseVal = noise(this.noiseOffset);
      if (this.y > height) {
        if (random(1) > 0.8) {
          this.y = 0;
          this.x = width/2;
        } else {
          this.y = 0;
          this.x = random(width);
        }
      }
    } else {
      this.waited++;
    }
  }
}
