let c1,c2,c3;



function RandHSB(){
  c = [round(random(360)),random(40,100),random(40,100)];
  
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
  push();
  translate(x+size/2,y+size/2)
  //translate(x, y);
  //rotate(radians(random([0, 90, 180, 270])));
  rotate(radians(random([0, 90, 180, 270])));
  
  //rotate(radians(90)*round(random(3)));
  /*
  R = Math.round(random(1,4))
  console.log("R: "+R+" x: "+ x +" y: "+ y)
  
  if (R == 1){
    rotate(PI+HALF_PI);
  } else if (R == 2) {
    rotate(PI);
    
  } else if (R == 3) {
    rotate(HALF_PI);
    
  } else {
    rotate(0);
    
  }*/
  translate(-x-size/2,-y-size/2)
  //clip(function mask(){square(x,y,size)})
  beginClip();
  square(x,y,size);
  endClip();
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
  arc(x,y+size,size/2,size/2,HALF_PI,0)
  arc(x,y,size/2,size/2,0,HALF_PI)
  
  fill(c1[2])
  noStroke();
  circle(x1,y,size/8)
  circle(x3,y,size/8)
  circle(x,y1,size/8)
  circle(x,y3,size/8)
  circle(x+size,y1,size/8)
  circle(x+size,y3,size/8)
  circle(x1,y+size,size/8)
  circle(x3,y+size,size/8)
  
  noFill()
  stroke(c1[2])
  strokeWeight(size/8)
  arc(x+size,y2,size/2,size/2,HALF_PI,HALF_PI+PI)
  arc(x,y+size,size/2,size/2,HALF_PI,0)
  arc(x,y,size/2,size/2,0,HALF_PI)

  pop()
}

function tileB(x,y,size){
  push();
  translate(x+size/2,y+size/2)
  rotate(radians(random([0, 90, 180, 270])));
  translate(-x-size/2,-y-size/2)
  clip(function mask(){square(x,y,size)})
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
  //bezier(x1,y,x1,y1,x3,y3,x3,y+size);
  arc(x+size,y,size*3/2,size*3/2,HALF_PI,0)
  arc(x,y+size,size/2,size/2,HALF_PI,0);
  arc(x+size,y,size/2,size/2,PI+HALF_PI,PI)
  
  
  fill(c1[2])
  noStroke();
  circle(x1,y,size/8)
  circle(x3,y,size/8)
  circle(x,y1,size/8)
  circle(x,y3,size/8)
  circle(x+size,y1,size/8)
  circle(x+size,y3,size/8)
  circle(x1,y+size,size/8)
  circle(x3,y+size,size/8)
  
  noFill()
  stroke(c1[2])
  strokeWeight(size/8)
  
  arc(x+size,y,size*3/2,size*3/2,HALF_PI,0)
  arc(x,y+size,size/2,size/2,HALF_PI,0);
  arc(x+size,y,size/2,size/2,PI+HALF_PI,PI)
  pop()
}

function tileC(x,y,size){
  push();
  translate(x+size/2,y+size/2)
  rotate(radians(random([0, 90, 180, 270])));
  translate(-x-size/2,-y-size/2)
  clip(function mask(){square(x,y,size)})
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
  
  line(x1,y,x1,y+size);
  line(x3,y,x3,y+size);
  line(x,y1,x+size,y1);
  line(x,y3,x+size,y3);
  
  
  fill(c1[2])
  noStroke();
  circle(x1,y,size/8)
  circle(x3,y,size/8)
  circle(x,y1,size/8)
  circle(x,y3,size/8)
  circle(x+size,y1,size/8)
  circle(x+size,y3,size/8)
  circle(x1,y+size,size/8)
  circle(x3,y+size,size/8)
  
  noFill()
  stroke(c1[2])
  strokeWeight(size/8)
  
  line(x1,y,x1,y+size);
  line(x3,y,x3,y+size);
  line(x,y1,x+size,y1);
  line(x,y3,x+size,y3);

  pop()
}


function setup() {
  createCanvas(800, 800);
  //strokeCap(ROUND)
  size = 100;
  colorMode(HSB);
  c1 = HSBtriad(RandHSB());
  ///debug
  acount = 0
  bcount = 0
  ccount = 0
  
  ////
  for(i = 0;i < width; i += size){
    for (j = 0; j < height; j+=size){
      rand = random()
      if (rand < .2){
        ccount++//debug
        tileC(i,j,size);      
      } else if (rand > .6){
        tileA(i,j,size)
        acount++//debug
      } else {
        tileB(i,j,size);
        bcount++//debug
        
      }
    }
    
  }
  console.log("a:"+acount +"b:" +bcount +"c: " +ccount)
  
  
}