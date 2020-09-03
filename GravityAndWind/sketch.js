let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Ball(createVector(width / 2, 50), 2);
}

function draw() {
  background(51);
  b.run();
  text("Hold mouse for wind in the direction you want", 0, 0);
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