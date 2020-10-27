console.log('working script');
new p5()

class Mover {
		constructor(){
			this.position = createVector(width/2,height/2);
			this.velocity = createVector(0,0);
			this.acceleration = createVector(0,0);
			this.topSpeed = 5;
			this.mouse = createVector(mouseX, mouseY);
		}
		update() {
			this.mouse = createVector(mouseX, mouseY);
			let dir = p5.Vector.sub(this.mouse, this.position);
			let magnitude = 0.3;;
			if (magnitude.x > 100) {
				magnitude = 90;
			}
			console.log(magnitude);



			dir.normalize();
			dir.mult(magnitude);

			this.acceleration = dir;

			this.velocity.add(this.acceleration);
			this.velocity.limit(this.topSpeed);
			this.position.add(this.velocity);
		}
	 
		display() {
			stroke(0);
			fill(175);
			ellipse(this.position.x,this.position.y,16,16);
		}

	}



var mover;
function setup() {
  createCanvas(640, 360);
	noStroke();
	locationV = createVector(100,100);
	velocityV = createVector(2.5,5);		
	mover = new Mover();
}

function draw() {
		background(255);				
		mover.update();
		mover.display();
}
