class Splatter {
    constructor(x, y, t) {
        this.x = x;
        this.y = y;
        this.t = t;
    }

    display() {
        let t = this.t;
        let sd = 60;
        let mean = 320;
        let numY = noise(t) * random()*this.y;
        let numX = noise(t) * random()*this.x;
        //let gaussX = sd * num + mean;
        //let gaussY = sd * num + mean;

        function randomColor(){
            return Math.floor(Math.random() * 255);
        }

        function randomPosition(x){
            return Math.floor(Math.random() * x);
        }
    
        fill(`rgba(${randomColor()},${randomColor()},${randomColor()}, 0.25)`);
        if (numX < this.x && numY < this.y) {
            ellipse(numX, numY, 16, 16);
        } else {
            ellipse(numX, numY, 8, 8);
        }
        console.log(numX, numY, this.t);
        this.t = t+0.01;
    }
}   

function setup() {
  createCanvas(1240, 640);
  noStroke();
  splatter = new Splatter(width, height, 3);
  background(204, 226, 225);
}

function draw() {
    splatter.display();
}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}
