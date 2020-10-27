class Walker {
	constructor() {
		this.tx = 0;
		this.ty = 10000;

		this.x = map(noise(this.tx), 0, 1, 0, width);
		this.y = map(noise(this.ty), 0, 1, 0, height);

		this.prevX;
		this.prevY;
  }

  Walker() {
    tx = 0;
    ty = 10000;
    x = map(noise(tx), 0, 1, 0, width);
    y = map(noise(ty), 0, 1, 0, height);
  }

  render() {
    stroke(255);
    line(this.prevX, this.prevY, this.x, this.y);
  }

  // Randomly move according to floating point values
  step() {

    this.prevX = this.x;
    this.prevY = this.y;

    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);

    this.tx += 0.01;
    this.ty += 0.01;

  }
}

function setup() {
  createCanvas(640, 360);
  noStroke();
	background(204, 13, 225);

  let x = random(0,width);
	w = new Walker();
}

let t = 0;
 
function draw() {

  w.step();
  w.render();

}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}
