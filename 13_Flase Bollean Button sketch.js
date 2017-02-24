var on = false;

function setup() {
  createCanvas(700, 500);
}

function draw() {
  if(on){
    background(255,0,0);
  }else
   background(0);
   
  
  stroke(255);
  stroke(2);
  noFill();
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250){ //If mouseX goes left or right or mouse Y goes up or down near the numbers in the condition you will obtain result.
    //if(mouseIsPressed) { //commented out to be able to see steps again.
      if (mouseIsPressed) {
     //background(0,255,255);
      fill(25,0,200);
  //} End for previous mouseIsPressed
    }
    //fill(25,0,200);
  }
    //ellipse
    ellipseMode (RADIUS);//Changed from CENTER to RADIUS, Shape from rect to ellipse.
    //stroke(6)
    ellipse(200, 250, 200, 200); // Changed numbers
    
  } 
  //mousePressed controls on and off of button.
    function mousePressed() {
      if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
       on = !on; //This is similar to Speed = speed * -1 .  
      }
    
}