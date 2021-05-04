void setup() {
  size(500, 500, P3D);
  noStroke();
  frameRate(500);
}

void draw() {
  lights();
  background(0);
  translate(width/2, height/2, -height);
  float rz = map(mouseY, 0, height, 0, PI);
  float ry = map(mouseX, 0, width, 0, HALF_PI);
  rotateZ(rz);
  rotateY(ry);
  for (int y = -1; y <= 5; y++) {
    for (int x = -1; x <= 5; x++) {
      for (int z = -1; z <= 5; z++) {        
        pushMatrix();
        translate(200*x, 200*y, -200*z);
        sphere(2);
        popMatrix();
      }
    }
  }
}
