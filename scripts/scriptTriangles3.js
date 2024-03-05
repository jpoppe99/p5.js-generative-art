size = 40;
canWidth = 800;
canHeight= 800;
function randColor(a, b){//returns 3-tuple of value a-b
  return [round(random(a,b)),round(random(a,b)),round(random(a,b))] 
}


function setup() {
  color1 = randColor(0,100);
  createCanvas(canWidth,canHeight);
  for (x = width; x >= 0;x-=size){
    color1[0] += 1;
    console.log(color1);
    for(y = height; y >= 0; y-=size){
      color1[1] += 1;
      fill(color1);
      tile(x,y);
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
    triangle(x,y,x2,y2,x,y);
  }
}

  
  