import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import processing.video.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class CircleCamera extends PApplet {



Capture cam;

public void setup() {
  background(0);
  
  cam = new Capture(this, width, height);
  cam.start();
}

public void draw() {
  for (int i = 0; i < 10000; i++) {
    cam.read();
    float x = random(width);
    float y = random(height);
    int c = cam.get(PApplet.parseInt(x), PApplet.parseInt(y));
    fill(c, 25);
    noStroke();
    ellipse(x, y, 8, 8);
  }
  loadPixels();
}
  public void settings() {  size(640, 480); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "CircleCamera" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
