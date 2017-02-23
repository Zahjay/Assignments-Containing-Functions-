var circleX= 20; // start postion of circle's x
var circleY = 200; // start positon circle y
var circleSize = 400; // size of circle
var circleSpeed = 2; //speed of circle
//rectangele variables
var rectX= 570; // start postion of circle's x
var rectY = 0; // start positon circle y
var rectSize = 100; // size of circle
var rectSpeed = -2; //speed of circle


function setup() {
  createCanvas(580, 420);
}

function draw() {
 background(255);
  noStroke();
  fill(255,51,153);
  //ellipse with variables
  ellipse(circleX,circleY,circleSize,circleSize);//ellipse with variables
  //rectangle with variables
  fill(128,128,128);
  rect(rectX,rectY,rectSize,rectSize);//rectangle with variables
  
 if (circleX > 0 && circleX > width / 2) { // Condition to check
		circleSpeed = 6; // keyword var was declared globally so var doesn't have to be stated
		noStroke();
		fill(153, 255, 255);
		rect(circleX, circleY, circleSize, circleSize);//rect with varibales inside condition
	} else {
	  circleSize += 0.8;//controls size of rect
   
}
  circleX += circleSpeed;
  
 if(rectX > 20 && rectX > height * 2 ){
   rectSpeed = 6;//keyword var was declared globally so var doesn't have to be stated
   stroke(5);
   //fill(102,178,255);
   rect(rectX,rectY,rectSize,rectSpeed);
 }else{
   rectSize += 5;
   ellipse(circleX,circleY,200,200);//ellipse of condition 
 }
 rectX += rectSpeed;//controls speed of rect
 
}



  