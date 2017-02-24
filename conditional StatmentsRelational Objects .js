// Original code by Dan Shiffman: Mddified by Dawn C. Hayes, retyped and modified by Zahra AbdAllah.

function setup() {
  createCanvas( 890,560);
}

function draw() {
  background(236);
  
  stroke(275,67,13);
  strokeWeight(6);
  noFill();
  
  if (mouseX > 400){// if mmouseX is greater than 400 the eliipse will fill with color.
    fill (67,0,0);
  }
  
  ellipse(600,296,350,450);
 
 strokeWeight(2);
 fill(345,345,235);
 
 if (mouseY >= 100 ){//if mouse y greater than equal to 100  ellipse will fill black.
   fill(0);
   ellipse(43,23,34,277);// Once the mouse passes a range great than or equal to 100 black filled ellipse will appear.
 }
  noFill()
 rect(320,145,123,34)
 
}