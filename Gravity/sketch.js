let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Ball(createVector(width / 2, 50), 2);
}

function draw() {
  background(51);
  b.run();
}