canWidth = 200;
canHeight = 200

const vector = {	//constructor for vector 
	x: 0,
	y: 0,
	create: function (x,y){
		newvector.x = x;
		newvector.y = y;
		return newvector;

	}
}

function randomVector(limX, limY){
	randX = floor(random(-limX,limX));
	randY = floor(random(-limY,limY));
	return vector.newvector(randX, randY);
}

function getDistance(v){ //calculates distance from origin to point aka vector length
	return sqrt(v.x^2 + v.y^2);

}

function normalize(v){//takes vector object and normalizes it
	dist = getDistance(v.x, v.y)	//get distance/magnitude
	normvector = vector.newvector(v.x/dist, v.y/dist); //create new vector with normalized values from old

	return normvector;
}


function perlin(x,y){//gives the perlin noise value for pixel at x,y
	veclist = [];
	normlist = [];
	for (i = 0; i < x; i++){
		for (j = 0; j < )
	}

}


