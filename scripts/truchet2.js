size = 50;
canWidth = 800;
canHeight= 800;

function randColor(a, b){//returns 3-tuple of value a-b
  return [Math.round(random(a,b)),Math.round(random(a,b)),Math.round(random(a,b))] 
}

function complement(color1){
  
  return [255 - color1[0], 255 - color1[1], 255 - color1[2]] 
}

function roundTruch1a(x,y,size){
  fill(color1);
  noStroke();
  halfX = x + size/2
  halfY = y + size/2
  square(x,y,size);
  stroke(color2);
  strokeWeight(3)
  arc(x+size,y+size,size,size,PI,PI+HALF_PI);
  arc(x,y,size,size,2*PI,HALF_PI);
  //arc(x+size,y,size-3,size-3,HALF_PI,PI);
  //arc(x,y+size,size-3,size-3,PI+HALF_PI,2*PI);  
}


function roundTruch2a(x,y,size){
  fill(color1);
  noStroke();
  halfX = x + size/2
  halfY = y + size/2
  square(x,y,size);
  stroke(color2);
  strokeWeight(3)
  arc(x+size,y,size,size,HALF_PI,PI);
  arc(x,y+size,size,size,PI+HALF_PI,2*PI);  
}

function roundTruch1b(x,y,size){
  fill(color1);
  noStroke();
  halfX = x + size/2
  halfY = y + size/2
  square(x,y,size);
  stroke(color2);
  strokeWeight(size/3)
  arc(x+size,y+size,size,size,PI,PI+HALF_PI);
  arc(x,y,size,size,2*PI,HALF_PI);
  
  noFill();
  stroke("white");
  strokeWeight(size/20)
  arc(x+size,y+size,size,size,PI,PI+HALF_PI);
  arc(x,y,size,size,2*PI,HALF_PI);
}


function roundTruch2b(x,y,size){
  fill(color1);
  noStroke();
  halfX = x + size/2
  halfY = y + size/2
  square(x,y,size);
  stroke(color2);
  strokeWeight(size/3)
  arc(x+size,y,size,size,HALF_PI,PI);
  arc(x,y+size,size,size,PI+HALF_PI,2*PI);  
  noFill();
  stroke("white");
  strokeWeight(size/20)
  arc(x+size,y,size,size,HALF_PI,PI);
  arc(x,y+size,size,size,PI+HALF_PI,2*PI);  

}


function setup(){
  createCanvas(windowWidth,windowHeight);
  color1 = randColor(0,255);
  color2 = complement(color1);
  strokeCap(SQUARE)
for (x = width; x > 0-size; x -= size){
    for(y = height; y > 0-size; y -= size){
      val = random();
      if (val > .5){
          roundTruch1b(x,y,size);        
          
          } else {
            roundTruch2b(x,y,size)
          }
      
    }
  }
}
