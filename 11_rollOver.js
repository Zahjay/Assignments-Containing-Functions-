function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  //If mousex is <less than x 500 and 400 and mouse y greater than 200 and less than 500 mouse is pressed
  if (mouseX < 500 && mouseX > 400 && mouseY >200 && mouseY < 500){
    if (mouseIsPressed) {
      background (255,255,102);
    }
    fill(244,45,245);
  }
  rect(500, 300,200,200);// I had trouble getting rectangle to work unless it was in the corner.
  
  
  
}