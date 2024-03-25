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
  c4 = color1;
  c5 = [color1[0]+120,color1[1],color1[2]];
  if (c5 > 360){
    c5[0] -= 360;
    
  }
  c6 = [color1[0] + 240, color1[1], color1[2]];
  
  c = [c4,c5,c6]
  return c;
}

function tileA(x,y,size){
  /*
  translate(x, y);
  rotate(radians(random([0, 90, 180, 270])));
  translate(-x, -y);
  */
  push();
  /*
  translate(size/2, size/2);
  rotate(radians(random([0, 90, 180, 270])));
  translate(-size/2, -size/2);
  */
  translate(x, y);
  rotate(radians(random([0, 90, 180, 270])));
  translate(-x, -y);
  
  
  
  beginClip();
  square(x,y,size);
  endClip();
  
  
  /*
  translate(x + size / 2, y + size / 2);
  rotate(radians(random([0, 90, 180, 270])));
  translate(-size / 2, -size / 2);
  */
  
  x1 = x+size/4
  x2 = x+size/2
  x3 = x+size*(3/4)
  y1 = y+size/4
  y2 = y+size/2
  y3 = y+size*(3/4)
  
  
  noStroke()
  fill(c1[0])
  square(x,y,size)
  fill(c1[1])
  circle(x1,y,size/4)
  circle(x3,y,size/4)
  circle(x,y1,size/4)
  circle(x,y3,size/4)
  circle(x+size,y1,size/4)
  circle(x+size,y3,size/4)
  circle(x1,y+size,size/4)
  circle(x3,y+size,size/4)
  noFill();
  stroke(c1[1])
  strokeWeight(size/4)
  arc(x+size,y2,size/2,size/2,HALF_PI,HALF_PI+PI)
  //bezier(x3,y+size,x,y1,x3,y2,x1,y)
  //arc(x3,y+size)
  //curve(x3+size,y+size,x3,y+size,x1,y,x1,y-size);
  //line(x3,y+size,x1,y)
  arc(x,y+size,size/2,size/2,HALF_PI,0)
  pop()
}


function setup() {
  createCanvas(800, 800);
  //strokeCap(PROJECT)
  size = 100;
  colorMode(HSB);
  c1 = HSBtriad(RandHSB());

  for(i = 0;i < width; i += size){
    for (j = 0; j < height; j+=size){
      tileA(i,j,size);      
    }
  }
  
  
}