//original by Dan Shiffman
//modifided by Zahra 

function setup() {
  createCanvas(600, 400);//
}

function draw() {// r 
  background(0);
  //background(50);
  //lollipop(100, 100, 50);
  lightpost (175, 100, 100);// The lollis moved clcoser together.
  //lollipop(300, 200, 150);
  lightpost (400, 250, 150);//moved looli farther to right and closer to screen.
  
}

function lightpost(x, y, diameter) {//diameter is an argument that was make up 
  fill(102,51,0);
  //fill(0, 200, 255);
   //rect(x-10, y, 20, 150);
  rect(x+60, y, 40, 150); // arguments have to match parameters
  
  fill(255,2500,200);
  ellipse(random(200),200,20,20);
  ellipse( 400,400,random(400),400);// random caused a cool spinning motion
  
  fill(random(255), random (255), random(0));//added random to add a range o color to the fill
  ellipse(x, y, diameter, diameter);
}
