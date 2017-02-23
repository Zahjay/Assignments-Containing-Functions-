var circleX= 2; // start postion of circle's x
var circleY = 250; // start positon circle y
var circleSize = 10; // size of circle
var circleSpeed = 3; //speed of circle


function setup() {
	createCanvas(580, 420);
}


function draw() {
  background(255);
  noStroke();
  fill(255,51,153);
  //ellipse with variables
  ellipse(circleX,circleY,circleSize,circleSize);
  
 if (circleX > 0 && circleX > width / 2) { 
		circleSpeed = 5; 
		noStroke();
		fill(153, 255, 255);
		ellipse(circleX, circleY, circleSize, circleSize);
	} else {
	  circleSize += 0.5; //increases circle size if x location is not found
   
}
  circleX += circleSpeed;
}