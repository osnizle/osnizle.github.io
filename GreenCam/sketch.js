/* Code made by Aiden Onstott/Osnott
DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var cSize;
var cSlider;
var cam;
function setup() {
  cam = createCapture(VIDEO);
  cSize = createSlider(6, 20, 16)
  cSlider = createSlider(0, 688, 300);
  createCanvas(cam.width * 2.5, cam.height * 2.5);
  cam.size(width/cSize.value(), height/cSize.value());
  // cam.hide();
}
function draw() {
  background(0);
  cam.loadPixels();
  cam.size(width/cSize.value(), height/cSize.value());
  // loadPixels();
  for (var x = 0; x < cam.width + 1; x++) {
    for (var y = 0; y < cam.height + 1; y++) {
      var index = (x + y * cam.width)*4;
      var r = cam.pixels[index+0];
      var g = cam.pixels[index+1];
      var b = cam.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = map(bright, 0, 255, 0, 255);
      noStroke();
      rectMode(CENTER);
      fill((w/255) / cSlider.value(), (w/255) * cSlider.value(), (w/255) / cSlider.value());
      rect(x * cSize.value(), y * cSize.value(), cSize.value(), cSize.value);
    }
  }
}
