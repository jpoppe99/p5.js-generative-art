

function main() {
  if(this.id == "start"){

  }
  
  
}




function randColor(a, b){//returns 3-tuple of value a-b
  return [Math.round(random(a,b)),Math.round(random(a,b)),Math.round(random(a,b))] 
}

function complement(color1){
  
  return [255 - color1[0], 255 - color1[1], 255 - color1[2]] 
}

function setup() {
  width = 400;
  height = 400;
  pitch = width/10;
  createCanvas(width, height); 
  frameRate(1)
}

function draw() {
  background(200);
  color1 = randColor(75,125);
  color2 = complement(color1)
  console.log("color1: " + toString(color1[0]) + toString(color1[1]) + toString((color1[2])))//DEBUG
  
  change = [(color2[0] - color1[0])/pitch,(color2[0] - color1[0])/pitch,(color2[0] - color1[0])/pitch]
  console.log("change: "+ change[0])//DEBUG
  fill(color1)
  for(i = pitch; i < height; i += pitch){
    for (j = pitch; j < width; j += pitch)
      circle(i,j,pitch)
    
      color1[0] += 5*change[0];
      color1[1] += change[1];
      color1[2] += -2*change[2];
      fill(color1);
      
  }
}
