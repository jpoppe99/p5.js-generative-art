size = 50;
canWidth = 800;
canHeight= 800;

function randColor(a, b){//returns 3-tuple of value a-b
  return [Math.round(random(a,b)),Math.round(random(a,b)),Math.round(random(a,b))] 
}

function complement(color1){
  
  return [255 - color1[0], 255 - color1[1], 255 - color1[2]] 
}

function setup() {
  createCanvas(canWidth, canHeight);
  
  color1 = randColor(25,240);
  color2=complement(color1);
  for (x = width; x > 0-size; x -= size){
    for(y = height; y > 0-size; y -= size){
      val = random();
      if (val > .67){
          truchTile(x,y,size);        
          
          } else if (val <.34){
            
            truchTile2(x,y,size);          
          } else {
            
            truchTile3(x,y,size);          
          }
      
    }
  }

}



function truchTile(x,y,size){//cross
  fill(color1);
  noStroke();
  square(x,y,size);
  
  halfX = x + size/2;
  halfY = y + size/2;
  strokeWeight(3);
  stroke(color2)
  line(halfX,y,halfX,y+size)
  line(x,halfY,x+size,halfY)
}

function truchTile2(x,y,size){//diagonal
  fill(color1)
  noStroke()
  square(x,y,size);
  halfX = x + size/2;
  halfY = y + size/2;
  stroke(color2);
  line(halfX,y,x,halfY)
  line(halfX,y+size,x+size,halfY)
}


function truchTile3(x,y,size){//diagonal
  fill(color1)
  noStroke()
  square(x,y,size);
  halfX = x + size/2;
  halfY = y + size/2;
  stroke(color2);
  line(halfX,y,x+size,halfY)
  line(halfX,y+size,x,halfY)
}

function truchTile4(x,y,size){//diamond
  noStroke();
  square(x,y,size);
  halfX = x + size/2;
  halfY = y + size/2;
  stroke(3);
  line(halfX,y,x,halfY)
  line(halfX,y,x+size,halfY)
  line(x,halfY,halfX,y+size)
  line(halfX,y+size,x+size,halfY)
}
