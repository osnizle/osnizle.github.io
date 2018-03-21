function Dot() {
  this.x = random(width);
  this.y = random(height);

  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    if (this.x > width) {
      this.x = width;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.y > height) {
      this.y = height;
    }

    if (this.y < 0) {
      this.y = 0;
    }
  }

  this.show = function() {
    point(this.x, this.y);
    for (var i = 0; i < dot.length; i++) {
      line(this.x, this.y, dot[i].x, dot[i].y);
    }
  }
}
