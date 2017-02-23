// Original code by Dan Shiffman: Mddified by Dawn C. Hayes, retyped and modified by Zahra AbdAllah.

function setup() {
  createCanvas( 890,560);
}

function draw() {
  background(236);
  
  stroke(275,67,13);
  strokeWeight(6);
  noFill();
  
  if (mouseX > 400){
    fill (67,0,0); // add random in front of fill later or in fill numbers. 
  }
  
  ellipse(600,296,350,450);

  
}