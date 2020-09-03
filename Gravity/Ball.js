class Ball {
  constructor(pos, mass) {
    this.pos = pos;
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
  }

  run() {
    this.render();
    this.update();
    this.applyG();
    this.bounce();
  }

  bounce() {
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.83;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.83;
    }

    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -0.83;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -0.83;
    }
  }

  applyG() {
    let g = createVector(0, 0.7);
    this.acc.add(g);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}