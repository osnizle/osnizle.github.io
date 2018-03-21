/* Code made by Aiden Onstott/Osnott
 with help from Daniel Shiffman 
 DO NOT COPY WITHOUT CREDIT PLEASE!!! */

particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(53);
  for (var i = 0; i < 5; i++) {
    var p = new Particle();
    particles.push(p);
  }
  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {

  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.r = 0;
    this.g = 0;
    this.b = 245;
    this.alpha = 255;
    this.iter = 0;
  }

  finished() {
    return this.iter > 99;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.iter < 20) {
      this.b -= 12;
    } else if (this.iter < 35) {
      this.r += 10;
      this.g += 5;
    } else if (this.iter < 75) {
      this.r += 2;
      this.g -= 2;
    } else {
      this.alpha -= 20;
    }
    this.iter++;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, 16);
  }

}
