let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Ball(createVector(width / 2, 50), 2);
}

function draw() {
  background(51);
  fill(255);
  text("Hold mouse for wind in the direction you want", 10, 10);
  b.run();
  if (mouseIsPressed) {
    if (mouseX < b.pos.x) {
      let w = createVector(0.4, 0);
      b.applyForce(w);
    } else if (mouseX > b.pos.x) {
      let w = createVector(-0.4, 0);
      b.applyForce(w);
    }

    if (mouseY < b.pos.y) {
      let w = createVector(0, 0.4);
      b.applyForce(w);
    } else if (mouseY > b.pos.y) {
      let w = createVector(0, -0.4);
      b.applyForce(w);
    }
  }
}