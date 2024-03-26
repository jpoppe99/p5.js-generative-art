function setup() {
  createCanvas(400, 400);
  noiseLevel = 255;
  noiseScale = .027;
  size = 10;
  colorMode(HSB)
  for (i = 0; i < width; i+=size){
    for(j = 0; j < height; j+=size){
      
      c = noiseLevel * noise(i*noiseScale,j*noiseScale)
      noStroke()
      fill(c,100,100);
      console.log(c)
      square(i,j,size);
    }
  }


}

