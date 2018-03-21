/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var gc = 9.8;
var egg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  egg = new eggP(width/2, height/2);
}

function draw() {
  background(0, 100, 200);
  fill(200, 100, 50);
  noStroke();
  rect(0, height, width, height-10);
  egg.update();
  egg.show();
  egg.drop();
}

function eggP(sx, sy) {
  this.startDrop = false;
  this.count = 0;
  this.alive = true;
  this.x = sx;
  this.y = sy;
  this.acc = 0;
  this.fitness = 0;

  this.drop = function() {
    this.startDrop = true;
  }

  this.update = function() {
    if (this.startDrop && this.alive) {
      this.acc = gc * (this.count / 50);
      this.count++;
      this.y += this.acc;
    }

    console.log(this.acc);

    if (this.collide && this.acc > 3) {
      this.alive = false;
      this.fitness = map(this.acc, 3, 11, 1, 0);
    }

    if (this.y > height-10) {
      this.collide = true;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 25, 30);
  }
}

function GA() {
  this.first = true;

  this.newBody = function() {
    if (this.first = true) {
      this.val = [random(width), random(height), random(width), random(height)];
    } else {
      this.breed();
    }
  }
}
