

function sinline(y){
  for(i = 0; i < width; i++){
		//point(i,noiseL*sin(i))
		line(i,(noiseL*sin(i))+y,i,(noiseL*sin(i-1))+y);

	}
  
}

function setup() {
  size = 800
	createCanvas(size,size);
  //translate(0,size/2)
	noiseL = 10;
	noiseS = .02;
	linenum = 10;
	space = linenum/height;
	/*for(i = 0; i < width; i++){
		point(i,noiseL*sin(i))
		line(i,noiseL*sin(i),i,noiseL*sin(i-1));

	}*/
    for(i = 0; i < height; i += space){
      sinline(i);
      
    }

}

