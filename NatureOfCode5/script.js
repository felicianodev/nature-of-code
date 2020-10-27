console.log('working script');
new p5()
var locationV;
var velocityV;

class Mover {
		constructor(){
			this.location = createVector(width/2,height/2);
			this.velocity = createVector(0,0);
			this.acceleration = createVector(-0.001,0.01);
			this.topSpeed = 10;
		}
		update() {
			this.velocity.limit(this.topSpeed);

			this.velocity.add(this.acceleration);

			this.location.add(this.velocity);

			if (keyCode === UP_ARROW) {
				console.log('up');
			} else if (keyCode === DOWN_ARROW) {
				value = 0;
			}
			
		}
	 
		display() {
			stroke(0);
			fill(175);
			ellipse(this.location.x,this.location.y,16,16);
		}
	 
		checkEdges() {
			if (this.location.x > width) {
				this.location.x = 0;
			} else if (this.location.x < 0) {
				this.location.x = width;
			}
	 
			if (this.location.y > height) {
				this.location.y = 0;
			} else if (this.location.y < 0) {
				this.location.y = height;
			}
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
		mover.checkEdges();
		mover.display();
}
