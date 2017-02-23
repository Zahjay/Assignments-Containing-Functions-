//Modified by Zahra Abd'Allah 
//booleanMouseIsPressed Assignment

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(0);
   
  
  stroke(255);
  noFill();
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250){ //If mouseX goes left or right or mouse Y goes up or down near the numbers in the condition you will obtain result.
    //if(mouseIsPressed) { //commented out to be able to see steps again.
      if (mouseIsPressed) {
     background(0,255,255);
  //} End for previous mouseIsPressed
    }
    fill(255);
  }

    rectMode (RADIUS);
    rect(300, 200, 100, 100);
    

}