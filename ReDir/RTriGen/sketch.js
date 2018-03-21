/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var tri = new triGen();
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(53);
  rectMode(CORNERS);
}

function draw() {
  tri.update();
  tri.show();
  tri.calC();
  tri.plotC();
}


function triGen() {
  this.x1 = 0;
  this.y1 = 0;
  this.x2 = 0;
  this.y2 = 0;
  this.c = 0;
  this.mostC = sqrt((width/2 * width/2) + (height/2 * height/2));

  this.update = function() {
    this.x1 = random(width/2, width);
    this.y1 = height/2;
    this.x2 = width/2;
    this.y2 = random(height/2, height);
  }

  this.show = function() {
    fill(255);
    strokeWeight(2);
    line(width/2, height/2, this.x1, this.y1);
    line(width/2, height/2, this.x2, this.y2);
    line(this.x1, this.y1, this.x2, this.y2);
  }

  this.calC = function() {
    this.c = sqrt((this.x1 * this.x1) + (this.y2 * this.y2));
  }

  this.delTri = function() {
    fill(53);
    stroke(53);
    rect(width/2, height/2, width, height);
  }

  this.plotC = function() {
    fill(255);
    strokeWeight(2);
    point(map(this.c, 0, this.mostC, 0, width), height/2);
    // console.log(map(this.c, 0, sqrt((width/2 * width/2) + (height/2 * height/2)), 0, width));
    //this.delTri();
  }
}
