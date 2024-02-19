//this is example algorithm code to test how it will integrate with html

function main() {
  if(this.id == "start"){

  }
  
  
}


function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  for (let i = 0; i < 50; i++) {
    drawSquigglyLine();
  }
}

function drawSquigglyLine() {
  // Set the first color (e.g., red)
  r1 = random(100);
  g1 = random(255);
  b1 = random(170,255);
  let color1 = color(r1,g1,b1);

  // Calculate complementary color (e.g., cyan)
  let color2 = color(255 - red(color1), 255 - green(color1), 255 - blue(color1));

  let startX = random(width);
  let startY = random(height);
  let length = random(20, 100);

  // Choose a random angle
  let angle = random(TWO_PI);

  // Choose a random color for the line
  let lineColor = random() < 0.5 ? color1 : color2;
  stroke(lineColor);

  // Draw squiggly line
  for (let i = 0; i < length; i++) {
    let xOffset = cos(angle) * i * 2;
    let yOffset = sin(angle) * i * 2;
    let x = startX + xOffset;
    let y = startY + yOffset;

    // Draw small line segments
    line(startX, startY, x, y);

    // Update starting point for the next segment
    startX = x;
    startY = y;

    // Randomly change the angle for squiggly effect
    angle += random(-0.1, 0.1);
  }
}