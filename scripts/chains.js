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

function tile3(x,y,size){
  push();
  beginClip();
  square(x,y,size);
  endClip();
  
  halfx = x+size/2
  halfy = y+size/2
  noStroke()
  fill(c1[0]);
  square(x,y,size);
  noFill();
  stroke(c1[2]);
  strokeWeight(size/10)
  //strokeCap(ROUND)
  bezier(halfx,y,x,halfy, halfx,y+size,x+size,halfy,)
  bezier(x,halfy,halfx,y, x+size,halfy,halfx,y+size,)
  //strokeCap(PROJECT)
  stroke(c1[1]);
  strokeWeight(size/20)
  bezier(halfx,y,x,halfy, halfx,y+size,x+size,halfy,)
  bezier(x,halfy,halfx,y, x+size,halfy,halfx,y+size,)
  pop();
}
function tile4(x,y,size){
  /*beginClip();
  square(x,y,x+size,y+size);
  endClip();*/
  x1 = x+size/4
  x2 = x+size/2
  x3 = x+size*(3/4)
  y1 = y+size/4
  y2 = y+size/2
  y3 = y+size*(3/4)
  
  noStroke()
  fill(c1[0]);
  square(x,y,size);
  noFill();
  stroke(c1[2]);
  strokeWeight(size/10)
  //strokeCap(ROUND)
  bezier(x1,y,x,y1, x+size,y1,x1,y+size,)
  //bezier(x,halfy,halfx,y, halfx,y+size,x+size,halfy,)
  
  bezier(x,y1,x1,y2, x3,y,x+size,y1)
  
  bezier(x,y3,x1,y2, x3,y+size,x+size,y3)
  //strokeCap(PROJECT)
  //stroke(c1[1]);
  //strokeWeight(size/20)
  //bezier(halfx,y,x,halfy, halfx,y+size,x+size,halfy,)
  //bezier(x,halfy,halfx,y, x+size,halfy,halfx,y+size,)
  
}
function setup() {
  createCanvas(800, 800);
  //strokeCap(ROUND)
  strokeCap(PROJECT)
  size = 100;
  colorMode(HSB);
  //[c1,c2,c3] = HSBtriad(RandHSB());
  c1 = HSBtriad(RandHSB());
  //tile3(0,0,size)
  //tile4(0,0,size)
  for(i = 0;i < width; i += size){
    for (j = 0; j < height; j+=size){
      tile3(i,j,size)
    }}
  /*tile(0,0,size)
  tile2(size,0,size)
  for(i = 0;i < width; i += size){
    for (j = 0; j < height; j+=size){
      if(random() > .5) {
        tile(i,j,size)
      } else {
        tile2(i,j,size)
        
      }
    }
  }*/
  
}