//inspired by Steve's Makerspace
//https://www.youtube.com/watch?v=ig0q6vfpD38&t=3s

function randColor(a, b){//returns 3-tuple of value a-b
  return [Math.round(random(a,b)),Math.round(random(a,b)),Math.round(random(a,b))] 
}


size = 30;
canWidth = 800;
canHeight= 800;

recwidth = 4;

function setup(){
  createCanvas(canWidth, canHeight);

  for(x = width; x > -size * canWidth; x -= size ) {
    for (y = height; y > -size * canHeight; y -= size){           
      fill(randColor(0,160));
      push();
      translate(x + size/2, y + size/2);
      rect(0,0,size*floor(random(1,recwidth)), size*floor(random(1,recwidth)));
    pop();
    }
}
}

