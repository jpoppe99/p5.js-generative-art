
canWidth = 800;
canHeight = 800;
pointNum = 20;
edgeNum = 20;

function randColor(a, b){//returns 3-tuple of value a-b
  return [Math.round(random(a,b)),Math.round(random(a,b)),Math.round(random(a,b))] 
}

function complement(color1){
  
  return [255 - color1[0], 255 - color1[1], 255 - color1[2]] 
}

function genPoints(limX, limY, amt){//generates amt amount of random x,y points within limits
  result = []
  for (i = 0; i < amt; i++){
    result.push([round(random(limX)),round(random(limY))]);
  }
  return result;

}

function genEdges(points,amt){  //generate an array of edges from point to point
  if (amt > points.length){     
    amt = points.length;

  }
  edges = [];
  for (i = 0; i < points.length; i ++){ //init adjacency matrix
    edges.push([]);
    for(j = 0; j < points.length; j++)  //all values to 0 
      edges[i][j] = 0;


  }
  for (i = 0; i < amt; i++){
    edges[floor(random(points.length))][floor(random(points.length))] = 1;
  }
  return edges;

}

function setup(){
    strokeWeight(1);
    createCanvas(canWidth, canHeight);
    points = genPoints(width, height, pointNum);
    for (i = 0; i < pointNum; i++){
      point(points[i][0], points[i][1]);

      console.log(points[i][0],points[i][1])

    }
    edges = genEdges(points,edgeNum);
    for (i = 0; i < edges.length; i++){
      for (j = 0; j < edges.length; j++){
        if (edges[i][j] == 1){
          line(points[i][0], points[i][1],points[j][0], points[j][1]); //stopped hjere

        }

      } 
    }


}