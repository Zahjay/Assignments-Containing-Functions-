//functions inside of objects 21
//Original dcod by Dan Shiffman
//edited by Zahra A.

var bubble = {//conatainer or variable
  x: 80, //num value x
  y: 90,//num value y 
  display: function() { //shows screen 
    stroke(056, 0, 113);//the out line of object 
    strokeWeight(6);// the width of stroke
    fill(0);//color inside shape
    rect(this.x, this.y, 86, 90);//changed value to 86 and 90 , changed from ellipise to rect, this.x and this.y ar standing for variables.
  },
  move: function() {
    this.x = this.x + random(-8, 4);// random changes number value thus enabling the rect to move -8 on the x axis  and 4 on the y .
    this.y = this.y + random(-4, -8); // random changes number value thus enabling the rect to move -8 on the x axis  and 4 on the y.
  }
}

function setup() { //one time occurance
  createCanvas(680, 400);//background deals with the width and height. It will stay consistent.
}

function draw() { //This will keep going over what's below this.
background (255);//deals with color inside square
 bubble.move();// //moves shape
 bubble.display();//shows dislay
}