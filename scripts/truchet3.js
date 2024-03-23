let c1,c2,c3;



function RandHSB(){
  c = [round(random(360)),random(25,100),random(25,100)];
  
  return c
}

function HSBcomplement(color1){
  c = [color1[0] +180,color1[1],color1[2]];
    if (c[i] > 360) {
      c[i] -= 360
    }
  return c;
}

function HSBtriad(color1){
  c1 = color1;
  c2 = [color1[0]+120,color1[1],color1[2]];
  if (c2 > 360){
    c2[0] -= 360;
    
  }
  c3 = [color1[0] + 240, color1[1], color1[2]];
  
  c = [c1,c2,c3]
  return c;
}

function setup() {
  createCanvas(800, 800);
  strokeCap(SQUARE)
  size = 50;
  colorMode(HSB);
  //[c1,c2,c3] = HSBtriad(RandHSB());
  c1 = HSBtriad(RandHSB());
  /*tile(0,0,size)
  tile2(size,0,size)*/
  for(i = 0;i < width; i += size){
    for (j = 0; j < height; j+=size){
      if(random() > .5) {
        tile(i,j,size)
      } else {
        tile2(i,j,size)
        
      }
    }
  }
  
}

function boxx(x,y,size){
  //fill(c1[0],c1[1],c1[2]);
  
  int1 = random();
  if (int1 < .33){
      fill(c1[0]);
  } else if (int1 > .66) {
      fill(c1[1])
    
  } else {
      
      fill(c1[2])
  }
  square(x,y,size)
}


function tile(x,y,size){
  halfx = x+size/2
  halfy = y+size/2
  
  noStroke();
  fill(c1[0]);
  square(x,y,size)
  
  stroke(c1[1])
  strokeWeight(size/15)
  line(x,halfy,halfx,y);
  line(x,halfy,halfx,y+size);
  line(halfx,y,x+size,halfy)
  line(halfx,y+size,x+size,halfy)
  
  
}

function tile2(x,y,size){
  halfx = x+size/2
  halfy = y+size/2
  noStroke()
  fill(c1[0]);
  square(x,y,size)
  
  stroke(c[1])
  strokeWeight(size/15)
  circle(halfx,halfy,size/2)
  
  line(x,halfy,halfx-size/4,halfy);
  line(halfx,halfy+size/4,halfx,y+size);
  line(halfx,y,halfx,halfy-size/4)
  line(halfx+size/4,halfy,x+size,halfy)
  
  
}