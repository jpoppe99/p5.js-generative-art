function main() {
  if(this.id == "start"){

  }
  
  
}



function setup() {
  width = 400;
  height = 400;
  pitch = width/10
  createCanvas(width, height); 
  frameRate(1)
}

function draw() {
  background(220);
  color1 = [random(255),random(255),random(255)]
  fill(color1)
  for(i = pitch; i < height; i += pitch){
    for (j = pitch; j < width; j += pitch)
      //fill(color1)
      circle(i,j,pitch)
      color1[0] += 15;
      color1[1] += 15;
      color1[2] -= 50;
      fill(color1);
      
  }
}
