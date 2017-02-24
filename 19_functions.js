/*
https://vimeo.com/channels/learningp5js/139587733
*/
//Modified by Zahra A.

//containers
var ball = {
  x: 300, //values
  y: 200, 
  xspeed: 4, 
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,255,0);
  //background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 14, 14);//changed num value in ellipse
  
  if (ball.x > width || ball.x < 10) { //if ball.x is greater than width or ball.x less than less than 10 ball.x speed will increase by 1.
    //ball.xspeed = ball.xspeed * -1;
    ball.xspeed = ball.xspeed * -3;
  } 
  
  if (ball.y > height || ball.y < 10) { //if ball.x is greater than width or ball.x less than less than 10 ball.x speed will increase by 1.
    //ball.xspeed = ball.xspeed * -1;
  ball.yspeed = ball.yspeed * -1;
  //ball.yspeed = ball.yspeed * -1;
  }
  
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}