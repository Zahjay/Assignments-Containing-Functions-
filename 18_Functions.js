//modifided by Zahra Abd'Allah

//containers
var ball = {
  x: 200, // these are called name value pairs  
  y: 400, 
  xspeed: 1, 
  yspeed: -6
}

function setup() {//once do not need to call
  createCanvas(600, 400);
}

function draw() {
  background (255);//has an argumnet
  //background(0);
  move();//snytax for calling background
  bounce();//no argument
  display();
  
  
}

function bounce() { //define
  
  if (ball.x > width || ball.x < 0) { //if ball.x is greater than width or ball.x  is less than zero it increses by 1.
  //Incrementation
    ball.xspeed = ball.xspeed * -1;
  } 
  
  if (ball.y > height || ball.y < 0) {//if ball.y is greater than width or ball.y  is less than zero it increses by 1.
  //Incrementation
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(0)
  //stroke(255);
  strokeWeight(2);
  //strokeWeight(4);
  fill(153, 0, 40);//changed color
  ellipse (ball.x + ball.y, 84,84);//
  //ellipse(ball.x, ball.y, 24, 24);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}

function bounce() { //define
  
  if (ball.x > width || ball.x < 0) { //if ball.x is greater than width or ball.x  is less than zero it increses by 1.
  //Incrementation
    ball.xspeed = ball.xspeed * -1;
  } 
  
  if (ball.y > height || ball.y < 0) {//if ball.y is greater than width or ball.y  is less than zero it increses by 1.
  //Incrementation
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(0)
  //stroke(255);
  strokeWeight(2);
  //strokeWeight(4);
  fill(153, 0, 40);//changed color
  ellipse (ball.x + ball.y, 84,84);//
  //ellipse(ball.x, ball.y, 24, 24);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}