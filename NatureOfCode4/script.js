function setup() {
  createCanvas(640, 360);
  noStroke();
  frameRate(60);
}

let t = 0;
let increment = 0.02;
let zoff = 0.0;  
let zincrement = 0.09; 

function draw() {
  background(50);
  let xoff = 0.0;
  loadPixels();
  let d = pixelDensity();
  for (let x = 0; x <= width; x+=1) {
    xoff += increment;
    let yoff = 0.0;
    for (let y = 0; y <= height; y+=1) {
      let index = (x + y * width * d)*4;
;      

      yoff += increment;
      let bright = Math.floor(map(noise(xoff,yoff, zoff),0,1,0,255));
      fill(bright);
      pixels[y+x] = color(bright);
      pixels[index+0] = bright;
      pixels[index+1] = bright;
      pixels[index+2] = bright;
      //pixels[index+3] = bright      
      yoff += 0.01;
    }  
  xoff += 0.02;
  zoff += zincrement;
  updatePixels();
  }

}

