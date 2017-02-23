var x = 0;
var speed = 3; 
var y = 250;
var height = 5

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(155);
  //ellipse
  stroke(125);
  strokeWeight(2);
  fill(35);
  ellipse(x, 300, 270, 70);
  //if statement for speed
  
  if (x > height || x< 0) { // If x gets to rightside (< witdh) turn around || (or) if x gets to the left (<0) turn around.//when height is applied insted of width the shapes bounce back quicker.
    speed = speed * -2
  }
  
 x = x + speed; 
 
 
 if( y< height || y < 0){
  fill(255,51,51);
  noStroke()
  rect(x,300,270,70);
  
  if( x>0 || x < height ){
    fill(153,203,255);
    ellipse(x,70,150,70);
  }

 }
 
 
 
}

