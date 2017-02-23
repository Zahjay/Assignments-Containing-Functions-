
function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(0);
  stroke(79);
  //ellipse
  ellipse(144, 144, 144, 144);
  //line
  line(115, 115, 115, 115);
  //ellipse
  fill(255,54,9)
  ellipse(355,55,175,75);


  // Various shapes will be displayed based on mouse location.
  if (mouseX > 140 && mouseY > 120) { //if mouse x is greater than 140 and  mouse Y greater than 20 mouse will move to show rectangle.
    rect(0, 0, 140, 120);
  } else if (mouseX < 140 && mouseY < 120) { //Else mouseX is greater than 140 and mouseY greater than 120 you should see a circle.
    ellipse(240, 0, 140, 120);
  } else if (mouseX < 140 && mouseY > 135) { //Else mouseX is less than 140 and mouseY less than 135 you should see a circle.
    ellipse(10, 50, 100, 150);
  } else if (mouseX > 140 && mouseY < 135) { //Else mouseX is less than 140 and mouseY greater than 135 you should see a circle.
    }
}