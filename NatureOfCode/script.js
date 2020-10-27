class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        stroke(255);        
        point(this.x,this.y);
    }
    
    step() {
        let stepX = Math.random() * 2 -1;
        let stepY = Math.random() * 2 -1;

        let random = Math.random();

        console.log('random number', random);

        if ( random < 0.51) {
            console.log("50% chance");
            if (this.x < mouseX && this.y < mouseY) {
                this.x = this.x+1
                this.y = this.y+1
            } else if (this.x < mouseX && this.y > mouseY) {
                this.x = this.x+1
                this.y = this.y-1
            } else if (this.x > mouseX && this.y > mouseY) {
                this.x = this.x-1
                this.y = this.y+1
            } else {
                this.x = this.x-1
                this.y = this.y-1                
            }
        } else {
            this.x += stepX;
            this.y += stepY;
        }

    }
}

function setup() {
  createCanvas(640, 360);
  createP("Some instruction");

  walker = new Walker(width/2, height/2);

  background(51);
  
}

function draw() {
    walker.step();
    walker.display();
}
