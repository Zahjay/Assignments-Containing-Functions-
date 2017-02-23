
/*
Original code by Daniel Shiffman: https://vimeo.com/channels/learningp5js/138935675
Modified by Dawn C. Hayes February 2017
*/
// Modified by Zahra Abd'Allah 

var x = 0;
var speed = 3;

function setup() {
  createCanvas(500,320);
}

function draw() {
  //ellipse
  background(109,56,0);
  stroke(30);
  strokeWeight(4)
  fill(45);
  ellipse(x,200,80,80);

  if (x > width){ //This is the reason the ball goes back in the diection it came.
   speed = - 3;

}

  x = x + speed;
 // Variable for incrementation.  
  
}
