size = 40;
canWidth = 800;
canHeight= 800;
function randColor(a, b){//returns 3-tuple of value a-b
  return [round(random(a,b)),round(random(a,b)),round(random(a,b))] 
}

function complement(color1){
  
  return [255 - color1[0], 255 - color1[1], 255 - color1[2]] 
}


function setup() {
  color1 = randColor(0,100);
  color2 = complement(color1);
  console.log(color1,color2);
  createCanvas(canWidth,canHeight);
  background(color2);
  for (x = width; x >= 0;x-=size){
    for(y = height; y >= 0; y-=size){
      noStroke();
      fill(color1);
      if (round(random() < .5)){
      tile4(x,y);
      } else {
      tile5(x,y);
      }
      color1[1] -= 2;
      console.log(color1);
    }
      
  }
}

function tile(x,y){
  dir = round(random());
  x2 = x - size;
  y2 = y - size;
  if (dir > .5){
    triangle(x,y,x2,y2,x,y-size);
  } else {
    triangle(x,y,x2,y2,x-size,y);
  }
}

  
  function tile2(x,y){
  dir = round(random());
  x2 = x - size;
  y2 = y - size;
  if (dir > .5){
    triangle(x,y,x2,y2,x,y-size);
  } else {
    triangle(x,y,x2,y2,x-size,y);
  }
}


function tile3(x,y){
  dir = round(random());
  x2 = x - size;
  y2 = y - size;
  if (dir > .5){
    triangle(x,y,x-size,y,x,y-size);
  } else {
    triangle(x,y,x-size,y,x,y-size);
  }
}
  
  
function tile4(x,y){  //this one
  dir = round(random());
  x2 = x - size;
  y2 = y - size;
  if (dir > .5){
    triangle(x,y,x2,y2,x,y-size);
  } else {
    triangle(x,y,x2,y2,x-size,y);
  }
}


function tile5(x,y){  //and this one
  dir = round(random());
  x2 = x - size;
  y2 = y - size;
  if (dir > .5){
    triangle(x,y,x-size,y,x,y-size);
  } else {
    triangle(x,y,x-size,y-size,x,y-size);
  }
}
  