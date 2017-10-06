import processing.video.*;

Capture cam;

void setup() {
  background(0);
  size(640, 480);
  cam = new Capture(this, width, height);
  cam.start();
}

void draw() {
  for (int i = 0; i < 10000; i++) {
    cam.read();
    float x = random(width);
    float y = random(height);
    color c = cam.get(int(x), int(y));
    fill(c, 25);
    noStroke();
    ellipse(x, y, 8, 8);
  }
  loadPixels();
}