clearnum = 100; //draw 100 lines
numlines = 8; //8 simultaneous lines
size = 800;
sc = size/10;

function X(t){
  return sin(t)*200 + sin(t*3)*200;
}

function X2(t){
  return sin(t)*200 + sin(2*t-1)*50
}

function Y(t){
  return cos(t)*250
}

function Y2(t){
  return cos(t)*200+cos(2*t-1)*50;
}


let c1,c2,c3;



function RandHSB(){
  c = [round(random(360)),random(40,100),random(40,100)];
  
  return c
}

function HSBcomplement(color1){
  c = [color1[0] +180,color1[1],color1[2]];
    if (c[0] > 360) {
      c[0] -= 360
    }
  return c;
}

function HSBtriad(color1){
  c4 = color1;
  c5 = [color1[0]+120,color1[1],color1[2]];
  if (c5[0] > 360){
    c5[0] -= 360;
    
  }
  c6 = [color1[0] + 240, color1[1], color1[2]];
    if (c6[0] > 360){
    c6[0] -= 360;
    
  }
  c = [c4,c5,c6]
  return c;
}



function setup() {
  
    step = .1
  createCanvas(windowWidth,windowHeight);
  translate(windowWidth/2,windowHeight/2);
  colorMode(HSB);
  t = 0;
  frameRate(30);
  strokeWeight(5);
  c1 = RandHSB();
  //c1 = "purple"
  
  c2 = HSBtriad(c1);
  background(c2[0]);
  stroke(c2[1]);
    
    //testing
    /*
    for(i = 0; i < 30; i++){
      stroke(c2)
      point(X(i),Y(i));
      stroke("black")
      point(X2(i),Y2(i));
    }*/
}

function draw(){
  translate(size/2,size/2);
    background(c2[0])
    if(t % .1*numlines == 0){
         //background(c1)
       
       }
  //background(c1)
  //line(X(t),Y(t),X2(t),Y2(t));
    //point(X(t),Y(t));
    //point(X2(t),Y2(t));
  
  
  for(i = 0; i < step*numlines; i+=step){
    if((X(t+i) < X2(t+i))){ //&& (Y(t+i) < Y2(t+i))){
           stroke(c2[1])
           } else {
             stroke(c2[2])
           }
        line(X(t+i),Y(t+i),X2(t+i),Y2(t+i));
    

  }


  t+=step;
}