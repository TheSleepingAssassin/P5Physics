let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls.push(new Ball(createVector(width / 2, 50), 2));
}

function draw() {
  background(51);
  fill(255);
  text('Click Anywhere to add more bodies', 10, 10)
  for (let b of balls) {
    b.run();
    if (b.pos.y > height / 2) {
      b.drag();
    }
  }

  if (mouseIsPressed) {
    balls.push(new Ball(createVector(mouseX, mouseY), 2));
  }

  fill(0, 100, 255, 100);
  noStroke();
  rect(0, height / 2, width, height / 2);
}