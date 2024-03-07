//https://joeiddon.github.io/projects/javascript/perlin.html
//for the random unit vector function

canWidth = 200;
canHeight = 200
nodes = canWidth*canHeight
grid = [];

const vector = {	//constructor for vector 
	x: 0,
	y: 0,
	create: function (x,y){
		newvector.x = x;
		newvector.y = y;
		return newvector;

	}
}

function randomUVector(){ //gradient vector
	rand = random()*2*Math.PI;	//random theta from 0 - 2PI
	//randY = random()*2*Math.PI;
	return vector.newvector(cos(rand), sin(rand); //unit circle 
}




function perlin(x,y,grid){
	x0 = floor(x);
	y0= floor(y);
	x1 = x0+1;
	y1= y0+1;

	gradient = grid[x][y];
	distX = 

}

main(){
	for (i = 0; i < canHeight; i++){
	row = [];
	for(j = 0; j < canWidth; j++){
		row.push(randomUVector());

	}
	grid.push(row);

	}


}
